#!/bin/sh
# Vrowser command-line installer for macOS and Linux.
#
#   curl -fsSL https://vivido.dev/vrowser/install.sh | sh
#   curl -fsSL https://vivido.dev/vrowser/install.sh | sh -s -- --version 0.1.1
#
# Vrowser is not a standalone browser: it renders into the Vivido window that started it. This
# script downloads the complete CEF bundle for this machine, verifies its checksum, unpacks it
# under $VROWSER_HOME, and puts a `vrowser` launcher on PATH so any Vivido shell can run it.
#
# Nothing here needs the Vivid discovery environment; run it from an ordinary shell, a Vivido
# window, or a `vvssh` session.

set -eu

# Every default path below is built from HOME, and `set -u` would otherwise report it obscurely.
: "${HOME:?must be set to install Vrowser}"

REPO=${VROWSER_REPO:-vivido-dev/vrowser}
RELEASES_URL=${VROWSER_RELEASES_URL:-https://github.com/$REPO/releases}
INSTALL_ROOT=${VROWSER_HOME:-${XDG_DATA_HOME:-$HOME/.local/share}/vrowser}
BIN_DIR=${VROWSER_BIN_DIR:-$HOME/.local/bin}
VERSION=${VROWSER_VERSION:-}
MODIFY_PATH=1
SANDBOX_SETUP=1
FORCE=0
ACTION=install
DOWNLOADER=
TRANSPORT=https
PROFILE_MARKER='# added by the vrowser installer'

say() { printf 'vrowser: %s\n' "$*"; }
warn() { printf 'vrowser: warning: %s\n' "$*" >&2; }
die() { printf 'vrowser: error: %s\n' "$*" >&2; exit 1; }

usage() {
    cat <<'EOF'
Install Vrowser, the minimal CEF browser that renders inside a Vivido window.

Usage:
  install.sh [options]
  curl -fsSL https://vivido.dev/vrowser/install.sh | sh -s -- [options]

Options:
  --version VERSION       Release to install (default: the latest release)
  --home DIRECTORY        Bundle root (default: ~/.local/share/vrowser)
  --bin-dir DIRECTORY     Launcher directory (default: ~/.local/bin)
  --no-modify-path        Never edit a shell profile; only report the PATH entry
  --skip-sandbox-setup    Linux: do not elevate to prepare chrome-sandbox
  --force                 Reinstall even when this version is already present
  --uninstall             Remove the bundle root and the installed launcher
  -h, --help              Show this help

Environment overrides: VROWSER_VERSION, VROWSER_HOME, VROWSER_BIN_DIR, VROWSER_REPO,
VROWSER_RELEASES_URL.
EOF
}

while [ "$#" -gt 0 ]; do
    case $1 in
        --version)
            [ "$#" -ge 2 ] || die "--version requires a value"
            VERSION=$2
            shift 2
            ;;
        --home)
            [ "$#" -ge 2 ] || die "--home requires a value"
            INSTALL_ROOT=$2
            shift 2
            ;;
        --bin-dir)
            [ "$#" -ge 2 ] || die "--bin-dir requires a value"
            BIN_DIR=$2
            shift 2
            ;;
        --no-modify-path) MODIFY_PATH=0; shift ;;
        --skip-sandbox-setup) SANDBOX_SETUP=0; shift ;;
        --force) FORCE=1; shift ;;
        --uninstall) ACTION=uninstall; shift ;;
        -h|--help) usage; exit 0 ;;
        *) die "unknown option $1 (see --help)" ;;
    esac
done

VERSION=${VERSION#v}

need_cmd() {
    command -v "$1" >/dev/null 2>&1 || die "$1 is required but was not found on PATH"
}

select_downloader() {
    if command -v curl >/dev/null 2>&1; then
        DOWNLOADER=curl
    elif command -v wget >/dev/null 2>&1; then
        DOWNLOADER=wget
    else
        die "neither curl nor wget is available to download the release"
    fi
}

# Releases are served over HTTPS, and a redirect must not be able to downgrade that. The
# restriction follows the configured base so that pointing the installer at a local mirror for
# testing still works; the default release host is always https.
select_transport_policy() {
    case $RELEASES_URL in
        https://*) TRANSPORT=https ;;
        http://*) TRANSPORT=any ;;
        *) die "VROWSER_RELEASES_URL must be an http or https URL" ;;
    esac
}

# Fetch $1 into the file $2, failing on any HTTP error rather than saving an error page.
download() {
    case $DOWNLOADER:$TRANSPORT in
        curl:https) curl -fSL --proto '=https' --tlsv1.2 -o "$2" "$1" ;;
        curl:any) curl -fSL -o "$2" "$1" ;;
        wget:https) wget -q --https-only -O "$2" "$1" ;;
        wget:any) wget -q -O "$2" "$1" ;;
    esac || die "could not download $1"
}

