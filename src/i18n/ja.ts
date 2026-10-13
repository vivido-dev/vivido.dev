import type { Messages } from './context'

const ja: Messages = {
  nav: {
    products: '製品',
    learn: '学ぶ',
    docs: 'ドキュメント',
    tutorials: 'チュートリアル',
    config: '設定',
    protocol: 'プロトコル',
    plugins: 'プラグイン',
    install: 'インストール',
    blurbs: {
      vivido: 'GPUターミナルエミュレーター',
      vivida: 'あなたとエージェントのためのワークスペース',
      vvmux: 'デタッチ可能でメディア対応のマルチプレクサー',
      vivi: 'コマンドラインからメディアを再生',
      vvrd: 'ターミナルでPDFや各種ドキュメントを読む',
      plugins: 'vvmuxマーケットプレイス',
    },
    github: 'VividoのGitHub',
    x: 'VividoのXアカウント',
    toggle: 'ナビゲーションを開閉',
    language: '言語',
  },

  footer: {
    tagline:
      'Vivid Protocol 1.5の上に作られたターミナルスイート。画像・動画・音声は認証済みのサイドチャネルを通り、PTYはPTYのままです。',
    project: 'プロジェクト',
    vvmuxPlugins: 'vvmuxプラグイン',
    documentation: 'ドキュメント',
    configuration: '設定',
    spec: 'Vivid 1.5仕様',
    sdk: 'Vivid SDK(Rust、Python、TS)',
    crate: 'crates.ioのvivido',
    releases: 'リリース',
    issues: 'イシュー',
    licence: 'Apache-2.0ライセンス',
    free: 'Apache-2.0ライセンスの無料オープンソースソフトウェアです。',
  },

  common: {
    suiteBack: 'Vividoスイート',
    viewOnGithub: 'GitHubで見る',
    copied: 'コピーしました',
    copyCommand: '「{command}」をクリップボードにコピー',
    chooseLanguage: 'プログラミング言語を選択',
    onThisPage: 'このページの内容',
    firstSteps: 'はじめの一歩',
    usage: '使い方',
    whatItDoes: 'できること',
    video: '動画',
    audio: '音声',
    images: '画像',
  },

  meta: {
    fallbackTitle: 'Vivido',
    '/': {
      title: 'Vivido — 動画を再生できるGPUターミナル',
      description:
        '画像・動画・音声をインラインで表示できる、高速でクロスプラットフォームなGPUターミナルエミュレーター。Vivid Protocol 1.5がメディアを認証済みのサイドチャネルに載せるため、PTYは通常のターミナルI/Oのままです。',
    },
    '/vivido': {
      title: 'Vivido — 動画と音声をインライン再生できるGPUターミナルエミュレーター',
      description:
        'Metal・DirectX 12・Vulkan上のVelloとwgpu。インライン画像、H.264/HEVC/VP9/AV1動画、7種類の音声コーデック、正確なPTS再生、vvsshによるメディア転送、Kitty graphicsプロトコル互換、vivido msgによる決定的な自動化。',
    },
    '/vivida': {
      title: 'Vivida — あなたとエージェントのためのターミナルワークスペース',
      description:
        'プロジェクトごとにワークスペースを、タスクごとにペインを。そしてエージェントには、あなたの隣で見て動くための道具を。ネイティブのVividoペインをワークスペース・タブ・分割で整理します。',
    },
    '/vvmux': {
      title: 'vvmux — デタッチ可能でメディア対応のターミナルマルチプレクサー',
      description:
        'Vividoのためのtmux風セッション。ペインごとの仮想Vividプレゼンターが、デタッチと再アタッチをまたいでメディアを維持します。デーモンがウィンドウトークンを目にすることはありません。',
    },
    '/vvmux/plugins': {
      title: 'vvmuxプラグイン — マーケットプレイス',
      description:
        'vvmux向けの、マニフェスト駆動のエージェントプロバイダー・インテグレーション・ペイン・ワークフロー。インストール前に権限が表示されます。',
    },
    '/vivi': {
      title: 'Vivi — ターミナルから画像・動画・音声を再生',
      description:
        'Vivid Protocol 1.5のコマンドラインプロデューサー。vivi photo.png、vivi clip.mkv、vivi song.mp3を、ローカルでも、vvmux経由でも、vvssh越しでも。',
    },
    '/vvrd': {
      title: 'vvrd — ターミナルでPDF・EPUB・Office文書を読む',
      description:
        'Vivido用のフルスクリーン文書リーダー。MuPDFによるPDFとEPUB、ページ分割されたMarkdownとMermaid、LibreOfficeで変換したPPTX/DOCX/ODP/ODTを、Vivid 1.5のサイドチャネル上に描画します。',
    },
    '/docs': {
      title: 'ドキュメント — VividoとVividスタック',
      description:
        'クイックスタート、PTYをクリーンに保つアーキテクチャ、vivido msgの自動化インターフェース、ヘッドレスセッション、そしてVivid Protocol 1.5仕様。',
    },
    '/config': {
      title: '設定 — vivido.tomlリファレンス',
      description:
        'vivido.tomlの全セクションと組み込みのデフォルト値：window、font、colors、scrolling、cursor、terminal、hints、keyboard、debug。',
    },
    '/tutorials': {
      title: 'チュートリアル — Vivido、vvssh、vvmux、エージェントによる自動化',
      description:
        '最初のインライン画像、vvsshによるSSH越しのメディア、vvmuxのデタッチ可能なメディアセッション、エージェントからのターミナル操作を順に体験します。',
    },
  },

  platform: {
    downloadMac: 'macOS版をダウンロード',
    macInstaller: '.pkgインストーラー',
    downloadWindows: 'Windows版をダウンロード',
    windowsInstaller: '.exeインストーラー',
    windowsLink: 'Windowsインストーラー',
    choose: 'プラットフォームを選択',
    selected: '（選択中）',
    macos: {
      headline: '署名付きパッケージ',
      note: 'Metalで描画します。パッケージはDeveloper IDで署名され、公証済みです。',
      download: '.pkgをダウンロード',
    },
    windows: {
      headline: '署名付きスイートインストーラー',
      note: 'インストーラーひとつで、Vivido、Vivida、vvmux、vivi、vvrd、vvsshがPATHに追加されます。DirectX 12で描画します。',
      download: '.exeをダウンロード',
    },
    linux: {
      headline: 'crates.ioからビルド',
      note: '設計上Waylandのみに対応し、Vulkanで描画します。Rust 1.95以降と、お使いのディストリビューションのFFmpegおよびオーディオ開発パッケージが必要です。',
    },
    readFirst: '先に読んでおきたい方へ。[インストールガイド](installGuide)に、プラットフォームごとのビルド依存関係をまとめています。',
  },

  suite: {
    status: { stable: '安定版', new: '新着', preview: 'プレビュー' },
    groups: {
      terminal: { label: 'ターミナル', blurb: '作業する場所と、それを整えるもの。' },
      producer: { label: 'プロデューサー', blurb: '画面に絵と音を届けるものたち。' },
      remote: { label: 'リモートとトランスポート', blurb: '自分のものではないマシンでも、同じ体験を。' },
    },
    tools: {
      vivido: 'GPUターミナルエミュレーターであり、Vividのリファレンスプレゼンター。Metal、DirectX 12、Vulkan。',
      vivida: 'ネイティブのVividoペインによるワークスペース・タブ・分割。プロジェクトとエージェントの拠点です。',
      vvmux: 'デタッチ可能なマルチプレクサー。別のマシンからでも、デタッチと再アタッチをまたいでメディアが生き続けます。',
      vvbox: '話しかけられるターミナルシェル。タブと分割に並ぶペインを、チャットパネルから操作します。',
      vivi: 'コマンドラインから画像・動画・音声トラックを再生。Vividの動作を確かめる最短の方法です。',
      vvrd: 'PDF、EPUB、Markdown、Mermaid、Office文書を、ターミナルでフルスクリーン表示。',
      vvpaint: 'ターミナルを離れずに、画像の上に描いて注釈を付ける。キーボード中心の操作です。',
      vvcam: '接続したカメラの映像をH.264でエンコードしてターミナルへ配信。SSH越しでも動きます。',
      vvland: '隔離されたWaylandアプリをひとつ、あるいはWeston・Sway・Hyprlandのデスクトップ全体を、ペインの中で実行。',
      vvdoom: 'Doom。映像も音も同じメディアスタックで。必ず聞かれる質問なので。',
      vvssh: 'メディアを運ぶSSH。リモートの画像や動画が手元の画面に表示されます。',
      vrowser: 'ターミナルに描画する、あえて小さく作ったCEFブラウザー。タブもアドレスバーもありません。',
    },
  },

  diagram: {
    label:
      'プロデューサーは通常のテキストをPTYレーンでVividoに送り、画像・動画・音声は認証済みの独立したVividサイドチャネルを通ります。そのため、メディアのレーンが滞ってもターミナルI/Oは止まりません。',
    producer: 'プロデューサー',
    ownCode: '自作のコード',
    presenter: 'プレゼンター',
    pty: '通常のターミナルI/O — テキスト、キー入力、リサイズ',
    vivid: '認証済みサイドチャネル — 画像、動画、音声',
    flow: 'トラック単位のフロー制御：遅いソースや不正なソースが、入力・描画・音声・他のトラックを止めることはありません。',
    caption: 'メディアのバイトがPTYを通ることはありません。通るのは、サイズに上限のある認証済みアンカーマーカーだけです。',
  },

  home: {
    heroTitle: '動画を再生できる\n==GPUターミナル。==',
    heroLede:
      'Vividoは、画像・動画・音声をウィンドウの中にそのまま描画する、高速でクロスプラットフォームなターミナルエミュレーターです。メディアは認証済みのサイドチャネルを通るため、ローカルでも、SSH越しでも、マルチプレクサー経由でも、PTYは通常のターミナルI/Oのままです。',
    otherInstall: 'その他のインストール方法',
    heroAlt: 'Vividoペインがメディアをインライン再生しているVividaのウィンドウ',
    watch: '実際の動作をYouTubeで見る',
    proof: {
      eyebrow: '60秒で確かめる',
      title: 'コマンドは3つ。設定は不要。',
      lede: 'Vividoをインストールして起動し、次のどれかを実行してください。セットアップの手順も、エスケープシーケンスによる検出も、有効化する項目もありません。',
      captions: {
        'vivi photo.jpg': '画像を、フル解像度でインライン表示。',
        'vivi clip.mkv': '音声と同期したH.264動画を、グリッドの中で再生。',
        'vvssh user@host': '接続先でviviを実行すると、映像は手元に届きます。',
      },
    },
    pty: {
      eyebrow: '技術的な切り口',
      title: 'PTYはクリーンなまま。',
      lede: '画像を表示できる他のターミナルは、どれも画像をエスケープシーケンスとしてPTYに流し込みます。Vividは違います。ターミナルのテキストはこれまでどおりの経路を通り、メディアには認証とフロー制御を備えた専用のレーンが用意されます。',
    },
    caps: {
      eyebrow: '手に入るもの',
      title: 'テキストを読むだけでは足りない人のために。',
      lede: 'ターミナルが速くあるべきところは速く、ターミナルがこれまで届かなかったところまで。',
      media: {
        title: '本物のメディア',
        body: '色付きセルのモザイクではありません。本物のデコーダー、正確なPTS再生、連動する音声/動画クロック。フロー制御はトラック単位なので、ひとつのストリームが詰まっても影響はそのストリームだけにとどまります。',
      },
      gpu: {
        title: 'どこでもGPU描画',
        body: 'Velloとwgpuが、各プラットフォームのネイティブバックエンドで全フレームを描画します。Alacrittyのターミナルコアのスループットもそのまま受け継いでいます。',
      },
      ssh: {
        title: 'SSH越しのメディア',
        body: '`vvssh`は、Vividエンドポイントをリモートシェルへ転送します。サーバーで`vivi`を実行すれば、映像は手元のノートPCに表示されます。X転送もファイルのコピーも不要です。',
        note: 'ルートシークレットは保護されたstdinチャネルを通り、所有者のみがアクセスできるファイルに渡されます。SSHやリモートシェルの引数に現れることはありません。',
      },
      automation: {
        title: 'エージェントが信頼できる自動化',
        body: '`vivido msg`は決定的なIPCインターフェースであり、スクリーンスクレイパーではありません。エージェントやCIは、sleepして祈るのではなく、単調増加する画面シーケンス、落ち着いた画面、提示済みのフレームといった事実を待ちます。',
        commands: {
          'wait text': 'グリッドに指定の文字列が現れるまでブロック',
          'wait screen-stable': '出力が落ち着くまでブロック',
          'get-grid': '全セル・スタイル・ハイパーリンクをJSONで取得',
          screenshot: '実際に提示されたフレームをPNGで取得',
        },
      },
      headless: {
        title: '名前付きヘッドレスセッション',
        body: 'ターミナルコア、Vividプレゼンター、Velloレンダラーを含む完全なランタイムを、ウィンドウもコンポジターもなしで実行します。ウィンドウで観測できることは、実際に描画されたスクリーンショットも含めて、すべてここでも観測できます。Linux、macOS、Windowsに対応。',
      },
      wayland: {
        title: 'あえてWaylandのみ',
        body: 'X11も、Xlibも、GLXもありません。Vividoはviモードとvi風のカーソル操作も省き、マウス選択は1回のドラッグだけに絞っています。対象が少ないぶん、挙動は明快です。',
        note: 'これらは不足ではなく、文書化された意図的な違いです。一覧はVividoのページにあります。',
      },
    },
    suite: {
      eyebrow: 'ひとつのプロトコルに、ひとそろいのツール',
      title: 'すべてがVivid 1.5を話します。',
      lede: 'どれも、ひとつの仕事をうまくこなす独立したプログラムです。相互運用できるのは、コードベースではなくワイヤーフォーマットを共有しているから。だからこそ、あなた自身でも書けます。',
    },
    vivida: {
      eyebrow: 'Vividaの紹介',
      title: 'あなたのプロジェクトも、エージェントも。\nひとつのウィンドウに。',
      body: 'プロジェクトごとにワークスペースを、タスクごとにペインを。そしてエージェントには、あなたの隣で見て動くための道具を。VividaはネイティブのVividoペインをワークスペース・タブ・分割に配置します。エージェントは、あなたが見ているのと同じウィンドウの中でペインを読み、コマンドを実行し、結果のスクリーンショットを撮れます。',
      explore: 'Vividaを詳しく見る',
      detach: 'vvmuxでデタッチする',
    },
    own: {
      eyebrow: '自分で書く',
      title: 'Vividは仕様です。内輪の裏技ではありません。',
      lede: 'プロトコルは公開され、バージョン管理されています。両方のロールに対応した全二重SDKがRustとPythonで用意されています。ピクセルか音声を生成できるなら、それをターミナルに表示できます。',
      points: [
        [
          '規範的な仕様',
          'フレーミング、サイズに上限のあるCBOR、型付きの制御メッセージ、メディア検証、認証済みのテキストアンカー。すべて明文化されています。',
        ],
        ['ひとつのSDKで両方のロール', 'プロデューサーになることも、セッションを終端して自分がプレゼンターになることもできます。'],
        [
          '誠実なネゴシエーション',
          '一貫性のある名前付きプロファイル。未知のレジストリエントリはリレーを通ってもバイト単位でそのまま保たれ、認識はできても未対応のエントリは、黙って捨てられるのではなく拒否されます。',
        ],
      ],
      readSpec: '1.5仕様を読む',
    },
    samples: {
      rust: 'VIVID_ENDPOINT_CONTROLを検出し、Vividoがこのシェルに\nエクスポートしたルートシークレットで認証します。',
      python: '継承したVividの検出用環境変数を使って接続します。',
      shell: 'ウィンドウなしの完全なVividoランタイムを、IPCで操作します。',
    },
    install: {
      eyebrow: 'はじめる',
      title: 'スイートをインストール。',
      lede: 'Vividoにはvvsshが同梱されています。WindowsとmacOSでは、署名付きインストーラーがVivida、vvmux、vivi、vvrdもまとめて導入します。',
      body: 'すべて無料で、Apache-2.0ライセンスです。ソースからビルドしたい場合、リポジトリはCargoプロジェクトの集まりになっており、それぞれ単独でビルドできます。',
      browse: 'ソースを見る',
    },
    closing: {
      title: 'ターミナルは50年間、\n==テキストだけでした。==',
      body: '見て、聴いて。シェルを離れることなく。',
      fast: '速さの理由',
    },
  },

  vivido: {
    eyebrow: 'Vivido · GPUターミナルエミュレーター',
    title: '==映像と音==を描き出すターミナル。',
    lede: 'Vividoは、高速でクロスプラットフォームなGPUターミナルエミュレーターであり、Vivid Protocol 1.5のリファレンスプレゼンターです。プロデューサーを認証し、画像と動画をデコードして描画し、連動する音声を再生し、シーン内の配置と可視性を管理します。その間も、PTYは通常のターミナルI/Oのままです。',
    configReference: '設定リファレンス',
    features: [
      'VelloとwgpuによるGPU描画 — macOSではMetal、WindowsではDirectX 12、LinuxではVulkan',
      'Vivid Protocol 1.5：インライン画像、H.264/HEVC/VP9/AV1動画、7種類の音声コーデック',
      'Kitty graphicsプロトコル互換 — kitten icat、timg、chafa、yaziが静止画をそのままインライン表示',
      '連動する音声/動画クロックとバッファ付きの開始による、正確なPTS再生',
      'リプレイ耐性のあるマーカーを用いた、認証済みメディアアンカー',
      'vvsshによる安全なリモートVivid転送。メディア用の別トランスポートも選べます',
      'vivido msgによる決定的な自動化と、名前付きヘッドレスセッション',
      'ソース単位のバックプレッシャー — 遅いメディアソースがターミナルI/Oを止めることはありません',
    ],
    deliberateHeading: '意図的な違い',
    deliberate: [
      'LinuxはWaylandのみ。X11も、Xlibも、GLXもありません。',
      'viモード、vi検索、viカーソル操作はありません。',
      'マウス選択は簡素化され、ドラッグのみです。',
      'メディアのバイトがPTYを通ることはありません。通るのは、サイズに上限のある認証済みアンカーマーカーだけです。',
    ],
    deliberateNote: 'これらは不足ではなく選択です。どれも、Vividoが永久に抱え続けることになる互換性の負担を、ひとまとまり取り除いています。',
    speed: {
      eyebrow: '速さを保てる理由',
      title: '速さは、後から足せる機能ではありません。',
      lede: '独立した3つの判断が、メディア対応のターミナルをテキスト専用のものと同じくらい軽快に保ちます。',
      points: [
        ['ターミナルコア', 'Alacrittyの系譜を継ぐため、スループットも正確さも実績のある土台から始まります。'],
        ['レンダラー', 'VelloがベクターとグリフをGPU上で計算し、wgpuがプラットフォームの提供するバックエンドを使い分けます。'],
        ['分離', 'メディアのデコードと再生はトラック単位。飽和の影響は、それを引き起こしたトラックの中に収まります。'],
      ],
    },
    install: {
      eyebrow: 'インストール',
      title: 'クレートひとつで、ターミナルとvvsshが入ります。',
      lede: 'Rust 1.95以降と、お使いのプラットフォームのFFmpegおよびオーディオ開発パッケージが必要です。macOSとWindows向けの署名付きインストーラーはリリースページにあります。',
      installers: '署名付きインストーラー',
    },
    next: {
      title: '次に読むなら',
      config: { label: 'vivido.tomlリファレンス', blurb: '全セクションと、その組み込みデフォルト値。' },
      docs: { label: '自動化インターフェース', blurb: 'vivido msgで観測・操作できること。' },
      vvmux: { label: 'vvmux', blurb: 'セッションをデタッチしても、メディアはそのまま。' },
      vivi: { label: 'Vivi', blurb: 'メディアを画面に出す、いちばん手軽な方法。' },
    },
  },

  vivida: {
    eyebrow: 'Vivida · ターミナルワークスペース',
    title: 'あなたと==エージェント==が共に過ごす場所。',
    lede: 'プロジェクト、ターミナル、AIエージェントを、ひとつのウィンドウに。Vividaは、ワークスペース・タブ・分割ペインと、Vividoが描画できるすべてを組み合わせます。さらに、エージェントが隠れたサンドボックスではなく、あなたが見ているのと同じペインで作業するための自動化機能も備えています。',
    explore: 'ワークスペースを見る',
    place: {
      eyebrow: 'ウィンドウの整理より、ものづくりを',
      title: 'すべてが、あるべき場所に。',
      features: [
        [
          'プロジェクトごとの居場所',
          '作業を名前付きのワークスペースにまとめます。サイドバーからプロジェクトを行き来でき、タブと分割がそれぞれのタスクを手の届くところに置いてくれます。',
        ],
        [
          '文字の壁だけではなく',
          'Vividoの上に作られているので、ペインはターミナル出力と並べて画像を表示し、動画や音声を再生できます。プレビューを作業のすぐ隣に。',
        ],
        [
          '目と手を持つエージェント',
          '組み込みの自動化機能により、エージェントはペインを調べ、スクリーンショットを撮り、文字を入力し、キーを押し、マウスを使って、自分の作業結果を確かめられます。',
        ],
        [
          '集中できる余白',
          'タブを開き、ペインを分割し、ワークスペースを整える。すべてキーボードから行えます。GPU描画が、全体を滑らかで読みやすく保ちます。',
        ],
      ],
    },
    agents: {
      eyebrow: '見る。動く。確かめる。',
      title: 'エージェントと並んで働く。',
      body: 'エージェントは目的のペインを見つけ、出力を調べ、タブや分割を整え、スクリーンショットで自分の作業を検証できます。あなたは同じワークスペースを共有し、進行をその場で追えます。つまり、途中で作業を引き取ることもできます。',
      guide: '自動化ガイドを読む',
    },
    keys: {
      eyebrow: 'キーボードから手を離さずに',
      title: 'キーひとつで、場所をつくる。',
      lede: 'ModはmacOSではCmd、それ以外ではCtrlです。タブバーの歯車アイコンから全一覧を確認できます。',
      meetVivido: '中で動くターミナル、Vividoを見る',
      shortcuts: {
        'Mod T': '新しいタブ',
        'Mod D': '左右に分割',
        'Mod Shift D': '上下に分割',
        'Mod Shift N': '新しいワークスペース',
        'Mod Shift B': 'サイドバーのサイズを切り替え',
        'Mod 1–9': 'ワークスペースを切り替え',
      },
    },
  },

  vvmux: {
    eyebrow: 'vvmux · デタッチ可能なマルチプレクサー',
    title: 'セッションはデタッチ。\n==メディアはそのまま。==',
    lede: 'vvmuxは、tmuxに似た使い勝手でVividを理解するマルチプレクサーです。バックグラウンドのサーバーがペイン・PTY・レイアウト・スクロールバックを保持し、フォアグラウンドのクライアントは、いま見えているメディアだけをアタッチ先のVividoウィンドウへ橋渡しします。デタッチしても、ウィンドウトークンがデーモンに渡ることはありません。',
    browsePlugins: 'プラグインを探す',
    features: [
      '常駐サーバーに支えられた、デタッチ可能な名前付きセッション',
      'タブ、タイル型とフローティングのペイン、ズーム、コピーモード、マウスでのリサイズ',
      'ペインごとの仮想Vividプレゼンター — デタッチと再アタッチをまたいでメディアが生き続けます',
      'フラグメントを考慮したペインメディアの遮蔽処理と、安定スナップショットによる状態の突き合わせ',
      'vvmux msgによる、スクリプト可能なペインの自動操作',
      'プラグインシステムと、アイドル・作業中・ブロック中を報告するエージェントナビゲーター',
    ],
    keysHeading: 'デフォルトのキー',
    keysNote: 'プレフィックスは、ご想像どおりCtrl+bです。',
    keys: {
      'Ctrl+b %': '左右に分割',
      'Ctrl+b "': '上下に分割',
      'Ctrl+b ←→↑↓': 'ペイン間でフォーカスを移動',
      'Ctrl+b z': 'フォーカス中のペインのズームを切り替え',
      'Ctrl+b d': 'すべて動かしたままデタッチ',
      'Ctrl+b c / n / p': '新しいタブ、次のタブ、前のタブ',
      'Ctrl+b [': 'コピーモード',
    },
    security: {
      eyebrow: 'セキュリティの形',
      title: 'ウィンドウより長く生きるデーモンに、その鍵を持たせてはいけません。',
      lede: 'ここが、メディア対応のマルチプレクサーをテキストだけのものと分ける部分です。長時間動かすセッションを任せる前に、理解しておく価値があります。',
      points: [
        ['サーバーは状態を持つ', 'ペイン、PTY、レイアウト、スクロールバックは、デタッチ後も生き続けるバックグラウンドプロセスの中にあります。'],
        ['クライアントは権限を持つ', '外側のVividoウィンドウのトークンを持つのは、アタッチ中のフォアグラウンドクライアントだけ。デタッチすると解放されます。'],
        ['橋は細い', '見えているメディアは、ソース単位に限定されたライターを通して中継され、安定スナップショットをもとに突き合わせられます。'],
      ],
    },
  },

  plugins: {
    eyebrow: 'マーケットプレイス',
    title: 'vvmuxプラグイン',
    lede: 'マニフェスト駆動のエージェントプロバイダー、インテグレーション、ペイン、ワークフローを探せます。vvmuxはインストール前に各パッケージの権限を表示し、マーケットプレイスのコードを実行することはありません。',
    search: 'プラグインを検索',
    filter: 'プラグインの種類で絞り込み',
    allTypes: 'すべての種類',
    empty: '条件に一致するプラグインはありません。',
    publish:
      'ルートに`vvmux-plugin.toml`を置き、`vvmux-plugin`トピックを付けた公開GitHubリポジトリを作成すると、インデックスへの掲載候補になります。',
    firstParty: '公式',
    permissions: '権限：',
    none: 'なし',
    copy: 'コピー',
    viewSource: 'ソースを見る',
  },

  vivi: {
    eyebrow: 'Vivi · Vivid 1.5プロデューサー',
    title: 'ファイルから==あなたのターミナル==への最短経路。',
    lede: 'Viviは、画像やFFmpegが扱えるあらゆるメディアを調べ、Vividプレゼンターに送ります。全二重の制御、フロー制御、プリバッファ、可視性、キーフレーム復帰まで面倒を見るので、あなたが打つのはファイル名だけです。',
    usageTitle: '実際によく使う4つの使い方。',
    usage: {
      'vivi photo.png': '画像を1枚、グリッドの中にインライン表示。',
      'vivi clip.mkv': '動画と音声トラックを、同じクロックで再生。',
      'vivi song.mp3': '音声のみ。ウィンドウもプレーヤーも不要です。',
      'vivi -z 1.5 photo.webp clip.mp4': 'プレイリストを150%に拡大して再生。',
    },
    featuresHeading: '対応していること',
    features: [
      'あらゆる画像：PNGとJPEGは元のバイト列のまま送り、それ以外はRGBAに変換',
      '動画：H.264とHEVCのAnnex B、VP9、AV1。音声クロックと連動',
      '音声：MP3、AAC、ALAC、Opus、Vorbis、FLAC、PCM、WAV',
      'Opus、Vorbis、FLACの正規化された初期化 — コンテナによる曖昧さがありません',
      'Vividoで直接、vvmuxのペイン内で、あるいはvvssh越しのリモートでも動作',
      'フロー制御、可視性に応じた一時停止と再開、プリバッファ、キーフレーム復帰',
    ],
    formatsHeading: '対応フォーマット',
    buildNote: 'Viviのビルドには、FFmpegの開発用ライブラリが必要です。macOSでは`brew install ffmpeg pkg-config`で導入できます。',
  },

  vvrd: {
    eyebrow: 'vvrd · 文書リーダー',
    title: 'あらゆる文書を、==ターミナルの中で。==',
    lede: 'vvrdは、Vivido用のフルスクリーン文書リーダーです。PDF、EPUB、Markdown、Mermaid、Office文書をページに分割し、Vividのサイドチャネル上にピクセルとして描画します。ターミナルのエスケープシーケンスは一切使いません。',
    usageTitle: '文書ひとつに、コマンドひとつ。',
    usage: {
      'vvrd paper.pdf': 'PDFを、ターミナルでフルスクリーン表示。',
      'vvrd book.epub': 'EPUBを、印刷物のようにページ分割して表示。',
      'vvrd guide.md': '表やコードを含むMarkdownを、テーマに合わせて表示。',
      'vvrd --page 12 paper.pdf': '12ページ目へ直接ジャンプ。',
    },
    features: [
      'MuPDFによるPDFとEPUB — 検索、目次、リンク、ズームとパン、回転、PNG書き出し',
      '組み込みのページネーターによるMarkdown描画：GFMの表、タスクリスト、コード、ローカルまたはdata URIの画像',
      'Mermaidの図。Markdown内のコードフェンスでも単独ファイルでも、ページ中央に配置',
      'PPTX、DOCX、ODP、ODTをヘッドレスのLibreOfficeでPDFに変換し、コンテンツハッシュごとにキャッシュ',
      '読んでいた位置を、文書ごとにプラットフォームのキャッシュへ保存',
      '同じバイナリを、ローカルでもvvssh越しのリモートシェルでも',
    ],
    officeNote:
      'Office文書の変換には、さらにPATH上のLibreOfficeが必要です（`VVRD_SOFFICE`で上書きできます）。Windowsでは、署名付きのVividoスイートインストーラーに`vvrd.exe`が含まれています。',
    keysHeading: 'キー操作',
    keys: {
      '← / → · Space': '前のページ / 次のページ',
      '↑ / ↓': 'スクロール（ページの端でページ送り）',
      g: 'ページを指定して移動',
      '/ · n / N': '検索、次 / 前の一致',
      't · M · f': '目次、メタデータ、リンク',
      e: '現在のページをPNGで書き出し',
      'R / F5': '再読み込みして再ページ分割',
    },
    formatsHeading: 'フォーマット',
    formats: [
      ['固定レイアウト', 'PDF · EPUB (MuPDF)'],
      ['マークアップ', 'Markdown (GFM) · Mermaid'],
      ['Office', 'PPTX · DOCX · ODP · ODT — LibreOffice経由'],
    ],
  },

  notFound: {
    title: 'ページが見つかりません',
    body: 'そのルートは存在しません。移動したか、最初からなかったのかもしれません。',
    home: 'ホームに戻る',
    docs: 'ドキュメントを読む',
  },

  docs: {
    eyebrow: 'ドキュメント',
    title: 'ターミナルにメディアを届けるために必要なすべて。',
    lede: 'スタック全体を実践的に見て回ります。インストールし、PTYがクリーンなままでいられる理由を理解し、エージェントから操作し、ウィンドウなしで動かす。より詳しいリファレンスはコードのそばに置いてあります。',
    sections: {
      quickstart: 'クイックスタート',
      model: 'Vividの仕組み',
      automation: '自動化',
      headless: 'ヘッドレスセッション',
      remote: 'リモートとネスト',
      projects: 'プロジェクト構成',
      spec: 'プロトコルとSDK',
    },
    quickstart: {
      packages:
        'Vividoは、ターミナルと`vvssh`の両方をインストールするひとつのCargoパッケージです。Viviは別のパッケージになっています。ターミナルを使うのに、メディアプロデューサーは必要ないからです。',
      discovery:
        'Vividoは、起動するすべてのシェルに`VIVID_ENDPOINT_CONTROL`とウィンドウごとのルートシークレットをエクスポートします。プロデューサーは環境変数からエンドポイントを検出するので、設定することも、ポートを選ぶこともありません。',
      installer:
        'macOSとWindowsでは、[リリースページ](releases)の署名付きインストーラーをおすすめします。Windowsでは、スイート全体をインストールして`PATH`に追加します。',
      sample: {
        install: '1. ターミナルをインストールします（vvsshも一緒に入ります）。',
        check: '2. 起動して、新しいシェルにVividエンドポイントがあることを確認します。',
        show: '3. 何か画面に表示してみます。',
      },
    },
    model: {
      roles:
        '**プロデューサー**はメディアを送ります。**プレゼンター**はそれを検証し、配置し、描画し、再生します。Vividoはリファレンスプレゼンターであり、Vivi、vvcam、vvrd、vvland、そしてあなた自身のコードがプロデューサーです。',
      lanesTitle: 'レーンは1本ではなく2本',
      lanes:
        '通常のターミナルI/OはPTYにとどまります。画像、エンコードされた動画、音声は認証済みのサイドチャネルを通ります。メディアのバイトがPTYを通ることはありません。通るのはサイズに上限のある認証済みアンカーマーカーだけで、プレゼンターはこれによって、サーフェスがテキスト中のどこに属するかを知ります。',
      surfacesTitle: 'サーフェスとトラック',
      surfaces: [
        '**セッション**は、プロファイルのネゴシエーションと認証を行います。',
        '**サーフェス**は、セマンティクス・シーン・ポリシー・入力に関する安定したアイデンティティです。',
        '**トラック**は、サーフェスが所有する、不変の動画・音声・ラスター・エンコード済み画像いずれかの構成ひとつです。',
        '**トラックチャネル**は、認証済みチャネルのひとつの世代です。バイト数とレコード数の累積上限と、順序付けられたストリーム終端を持ちます。',
      ],
      replace:
        'コーデックや解像度を変えても、サーフェスは作り直されません。置き換え用のトラックを準備し、そのスロットをアトミックに有効化してから、古いトラックを破棄します。そのため、画質を切り替えてもサーフェスがちらついたり、テキスト中の位置を失ったりしません。',
      backpressureTitle: 'バックプレッシャーの範囲は限定的',
      backpressure:
        'フロー制御はトラック単位です。飽和した動画ソースや不正な動画ソースが、制御トラフィック、入力の取り消し、音声、描画、無関係なトラックをブロックすることはありません。この性質があるからこそ、文字も打たなければならないターミナルの中で、インライン動画を安全に扱えます。',
    },
    automation: {
      surface:
        '`vivido msg`は決定的なIPCインターフェースです。LinuxとmacOSでは所有者のみがアクセスできるUnixソケット、Windowsでは所有者のみがアクセスできる名前付きパイプを使います。エージェントやCIが、sleepして祈るのではなく、事実を待てるようにするためのものです。',
      counters:
        '各ウィンドウは、単調増加する`screen_sequence`、`frame_sequence`、`output_offset`のカウンターを持ち、プロセスは単調増加する`event_sequence`を持ちます。待機条件はこれらを基準に表現されるので、テストは「500ミリ秒後」ではなく「この画面より後」と指定できます。',
      head: ['コマンド', '動作'],
      rows: {
        'vivido msg capabilities': 'このエンドポイントが応答できる内容を表示します。埋め込み先のホストが引き受けるメソッドも含みます。',
        'vivido msg list-windows': '安定したIDとともにウィンドウを列挙します。IDは予測せず、必ず取得してください。',
        'vivido msg inspect': 'ウィンドウのジオメトリ、セルの寸法、ターミナルモード、カーソルの状態。',
        'vivido msg get-text': '見えているビューポート、またはスクロールバックを含む最新N行の物理行。',
        'vivido msg get-grid': 'すべての物理セルを、幅・種別・重複を除いたスタイル表とともにJSONで返します。',
        'vivido msg typing': 'UTF-8のバイト列をそのまま書き込みます。ペースト処理はせず、Enterも付加しません。',
        'vivido msg key': '修飾キーと繰り返し回数を指定できるキー1つを、現在のターミナルモードに合わせてエンコードします。',
        'vivido msg mouse': 'セルまたは物理ピクセル単位で、移動・クリック・ドラッグ・スクロール、あるいは上限のある経路の移動を行います。',
        'vivido msg wait text': '見えているグリッドが文字列または正規表現に一致するまでブロックします。',
        'vivido msg wait screen-stable': '一定の静止期間、画面に意味のある変化がなくなるまでブロックします。',
        'vivido msg wait output': '以降に届くPTYのバイト列に一致させます。読み取りの境界をまたいでも一致します。',
        'vivido msg screenshot': '最後に提示されたフレームを、物理解像度のPNGで返します。',
        'vivido msg capture': '複合操作：アクティブ化し、より新しいフレームを要求し、安定を待ってからスクリーンショットを撮ります。',
        'vivido msg vivid tracks': 'Vividのサーフェス、トラック、チャネル世代、再生状態を調べます。',
      },
      waits:
        '待機のデフォルトのタイムアウトは30秒で、`ms`、`s`、`m`、`h`のサフィックスを指定できます。切断すると、保留中の待機、タグ付きの入力、サブスクリプションは直ちにキャンセルされます。',
      tutorials: '[チュートリアル](/tutorials#agent)で、エージェントのループ全体を順に説明しています。',
    },
    headless: {
      runtime:
        '`vivido --headless`は、ターミナルコア、入力エンコーダー、Vividプレゼンター、Vello/wgpuレンダラーを含む完全なランタイムを、ウィンドウもコンポジターもなしで実行します。ウィンドウ付きのインスタンスで観測できることは、実際に描画されたスクリーンショットも含めて、すべてここでも観測できます。',
      lifetime:
        '親プロセスは、シェルで評価できる`VIVIDO_SOCKET`と`VIVIDO_SESSION`のexport文を出力し、デーモンが実際にサービスを開始したと報告するまで終了しません。つまり、終了ステータスが0ならセッションは使える状態です。ヘッドレスセッションはウィンドウより長く生き続け、`vivido msg quit`、`vivido kill-session`、またはシグナルでのみ停止します。',
      head: ['オプション', '意味'],
      rows: {
        '--headless': 'ウィンドウもコンポジターもなしで実行し、IPCを提供します。Linux、macOS、Windowsに対応。',
        '--session NAME': 'セッションに名前を付けます。デフォルトはvivido-<pid>。1〜64文字のASCII英数字、ドット、ハイフン、アンダースコアが使えます。',
        '--foreground': 'デタッチせず、シャットダウンまでブロックします。スーパーバイザーやコンテナのエントリポイントで使う形です。',
        '--headless-size SIZE': '初期ジオメトリをCOLUMNSxLINESで指定します。WIDTHxHEIGHTpxとすれば、描画サーフェスを直接指定できます。',
      },
    },
    remote: {
      plainSsh:
        '素の`ssh`では足りません。リモートシェルからはローカルのエンドポイントに届かず、OpenSSHは検出用の変数を引き継がないからです。Viviは、わかりにくい形で失敗するのではなく、その旨を伝えます。',
      vvssh:
        '`vvssh`は、それを解決するラッパーです。POSIXサーバーではリモートにUnixソケットのリスナーを作成し、Windowsサーバーでは代わりにループバックTCPをリバース転送します。ループバック以外のTCPエンドポイントは拒否されます。ルートシークレットは、保護されたstdinのセットアップ接続を通って所有者専用の一時ファイルに渡され、ログインシェルがそれを読み取って削除します。SSHやリモートシェルの引数に現れることはありません。',
      requirements:
        'POSIXサーバーでは`AllowStreamLocalForwarding`、Windowsサーバーでは`AllowTcpForwarding`が必要です。リモートホストには`vivi`のインストールが必要ですが、ディスプレイサーバーもオーディオデバイスも不要です。',
      tabs: { remote: 'リモート', nested: 'ネスト' },
      sample: {
        remote: 'SSH越しのメディア。Vividoの中のシェルから実行します。',
        onHost: '続いて、リモートホストで：',
        appears: '手元の画面に表示されます',
        separate:
          '任意：大容量メディア用に、ライフサイクルに紐づく2本目のトランスポートを開きます。\nメディアのバックプレッシャーが制御接続を遅くすることがなくなります。',
        nested: 'ネスト：メディアはマルチプレクサーの仮想プレゼンターを通ります。',
        renders: '外側のVividoウィンドウに描画されます',
        detach: 'デタッチ。サーバーがペイン、PTY、トラックを維持します。',
        rehydrated: 'メディアが復元されます',
      },
    },
    projects: {
      layout:
        'リポジトリは、単一のワークスペースではなく、関連するCargoプロジェクトの集まりです。Cargoコマンドは作業中のプロジェクトから実行してください。`vivido`と`vvmux`は、それぞれ独自のワークスペースを定義しています。',
      head: ['プロジェクト', '役割'],
      rows: {
        vivid_protocol: 'レンダラーに依存しないワイヤー実装：フレーミング、サイズに上限のあるCBOR、メッセージ、メディア本体、アンカー。',
        vivid_sdk: '全二重SDK。クレートのルートがプロデューサーで、プレゼンターのロールはフィーチャーフラグで有効にします。',
        vivid_gateway: '再オリジネーションのコア。セッションを終端し、新しいセッションを起点として開始するゲートウェイのためのものです。',
        vivido: 'ターミナルエミュレーター兼リファレンスプレゼンター。vvsshも含みます。',
        vivi: 'コマンドラインのメディアプロデューサー。',
        vvmux: 'ペインごとに仮想プレゼンターを持つ、デタッチ可能なマルチプレクサー。',
        vivida: 'Vividoペインを埋め込むワークスペースシェル。',
      },
    },
    spec: {
      contract:
        'Vivid Protocol 1.5は、公開された規範的な契約であり、内輪の裏技ではありません。レジストリの割り当ては追加のみです。未知の正規ネゴシエーションエントリはリレーを通ってもバイト単位でそのまま保たれ、認識はできても未対応のエントリは、黙って破棄されるのではなく拒否されます。',
      links: [
        '[Vivid Protocol 1.5仕様](spec) — 複数のパートからなる規範的な入口の文書です。',
        '[vivid_sdk](sdk) — 両方のロールに対応した、RustとPythonの全二重SDK。',
        '[vivid_protocol](protocol) — フレーミング、決定的でサイズに上限のあるCBOR、型付きの制御メッセージ、認証済みアンカー。',
      ],
      history: 'リポジトリ内の1.0と1.1の文書は、歴史的な資料または移行用の参考資料です。現行の実装契約は1.5だけだと考えてください。',
    },
  },

  config: {
    eyebrow: '設定',
    title: 'vivido.tomlを、セクションごとに。',
    lede: 'すべての値に組み込みのデフォルトがあるので、設定ファイルに書くのは変えたい項目だけで十分です。ライブリロードはデフォルトで有効。ファイルを保存すれば、ウィンドウに反映されます。',
    where: 'ファイルの場所',
    titles: {
      general: '[general]と[env]',
      scrolling: '[scrolling]と[cursor]',
      keyboard: '[keyboard]と[hints]',
    },
    tabs: { paths: 'パス', keyboard: 'キーボード', hints: 'ヒント' },
    head: ['キー', '意味'],
    environment:
      'Vividのメディア経路は、このファイルではなく環境変数で設定します。すべてのデフォルト値を書き出した注釈付きの完全な例が、リポジトリの[vivido/docs/vivido.toml](vividoToml)にあります。',
    starterTitle: '手始めにちょうどいい設定',
    general: {
      import: '追加でマージする設定ファイル。絶対パスまたはファイルからの相対パスで指定します。後のエントリが前のエントリを上書きします。ネストは5階層まで。デフォルトは[]。',
      working_directory: 'シェルの開始ディレクトリ。未設定の場合はVividoの作業ディレクトリを引き継ぎます。',
      live_config_reload: 'ファイルが変更されたら設定を自動的に再適用します。デフォルトはtrue。',
      ipc_socket: 'vivido msgのエンドポイントを提供します。デフォルトはtrue。--socketと--headlessを指定すると、この値にかかわらず有効になります。',
    },
    env: '`[env]`には、起動するプロセスへエクスポートする環境変数を書きます。たとえば`TERM = "vivido"`です。',
    window: {
      padding: 'グリッド周囲の余白（ピクセル単位、DPIに応じてスケール）。デフォルトは{ x = 0, y = 0 }。',
      dynamic_padding: '余ったスペースを追加の余白として均等に配分します。デフォルトはfalse。',
      decorations: 'Full、None、Transparent、Buttonlessのいずれか。デフォルトはFull。',
      opacity: '背景の不透明度（0.0〜1.0）。対応するコンポジターが必要です。デフォルトは1.0。',
      blur: '背景のぼかしを要求します。macOSとKDE Waylandに対応。デフォルトはfalse。',
      startup_mode: 'Windowed、Maximized、Fullscreen、SimpleFullscreenのいずれか。デフォルトはWindowed。',
      'title / dynamic_title': 'ウィンドウの初期タイトルと、アプリケーションによる変更を許可するかどうか。デフォルトは"Vivido"とtrue。',
      resize_increments: 'リサイズをセル単位にスナップします。デフォルトはfalse。',
      level: 'NormalまたはAlwaysOnTop。デフォルトはNormal。',
      option_as_alt: 'macOSのみ：OnlyLeft、OnlyRight、Both、Noneのいずれか。デフォルトはNone。',
      dimensions: 'セル単位の初期サイズ。columnsとlinesの両方が0以外のときだけ有効です。',
      class: 'Waylandのapp_idとウィンドウクラス。generalとinstanceのデフォルトはどちらも"Vivido"。',
    },
    windowExtra:
      '`decorations_theme_variant`は、サーバーサイドデコレーションのテーマを`"Light"`または`"Dark"`に固定します。未設定の場合はシステムに従います。`position`は起動時の位置を物理ピクセルで指定します。未設定の場合はウィンドウマネージャーに任せます。',
    font: {
      size: 'フォントサイズ（ポイント単位）。デフォルトは11.25。',
      ligatures: 'フォントが提供する合字を使って、隣り合うセルをシェーピングします。デフォルトはtrue。',
      offset: '各セルの周囲に追加する間隔。デフォルトは{ x = 0, y = 0 }。',
      glyph_offset: 'セル内でグリフをずらします。デフォルトは{ x = 0, y = 0 }。',
      'normal.family': '基本の書体。デフォルトはLinuxではmonospace、macOSではMenlo、WindowsではConsolas。',
      'bold / italic / bold_italic': '副次的な書体。familyを省略するとfont.normal.familyにフォールバックします。',
    },
    colors: {
      scheme:
        'デフォルトの配色はbase16スタイルです。`[colors.primary]`で`foreground`と`background`を、`[colors.normal]`と`[colors.bright]`で16色のANSIカラーを設定します。`dim`を省略すると`normal`から導出されます。',
      options: [
        '`transparent_background_colors`は、背景色が明示されたセルにも`window.opacity`を適用します。デフォルトはfalse。',
        '`draw_bold_text_with_bright_colors`は、太字のテキストを明色パレットで描画します。デフォルトはfalse。',
        '`[colors.cursor]`と`[colors.selection]`には、特別な値`"CellForeground"`と`"CellBackground"`も指定できます。',
        '`[colors.search.matches]`、`[colors.search.focused_match]`、`[colors.hints.start]`、`[colors.hints.end]`、`[colors.footer_bar]`で、オーバーレイのスタイルを指定します。',
        '`[[colors.indexed_colors]]`で256色パレットを拡張します。インデックスは16〜255の範囲で指定してください。',
      ],
    },
    cursor: {
      'scrolling.history': '保持するスクロールバックの行数。最大100000。デフォルトは10000。',
      'scrolling.multiplier': 'ホイール1段階あたりのスクロール行数。デフォルトは3。',
      'cursor.style.shape': 'Block、Underline、Beamのいずれか。デフォルトはBlock。',
      'cursor.style.blinking': 'Never、Off、On、Alwaysのいずれか。デフォルトはOff。',
      'cursor.unfocused_hollow': 'ウィンドウがフォーカスを失ったとき、中抜きのカーソルを描画します。デフォルトはtrue。',
      'cursor.thickness': 'ビームまたは下線の太さ（セルに対する比率、0.0〜1.0）。デフォルトは0.15。',
      'cursor.blink_interval': '点滅の間隔（ミリ秒）。下限は10。デフォルトは750。',
      'cursor.blink_timeout': 'この秒数だけ操作がないと点滅を止めます。0なら点滅し続けます。デフォルトは5。',
    },
    terminal: {
      'terminal.osc52': 'OSC 52によるクリップボードアクセス：disabled、onlycopy、onlypaste、copypasteのいずれか。デフォルトはonlycopy。',
      'terminal.osc_notifications': 'OSC 9とOSC 99によるデスクトップ通知を許可します。デフォルトはtrue。',
      'terminal.shell': 'ログインシェルの代わりに起動するシェル。{ program, args }の形式で指定します。',
      'selection.save_to_clipboard': '選択範囲を自動的にシステムのクリップボードへコピーします。デフォルトはfalse。',
      'mouse.hide_when_typing': '入力中はポインターを隠します。デフォルトはfalse。',
      'file_drop.paste_remote_path':
        'リモートのvvreceiveが、ドロップされたファイルをvvssh越しにコピーし終えたら、確定したリモートパスを入力します。デフォルトはtrue。',
      'message_bar.warning_timeout': '警告が自動的に消えるまでの秒数。0なら表示し続けます。エラーは常に手動で閉じる必要があります。デフォルトは5。',
      'bell.duration / animation / color': 'ビジュアルベル。durationが0なら無効です。デフォルトのアニメーションはLinear、色は#ffffff。',
    },
    mouseBindings:
      '`[[mouse.bindings]]`に書いたカスタムのマウスバインディングは、デフォルトにマージされます。そのため`{ mouse = "Middle", action = "PasteSelection" }`と書くだけで、他を定義し直すことなく中クリックでの貼り付けを追加できます。',
    actions:
      'アクションには、`Copy`、`Paste`、`CopySelection`、`PasteSelection`、`ClearSelection`、フォントサイズ関連のアクション、`Scroll*`系、`SearchForward`、`SearchBackward`、`ToggleFullscreen`、`ToggleMaximized`、`SpawnNewInstance`、`CreateNewWindow`、`CreateNewTab`、`SelectNextTab`、`SelectPreviousTab`、`SelectTab1`〜`SelectTab9`、`SelectLastTab`、`ClearHistory`、`Quit`、`Hide`、`Minimize`、`ReceiveChar`、`None`があります。',
    noVi: 'Vividoにviモードのアクションはありません。これは不足ではなく意図的なものです。意図的な違いの一覧は[Vividoのページ](/vivido)をご覧ください。',
    debugIntro: '診断用の項目です。ほとんどの人は触る必要がありません。',
    debug: {
      log_level: 'Off、Error、Warn、Info、Debug、Traceのいずれか。デフォルトはWarn。',
      print_events: 'ウィンドウイベントと入力イベントをログに出力します。デフォルトはfalse。',
      persistent_logging: '終了後もログファイルを残します。デフォルトはfalse。',
      render_timer: 'フレームごとの描画時間をオーバーレイ表示します。デフォルトはfalse。',
      highlight_damage: '再描画された領域に色を付けます。デフォルトはfalse。',
    },
    sample: {
      starter: '変えたい項目だけを書きます。書かなかったキーはデフォルトのままです。',
      bindings:
        'バインディングはデフォルトにマージされます。\n  key  : "a"、名前付きキー（"F5"、"Home"、"Enter"）、またはスキャンコード\n  mods : Control、Shift、Alt/Option、Super/Commandを | で連結、または "None"\n  mode : AppCursor | AppKeypad | Alt | Search。先頭に ~ を付けるとOFFを要求\n  そのうえで action、chars、command のいずれか1つだけを指定',
      neutralise: '文字をアプリに返すことで、デフォルトのバインディングを無効化します。',
      alphabet: 'ラベルに使うキー。幅1の文字が2つ以上必要です。',
      defaultHint: 'デフォルトのヒント：URLとOSC 8ハイパーリンクをシステムのオープナーで開きます。',
      macOpen: 'macOSでは "open"',
      copyWord: '.rsで終わる単語を、Control+Shift+Rでコピーします。',
    },
  },

  tutorials: {
    eyebrow: 'チュートリアル',
    title: '初日にやっておきたい7つのこと。',
    lede: 'どれも短く、それだけで完結していて、最後には何かが目に見えて動きます。Vividoが初めてなら、上から順に進めてください。',
    sections: {
      firstImage: '最初の画像',
      video: '動画と音声',
      vvssh: 'SSH越しのメディア',
      vvmux: 'デタッチできるセッション',
      agent: 'エージェントから操作する',
      ci: 'CIの中のターミナル',
      producer: '自分のプロデューサーを書く',
    },
    firstImage: {
      run: 'Vividoを開き、好きな画像ファイルを指定してViviを実行します。チュートリアルはこれで全部です。セットアップの手順はありません。',
      formats:
        'PNGとJPEGは元のバイト列のまま送られ、その他のフォーマットは先にRGBAへ変換されます。`-z`で表示倍率を変えられ、複数のファイルを渡せば順に表示できます：`vivi -z 1.5 a.webp b.png`。',
      noEndpoint:
        'Viviが`VIVID_ENDPOINT_CONTROL`が設定されていないと報告した場合、そこはVividoのシェルではありません。このメッセージはバグではなく意図した動作です。プレゼンターなしでファイルを調べるには`--dry-run`を使ってください。',
    },
    video: {
      clock:
        '動画と音声トラックはクロックを共有しているので、ずれていくことなく、短いプリバッファのあとで同時に始まります。動画をスクロールして画面外に出すと再生は一時停止し、戻すと再開します。可視性はヒューリスティックではなく、プロトコルの一部です。',
      canonical:
        'Opus、Vorbis、FLACは、コンテナに依存しない正規化された初期化を使います。同じファイルが、ローカルでも、SSH越しでも、vvmuxの中にネストしていても、まったく同じように振る舞うのはそのためです。',
    },
    vvssh: {
      start:
        'Vividoの**中**のシェルから始め、`ssh`の代わりに`vvssh`を使います。リモートホストには`vivi`をインストールしてください。ディスプレイサーバーもオーディオデバイスも必要ありません。',
      arrives: '映像は手元のノートPCに表示されます。何もコピーされておらず、X転送も使っていません。',
      heavyTitle: 'メディアが重いとき',
      heavy:
        '`--separate-media-transport`を付けると、大容量メディア用に、ライフサイクルに紐づく2本目のSSHトランスポートを開きます。制御トラフィックは専用の接続を保てるので、大きな動画がキー入力を遅くすることはありません。デフォルトは、単一のプライベートなトランスポートのままです。',
      prerequisitesTitle: '前提条件',
      prerequisites: [
        'POSIXサーバーでは`AllowStreamLocalForwarding`を有効にする必要があります。',
        'Windowsサーバーでは`AllowTcpForwarding`を有効にする必要があります。',
        'ループバック以外のTCPエンドポイントは、設計上拒否されます。',
      ],
    },
    vvmux: {
      start: '名前付きセッションを開始し、少し作業して、席を離れます。サーバーが、ペイン、PTY、スクロールバック、メディアトラックを維持し続けます。',
      keys:
        '`Ctrl+b %`と`Ctrl+b "`で分割し、`Ctrl+b`と矢印キーでフォーカスを移動し、`Ctrl+b z`でペインをズームします。再アタッチ時、メディアは最初から再生し直されるのではなく、安定スナップショットから復元されます。',
      token:
        'デタッチすると外側のウィンドウトークンが解放されるので、バックグラウンドのデーモンが、自分からは見えないウィンドウに対する権限を持つことはありません。セッションを1週間動かしたままにする前に、知っておくべき挙動はこれひとつです。',
    },
    agent: {
      facts:
        '`vivido msg`の要点は、エージェントが事実を待てることです。以下の各ステップは、既知の状態に対して成功するか、はっきりと失敗するかのどちらかです。sleepして祈るステップはありません。',
      habits:
        'これを確実にする習慣が2つあります。1つ目は、ウィンドウIDを決めつけずに取得すること。IDは小さく単調増加しますが、中身に意味はありません。2つ目は、`typing`と`key Enter`を分けること。`typing`はあえて改行を付加しないからです。',
      report:
        '`typing`、`key`、`paste`は`--report`を受け付け、解決されたウィンドウ、バイト数、書き込みの完了を表示します。また、アプリケーションによる**消費**は観測していないことも明記します。PTYに書き込むことと、プログラムがそれを読んだことは同じではありません。',
      sample: {
        find: 'ウィンドウを探します。IDは予測せず、必ず取得します。',
        type: 'コマンドの入力とEnterは、明示的に2つのステップに分けます。',
        wait: 'sleepではなく、事実を待ちます。',
        settle: '画面が落ち着くのを待ってから、内容を見ます。',
        evidence: '証拠を残します。',
      },
    },
    ci: {
      headless:
        'ヘッドレスモードは、ウィンドウもコンポジターもなしで完全なランタイムを実行します。これにより、ターミナルはテスト可能なコンポーネントになります。スクリーンショットは再構成したものではなく、実際に描画されたフレームです。',
      size: 'スクリーンショットを撮るときは`--headless-size 1280x720px`を使ってください。フォントメトリクスからピクセル数を導出するのではなく、描画サーフェスを直接指定できます。',
      sample: {
        session: 'ジョブ全体でヘッドレスセッションを1つ使います。--foregroundはセッションの\n寿命をこのプロセスに結び付けます。CIにはこれが適しています。',
        frame: '実際に描画されたフレーム。テストが生成したインラインメディアも含まれます。',
      },
    },
    producer: {
      entry:
        'プログラムがピクセルを生成できるなら、それをターミナルに表示できます。`PaneSession`は、実用になる最小の入口です。保持するプレゼンテーションは最大1つで、前のものは自動的に消去されます。',
      deeper:
        '動画、音声、あるいは長く存続するものを扱うなら、ひとつ下の階層に降りて、セッション、サーフェス、トラック、トラックチャネルを使います。[SDKのREADME](sdk)が、接続確立時のリトライ、認証付きの再開、フロー制御の契約を説明しています。ワイヤーフォーマットを自分で実装する場合は、[1.5仕様](spec)が規範となります。',
      sample: {
        rust: 'Vividoがこのシェルにエクスポートした環境変数から、\nVIVID_ENDPOINT_CONTROLとルートシークレットを読み取ります。',
        python: 'PaneSessionが保持するプレゼンテーションは最大1つ。新しい画像を\n表示すると、前のノードとサーフェスは自動的に消去されます。',
      },
    },
  },
}

export default ja
