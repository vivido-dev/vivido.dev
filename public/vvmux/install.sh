#!/bin/sh
# vvmux command-line installer for x86_64 Linux.
#
#   curl -fsSL https://vivido.dev/vvmux/install.sh | sh
#   curl -fsSL https://vivido.dev/vvmux/install.sh | sh -s -- --version 0.5.0
#   curl -fsSL https://vivido.dev/vvmux/install.sh | sh -s -- --format deb
#   curl -fsSL https://vivido.dev/vvmux/install.sh | sudo sh -s -- --system
#
# Downloads the release installer for this machine, verifies its SHA-256 checksum, and runs it.
# The default is the self-extracting .run, which works on any glibc distribution and needs no
# root for a per-user install; --format deb or rpm installs the distribution package instead.
# The installer carries vvmux, vivi, vvrd, vvssh, vvagent, vvland, vvpaint, and vvreceive.

set -eu

REPO=${VVMUX_REPO:-vivido-dev/vvmux}
RELEASES_URL=${VVMUX_RELEASES_URL:-https://github.com/$REPO/releases}
VERSION=${VVMUX_VERSION:-}
FORMAT=run
ACTION=install
INSTALLER_ARGUMENTS=
DOWNLOADER=
TRANSPORT=https

say() { printf 'vvmux: %s\n' "$*"; }
die() { printf 'vvmux: error: %s\n' "$*" >&2; exit 1; }

usage() {
    cat <<'EOF'
Install vvmux and its companion tools on x86_64 Linux.

Usage:
  install.sh [options] [-- installer options]
  curl -fsSL https://vivido.dev/vvmux/install.sh | sh -s -- [options] [-- installer options]

Options:
  --version VERSION     Release to install (default: the latest release)
  --format FORMAT       run (default; any distribution), deb, or rpm
  --user                Install for this user only (.run; the default unless root)
  --system              Install for every user under /usr/local (.run; needs root)
  --no-modify-path      Never edit a shell profile (.run)
  --uninstall           Remove a .run installation made for this user, or with --system
  -h, --help            Show this help

Anything after -- is passed to the .run installer unchanged (for example --prefix DIR).

Environment overrides: VVMUX_VERSION, VVMUX_REPO, VVMUX_RELEASES_URL.
EOF
}

add_installer_argument() {
    INSTALLER_ARGUMENTS="$INSTALLER_ARGUMENTS $1"
}

while [ "$#" -gt 0 ]; do
    case $1 in
        --version)
            [ "$#" -ge 2 ] || die "--version requires a value"
            VERSION=$2
            shift 2
            ;;
        --format)
            [ "$#" -ge 2 ] || die "--format requires a value"
            FORMAT=$2
            shift 2
            ;;
        --user|--system|--no-modify-path) add_installer_argument "$1"; shift ;;
        --uninstall) ACTION=uninstall; shift ;;
        -h|--help) usage; exit 0 ;;
        --) shift; break ;;
        *) die "unknown option $1 (see --help)" ;;
    esac
done
VERSION=${VERSION#v}
case $FORMAT in
    run|deb|rpm) ;;
    *) die "--format must be run, deb, or rpm" ;;
esac

select_downloader() {
    if command -v curl >/dev/null 2>&1; then
        DOWNLOADER=curl
    elif command -v wget >/dev/null 2>&1; then
        DOWNLOADER=wget
    else
        die "neither curl nor wget is available to download the release"
    fi
}

# A redirect must not downgrade HTTPS. A plain-http base is allowed only so that a local mirror
# can be used for testing.
select_transport_policy() {
    case $RELEASES_URL in
        https://*) TRANSPORT=https ;;
        http://*) TRANSPORT=any ;;
        *) die "VVMUX_RELEASES_URL must be an http or https URL" ;;
    esac
}

download() {
    case $DOWNLOADER:$TRANSPORT in
        curl:https) curl -fSL --proto '=https' --tlsv1.2 -o "$2" "$1" ;;
        curl:any) curl -fSL -o "$2" "$1" ;;
        wget:https) wget -q --https-only -O "$2" "$1" ;;
        wget:any) wget -q -O "$2" "$1" ;;
    esac || die "could not download $1"
}