# Print the URL that $1 finally redirects to. Used to read the latest release tag without the
# GitHub API, whose unauthenticated rate limit is shared by everyone behind one address.
resolve_redirect() {
    case $DOWNLOADER:$TRANSPORT in
        curl:https)
            curl -fsSL --proto '=https' --tlsv1.2 -o /dev/null -w '%{url_effective}' "$1"
            ;;
        curl:any)
            curl -fsSL -o /dev/null -w '%{url_effective}' "$1"
            ;;
        wget:https)
            wget -q -S --spider --https-only "$1" 2>&1 | redirect_location
            ;;
        wget:any)
            wget -q -S --spider "$1" 2>&1 | redirect_location
            ;;
    esac
}

redirect_location() {
    sed -n 's/^[[:space:]]*Location:[[:space:]]*\([^[:space:]]*\).*/\1/p' | tail -n 1
}

resolve_latest_version() {
    target=$(resolve_redirect "$RELEASES_URL/latest") || target=
    tag=${target##*/}
    case $tag in
        v[0-9]*) printf '%s' "${tag#v}" ;;
        *) die "could not determine the latest Vrowser release; pass --version explicitly" ;;
    esac
}

# The Rust target triple naming each release archive.
detect_triple() {
    kernel=$(uname -s)
    machine=$(uname -m)
    case $kernel in
        Darwin)
            # A shell running under Rosetta reports x86_64 on Apple Silicon, which would install
            # the emulated bundle onto a native machine.
            if [ "$(sysctl -n hw.optional.arm64 2>/dev/null || echo 0)" = 1 ]; then
                machine=arm64
            fi
            case $machine in
                arm64|aarch64) printf 'aarch64-apple-darwin' ;;
                x86_64) printf 'x86_64-apple-darwin' ;;
                *) die "unsupported macOS architecture $machine" ;;
            esac
            ;;
        Linux)
            if ldd --version 2>&1 | head -n 1 | grep -qi musl; then
                die "Vrowser needs a glibc system; the pinned CEF build does not run on musl"
            fi
            case $machine in
                x86_64|amd64) printf 'x86_64-unknown-linux-gnu' ;;
                *) die "unsupported Linux architecture $machine; Vrowser publishes x86_64 only" ;;
            esac
            ;;
        *)
            die "unsupported system $kernel; use the winget package on Windows"
            ;;
    esac
}

sha256_of() {
    if command -v sha256sum >/dev/null 2>&1; then
        sha256sum "$1" | cut -d ' ' -f 1
    elif command -v shasum >/dev/null 2>&1; then
        shasum -a 256 "$1" | cut -d ' ' -f 1
    else
        die "neither sha256sum nor shasum is available to verify the download"
    fi
}

# Every release archive ships a sibling .sha256 file written by `shasum -a 256`.
verify_checksum() {
    archive=$1
    checksum_file=$2
    expected=$(cut -d ' ' -f 1 <"$checksum_file")
    case $expected in
        *[!0-9a-fA-F]* | '')
            die "checksum file for $(basename "$archive") is malformed"
            ;;
    esac
    [ ${#expected} -eq 64 ] ||
        die "checksum file for $(basename "$archive") is not a SHA-256 digest"
    actual=$(sha256_of "$archive")
    [ "$expected" = "$actual" ] ||
        die "checksum mismatch for $(basename "$archive"): expected $expected, got $actual"
}

# Fail before install rather than after a half-written bundle: a Vrowser that is missing CEF
# runtime files cannot start, and it must never fall back to an unsandboxed mode.
verify_bundle() {
    root=$1
    [ -x "$root/vrowser" ] || die "the downloaded archive has no executable vrowser launcher"
    case $(uname -s) in
        Darwin)
            [ -x "$root/vrowser.app/Contents/MacOS/vrowser" ] ||
                die "the downloaded archive is missing vrowser.app"
            [ -f "$root/vrowser.app/Contents/Frameworks/Chromium Embedded Framework.framework/Chromium Embedded Framework" ] ||
                die "the downloaded archive is missing the Chromium Embedded Framework"
            ;;
        Linux)
            for required in libcef.so chrome-sandbox icudtl.dat resources.pak; do
                [ -f "$root/$required" ] ||
                    die "the downloaded archive is missing $required"
            done
            [ -d "$root/locales" ] || die "the downloaded archive is missing locales"
            ;;
    esac
}

