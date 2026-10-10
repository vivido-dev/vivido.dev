import type { Messages } from './context'

const zhHant: Messages = {
  nav: {
    products: '產品',
    learn: '學習',
    docs: '文件',
    tutorials: '教學',
    config: '設定',
    protocol: '協定',
    plugins: '外掛',
    install: '安裝',
    blurbs: {
      vivido: 'GPU 終端機模擬器',
      vivida: '為你和你的代理程式打造的工作區',
      vvmux: '可卸離、懂媒體的終端機多工器',
      vivi: '在命令列播放媒體',
      vvrd: '在終端機裡閱讀 PDF 與各種文件',
      plugins: 'vvmux 外掛市集',
    },
    github: 'Vivido 的 GitHub',
    x: 'Vivido 的 X 帳號',
    toggle: '切換導覽選單',
    language: '語言',
  },

  footer: {
    tagline: '以 Vivid Protocol 1.5 打造的終端機套件。圖片、影片與音訊走經過驗證的旁路通道——PTY 依然只是 PTY。',
    project: '專案',
    vvmuxPlugins: 'vvmux 外掛',
    documentation: '文件',
    configuration: '設定',
    spec: 'Vivid 1.5 規格',
    sdk: 'Vivid SDK(Rust、Python、TS)',
    crate: 'crates.io 上的 vivido',
    releases: '版本發布',
    issues: '問題回報',
    licence: 'Apache-2.0 授權條款',
    free: '免費且開放原始碼，採用 Apache-2.0 授權。',
  },

  common: {
    suiteBack: 'Vivido 套件',
    viewOnGithub: '在 GitHub 上檢視',
    copied: '已複製',
    copyCommand: '將「{command}」複製到剪貼簿',
    chooseLanguage: '選擇程式語言',
    onThisPage: '本頁內容',
    firstSteps: '入門第一步',
    usage: '用法',
    whatItDoes: '功能一覽',
    video: '影片',
    audio: '音訊',
    images: '圖片',
  },

  meta: {
    fallbackTitle: 'Vivido',
    '/': {
      title: 'Vivido — 能播放影片的 GPU 終端機',
      description:
        '一款快速、跨平台的 GPU 終端機模擬器，圖片、影片與音訊都能內嵌顯示。Vivid Protocol 1.5 讓媒體走經過驗證的旁路通道，PTY 依然只承載一般的終端機 I/O。',
    },
    '/vivido': {
      title: 'Vivido — 支援內嵌影片與音訊的 GPU 終端機模擬器',
      description:
        '以 Vello 與 wgpu 為基礎，執行於 Metal、DirectX 12 與 Vulkan 之上。內嵌圖片、H.264/HEVC/VP9/AV1 影片、七種音訊編解碼器、精確 PTS 播放、vvssh 媒體轉發，以及透過 vivido msg 實現的確定性自動化。',
    },
    '/vivida': {
      title: 'Vivida — 為你和你的代理程式打造的終端機工作區',
      description:
        '每個專案一個工作區，每項任務一個窗格，並讓你的代理程式擁有與你並肩觀察和操作的工具。原生 Vivido 窗格，組織成工作區、分頁與分割版面。',
    },
    '/vvmux': {
      title: 'vvmux — 可卸離、懂媒體的終端機多工器',
      description:
        '為 Vivido 打造的 tmux 式工作階段。每個窗格都有一個虛擬 Vivid 呈現端，卸離再重新連接後媒體依然存活，而常駐程式永遠碰不到你的視窗權杖。',
    },
    '/vvmux/plugins': {
      title: 'vvmux 外掛 — 外掛市集',
      description: '由資訊清單驅動的代理程式提供者、整合、窗格與工作流程，專為 vvmux 設計。安裝前會先顯示所需權限。',
    },
    '/vivi': {
      title: 'Vivi — 在終端機裡播放圖片、影片與音訊',
      description:
        'Vivid Protocol 1.5 的命令列生產端。vivi photo.png、vivi clip.mkv、vivi song.mp3——在本機、透過 vvmux 或經由 vvssh 都可以。',
    },
    '/vvrd': {
      title: 'vvrd — 在終端機裡閱讀 PDF、EPUB 與 Office 文件',
      description:
        '為 Vivido 打造的全螢幕文件閱讀器。透過 MuPDF 閱讀 PDF 與 EPUB，將 Markdown 與 Mermaid 排版成頁，並藉由 LibreOffice 轉換 PPTX/DOCX/ODP/ODT——全部在 Vivid 1.5 旁路通道上渲染。',
    },
    '/docs': {
      title: '文件 — Vivido 與 Vivid 技術堆疊',
      description: '快速上手、保持 PTY 乾淨的架構、vivido msg 自動化介面、無頭工作階段，以及 Vivid Protocol 1.5 規格。',
    },
    '/config': {
      title: '設定 — vivido.toml 參考',
      description:
        'vivido.toml 的每個區段及其內建預設值：window、font、colors、scrolling、cursor、terminal、hints、keyboard 與 debug。',
    },
    '/tutorials': {
      title: '教學 — Vivido、vvssh、vvmux 與代理程式自動化',
      description:
        '逐步完成：第一張內嵌圖片、用 vvssh 透過 SSH 傳輸媒體、vvmux 中可卸離的媒體工作階段，以及讓代理程式操控終端機。',
    },
  },

  platform: {
    downloadMac: '下載 macOS 版',
    macInstaller: '.pkg 安裝套件',
    downloadWindows: '下載 Windows 版',
    windowsInstaller: '.exe 安裝程式',
    windowsLink: 'Windows 安裝程式',
    choose: '選擇你的平台',
    selected: '（已選取）',
    macos: {
      headline: '已簽署的安裝套件',
      note: '使用 Metal 渲染。安裝套件經過 Developer ID 簽署與公證。',
      download: '下載 .pkg',
    },
    windows: {
      headline: '已簽署的套件安裝程式',
      note: '一個安裝程式就能把 Vivido、Vivida、vvmux、vivi、vvrd 與 vvssh 加入你的 PATH。使用 DirectX 12 渲染。',
      download: '下載 .exe',
    },
    linux: {
      headline: '從 crates.io 建置',
      note: '刻意只支援 Wayland，使用 Vulkan 渲染。需要 Rust 1.95+，以及你所用發行版的 FFmpeg 與音訊開發套件。',
    },
    readFirst: '想先了解一下？[安裝指南](installGuide)列出了各平台的建置相依套件。',
  },

  suite: {
    status: { stable: '穩定', new: '新', preview: '預覽' },
    groups: {
      terminal: { label: '終端機', blurb: '你工作的地方，以及安排它們的工具。' },
      producer: { label: '生產端', blurb: '把畫面和聲音送上螢幕的程式。' },
      remote: { label: '遠端與傳輸', blurb: '在別人的機器上也有相同的體驗。' },
    },
    tools: {
      vivido: 'GPU 終端機模擬器，也是 Vivid 的參考呈現端。支援 Metal、DirectX 12、Vulkan。',
      vivida: '由原生 Vivido 窗格組成的工作區、分頁與分割版面——你的專案與代理程式的家。',
      vvmux: '可卸離的多工器。卸離再重新連接後媒體依然存活，換一台機器也行。',
      vvbox: '一個可以對話的終端機外殼。分頁與分割中的窗格，由聊天面板驅動。',
      vivi: '在命令列播放圖片、影片或音軌。體驗 Vivid 最快的方式。',
      vvrd: '在終端機裡全螢幕閱讀 PDF、EPUB、Markdown、Mermaid 與 Office 文件。',
      vvpaint: '不必離開終端機就能在圖片上繪畫與標註。鍵盤優先。',
      vvcam: '把已連接的攝影機畫面以 H.264 編碼串流到終端機。透過 SSH 也能用。',
      vvland: '在窗格裡執行一個隔離的 Wayland 應用程式，或一整套 Weston、Sway、Hyprland 桌面。',
      vvdoom: 'Doom，畫面和聲音走同一套媒體堆疊。因為總有人會問。',
      vvssh: '能承載媒體的 SSH。遠端的圖片與影片會出現在你本機的螢幕上。',
      vrowser: '一個刻意保持精簡的 CEF 瀏覽器，直接渲染到終端機裡。沒有分頁，沒有網址列。',
    },
  },

  diagram: {
    label:
      '生產端透過 PTY 通道把一般文字傳送給 Vivido，而圖片、影片與音訊走一條獨立的、經過驗證的 Vivid 旁路通道，因此媒體通道即使阻塞也不會卡住終端機 I/O。',
    producer: '生產端',
    ownCode: '你自己的程式碼',
    presenter: '呈現端',
    pty: '一般終端機 I/O——文字、按鍵、尺寸變更',
    vivid: '經過驗證的旁路通道——圖片、影片、音訊',
    flow: '依軌道進行流量控制：緩慢或格式錯誤的來源無法拖住輸入、渲染、音訊或其他軌道。',
    caption: '媒體位元組永遠不會經過 PTY，只有一個有界的、經過驗證的錨點標記會經過。',
  },

  home: {
    heroTitle: '能播放影片的\n==GPU 終端機。==',
    heroLede:
      'Vivido 是一款快速、跨平台的終端機模擬器，圖片、影片與音訊直接在視窗裡渲染。媒體走經過驗證的旁路通道，因此無論是在本機、透過 SSH 還是經由多工器，你的 PTY 都只承載一般的終端機 I/O。',
    otherInstall: '其他安裝方式',
    heroAlt: 'Vivida 視窗，其中的 Vivido 窗格正在內嵌播放媒體',
    watch: '在 YouTube 上觀看實際效果',
    proof: {
      eyebrow: '六十秒見真章',
      title: '三道指令，無需設定。',
      lede: '安裝 Vivido，開啟它，然後執行下面任何一道指令。沒有設定步驟，沒有跳脫序列探測，也沒有什麼需要啟用。',
      captions: {
        'vivi photo.jpg': '一張圖片，以完整解析度內嵌顯示。',
        'vivi clip.mkv': 'H.264 影片連同同步的音訊，在終端機網格中播放。',
        'vvssh user@host': '然後在遠端執行 vivi，畫面會出現在這裡。',
      },
    },
    pty: {
      eyebrow: '技術上的切入點',
      title: '你的 PTY 保持乾淨。',
      lede: '其他能顯示圖片的終端機，都是把圖片編碼成跳脫序列塞進 PTY。Vivid 不這麼做。終端機文字照舊走它一直走的路，而媒體擁有自己的通道——經過驗證，並具備流量控制。',
    },
    caps: {
      eyebrow: '你會得到什麼',
      title: '為不滿足於只讀文字的人而生。',
      lede: '在終端機必須快的地方夠快，在終端機從未涉足的地方夠強。',
      media: {
        title: '真正的媒體',
        body: '不是由彩色字元格拼成的馬賽克。真正的解碼器、精確 PTS 播放、連動的影音時鐘，再加上依軌道的流量控制——某一路串流卡住，也只是它自己的事。',
      },
      gpu: {
        title: '處處皆由 GPU 渲染',
        body: 'Vello 與 wgpu 在各平台的原生後端上繪製每一個影格，並承襲了 Alacritty 終端機核心的吞吐能力。',
      },
      ssh: {
        title: '透過 SSH 傳輸媒體',
        body: '`vvssh` 會把你的 Vivid 端點轉發到遠端 shell 中。在伺服器上執行 `vivi`，畫面就出現在你的筆電上。不需要 X 轉發，也不用複製檔案。',
        note: '根密鑰透過受保護的 stdin 通道傳入一個僅擁有者可讀的檔案，絕不會出現在 SSH 或遠端 shell 的引數裡。',
      },
      automation: {
        title: '代理程式可以信賴的自動化',
        body: '`vivido msg` 是一個確定性的 IPC 介面，而不是螢幕擷取器。代理程式與 CI 等待的是事實——單調遞增的螢幕序號、穩定下來的螢幕、已呈現的影格——而不是 sleep 之後聽天由命。',
        commands: {
          'wait text': '阻塞，直到網格中出現指定文字',
          'wait screen-stable': '阻塞，直到輸出穩定下來',
          'get-grid': '以 JSON 傳回每個字元格、樣式與超連結',
          screenshot: '真正呈現出來的那個影格，PNG 格式',
        },
      },
      headless: {
        title: '具名的無頭工作階段',
        body: '完整的執行環境——終端機核心、Vivid 呈現端與 Vello 渲染器——不需要視窗，也不需要合成器。在視窗中能觀察到的一切，在這裡同樣能觀察到，包括真實渲染的截圖。支援 Linux、macOS 與 Windows。',
      },
      wayland: {
        title: '只支援 Wayland，刻意為之',
        body: '沒有 X11，沒有 Xlib，沒有 GLX。Vivido 也不提供 vi 模式與 vi 風格的游標操作，滑鼠選取只保留單次拖曳。介面更少，行為更清楚。',
        note: '這些都是有文件記載的刻意取捨，而非缺漏——Vivido 頁面上列出了全部差異。',
      },
    },
    suite: {
      eyebrow: '一個協定，一整套工具',
      title: '全都說 Vivid 1.5。',
      lede: '這裡的每一個都是獨立的程式，各自把一件事做好。它們之所以能互通，靠的是共同的線路格式，而不是共同的程式碼庫——這也是你可以自己寫一個的原因。',
    },
    vivida: {
      eyebrow: '認識 Vivida',
      title: '你的專案，你的代理程式，\n同在一個視窗。',
      body: '每個專案一個工作區，每項任務一個窗格，並讓你的代理程式擁有與你並肩觀察和操作的工具。Vivida 把原生 Vivido 窗格組織成工作區、分頁與分割版面——於是代理程式可以在你正看著的同一個視窗裡讀取窗格、執行指令，並為結果截圖。',
      explore: '了解 Vivida',
      detach: '或者用 vvmux 卸離工作階段',
    },
    own: {
      eyebrow: '自己動手寫',
      title: 'Vivid 是一份規格，不是私房把戲。',
      lede: '協定公開發布並帶有版本號，還提供同時支援兩種角色的全雙工 SDK，有 Rust 與 Python 兩種語言。只要你能產生像素或音訊，就能把它們放進終端機。',
      points: [
        ['一份規範性的規格', '訊框格式、有界 CBOR、具型別的控制訊息、媒體驗證，以及經過驗證的文字錨點——全部白紙黑字寫明。'],
        ['一個 SDK，兩種角色', '可以當生產端，也可以終結一個工作階段，自己擔任呈現端。'],
        [
          '誠實的協商',
          '清楚一致的具名設定檔。未知的註冊表項目經過中繼時逐位元組保留；已辨識但不支援的項目會被明確拒絕，而不是被悄悄丟棄。',
        ],
      ],
      readSpec: '閱讀 1.5 規格',
    },
    samples: {
      rust: '探索 VIVID_ENDPOINT_CONTROL，並使用 Vivido 匯出到\n目前 shell 的根密鑰完成驗證。',
      python: '使用繼承而來的 Vivid 探索環境變數建立連線。',
      shell: '一個完整的 Vivido 執行環境，沒有視窗，透過 IPC 操控。',
    },
    install: {
      eyebrow: '開始使用',
      title: '安裝整個套件。',
      lede: 'Vivido 內附 vvssh。在 Windows 與 macOS 上，已簽署的安裝程式還會一併裝好 Vivida、vvmux、vivi 與 vvrd。',
      body: '所有元件皆免費，並採用 Apache-2.0 授權。如果你比較想從原始碼建置，儲存庫是一組 Cargo 專案——每一個都可以單獨建置。',
      browse: '瀏覽原始碼',
    },
    closing: {
      title: '終端機只有文字，\n==已經五十年了。==',
      body: '看得見，聽得到，而且不必離開你的 shell。',
      fast: '它為什麼這麼快',
    },
  },

  vivido: {
    eyebrow: 'Vivido · GPU 終端機模擬器',
    title: '一個能渲染==畫面與聲音==的終端機。',
    lede: 'Vivido 是一款快速、跨平台的 GPU 終端機模擬器，也是 Vivid Protocol 1.5 的參考呈現端。它負責驗證生產端、解碼並渲染圖片與影片、播放與之連動的音訊，並管理場景中的位置與可見性——而 PTY 始終只承載一般的終端機 I/O。',
    configReference: '設定參考',
    features: [
      '透過 Vello 與 wgpu 進行 GPU 渲染——macOS 上用 Metal，Windows 上用 DirectX 12，Linux 上用 Vulkan',
      'Vivid Protocol 1.5：內嵌圖片、H.264/HEVC/VP9/AV1 影片，以及七種音訊編解碼器',
      '精確 PTS 播放，影音時鐘連動，帶緩衝的啟動',
      '經過驗證的媒體錨點，標記可抵禦重放',
      '用 vvssh 安全地進行遠端 Vivid 轉發，可選用獨立的媒體傳輸通道',
      '透過 vivido msg 實現確定性自動化，另有具名的無頭工作階段',
      '依來源隔離的背壓——緩慢的媒體來源永遠不會阻塞終端機 I/O',
    ],
    deliberateHeading: '刻意的差異',
    deliberate: [
      'Linux 上只支援 Wayland。沒有 X11，沒有 Xlib，沒有 GLX。',
      '沒有 vi 模式、vi 搜尋或 vi 游標操作。',
      '簡化的滑鼠選取——只支援拖曳。',
      '媒體位元組永遠不會經過 PTY，只有一個有界的、經過驗證的錨點標記會經過。',
    ],
    deliberateNote: '這些是選擇，而不是缺漏。每一項都去掉了一類 Vivido 原本得永遠背負的相容性包袱。',
    speed: {
      eyebrow: '為什麼一直這麼快',
      title: '速度不是事後再加的功能。',
      lede: '三個彼此獨立的決定，讓支援媒體的終端機和純文字終端機一樣反應靈敏。',
      points: [
        ['終端機核心', '承襲自 Alacritty，因此吞吐量與正確性都從一個久經驗證的基礎出發。'],
        ['渲染器', 'Vello 在 GPU 上完成向量與字形的運算；wgpu 則對應平台提供的任何後端。'],
        ['隔離', '媒體的解碼與播放以軌道為單位。過載只會影響造成它的那條軌道。'],
      ],
    },
    install: {
      eyebrow: '安裝',
      title: '一個 crate，裝好終端機與 vvssh。',
      lede: '需要 Rust 1.95 或更新版本，以及你所用平台的 FFmpeg 與音訊開發套件。macOS 與 Windows 的已簽署安裝程式在版本發布頁面上。',
      installers: '已簽署的安裝程式',
    },
    next: {
      title: '接下來去哪裡',
      config: { label: 'vivido.toml 參考', blurb: '每個區段及其內建預設值。' },
      docs: { label: '自動化介面', blurb: 'vivido msg 能觀察與操控什麼。' },
      vvmux: { label: 'vvmux', blurb: '卸離工作階段，保留媒體。' },
      vivi: { label: 'Vivi', blurb: '把媒體放上螢幕最快的方式。' },
    },
  },

  vivida: {
    eyebrow: 'Vivida · 終端機工作區',
    title: '你和==你的代理程式==共同的家。',
    lede: '把專案、終端機與 AI 代理程式帶進同一個視窗。Vivida 把工作區、分頁與分割窗格，和 Vivido 能渲染的一切結合在一起——還提供了代理程式所需的自動化能力，讓它在你正看著的窗格裡工作，而不是躲在某個看不見的沙盒裡。',
    explore: '探索工作區',
    place: {
      eyebrow: '少折騰視窗，多做點事',
      title: '一切各就其位。',
      features: [
        ['每個專案都有自己的位置', '把工作歸入具名的工作區。從側邊欄在專案之間切換，分頁與分割讓每項任務都近在手邊。'],
        ['不只是一面文字牆', '以 Vivido 為基礎，你的窗格可以在終端機輸出旁邊顯示圖片、播放影片與音訊。讓預覽緊鄰著工作。'],
        ['有眼有手的代理程式', '內建的自動化讓代理程式可以檢查窗格、截圖、輸入文字、按鍵與使用滑鼠，以核對自己的工作成果。'],
        ['給你留出進入狀態的空間', '用鍵盤就能開啟分頁、分割窗格、安排工作區。GPU 渲染讓一切保持流暢、清晰。'],
      ],
    },
    agents: {
      eyebrow: '觀察。行動。驗證。',
      title: '與你的代理程式並肩工作。',
      body: '代理程式可以找到正確的窗格、檢查輸出、調整分頁與分割，並透過截圖驗證自己的工作。你們共用同一個工作區，你可以即時跟進——這也表示你隨時可以中途接手。',
      guide: '閱讀自動化指南',
    },
    keys: {
      eyebrow: '手不離鍵盤',
      title: '按一下鍵，騰出空間。',
      lede: 'Mod 在 macOS 上是 Cmd，在其他平台上是 Ctrl。分頁列裡的齒輪圖示可以查看完整清單。',
      meetVivido: '認識 Vivido——裡面的那個終端機',
      shortcuts: {
        'Mod T': '新增分頁',
        'Mod D': '左右分割',
        'Mod Shift D': '上下分割',
        'Mod Shift N': '新增工作區',
        'Mod Shift B': '循環切換側邊欄大小',
        'Mod 1–9': '切換工作區',
      },
    },
  },

  vvmux: {
    eyebrow: 'vvmux · 可卸離的多工器',
    title: '卸離工作階段，\n==留住媒體。==',
    lede: 'vvmux 用起來像 tmux，同時懂 Vivid。背景伺服器擁有窗格、PTY、版面配置與回捲緩衝區；前景用戶端只把目前可見的媒體橋接到所連接的 Vivido 視窗。卸離時，你的視窗權杖絕不會交給常駐程式。',
    browsePlugins: '瀏覽外掛',
    features: [
      '由常駐伺服器支撐的可卸離具名工作階段',
      '分頁、平鋪與浮動窗格、縮放、複製模式，以及滑鼠調整大小',
      '每個窗格一個虛擬 Vivid 呈現端——卸離再重新連接後媒體依然存活',
      '可感知片段的窗格媒體遮擋，以及依據穩定快照的狀態協調',
      '透過 vvmux msg 以腳本自動操控窗格',
      '外掛系統，附帶代理程式導覽器，可回報閒置、工作中或受阻狀態',
    ],
    keysHeading: '預設按鍵',
    keysNote: '前置鍵是 Ctrl+b，和你預期的一樣。',
    keys: {
      'Ctrl+b %': '左右分割',
      'Ctrl+b "': '上下分割',
      'Ctrl+b ←→↑↓': '在窗格之間移動焦點',
      'Ctrl+b z': '切換目前窗格的縮放',
      'Ctrl+b d': '卸離，所有程式繼續執行',
      'Ctrl+b c / n / p': '新增分頁、下一個分頁、上一個分頁',
      'Ctrl+b [': '複製模式',
    },
    security: {
      eyebrow: '安全模型',
      title: '活得比你的視窗還久的常駐程式，不該握著視窗的鑰匙。',
      lede: '這正是懂媒體的多工器與純文字多工器的不同之處。在把長時間執行的工作階段託付給它之前，值得先弄清楚這一點。',
      points: [
        ['伺服器擁有狀態', '窗格、PTY、版面配置與回捲緩衝區都存在於一個背景行程中，卸離後依然存活。'],
        ['用戶端擁有權限', '只有已連接的前景用戶端持有外層 Vivido 視窗的權杖。一旦卸離，權杖隨即釋出。'],
        ['橋接很窄', '可見的媒體透過依來源限定的寫入端中繼，並依據穩定快照進行協調。'],
      ],
    },
  },

  plugins: {
    eyebrow: '外掛市集',
    title: 'vvmux 外掛',
    lede: '探索由資訊清單驅動的代理程式提供者、整合、窗格與工作流程。vvmux 會在安裝前顯示每個套件所需的權限，而且不會執行來自市集的程式碼。',
    search: '搜尋外掛',
    filter: '依外掛類型篩選',
    allTypes: '所有類型',
    empty: '沒有符合該篩選條件的外掛。',
    publish: '發布一個公開的 GitHub 儲存庫，在根目錄放置 `vvmux-plugin.toml`，並加上 `vvmux-plugin` 主題（topic），即可申請收錄到索引中。',
    firstParty: '官方',
    permissions: '權限：',
    none: '無',
    copy: '複製',
    viewSource: '檢視原始碼',
  },

  vivi: {
    eyebrow: 'Vivi · Vivid 1.5 生產端',
    title: '從檔案到==你的終端機==，最短的一條路。',
    lede: 'Vivi 會檢查圖片以及任何 FFmpeg 支援的媒體，然後提交給 Vivid 呈現端。全雙工控制、流量控制、預先緩衝、可見性與關鍵影格復原都由它處理，你只需要輸入一個檔名。',
    usageTitle: '四種你真正會用到的方式。',
    usage: {
      'vivi photo.png': '一張圖片，內嵌在終端機網格中。',
      'vivi clip.mkv': '影片連同它的音軌，共用同一個時鐘。',
      'vivi song.mp3': '只有音訊——沒有視窗，沒有播放器。',
      'vivi -z 1.5 photo.webp clip.mp4': '一份播放清單，放大到 150%。',
    },
    featuresHeading: '它能處理什麼',
    features: [
      '任何圖片：PNG 與 JPEG 以原始位元組傳輸，其他格式一律轉換為 RGBA',
      '影片：H.264 與 HEVC Annex B、VP9、AV1，並帶有連動的音訊時鐘',
      '音訊：MP3、AAC、ALAC、Opus、Vorbis、FLAC、PCM 與 WAV',
      'Opus、Vorbis 與 FLAC 採用正規化的初始化——不存在容器造成的歧義',
      '可直接在 Vivido 中使用，也可在 vvmux 窗格內或透過 vvssh 遠端使用',
      '流量控制、隨可見性暫停與繼續、預先緩衝，以及關鍵影格復原',
    ],
    formatsHeading: '支援的格式',
    buildNote: 'Vivi 在建置時需要 FFmpeg 開發函式庫。在 macOS 上執行 `brew install ffmpeg pkg-config` 即可。',
  },

  vvrd: {
    eyebrow: 'vvrd · 文件閱讀器',
    title: '所有文件，==盡在你的終端機。==',
    lede: 'vvrd 是為 Vivido 打造的全螢幕文件閱讀器：PDF、EPUB、Markdown、Mermaid 與 Office 文件，經過排版成頁後以像素形式在 Vivid 旁路通道上渲染——絕不使用終端機跳脫序列。',
    usageTitle: '一份文件，一道指令。',
    usage: {
      'vvrd paper.pdf': '一份 PDF，在終端機裡全螢幕顯示。',
      'vvrd book.epub': '一本 EPUB，像印刷品一樣排版成頁。',
      'vvrd guide.md': '帶表格與程式碼的 Markdown，自動配合佈景主題。',
      'vvrd --page 12 paper.pdf': '直接跳到第十二頁。',
    },
    features: [
      '透過 MuPDF 支援 PDF 與 EPUB——搜尋、目錄、連結、縮放與平移、旋轉，以及匯出 PNG',
      '由內建的排版器渲染 Markdown：GFM 表格、工作清單、程式碼，以及本機或 data URI 圖片',
      'Mermaid 圖表，可以寫在 Markdown 的程式碼區塊裡，也可以單獨成檔，在頁面上置中顯示',
      'PPTX、DOCX、ODP 與 ODT 由無頭 LibreOffice 轉換為 PDF，並依內容雜湊快取',
      '每份文件的閱讀位置儲存在平台的快取目錄中',
      '同一個執行檔，既可在本機使用，也可透過 vvssh 在遠端 shell 中使用',
    ],
    officeNote:
      'Office 文件轉換還需要 PATH 中有 LibreOffice（可用 `VVRD_SOFFICE` 指定其他路徑）。在 Windows 上，已簽署的 Vivido 套件安裝程式內附 `vvrd.exe`。',
    keysHeading: '按鍵',
    keys: {
      '← / → · Space': '上一頁 / 下一頁',
      '↑ / ↓': '捲動，到頁面邊界時翻頁',
      g: '跳到指定頁',
      '/ · n / N': '搜尋；下一個 / 上一個符合項目',
      't · M · f': '目錄、中繼資料、連結',
      e: '將目前頁面匯出為 PNG',
      'R / F5': '重新讀取並重新排版',
    },
    formatsHeading: '格式',
    formats: [
      ['固定版面', 'PDF · EPUB (MuPDF)'],
      ['標記語言', 'Markdown (GFM) · Mermaid'],
      ['Office', 'PPTX · DOCX · ODP · ODT——經由 LibreOffice'],
    ],
  },

  notFound: {
    title: '找不到頁面',
    body: '這個路徑不存在。它可能已經移走，也可能從未存在過。',
    home: '返回首頁',
    docs: '閱讀文件',
  },

  docs: {
    eyebrow: '文件',
    title: '把媒體放進終端機，所需的一切都在這裡。',
    lede: '一趟注重實作的技術堆疊導覽：安裝它，理解 PTY 為何保持乾淨，讓代理程式操控它，以及在完全沒有視窗的情況下執行它。更深入的參考資料與程式碼放在一起。',
    sections: {
      quickstart: '快速上手',
      model: 'Vivid 的運作原理',
      automation: '自動化',
      headless: '無頭工作階段',
      remote: '遠端與巢狀',
      projects: '各個專案',
      spec: '協定與 SDK',
    },
    quickstart: {
      packages:
        'Vivido 是一個 Cargo 套件，會同時安裝終端機與 `vvssh`。Vivi 是另一個獨立的套件，因為使用終端機並不需要媒體生產端。',
      discovery:
        'Vivido 會把 `VIVID_ENDPOINT_CONTROL` 和每個視窗各自的根密鑰匯出到它啟動的每一個 shell 中。生產端從環境變數中探索端點——不需要任何設定，也不用挑選連接埠。',
      installer:
        '在 macOS 與 Windows 上，建議使用[版本發布頁面](releases)上的已簽署安裝程式：在 Windows 上，它會安裝整個套件並將其加入你的 `PATH`。',
      sample: {
        install: '1. 安裝終端機（同時也會安裝 vvssh）。',
        check: '2. 開啟它，然後在新的 shell 中確認 Vivid 端點存在。',
        show: '3. 在螢幕上顯示點東西。',
      },
    },
    model: {
      roles:
        '**生產端**提交媒體。**呈現端**負責驗證、定位、渲染並播放它。Vivido 是參考呈現端；Vivi、vvcam、vvrd、vvland 以及你自己的程式碼都是生產端。',
      lanesTitle: '兩條通道，而不是一條',
      lanes:
        '一般的終端機 I/O 留在 PTY 上。圖片、編碼後的影片與音訊走經過驗證的旁路通道。媒體位元組永遠不會經過 PTY——只有一個有界的、經過驗證的錨點標記會經過，呈現端正是藉此得知某個表面屬於文字中的哪個位置。',
      surfacesTitle: '表面與軌道',
      surfaces: [
        '**工作階段（session）**負責設定檔協商與驗證。',
        '**表面（surface）**是穩定的語意、場景、原則與輸入身分。',
        '**軌道（track）**是歸某個表面所有的一份不可變的影片、音訊、點陣圖或編碼圖片設定。',
        '**軌道通道（track channel）**是一個世代的已驗證通道，帶有累計的位元組數與記錄數上限，以及有序的串流結束標記。',
      ],
      replace:
        '更換編解碼器或解析度並不會重建表面。你先準備好替換軌道，以原子方式啟用它的插槽，再銷毀舊軌道——因此畫質切換不會讓表面閃爍，也不會讓它失去在文字中的位置。',
      backpressureTitle: '背壓有明確的作用範圍',
      backpressure:
        '流量控制以軌道為單位。一個過載或格式錯誤的影片來源無法阻塞控制流量、輸入撤銷、音訊、渲染或其他無關的軌道。正是這項特性，讓內嵌影片在一個你還需要打字的終端機裡變得安全。',
    },
    automation: {
      surface:
        '`vivido msg` 是一個確定性的 IPC 介面，在 Linux 與 macOS 上以僅擁有者可存取的 Unix socket 為基礎，在 Windows 上則是僅擁有者可存取的具名管道。它存在的意義，是讓代理程式與 CI 可以等待事實，而不是 sleep 之後聽天由命。',
      counters:
        '每個視窗都帶有單調遞增的 `screen_sequence`、`frame_sequence` 與 `output_offset` 計數器；行程則帶有單調遞增的 `event_sequence`。等待條件都以它們為基準來表達，因此測試可以說「在這個畫面之後」，而不是「500 毫秒之後」。',
      head: ['指令', '作用'],
      rows: {
        'vivido msg capabilities': '列印這個端點支援的全部內容，包括由嵌入的宿主程式宣告的方法。',
        'vivido msg list-windows': '列舉視窗及其穩定的 ID。ID 要去探索，絕不要猜測。',
        'vivido msg inspect': '視窗幾何資訊、字元格尺寸、終端機模式與游標狀態。',
        'vivido msg get-text': '可見檢視區的內容，或包含回捲緩衝區在內的最新 N 個實體列。',
        'vivido msg get-grid': '以 JSON 傳回每個實體字元格的寬度、種類，以及去除重複後的樣式表。',
        'vivido msg typing': '照字面寫入 UTF-8 位元組，不做貼上處理，也不會附加 Enter。',
        'vivido msg key': '一個按鍵，可帶修飾鍵與重複次數，依目前的終端機模式編碼。',
        'vivido msg mouse': '以字元格或實體像素為單位移動、點按、拖曳、捲動，或沿一條有界路徑移動。',
        'vivido msg wait text': '阻塞，直到可見網格符合某個字串或正規表示式。',
        'vivido msg wait screen-stable': '阻塞，直到螢幕在一段靜止期內沒有語意上的變化。',
        'vivido msg wait output': '比對之後到來的 PTY 位元組，即使跨越讀取邊界也能比對。',
        'vivido msg screenshot': '最近一次呈現的影格，實體解析度，PNG 格式。',
        'vivido msg capture': '組合操作：啟用視窗、要求出現更新的影格、等待穩定，然後截圖。',
        'vivido msg vivid tracks': '檢查 Vivid 表面、軌道、通道世代與播放狀態。',
      },
      waits:
        '等待操作的預設逾時為 30 秒，並接受 `ms`、`s`、`m` 與 `h` 後綴。中斷連線會立即取消尚未完成的等待、帶標記的輸入以及訂閱。',
      tutorials: '[教學](/tutorials#agent)中完整示範了一個代理程式迴圈。',
    },
    headless: {
      runtime:
        '`vivido --headless` 會執行完整的執行環境——終端機核心、輸入編碼器、Vivid 呈現端與 Vello/wgpu 渲染器——不需要視窗，也不需要合成器。在有視窗的實例中能觀察到的一切，在這裡同樣能觀察到，包括真實渲染的截圖。',
      lifetime:
        '父行程會印出可供 shell 執行的 `VIVIDO_SOCKET` 與 `VIVIDO_SESSION` export 敘述，而且要等到常駐程式回報已真正開始提供服務後才結束——因此結束狀態為零就表示工作階段可用。無頭工作階段的存活時間比它的視窗長，只有 `vivido msg quit`、`vivido kill-session` 或訊號才能讓它停止。',
      head: ['選項', '意義'],
      rows: {
        '--headless': '不使用視窗與合成器執行，並提供 IPC 服務。支援 Linux、macOS 與 Windows。',
        '--session NAME': '為工作階段命名。預設為 vivido-<pid>。由 1–64 個 ASCII 字母、數字、句點、連字號或底線組成。',
        '--foreground': '不轉入背景；一直阻塞到關閉為止。適合在行程管理程式或容器進入點下使用。',
        '--headless-size SIZE': '初始尺寸，格式為 COLUMNSxLINES；或用 WIDTHxHEIGHTpx 直接指定渲染表面的大小。',
      },
    },
    remote: {
      plainSsh:
        '只用一般的 `ssh` 是不夠的：遠端 shell 無法連到你本機的端點，OpenSSH 也不會把探索用的環境變數帶過去。遇到這種情況，Vivi 會明確告訴你，而不是莫名其妙地失敗。',
      vvssh:
        '`vvssh` 就是解決這個問題的包裝程式。在 POSIX 伺服器上，它會建立遠端 Unix socket 監聽端；在 Windows 伺服器上，則改為反向轉發 loopback TCP。非 loopback 的 TCP 端點會被拒絕。根密鑰透過一條受保護的 stdin 設定連線，寫入一個僅擁有者可存取的暫存檔，登入 shell 讀取後隨即將其刪除——它絕不會出現在 SSH 或遠端 shell 的引數裡。',
      requirements:
        'POSIX 伺服器需要啟用 `AllowStreamLocalForwarding`；Windows 伺服器需要啟用 `AllowTcpForwarding`。遠端主機需要安裝 `vivi`，但不需要顯示伺服器，也不需要音訊裝置。',
      tabs: { remote: '遠端', nested: '巢狀' },
      sample: {
        remote: '透過 SSH 傳輸媒體。請在 Vivido 內的 shell 中執行。',
        onHost: '然後，在遠端主機上：',
        appears: '會出現在你本機的螢幕上',
        separate: '選用：為大流量媒體另開一條與生命週期綁定的傳輸通道，\n這樣媒體的背壓就不會拖慢控制連線。',
        nested: '巢狀：媒體會經過多工器的虛擬呈現端。',
        renders: '在外層的 Vivido 視窗中渲染',
        detach: '卸離。伺服器會讓窗格、PTY 與軌道繼續存活。',
        rehydrated: '媒體會被還原',
      },
    },
    projects: {
      layout:
        '儲存庫是一組彼此相關的 Cargo 專案，而不是單一的 Cargo workspace。請在你正在處理的專案目錄中執行 Cargo 指令；`vivido` 與 `vvmux` 各自定義了自己的 workspace。',
      head: ['專案', '職責'],
      rows: {
        vivid_protocol: '與渲染器無關的線路協定實作：訊框格式、有界 CBOR、訊息、媒體主體、錨點。',
        vivid_sdk: '全雙工 SDK。crate 根是生產端；呈現端角色需透過一個 feature 旗標啟用。',
        vivid_gateway: '重新發起（re-origination）核心，供那些終結一個工作階段並發起新工作階段的閘道使用。',
        vivido: '終端機模擬器兼參考呈現端，另含 vvssh。',
        vivi: '命令列媒體生產端。',
        vvmux: '可卸離的多工器，每個窗格帶一個虛擬呈現端。',
        vivida: '內嵌 Vivido 窗格的工作區外殼。',
      },
    },
    spec: {
      contract:
        'Vivid Protocol 1.5 是一份公開發布的規範性契約，而不是私房把戲。註冊表的指派只增不改。未知的正規協商項目經過中繼時逐位元組保留；已辨識但不支援的項目會被明確拒絕，而不是被悄悄丟棄。',
      links: [
        '[Vivid Protocol 1.5 規格](spec)——由多個部分組成的規範性入口文件。',
        '[vivid_sdk](sdk)——同時支援兩種角色的全雙工 Rust 與 Python SDK。',
        '[vivid_protocol](protocol)——訊框格式、確定性的有界 CBOR、具型別的控制訊息，以及經過驗證的錨點。',
      ],
      history: '儲存庫中的 1.0 與 1.1 文件屬於歷史資料或遷移參考。請把 1.5 視為目前唯一的實作契約。',
    },
  },

  config: {
    eyebrow: '設定',
    title: 'vivido.toml，逐節說明。',
    lede: '每個值都有內建預設值，所以設定檔裡只需要寫你想改的部分。即時重新載入預設開啟——儲存檔案，視窗隨即更新。',
    where: '設定檔的位置',
    titles: {
      general: '[general] 與 [env]',
      scrolling: '[scrolling] 與 [cursor]',
      keyboard: '[keyboard] 與 [hints]',
    },
    tabs: { paths: '路徑', keyboard: '鍵盤', hints: '提示' },
    head: ['鍵', '意義'],
    environment:
      'Vivid 媒體路徑是透過環境變數設定的，不在這個檔案裡。儲存庫中附有一份完整的註解範例，列出了所有預設值，位於 [vivido/docs/vivido.toml](vividoToml)。',
    starterTitle: '一個合理的起點',
    general: {
      import: '要合併進來的其他設定檔，可以是絕對路徑或相對於目前檔案的路徑。後面的項目覆寫前面的。最多巢狀 5 層。預設 []。',
      working_directory: 'shell 啟動時所在的目錄。不設定則繼承 Vivido 的工作目錄。',
      live_config_reload: '檔案變更時自動重新套用設定。預設 true。',
      ipc_socket: '提供 vivido msg 端點。預設 true；--socket 與 --headless 會無條件啟用它。',
    },
    env: '`[env]` 中存放要匯出給所啟動行程的環境變數，例如 `TERM = "vivido"`。',
    window: {
      padding: '網格四周的內距，單位為像素，依 DPI 縮放。預設 { x = 0, y = 0 }。',
      dynamic_padding: '把剩餘空間當作額外內距平均分配。預設 false。',
      decorations: 'Full、None、Transparent 或 Buttonless。預設 Full。',
      opacity: '背景不透明度，範圍 0.0 到 1.0。需要合成器支援。預設 1.0。',
      blur: '要求背景模糊。適用於 macOS 與 KDE Wayland。預設 false。',
      startup_mode: 'Windowed、Maximized、Fullscreen 或 SimpleFullscreen。預設 Windowed。',
      'title / dynamic_title': '視窗的初始標題，以及是否允許應用程式修改它。預設分別為 "Vivido" 與 true。',
      resize_increments: '調整大小時對齊到整數個字元格。預設 false。',
      level: 'Normal 或 AlwaysOnTop。預設 Normal。',
      option_as_alt: '僅限 macOS：OnlyLeft、OnlyRight、Both 或 None。預設 None。',
      dimensions: '初始大小，以字元格為單位。columns 與 lines 必須都不為零才會生效。',
      class: 'Wayland 的 app_id 與視窗類別。general 與 instance 預設皆為 "Vivido"。',
    },
    windowExtra:
      '`decorations_theme_variant` 可將伺服器端裝飾的佈景主題強制設為 `"Light"` 或 `"Dark"`；不設定則跟隨系統。`position` 以實體像素指定啟動位置；不設定則交由視窗管理員決定。',
    font: {
      size: '字型大小，單位為點。預設 11.25。',
      ligatures: '使用字型提供的連字來組合相鄰的字元格。預設 true。',
      offset: '在每個字元格四周額外增加的間距。預設 { x = 0, y = 0 }。',
      glyph_offset: '讓字形在字元格內位移。預設 { x = 0, y = 0 }。',
      'normal.family': '基本字型。Linux 上預設為 monospace，macOS 上為 Menlo，Windows 上為 Consolas。',
      'bold / italic / bold_italic': '次要字型。省略 family 時，改用 font.normal.family。',
    },
    colors: {
      scheme:
        '預設配色是 base16 風格。`[colors.primary]` 設定 `foreground` 與 `background`；`[colors.normal]` 與 `[colors.bright]` 設定十六種 ANSI 色彩，省略 `dim` 時會由 `normal` 推導而得。',
      options: [
        '`transparent_background_colors` 會把 `window.opacity` 同樣套用到明確設定了背景色的字元格上。預設 false。',
        '`draw_bold_text_with_bright_colors` 使用亮色調色盤渲染粗體文字。預設 false。',
        '`[colors.cursor]` 與 `[colors.selection]` 還接受特殊值 `"CellForeground"` 與 `"CellBackground"`。',
        '`[colors.search.matches]`、`[colors.search.focused_match]`、`[colors.hints.start]`、`[colors.hints.end]` 與 `[colors.footer_bar]` 用來設定各種覆蓋層的樣式。',
        '`[[colors.indexed_colors]]` 用來擴充 256 色調色盤；索引必須介於 16 到 255 之間。',
      ],
    },
    cursor: {
      'scrolling.history': '保留的回捲行數，最多 100000。預設 10000。',
      'scrolling.multiplier': '滾輪每捲一格所捲動的行數。預設 3。',
      'cursor.style.shape': 'Block、Underline 或 Beam。預設 Block。',
      'cursor.style.blinking': 'Never、Off、On 或 Always。預設 Off。',
      'cursor.unfocused_hollow': '視窗失去焦點時繪製空心游標。預設 true。',
      'cursor.thickness': '直線或底線游標相對於字元格的粗細，範圍 0.0 到 1.0。預設 0.15。',
      'cursor.blink_interval': '閃爍間隔的毫秒數，下限為 10。預設 750。',
      'cursor.blink_timeout': '閒置這麼多秒後停止閃爍。0 表示一直閃爍。預設 5。',
    },
    terminal: {
      'terminal.osc52': '透過 OSC 52 存取剪貼簿：disabled、onlycopy、onlypaste 或 copypaste。預設 onlycopy。',
      'terminal.osc_notifications': '允許透過 OSC 9 與 OSC 99 傳送桌面通知。預設 true。',
      'terminal.shell': '用來取代登入 shell 啟動的 shell，格式為 { program, args }。',
      'selection.save_to_clipboard': '自動把選取的內容複製到系統剪貼簿。預設 false。',
      'mouse.hide_when_typing': '輸入時隱藏滑鼠指標。預設 false。',
      'file_drop.paste_remote_path': '當遠端的 vvreceive 透過 vvssh 把拖放的檔案複製過去後，自動輸入它最終存放的遠端路徑。預設 true。',
      'message_bar.warning_timeout': '警告自動消失前等待的秒數。0 表示一直顯示；錯誤則一律需要手動關閉。預設 5。',
      'bell.duration / animation / color': '視覺響鈴。duration 為 0 時停用。預設動畫為 Linear，色彩為 #ffffff。',
    },
    mouseBindings:
      '`[[mouse.bindings]]` 下的自訂滑鼠綁定會與預設綁定合併，所以 `{ mouse = "Middle", action = "PasteSelection" }` 就能加上中鍵貼上，而不必重新定義其他任何綁定。',
    actions:
      '可用的動作包括 `Copy`、`Paste`、`CopySelection`、`PasteSelection`、`ClearSelection`、調整字型大小的各個動作、`Scroll*` 系列、`SearchForward`、`SearchBackward`、`ToggleFullscreen`、`ToggleMaximized`、`SpawnNewInstance`、`CreateNewWindow`、`CreateNewTab`、`SelectNextTab`、`SelectPreviousTab`、`SelectTab1`–`SelectTab9`、`SelectLastTab`、`ClearHistory`、`Quit`、`Hide`、`Minimize`、`ReceiveChar` 與 `None`。',
    noVi: 'Vivido 沒有 vi 模式相關的動作。這是刻意為之，而不是遺漏——完整的刻意差異清單請見 [Vivido 頁面](/vivido)。',
    debugIntro: '診斷選項。大多數人永遠用不到。',
    debug: {
      log_level: 'Off、Error、Warn、Info、Debug 或 Trace。預設 Warn。',
      print_events: '記錄視窗事件與輸入事件。預設 false。',
      persistent_logging: '結束後保留日誌檔。預設 false。',
      render_timer: '疊加顯示每個影格的渲染耗時。預設 false。',
      highlight_damage: '為重繪的區域上色。預設 false。',
    },
    sample: {
      starter: '只寫你想改的部分。沒寫的鍵維持預設值。',
      bindings:
        '綁定會與預設綁定合併。\n  key  : "a"、具名按鍵（"F5"、"Home"、"Enter"）或掃描碼\n  mods : 以 | 連接的 Control、Shift、Alt/Option、Super/Command，或 "None"\n  mode : AppCursor | AppKeypad | Alt | Search；加上前綴 ~ 表示要求該模式關閉\n  然後在 action、chars、command 中恰好指定一個',
      neutralise: '把字元交還給應用程式，藉此抵銷某個預設綁定。',
      alphabet: '標籤按鍵。至少需要兩個寬度為 1 的字元。',
      defaultHint: '預設提示：用系統的開啟程式開啟 URL 與 OSC 8 超連結。',
      macOpen: 'macOS 上為 "open"',
      copyWord: '用 Control+Shift+R 複製任何以 .rs 結尾的單字。',
    },
  },

  tutorials: {
    eyebrow: '教學',
    title: '第一天就值得做的七件事。',
    lede: '每一篇都很短、自成一體，並且以某樣東西真的動起來作結。如果你剛接觸 Vivido，就從頭開始。',
    sections: {
      firstImage: '你的第一張圖片',
      video: '影片與音訊',
      vvssh: '透過 SSH 傳輸媒體',
      vvmux: '可以卸離的工作階段',
      agent: '讓代理程式來操控',
      ci: 'CI 中的終端機',
      producer: '撰寫你自己的生產端',
    },
    firstImage: {
      run: '開啟 Vivido，然後對任何一個圖片檔執行 Vivi。整篇教學就這麼多——沒有任何設定步驟。',
      formats:
        'PNG 與 JPEG 會以原始位元組提交；其他格式會先轉換為 RGBA。用 `-z` 縮放顯示結果，傳入多個檔案則可以逐一瀏覽：`vivi -z 1.5 a.webp b.png`。',
      noEndpoint:
        '如果 Vivi 回報 `VIVID_ENDPOINT_CONTROL` 未設定，表示你不在 Vivido 的 shell 裡。這則訊息是預期行為，不是 bug——可以用 `--dry-run` 在沒有呈現端的情況下檢查檔案。',
    },
    video: {
      clock:
        '影片和它的音軌共用同一個時鐘，所以它們會在短暫的預先緩衝之後一起開始，而不會逐漸錯位。把影片捲出可視範圍，播放就會暫停；捲回來則繼續——可見性是協定的一部分，而不是靠猜。',
      canonical:
        'Opus、Vorbis 與 FLAC 採用正規化、與容器無關的初始化方式，所以同一個檔案無論是在本機播放、透過 SSH 播放，還是巢狀在 vvmux 裡播放，表現都完全一致。',
    },
    vvssh: {
      start:
        '從 Vivido **內部**的 shell 出發，用 `vvssh` 取代 `ssh`。在遠端主機上安裝 `vivi`；它不需要顯示伺服器，也不需要音訊裝置。',
      arrives: '畫面出現在你的筆電上。沒有複製任何東西，也沒有用到 X 轉發。',
      heavyTitle: '當媒體流量很大時',
      heavy:
        '加上 `--separate-media-transport`，即可為大流量媒體另開一條與生命週期綁定的 SSH 傳輸通道。這樣控制流量就有自己獨立的連線，大型影片不會拖慢你的按鍵回應。預設仍然只使用單一的私有傳輸通道。',
      prerequisitesTitle: '先決條件',
      prerequisites: [
        'POSIX 伺服器需要啟用 `AllowStreamLocalForwarding`。',
        'Windows 伺服器需要啟用 `AllowTcpForwarding`。',
        '依照設計，非 loopback 的 TCP 端點會被拒絕。',
      ],
    },
    vvmux: {
      start: '啟動一個具名工作階段，做點事，然後離開。伺服器會讓你的窗格、PTY、回捲緩衝區與媒體軌道繼續存活。',
      keys:
        '用 `Ctrl+b %` 與 `Ctrl+b "` 分割，用 `Ctrl+b` 加方向鍵移動焦點，用 `Ctrl+b z` 縮放窗格。重新連接時，媒體會依據穩定快照還原，而不是從頭重新播放。',
      token:
        '卸離會釋出外層視窗的權杖，因此背景常駐程式永遠不會對一個它看不到的視窗持有權限。在你打算讓一個工作階段連續執行一週之前，這是唯一值得了解的行為。',
    },
    agent: {
      facts:
        '`vivido msg` 的意義在於，代理程式可以等待事實。下面的每一步要不是針對一個已知狀態成功，就是明確地失敗——沒有哪一步是 sleep 之後聽天由命。',
      habits:
        '兩個習慣能讓這一切變得可靠。第一，去探索視窗 ID，而不是想當然耳：ID 很小且單調遞增，但意義不透明。第二，把 `typing` 和 `key Enter` 分開，因為 `typing` 刻意不附加換行。',
      report:
        '`typing`、`key` 與 `paste` 都接受 `--report`，它會印出解析出的視窗、位元組數以及寫入是否完成。它還會明確說明並未觀察到應用程式**讀取**了這些輸入——寫入 PTY 並不等於程式已經讀到。',
      sample: {
        find: '找到視窗。絕不要猜測 ID——去探索它。',
        type: '輸入指令與按下 Enter 是兩個明確分開的步驟。',
        wait: '等待事實，而不是 sleep。',
        settle: '等螢幕穩定下來，再去讀它。',
        evidence: '留下證據。',
      },
    },
    ci: {
      headless: '無頭模式會執行完整的執行環境，不需要視窗，也不需要合成器，這讓終端機變成了一個可測試的元件。截圖是真實渲染出來的影格，而不是事後重建的。',
      size: '需要截圖時，請使用 `--headless-size 1280x720px`：它會直接設定渲染表面的大小，而不是根據字型度量去推算像素。',
      sample: {
        session: '整個工作共用一個無頭工作階段。--foreground 會把工作階段的\n生命週期與目前的行程綁定，這正是 CI 所需要的。',
        frame: '一個真實渲染的影格，包含測試產生的所有內嵌媒體。',
      },
    },
    producer: {
      entry:
        '只要你的程式能產生像素，就能把它們放進終端機。`PaneSession` 是最小的實用進入點：它最多擁有一個呈現內容，並會替你清除上一個。',
      deeper:
        '對於影片、音訊或任何長時間存在的內容，需要再深入一層，直接使用工作階段、表面、軌道與軌道通道。[SDK README](sdk) 涵蓋了建立連線時的重試、經過驗證的工作階段恢復以及流量控制契約；如果你要自己實作線路格式，則以 [1.5 規格](spec)為準。',
      sample: {
        rust: '從 Vivido 匯出到目前 shell 的環境變數中\n讀取 VIVID_ENDPOINT_CONTROL 與根密鑰。',
        python: 'PaneSession 最多擁有一個呈現內容；顯示新圖片時，\n會替你清除上一個節點與表面。',
      },
    },
  },
}

export default zhHant