# Reads the latest tag from the releases/latest redirect instead of the rate-limited GitHub API.
resolve_redirect() {
    case $DOWNLOADER:$TRANSPORT in
        curl:https) curl -fsSL --proto '=https' --tlsv1.2 -o /dev/null -w '%{url_effective}' "$1" ;;
        curl:any) curl -fsSL -o /dev/null -w '%{url_effective}' "$1" ;;
        wget:https) wget -q -S --spider --https-only "$1" 2>&1 | redirect_location ;;
        wget:any) wget -q -S --spider "$1" 2>&1 | redirect_location ;;
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
        *) die "could not determine the latest vvmux release; pass --version explicitly" ;;
    esac
}

check_system() {
    [ "$(uname -s)" = Linux ] || die "this installer is for Linux"
    case $(uname -m) in
        x86_64|amd64) ;;
        *) die "vvmux publishes x86_64 Linux builds only; $(uname -m) is not supported yet" ;;
    esac
    getconf GNU_LIBC_VERSION >/dev/null 2>&1 || die "vvmux needs a glibc-based distribution"
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

verify_checksum() {
    expected=$(cut -d ' ' -f 1 <"$2")
    case $expected in
        *[!0-9a-f]* | '') die "the checksum file for $(basename "$1") is malformed" ;;
    esac
    [ ${#expected} -eq 64 ] || die "the checksum file for $(basename "$1") is not a SHA-256 digest"
    actual=$(sha256_of "$1")
    [ "$expected" = "$actual" ] ||
        die "checksum mismatch for $(basename "$1"): expected $expected, got $actual"
}

as_root() {
    if [ "$(id -u)" = 0 ]; then
        "$@"
    elif command -v sudo >/dev/null 2>&1; then
        say "running: sudo $*"
        sudo "$@"
    else
        die "installing a .$FORMAT needs root; rerun as root or use --format run"
    fi
}

install_package() {
    package=$1
    case $FORMAT in
        deb)
            command -v apt-get >/dev/null 2>&1 || die "--format deb needs apt-get"
            as_root apt-get install -y "$package"
            ;;
        rpm)
            if command -v dnf >/dev/null 2>&1; then
                as_root dnf install -y "$package"
            elif command -v zypper >/dev/null 2>&1; then
                as_root zypper --non-interactive install --allow-unsigned-rpm "$package"
            elif command -v yum >/dev/null 2>&1; then
                as_root yum install -y "$package"
            else
                die "--format rpm needs dnf, zypper, or yum"
            fi
            ;;
    esac
}

uninstall() {
    case " $INSTALLER_ARGUMENTS " in
        *" --system "*) prefix=/usr/local/opt/vvmux ;;
        *)
            if [ "$(id -u)" = 0 ]; then prefix=/usr/local/opt/vvmux; else prefix=$HOME/.local/opt/vvmux; fi
            ;;
    esac
    if [ -e "$prefix/.package-managed" ]; then
        die "vvmux was installed from a .deb or .rpm; remove it with the package manager"
    fi
    [ -f "$prefix/uninstall.sh" ] || die "no vvmux installation was found in $prefix"
    sh "$prefix/uninstall.sh"
}

install() {
    check_system
    if [ -z "$VERSION" ]; then
        say "resolving the latest release"
        VERSION=$(resolve_latest_version)
    fi
    case $FORMAT in
        run) asset=vvmux-$VERSION-linux-x86_64.run ;;
        deb) asset=vvmux_${VERSION}_amd64.deb ;;
        rpm) asset=vvmux-$VERSION-1.x86_64.rpm ;;
    esac
    url=$RELEASES_URL/download/v$VERSION/$asset

    work=$(mktemp -d "${TMPDIR:-/tmp}/vvmux-install.XXXXXX") ||
        die "could not create a temporary directory"
    trap 'rm -rf "$work"' EXIT INT TERM
    # A package manager may read the file as another user.
    chmod 755 "$work"

    say "downloading $url"
    download "$url" "$work/$asset"
    download "$url.sha256" "$work/$asset.sha256"
    verify_checksum "$work/$asset" "$work/$asset.sha256"
    say "checksum verified"
    chmod 644 "$work/$asset"

    if [ "$FORMAT" = run ]; then
        # shellcheck disable=SC2086 # the collected options are single words
        sh "$work/$asset" $INSTALLER_ARGUMENTS "$@"
    else
        [ -z "$INSTALLER_ARGUMENTS$*" ] || die "installer options apply only to --format run"
        install_package "$work/$asset"
        say "installed vvmux $VERSION from the .$FORMAT package"
    fi
}

select_transport_policy
case $ACTION in
    install) select_downloader; install "$@" ;;
    uninstall) uninstall ;;
esac