# Chromium uses the unprivileged user-namespace sandbox when the kernel allows it, and otherwise
# needs the setuid chrome-sandbox helper. Vrowser never retries with --no-sandbox, so a machine
# that has neither must be fixed at install time.
linux_userns_available() {
    read_sysctl() { [ -r "$1" ] && cat "$1" 2>/dev/null || printf ''; }
    max=$(read_sysctl /proc/sys/user/max_user_namespaces)
    case $max in
        ''|0) return 1 ;;
    esac
    clone=$(read_sysctl /proc/sys/kernel/unprivileged_userns_clone)
    case $clone in
        0) return 1 ;;
    esac
    # Ubuntu 24.04 and newer refuse unprivileged user namespaces to unconfined executables.
    apparmor=$(read_sysctl /proc/sys/kernel/apparmor_restrict_unprivileged_userns)
    case $apparmor in
        1) return 1 ;;
    esac
    return 0
}

prepare_linux_sandbox() {
    helper=$1/chrome-sandbox
    if linux_userns_available; then
        say "kernel allows unprivileged user namespaces; chrome-sandbox needs no elevation"
        return 0
    fi
    if [ "$(id -u)" = 0 ]; then
        chown root:root "$helper"
        chmod 4755 "$helper"
        say "prepared the setuid chrome-sandbox helper"
        return 0
    fi
    if [ "$SANDBOX_SETUP" = 0 ] || ! command -v sudo >/dev/null 2>&1; then
        warn "this kernel restricts unprivileged user namespaces, so Vrowser cannot start until"
        warn "the sandbox helper is root-owned and setuid. Run:"
        warn "    sudo chown root:root '$helper'"
        warn "    sudo chmod 4755 '$helper'"
        return 0
    fi
    say "this kernel restricts unprivileged user namespaces, so chrome-sandbox must be setuid root"
    say "running: sudo chown root:root '$helper'"
    say "running: sudo chmod 4755 '$helper'"
    if sudo chown root:root "$helper" && sudo chmod 4755 "$helper"; then
        say "prepared the setuid chrome-sandbox helper"
    else
        warn "could not prepare chrome-sandbox; run the two commands above before starting Vrowser"
    fi
}

# A shim rather than a symlink: the launcher inside the bundle resolves its siblings from its own
# directory, and a symlink would point that lookup at the bin directory instead.
install_launcher() {
    mkdir -p "$BIN_DIR"
    launcher=$BIN_DIR/vrowser
    tmp=$launcher.$$
    cat >"$tmp" <<EOF
#!/bin/sh
# Generated by the Vrowser installer. Reinstall rather than editing this file.
exec "$INSTALL_ROOT/current/vrowser" "\$@"
EOF
    chmod 755 "$tmp"
    mv -f "$tmp" "$launcher"
    say "installed launcher $launcher"
}

# The profile a Vivido shell actually reads. Vivido starts a login shell on macOS and a plain
# interactive shell on Linux, so bash needs a different file on each.
profile_for_shell() {
    case ${SHELL:-} in
        */fish)
            printf '%s' "${XDG_CONFIG_HOME:-$HOME/.config}/fish/conf.d/vrowser.fish"
            ;;
        */zsh)
            printf '%s' "${ZDOTDIR:-$HOME}/.zshrc"
            ;;
        */bash)
            if [ "$(uname -s)" = Darwin ]; then
                printf '%s' "$HOME/.bash_profile"
            else
                printf '%s' "$HOME/.bashrc"
            fi
            ;;
        *)
            printf '%s' "$HOME/.profile"
            ;;
    esac
}

path_contains_bin_dir() {
    case ":${PATH:-}:" in
        *":$BIN_DIR:"*) return 0 ;;
        *) return 1 ;;
    esac
}

add_bin_dir_to_profile() {
    profile=$(profile_for_shell)
    if [ -f "$profile" ] && grep -qF "$PROFILE_MARKER" "$profile"; then
        say "$profile already sets up PATH for Vrowser"
        return 0
    fi
    mkdir -p "$(dirname "$profile")"
    case ${SHELL:-} in
        */fish)
            cat >>"$profile" <<EOF

$PROFILE_MARKER
if not contains "$BIN_DIR" \$PATH
    set -gx PATH "$BIN_DIR" \$PATH
end
EOF
            ;;
        *)
            cat >>"$profile" <<EOF

$PROFILE_MARKER
case ":\$PATH:" in
    *":$BIN_DIR:"*) ;;
    *) PATH="$BIN_DIR:\$PATH" ;;
esac
export PATH
EOF
            ;;
    esac
    say "added $BIN_DIR to PATH in $profile"
}

report_path() {
    if path_contains_bin_dir; then
        return 0
    fi
    if [ "$MODIFY_PATH" = 1 ]; then
        add_bin_dir_to_profile
        say "open a new Vivido window or tab to pick up the new PATH"
    else
        say "add $BIN_DIR to PATH so Vivido shells can find vrowser"
    fi
}

uninstall() {
    removed=0
    launcher=$BIN_DIR/vrowser
    if [ -f "$launcher" ] && grep -qF "$INSTALL_ROOT/current/vrowser" "$launcher" 2>/dev/null; then
        rm -f "$launcher"
        say "removed $launcher"
        removed=1
    elif [ -e "$launcher" ]; then
        warn "$launcher was not written by this installer; leaving it in place"
    fi
    if [ -d "$INSTALL_ROOT" ]; then
        # A setuid helper is root-owned, so the bundle may need the same elevation it was given.
        if ! rm -rf "$INSTALL_ROOT" 2>/dev/null; then
            if command -v sudo >/dev/null 2>&1; then
                say "running: sudo rm -rf '$INSTALL_ROOT'"
                sudo rm -rf "$INSTALL_ROOT" ||
                    die "could not remove $INSTALL_ROOT"
            else
                die "could not remove $INSTALL_ROOT"
            fi
        fi
        say "removed $INSTALL_ROOT"
        removed=1
    fi
    [ "$removed" = 1 ] || say "nothing to uninstall"
    profile=$(profile_for_shell)
    if [ -f "$profile" ] && grep -qF "$PROFILE_MARKER" "$profile"; then
        case $profile in
            # This file is written by the installer and holds nothing else.
            */conf.d/vrowser.fish)
                rm -f "$profile"
                say "removed $profile"
                ;;
            *)
                say "remove the block marked '$PROFILE_MARKER' from $profile to undo the PATH change"
                ;;
        esac
    fi
}

install() {
    need_cmd tar
    triple=$(detect_triple)
    if [ -z "$VERSION" ]; then
        say "resolving the latest release"
        VERSION=$(resolve_latest_version)
    fi
    say "installing Vrowser $VERSION for $triple"

    version_dir=$INSTALL_ROOT/versions/$VERSION
    if [ -d "$version_dir" ] && [ "$FORCE" = 0 ]; then
        say "$version_dir already exists; refreshing the launcher only (use --force to reinstall)"
    else
        archive_name=vrowser-$VERSION-$triple.tar.gz
        archive_url=$RELEASES_URL/download/v$VERSION/$archive_name

        # Staging inside the install root keeps the unpacked bundle on the destination filesystem,
        # so the final move is a rename rather than a second copy of a few hundred megabytes, and a
        # small /tmp cannot fail the install.
        mkdir -p "$INSTALL_ROOT" || die "could not create $INSTALL_ROOT"
        work=$(mktemp -d "$INSTALL_ROOT/.staging.XXXXXX") ||
            die "could not create a staging directory under $INSTALL_ROOT"
        trap 'rm -rf "$work"' EXIT INT TERM

        say "downloading $archive_url"
        download "$archive_url" "$work/$archive_name"
        download "$archive_url.sha256" "$work/$archive_name.sha256"
        verify_checksum "$work/$archive_name" "$work/$archive_name.sha256"
        say "checksum verified"

        mkdir -p "$work/bundle"
        tar -xzf "$work/$archive_name" -C "$work/bundle" ||
            die "could not unpack $archive_name"
        verify_bundle "$work/bundle"

        mkdir -p "$INSTALL_ROOT/versions"
        if [ -d "$version_dir" ]; then
            rm -rf "$version_dir.old"
            mv "$version_dir" "$version_dir.old"
        fi
        mv "$work/bundle" "$version_dir" || die "could not install into $version_dir"
        rm -rf "$version_dir.old"

        rm -rf "$work"
        trap - EXIT INT TERM
    fi

    [ "$(uname -s)" = Linux ] && prepare_linux_sandbox "$version_dir"

    # Replace atomically so a running Vrowser keeps the bundle it started with.
    ln -sfn "$version_dir" "$INSTALL_ROOT/current.new"
    mv -f "$INSTALL_ROOT/current.new" "$INSTALL_ROOT/current"
    say "installed bundle $version_dir"

    install_launcher

    reported=$("$INSTALL_ROOT/current/vrowser" --version 2>/dev/null) ||
        die "the installed bundle could not report its version; the download may be incomplete"
    say "verified: $reported"

    report_path

    if [ -n "${VIVID_ENDPOINT_CONTROL:-}" ]; then
        say "this shell is inside Vivido; run: vrowser https://vivido.dev"
    else
        say "open a Vivido window and run: vrowser https://vivido.dev"
    fi
}

select_downloader
select_transport_policy
case $ACTION in
    install) install ;;
    uninstall) uninstall ;;
esac
