import type { Messages } from './context'

const zhHans: Messages = {
  nav: {
    products: '产品',
    learn: '学习',
    docs: '文档',
    tutorials: '教程',
    config: '配置',
    protocol: '协议',
    plugins: '插件',
    install: '安装',
    blurbs: {
      vivido: 'GPU 终端模拟器',
      vivida: '为你和你的智能体准备的工作区',
      vvmux: '可分离、懂媒体的终端复用器',
      vivi: '在命令行里播放媒体',
      vvrd: '在终端里阅读 PDF 和各类文档',
      plugins: 'vvmux 插件市场',
    },
    github: 'Vivido 的 GitHub',
    x: 'Vivido 的 X 账号',
    toggle: '切换导航菜单',
    language: '语言',
  },

  footer: {
    tagline: '基于 Vivid Protocol 1.5 构建的终端套件。图片、视频和音频走经过认证的旁路通道——PTY 仍然只是 PTY。',
    project: '项目',
    vvmuxPlugins: 'vvmux 插件',
    documentation: '文档',
    configuration: '配置',
    spec: 'Vivid 1.5 规范',
    sdk: 'Vivid SDK(Rust、Python、TS)',
    crate: 'crates.io 上的 vivido',
    releases: '版本发布',
    issues: '问题反馈',
    licence: 'Apache-2.0 许可证',
    free: '免费开源，采用 Apache-2.0 许可证。',
  },

  common: {
    suiteBack: 'Vivido 套件',
    viewOnGithub: '在 GitHub 上查看',
    copied: '已复制',
    copyCommand: '将“{command}”复制到剪贴板',
    chooseLanguage: '选择编程语言',
    onThisPage: '本页内容',
    firstSteps: '入门第一步',
    usage: '用法',
    whatItDoes: '功能一览',
    video: '视频',
    audio: '音频',
    images: '图片',
  },

  meta: {
    fallbackTitle: 'Vivido',
    '/': {
      title: 'Vivido — 能播放视频的 GPU 终端',
      description:
        '一款快速、跨平台的 GPU 终端模拟器，图片、视频和音频都能内嵌显示。Vivid Protocol 1.5 让媒体走经过认证的旁路通道，PTY 仍然只承载普通的终端 I/O。',
    },
    '/vivido': {
      title: 'Vivido — 支持内嵌视频和音频的 GPU 终端模拟器',
      description:
        '基于 Vello 与 wgpu，运行在 Metal、DirectX 12 和 Vulkan 之上。内嵌图片、H.264/HEVC/VP9/AV1 视频、七种音频编解码器、精确 PTS 播放、vvssh 媒体转发、Kitty graphics 协议兼容，以及通过 vivido msg 实现的确定性自动化。',
    },
    '/vivida': {
      title: 'Vivida — 为你和你的智能体准备的终端工作区',
      description:
        '每个项目一个工作区，每项任务一个窗格，并让你的智能体拥有与你并肩观察和操作的工具。原生 Vivido 窗格，组织成工作区、标签页和拆分布局。',
    },
    '/vvmux': {
      title: 'vvmux — 可分离、懂媒体的终端复用器',
      description:
        '为 Vivido 打造的 tmux 式会话。每个窗格都有一个虚拟 Vivid 呈现端，分离再接入后媒体依然存活，而守护进程永远接触不到你的窗口令牌。',
    },
    '/vvmux/plugins': {
      title: 'vvmux 插件 — 插件市场',
      description: '由清单驱动的智能体提供方、集成、窗格和工作流，专为 vvmux 设计。安装前会先展示所需权限。',
    },
    '/vivi': {
      title: 'Vivi — 在终端里播放图片、视频和音频',
      description:
        'Vivid Protocol 1.5 的命令行生产端。vivi photo.png、vivi clip.mkv、vivi song.mp3——在本地、通过 vvmux 或经由 vvssh 都可以。',
    },
    '/vvrd': {
      title: 'vvrd — 在终端里阅读 PDF、EPUB 和 Office 文档',
      description:
        '为 Vivido 打造的全屏文档阅读器。通过 MuPDF 阅读 PDF 和 EPUB，分页渲染 Markdown 与 Mermaid，并借助 LibreOffice 转换 PPTX/DOCX/ODP/ODT——全部在 Vivid 1.5 旁路通道上渲染。',
    },
    '/docs': {
      title: '文档 — Vivido 与 Vivid 技术栈',
      description: '快速上手、保持 PTY 干净的架构、vivido msg 自动化接口、无头会话，以及 Vivid Protocol 1.5 规范。',
    },
    '/config': {
      title: '配置 — vivido.toml 参考',
      description:
        'vivido.toml 的每个小节及其内置默认值：window、font、colors、scrolling、cursor、terminal、hints、keyboard 和 debug。',
    },
    '/tutorials': {
      title: '教程 — Vivido、vvssh、vvmux 与智能体自动化',
      description:
        '一步步完成：第一张内嵌图片、用 vvssh 通过 SSH 传输媒体、vvmux 中可分离的媒体会话，以及让智能体驱动终端。',
    },
  },

  platform: {
    downloadMac: '下载 macOS 版',
    macInstaller: '.pkg 安装包',
    downloadWindows: '下载 Windows 版',
    windowsInstaller: '.exe 安装程序',
    windowsLink: 'Windows 安装程序',
    choose: '选择你的平台',
    selected: '（已选中）',
    macos: {
      headline: '已签名的安装包',
      note: '使用 Metal 渲染。安装包经过 Developer ID 签名和公证。',
      download: '下载 .pkg',
    },
    windows: {
      headline: '已签名的套件安装程序',
      note: '一个安装程序即可把 Vivido、Vivida、vvmux、vivi、vvrd 和 vvssh 加入你的 PATH。使用 DirectX 12 渲染。',
      download: '下载 .exe',
    },
    linux: {
      headline: '从 crates.io 构建',
      note: '有意只支持 Wayland，使用 Vulkan 渲染。需要 Rust 1.95+，以及你所用发行版的 FFmpeg 和音频开发包。',
    },
    readFirst: '想先了解一下？[安装指南](installGuide)列出了各平台的构建依赖。',
  },

  suite: {
    status: { stable: '稳定', new: '新', preview: '预览' },
    groups: {
      terminal: { label: '终端', blurb: '你工作的地方，以及安排它们的工具。' },
      producer: { label: '生产端', blurb: '把画面和声音送上屏幕的程序。' },
      remote: { label: '远程与传输', blurb: '在别人的机器上也有同样的体验。' },
    },
    tools: {
      vivido: 'GPU 终端模拟器，也是 Vivid 的参考呈现端。支持 Metal、DirectX 12、Vulkan。',
      vivida: '由原生 Vivido 窗格组成的工作区、标签页和拆分布局——你的项目和智能体的家。',
      vvmux: '可分离的复用器。分离再接入后媒体依然存活，换一台机器也行。',
      vvbox: '一个可以对话的终端外壳。标签页和拆分中的窗格，由聊天面板驱动。',
      vivi: '在命令行里播放图片、视频或音轨。体验 Vivid 最快的方式。',
      vvrd: '在终端里全屏阅读 PDF、EPUB、Markdown、Mermaid 和 Office 文档。',
      vvpaint: '不离开终端就能在图片上绘画和标注。键盘优先。',
      vvcam: '把已连接的摄像头画面以 H.264 编码推送到终端。通过 SSH 也能用。',
      vvland: '在窗格里运行一个隔离的 Wayland 应用，或一整套 Weston、Sway、Hyprland 桌面。',
      vvdoom: 'Doom，画面和声音走同一套媒体栈。因为总有人会问。',
      vvssh: '能承载媒体的 SSH。远程的图片和视频会出现在你本地的屏幕上。',
      vrowser: '一个刻意保持精简的 CEF 浏览器，直接渲染到终端里。没有标签页，没有地址栏。',
    },
  },

  diagram: {
    label:
      '生产端通过 PTY 通道把普通文本发送给 Vivido，而图片、视频和音频走一条独立的、经过认证的 Vivid 旁路通道，因此媒体通道即使阻塞也不会卡住终端 I/O。',
    producer: '生产端',
    ownCode: '你自己的代码',
    presenter: '呈现端',
    pty: '普通终端 I/O——文本、按键、尺寸变化',
    vivid: '经过认证的旁路通道——图片、视频、音频',
    flow: '按轨道进行流量控制：缓慢或格式错误的源无法拖住输入、渲染、音频或其他轨道。',
    caption: '媒体字节永远不会经过 PTY，只有一个有界的、经过认证的锚点标记会经过。',
  },

  home: {
    heroTitle: '能播放视频的\n==GPU 终端。==',
    heroLede:
      'Vivido 是一款快速、跨平台的终端模拟器，图片、视频和音频直接在窗口里渲染。媒体走经过认证的旁路通道，因此无论是在本地、通过 SSH 还是经由复用器，你的 PTY 都只承载普通的终端 I/O。',
    otherInstall: '其他安装方式',
    heroAlt: 'Vivida 窗口，其中的 Vivido 窗格正在内嵌播放媒体',
    watch: '在 YouTube 上观看实际效果',
    proof: {
      eyebrow: '六十秒见分晓',
      title: '三条命令，无需配置。',
      lede: '安装 Vivido，打开它，然后运行下面任意一条命令。没有设置步骤，没有转义序列探测，也没有什么需要启用。',
      captions: {
        'vivi photo.jpg': '一张图片，以完整分辨率内嵌显示。',
        'vivi clip.mkv': 'H.264 视频连同同步的音频，在终端网格中播放。',
        'vvssh user@host': '然后在远端运行 vivi，画面会出现在这里。',
      },
    },
    pty: {
      eyebrow: '技术上的切入点',
      title: '你的 PTY 保持干净。',
      lede: '其他能显示图片的终端，都是把图片编码成转义序列塞进 PTY。Vivid 不这么做。终端文本依旧走它一直走的路，而媒体拥有自己的通道——经过认证，并带有流量控制。',
    },
    caps: {
      eyebrow: '你将得到什么',
      title: '为不满足于只读文字的人而造。',
      lede: '在终端必须快的地方足够快，在终端从未涉足的地方足够强。',
      media: {
        title: '真正的媒体',
        body: '不是由彩色单元格拼成的马赛克。真正的解码器、精确 PTS 播放、联动的音视频时钟，再加上按轨道的流量控制——某一路流卡住，也只是它自己的事。',
      },
      gpu: {
        title: '处处皆由 GPU 渲染',
        body: 'Vello 与 wgpu 在各平台的原生后端上绘制每一帧，并继承了 Alacritty 终端内核的吞吐能力。',
      },
      ssh: {
        title: '通过 SSH 传输媒体',
        body: '`vvssh` 会把你的 Vivid 端点转发到远程 shell 中。在服务器上运行 `vivi`，画面就出现在你的笔记本上。不需要 X 转发，也不用拷贝文件。',
        note: '根密钥通过受保护的 stdin 通道传入一个仅所有者可读的文件，绝不会出现在 SSH 或远程 shell 的参数里。',
      },
      automation: {
        title: '智能体可以信赖的自动化',
        body: '`vivido msg` 是一个确定性的 IPC 接口，而不是屏幕抓取器。智能体和 CI 等待的是事实——单调递增的屏幕序号、稳定下来的屏幕、已呈现的帧——而不是 sleep 之后听天由命。',
        commands: {
          'wait text': '阻塞，直到网格中出现指定文本',
          'wait screen-stable': '阻塞，直到输出稳定下来',
          'get-grid': '以 JSON 返回每个单元格、样式和超链接',
          screenshot: '真正呈现出来的那一帧，PNG 格式',
        },
      },
      headless: {
        title: '具名的无头会话',
        body: '完整的运行时——终端内核、Vivid 呈现端和 Vello 渲染器——不需要窗口，也不需要合成器。在窗口中能观察到的一切，在这里同样能观察到，包括真实渲染的截图。支持 Linux、macOS 和 Windows。',
      },
      wayland: {
        title: '只支持 Wayland，有意为之',
        body: '没有 X11，没有 Xlib，没有 GLX。Vivido 也不提供 vi 模式和 vi 风格的光标操作，鼠标选择只保留单次拖动。接口更少，行为更清晰。',
        note: '这些都是有文档记录的刻意取舍，而非缺失——Vivido 页面上列出了全部差异。',
      },
    },
    suite: {
      eyebrow: '一个协议，一整套工具',
      title: '全都说 Vivid 1.5。',
      lede: '这里的每一个都是独立的程序，各自把一件事做好。它们之所以能互通，靠的是共同的线路格式，而不是共同的代码库——这也是你可以自己写一个的原因。',
    },
    vivida: {
      eyebrow: '认识 Vivida',
      title: '你的项目，你的智能体，\n同在一个窗口。',
      body: '每个项目一个工作区，每项任务一个窗格，并让你的智能体拥有与你并肩观察和操作的工具。Vivida 把原生 Vivido 窗格组织成工作区、标签页和拆分布局——于是智能体可以在你正看着的同一个窗口里读取窗格、运行命令，并为结果截图。',
      explore: '了解 Vivida',
      detach: '或者用 vvmux 分离会话',
    },
    own: {
      eyebrow: '自己动手写',
      title: 'Vivid 是一份规范，不是私有把戏。',
      lede: '协议公开发布并带有版本号，还提供同时支持两种角色的全双工 SDK，有 Rust 和 Python 两种语言。只要你能产生像素或音频，就能把它们放进终端。',
      points: [
        ['一份规范性的标准', '帧格式、有界 CBOR、带类型的控制消息、媒体校验，以及经过认证的文本锚点——全部白纸黑字写明。'],
        ['一个 SDK，两种角色', '可以做生产端，也可以终结一个会话，自己充当呈现端。'],
        [
          '诚实的协商',
          '清晰一致的具名配置。未知的注册表项经过中继时逐字节保留；已识别但不支持的项会被明确拒绝，而不是被悄悄丢弃。',
        ],
      ],
      readSpec: '阅读 1.5 规范',
    },
    samples: {
      rust: '发现 VIVID_ENDPOINT_CONTROL，并使用 Vivido 导出到\n当前 shell 的根密钥完成认证。',
      python: '使用继承而来的 Vivid 发现环境变量建立连接。',
      shell: '一个完整的 Vivido 运行时，没有窗口，通过 IPC 驱动。',
    },
    install: {
      eyebrow: '开始使用',
      title: '安装整个套件。',
      lede: 'Vivido 自带 vvssh。在 Windows 和 macOS 上，已签名的安装程序还会一并装好 Vivida、vvmux、vivi 和 vvrd。',
      body: '所有组件均免费，并采用 Apache-2.0 许可证。如果你更愿意从源码构建，仓库是一组 Cargo 项目——每一个都可以单独构建。',
      browse: '浏览源码',
    },
    closing: {
      title: '终端只有文字，\n==已经五十年了。==',
      body: '看得见，听得到，而且不必离开你的 shell。',
      fast: '它为什么这么快',
    },
  },

  vivido: {
    eyebrow: 'Vivido · GPU 终端模拟器',
    title: '一个能渲染==画面和声音==的终端。',
    lede: 'Vivido 是一款快速、跨平台的 GPU 终端模拟器，也是 Vivid Protocol 1.5 的参考呈现端。它负责认证生产端、解码并渲染图片和视频、播放与之联动的音频，并管理场景中的位置与可见性——而 PTY 始终只承载普通的终端 I/O。',
    configReference: '配置参考',
    features: [
      '通过 Vello 与 wgpu 进行 GPU 渲染——macOS 上用 Metal，Windows 上用 DirectX 12，Linux 上用 Vulkan',
      'Vivid Protocol 1.5：内嵌图片、H.264/HEVC/VP9/AV1 视频，以及七种音频编解码器',
      '兼容 Kitty graphics 协议——kitten icat、timg、chafa、yazi 的静态图片直接内嵌显示',
      '精确 PTS 播放，音视频时钟联动，带缓冲的启动',
      '经过认证的媒体锚点，标记可抵御重放',
      '用 vvssh 安全地进行远程 Vivid 转发，可选独立的媒体传输通道',
      '通过 vivido msg 实现确定性自动化，另有具名的无头会话',
      '按来源隔离的背压——缓慢的媒体源永远不会阻塞终端 I/O',
    ],
    deliberateHeading: '刻意的差异',
    deliberate: [
      'Linux 上只支持 Wayland。没有 X11，没有 Xlib，没有 GLX。',
      '没有 vi 模式、vi 搜索或 vi 光标操作。',
      '简化的鼠标选择——只支持拖动。',
      '媒体字节永远不会经过 PTY，只有一个有界的、经过认证的锚点标记会经过。',
    ],
    deliberateNote: '这些是选择，而不是缺失。每一项都去掉了一类 Vivido 原本要永远背负的兼容性负担。',
    speed: {
      eyebrow: '为什么一直这么快',
      title: '速度不是事后再加的功能。',
      lede: '三个相互独立的决定，让支持媒体的终端和纯文本终端一样跟手。',
      points: [
        ['终端内核', '承袭自 Alacritty，因此吞吐量和正确性都从一个久经验证的基础出发。'],
        ['渲染器', 'Vello 在 GPU 上完成矢量和字形的计算；wgpu 则适配平台提供的任何后端。'],
        ['隔离', '媒体的解码和播放以轨道为单位。过载只会影响造成它的那条轨道。'],
      ],
    },
    install: {
      eyebrow: '安装',
      title: '一个 crate，装好终端和 vvssh。',
      lede: '需要 Rust 1.95 或更新版本，以及你所在平台的 FFmpeg 和音频开发包。macOS 和 Windows 的已签名安装程序在发布页面上。',
      installers: '已签名的安装程序',
    },
    next: {
      title: '接下来去哪里',
      config: { label: 'vivido.toml 参考', blurb: '每个小节及其内置默认值。' },
      docs: { label: '自动化接口', blurb: 'vivido msg 能观察和驱动什么。' },
      vvmux: { label: 'vvmux', blurb: '分离会话，保留媒体。' },
      vivi: { label: 'Vivi', blurb: '把媒体放上屏幕最快的方式。' },
    },
  },

  vivida: {
    eyebrow: 'Vivida · 终端工作区',
    title: '你和==你的智能体==共同的家。',
    lede: '把项目、终端和 AI 智能体带进同一个窗口。Vivida 把工作区、标签页和拆分窗格，与 Vivido 能渲染的一切结合在一起——还提供了智能体所需的自动化能力，让它在你正看着的窗格里工作，而不是躲在某个看不见的沙箱里。',
    explore: '探索工作区',
    place: {
      eyebrow: '少折腾窗口，多做事情',
      title: '一切各就其位。',
      features: [
        ['每个项目都有自己的位置', '把工作归入具名的工作区。从侧边栏在项目之间切换，标签页和拆分让每项任务都触手可及。'],
        ['不只是一面文字墙', '基于 Vivido 构建，你的窗格可以在终端输出旁边显示图片、播放视频和音频。让预览紧挨着工作。'],
        ['有眼有手的智能体', '内置的自动化让智能体可以检查窗格、截图、输入文字、按键和使用鼠标，以核对自己的工作成果。'],
        ['给你留出进入状态的空间', '用键盘就能打开标签页、拆分窗格、布置工作区。GPU 渲染让一切保持流畅、清晰。'],
      ],
    },
    agents: {
      eyebrow: '观察。行动。验证。',
      title: '与你的智能体并肩工作。',
      body: '智能体可以找到正确的窗格、检查输出、调整标签页和拆分，并通过截图验证自己的工作。你们共享同一个工作区，你可以实时跟进——这也意味着你随时可以中途接手。',
      guide: '阅读自动化指南',
    },
    keys: {
      eyebrow: '手不离键盘',
      title: '一次按键，腾出空间。',
      lede: 'Mod 在 macOS 上是 Cmd，在其他平台上是 Ctrl。标签栏里的齿轮图标可以查看完整列表。',
      meetVivido: '认识 Vivido——里面的那个终端',
      shortcuts: {
        'Mod T': '新建标签页',
        'Mod D': '左右拆分',
        'Mod Shift D': '上下拆分',
        'Mod Shift N': '新建工作区',
        'Mod Shift B': '循环切换侧边栏大小',
        'Mod 1–9': '切换工作区',
      },
    },
  },

  vvmux: {
    eyebrow: 'vvmux · 可分离的复用器',
    title: '分离会话，\n==留住媒体。==',
    lede: 'vvmux 用起来像 tmux，同时懂 Vivid。后台服务器拥有窗格、PTY、布局和回滚缓冲区；前台客户端只把当前可见的媒体桥接到所接入的 Vivido 窗口。分离时，你的窗口令牌绝不会交给守护进程。',
    browsePlugins: '浏览插件',
    features: [
      '由常驻服务器支撑的可分离具名会话',
      '标签页、平铺与浮动窗格、缩放、复制模式，以及鼠标调整大小',
      '每个窗格一个虚拟 Vivid 呈现端——分离再接入后媒体依然存活',
      '可感知片段的窗格媒体遮挡，以及基于稳定快照的状态协调',
      '通过 vvmux msg 对窗格进行脚本化自动控制',
      '插件系统，附带智能体导航器，可报告空闲、工作中或受阻状态',
    ],
    keysHeading: '默认按键',
    keysNote: '前缀键是 Ctrl+b，和你预想的一样。',
    keys: {
      'Ctrl+b %': '左右拆分',
      'Ctrl+b "': '上下拆分',
      'Ctrl+b ←→↑↓': '在窗格之间移动焦点',
      'Ctrl+b z': '切换当前窗格的缩放',
      'Ctrl+b d': '分离，所有程序继续运行',
      'Ctrl+b c / n / p': '新建标签页、下一个标签页、上一个标签页',
      'Ctrl+b [': '复制模式',
    },
    security: {
      eyebrow: '安全模型',
      title: '比你的窗口活得更久的守护进程，不该握着窗口的钥匙。',
      lede: '这正是懂媒体的复用器与纯文本复用器的不同之处。在把长时间运行的会话托付给它之前，值得先弄明白这一点。',
      points: [
        ['服务器拥有状态', '窗格、PTY、布局和回滚缓冲区都存在于一个后台进程中，分离后依然存活。'],
        ['客户端拥有权限', '只有已接入的前台客户端持有外层 Vivido 窗口的令牌。一旦分离，令牌随即释放。'],
        ['桥接很窄', '可见的媒体通过按来源限定的写入端中继，并依据稳定快照进行协调。'],
      ],
    },
  },

  plugins: {
    eyebrow: '插件市场',
    title: 'vvmux 插件',
    lede: '发现由清单驱动的智能体提供方、集成、窗格和工作流。vvmux 会在安装前展示每个包所需的权限，并且不会运行来自市场的代码。',
    search: '搜索插件',
    filter: '按插件类型筛选',
    allTypes: '所有类型',
    empty: '没有符合该筛选条件的插件。',
    publish: '发布一个公开的 GitHub 仓库，在根目录放置 `vvmux-plugin.toml`，并添加 `vvmux-plugin` 主题标签，即可申请收录到索引中。',
    firstParty: '官方',
    permissions: '权限：',
    none: '无',
    copy: '复制',
    viewSource: '查看源码',
  },

  vivi: {
    eyebrow: 'Vivi · Vivid 1.5 生产端',
    title: '从文件到==你的终端==，最短的一条路。',
    lede: 'Vivi 会检查图片以及任何 FFmpeg 支持的媒体，然后提交给 Vivid 呈现端。全双工控制、流量控制、预缓冲、可见性和关键帧恢复都由它处理，你只需要输入一个文件名。',
    usageTitle: '四种你真正会用到的方式。',
    usage: {
      'vivi photo.png': '一张图片，内嵌在终端网格中。',
      'vivi clip.mkv': '视频连同它的音轨，共用同一个时钟。',
      'vivi song.mp3': '只有音频——没有窗口，没有播放器。',
      'vivi -z 1.5 photo.webp clip.mp4': '一个播放列表，放大到 150%。',
    },
    featuresHeading: '它能处理什么',
    features: [
      '任意图片：PNG 和 JPEG 以原始字节传输，其他格式一律转换为 RGBA',
      '视频：H.264 和 HEVC Annex B、VP9、AV1，并带有联动的音频时钟',
      '音频：MP3、AAC、ALAC、Opus、Vorbis、FLAC、PCM 和 WAV',
      'Opus、Vorbis 和 FLAC 采用规范化的初始化——不存在容器带来的歧义',
      '可直接在 Vivido 中使用，也可在 vvmux 窗格内或通过 vvssh 远程使用',
      '流量控制、随可见性暂停与恢复、预缓冲，以及关键帧恢复',
    ],
    formatsHeading: '支持的格式',
    buildNote: 'Vivi 在构建时需要 FFmpeg 开发库。在 macOS 上执行 `brew install ffmpeg pkg-config` 即可。',
  },

  vvrd: {
    eyebrow: 'vvrd · 文档阅读器',
    title: '所有文档，==尽在你的终端。==',
    lede: 'vvrd 是为 Vivido 打造的全屏文档阅读器：PDF、EPUB、Markdown、Mermaid 和 Office 文档，经过分页后以像素形式在 Vivid 旁路通道上渲染——绝不使用终端转义序列。',
    usageTitle: '一个文档，一条命令。',
    usage: {
      'vvrd paper.pdf': '一份 PDF，在终端里全屏显示。',
      'vvrd book.epub': '一本 EPUB，像印刷品一样分页。',
      'vvrd guide.md': '带表格和代码的 Markdown，自动适配主题。',
      'vvrd --page 12 paper.pdf': '直接跳到第十二页。',
    },
    features: [
      '通过 MuPDF 支持 PDF 和 EPUB——搜索、目录、链接、缩放与平移、旋转，以及导出 PNG',
      '由内置分页器渲染 Markdown：GFM 表格、任务列表、代码，以及本地或 data URI 图片',
      'Mermaid 图表，可以写在 Markdown 的代码块里，也可以单独成文件，在页面上居中显示',
      'PPTX、DOCX、ODP 和 ODT 由无头 LibreOffice 转换为 PDF，并按内容哈希缓存',
      '每份文档的阅读位置保存在平台缓存目录中',
      '同一个二进制文件，既可在本地使用，也可通过 vvssh 在远程 shell 中使用',
    ],
    officeNote:
      'Office 文档转换还需要 PATH 中有 LibreOffice（可用 `VVRD_SOFFICE` 指定其他路径）。在 Windows 上，已签名的 Vivido 套件安装程序自带 `vvrd.exe`。',
    keysHeading: '按键',
    keys: {
      '← / → · Space': '上一页 / 下一页',
      '↑ / ↓': '滚动，到页面边界时翻页',
      g: '跳转到指定页',
      '/ · n / N': '搜索；下一个 / 上一个匹配',
      't · M · f': '目录、元数据、链接',
      e: '将当前页导出为 PNG',
      'R / F5': '重新读取并重新分页',
    },
    formatsHeading: '格式',
    formats: [
      ['固定版式', 'PDF · EPUB (MuPDF)'],
      ['标记语言', 'Markdown (GFM) · Mermaid'],
      ['Office', 'PPTX · DOCX · ODP · ODT——经由 LibreOffice'],
    ],
  },

  notFound: {
    title: '页面未找到',
    body: '这个路径不存在。它可能已经移走，也可能从未存在过。',
    home: '返回首页',
    docs: '阅读文档',
  },

  docs: {
    eyebrow: '文档',
    title: '把媒体放进终端，所需的一切都在这里。',
    lede: '一次面向实践的技术栈导览：安装它，理解 PTY 为何保持干净，让智能体驱动它，以及在完全没有窗口的情况下运行它。更深入的参考资料与代码放在一起。',
    sections: {
      quickstart: '快速上手',
      model: 'Vivid 的工作原理',
      automation: '自动化',
      headless: '无头会话',
      remote: '远程与嵌套',
      projects: '各个项目',
      spec: '协议与 SDK',
    },
    quickstart: {
      packages:
        'Vivido 是一个 Cargo 包，会同时安装终端和 `vvssh`。Vivi 是另一个独立的包，因为使用终端并不需要媒体生产端。',
      discovery:
        'Vivido 会把 `VIVID_ENDPOINT_CONTROL` 和每个窗口各自的根密钥导出到它启动的每一个 shell 中。生产端从环境变量中发现端点——无需任何配置，也不用挑选端口。',
      installer:
        '在 macOS 和 Windows 上，推荐使用[发布页面](releases)上的已签名安装程序：在 Windows 上，它会安装整个套件并将其加入你的 `PATH`。',
      sample: {
        install: '1. 安装终端（同时也会安装 vvssh）。',
        check: '2. 打开它，然后在新的 shell 中确认 Vivid 端点存在。',
        show: '3. 在屏幕上显示点东西。',
      },
    },
    model: {
      roles:
        '**生产端**提交媒体。**呈现端**负责校验、定位、渲染并播放它。Vivido 是参考呈现端；Vivi、vvcam、vvrd、vvland 以及你自己的代码都是生产端。',
      lanesTitle: '两条通道，而不是一条',
      lanes:
        '普通的终端 I/O 留在 PTY 上。图片、编码后的视频和音频走经过认证的旁路通道。媒体字节永远不会经过 PTY——只有一个有界的、经过认证的锚点标记会经过，呈现端正是据此得知某个表面属于文本中的哪个位置。',
      surfacesTitle: '表面与轨道',
      surfaces: [
        '**会话（session）**负责配置协商和认证。',
        '**表面（surface）**是稳定的语义、场景、策略和输入身份。',
        '**轨道（track）**是归某个表面所有的一份不可变的视频、音频、位图或编码图片配置。',
        '**轨道通道（track channel）**是一代经过认证的通道，带有累计的字节数与记录数上限，以及有序的流结束标记。',
      ],
      replace:
        '更换编解码器或分辨率并不会重建表面。你先预备好替换轨道，原子地激活它的槽位，再销毁旧轨道——因此画质切换不会让表面闪烁，也不会让它丢失在文本中的位置。',
      backpressureTitle: '背压有明确的作用范围',
      backpressure:
        '流量控制以轨道为单位。一个过载或格式错误的视频源无法阻塞控制流量、输入撤销、音频、渲染或其他无关的轨道。正是这一特性，让内嵌视频在一个你还需要打字的终端里变得安全。',
    },
    automation: {
      surface:
        '`vivido msg` 是一个确定性的 IPC 接口，在 Linux 和 macOS 上基于仅所有者可访问的 Unix 套接字，在 Windows 上基于仅所有者可访问的命名管道。它存在的意义，是让智能体和 CI 可以等待事实，而不是 sleep 之后听天由命。',
      counters:
        '每个窗口都带有单调递增的 `screen_sequence`、`frame_sequence` 和 `output_offset` 计数器；进程则带有单调递增的 `event_sequence`。等待条件都以它们为基准来表达，因此测试可以说“在这一屏之后”，而不是“500 毫秒之后”。',
      head: ['命令', '作用'],
      rows: {
        'vivido msg capabilities': '打印该端点支持的全部内容，包括由嵌入宿主声明的方法。',
        'vivido msg list-windows': '列举窗口及其稳定的 ID。ID 要去发现，绝不要猜测。',
        'vivido msg inspect': '窗口几何信息、单元格尺寸、终端模式和光标状态。',
        'vivido msg get-text': '可见视口的内容，或包含回滚缓冲区在内的最新 N 个物理行。',
        'vivido msg get-grid': '以 JSON 返回每个物理单元格的宽度、类型，以及去重后的样式表。',
        'vivido msg typing': '按字面写入 UTF-8 字节，不做粘贴处理，也不会追加 Enter。',
        'vivido msg key': '一个按键，可带修饰键和重复次数，按当前终端模式编码。',
        'vivido msg mouse': '以单元格或物理像素为单位移动、点击、拖动、滚动，或沿一条有界路径移动。',
        'vivido msg wait text': '阻塞，直到可见网格匹配某个字符串或正则表达式。',
        'vivido msg wait screen-stable': '阻塞，直到屏幕在一段静默期内没有语义上的变化。',
        'vivido msg wait output': '匹配之后到来的 PTY 字节，即使跨越读取边界也能匹配。',
        'vivido msg screenshot': '最近一次呈现的帧，物理分辨率，PNG 格式。',
        'vivido msg capture': '组合操作：激活窗口、要求出现更新的帧、等待稳定，然后截图。',
        'vivido msg vivid tracks': '检查 Vivid 表面、轨道、通道代数和播放状态。',
      },
      waits:
        '等待操作默认超时为 30 秒，并接受 `ms`、`s`、`m` 和 `h` 后缀。断开连接会立即取消尚未完成的等待、带标记的输入以及订阅。',
      tutorials: '[教程](/tutorials#agent)中完整演示了一个智能体循环。',
    },
    headless: {
      runtime:
        '`vivido --headless` 运行完整的运行时——终端内核、输入编码器、Vivid 呈现端和 Vello/wgpu 渲染器——不需要窗口，也不需要合成器。在有窗口的实例中能观察到的一切，在这里同样能观察到，包括真实渲染的截图。',
      lifetime:
        '父进程会打印可供 shell 执行的 `VIVIDO_SOCKET` 和 `VIVIDO_SESSION` 导出语句，并且要等到守护进程报告已真正开始提供服务后才退出——因此退出状态为零就意味着会话可用。无头会话的生命周期长于它的窗口，只有 `vivido msg quit`、`vivido kill-session` 或信号才能让它停止。',
      head: ['选项', '含义'],
      rows: {
        '--headless': '不使用窗口和合成器运行，并提供 IPC 服务。支持 Linux、macOS 和 Windows。',
        '--session NAME': '为会话命名。默认为 vivido-<pid>。由 1–64 个 ASCII 字母、数字、点、短横线或下划线组成。',
        '--foreground': '不转入后台；一直阻塞到关闭为止。适合在进程管理器或容器入口点下使用。',
        '--headless-size SIZE': '初始尺寸，格式为 COLUMNSxLINES；或用 WIDTHxHEIGHTpx 直接指定渲染表面的大小。',
      },
    },
    remote: {
      plainSsh:
        '只用普通的 `ssh` 是不够的：远程 shell 无法访问你本地的端点，OpenSSH 也不会把发现用的环境变量带过去。遇到这种情况，Vivi 会明确告诉你，而不是莫名其妙地失败。',
      vvssh:
        '`vvssh` 就是解决这个问题的封装。在 POSIX 服务器上，它会创建远程 Unix 套接字监听端；在 Windows 服务器上，则改为反向转发回环 TCP。非回环的 TCP 端点会被拒绝。根密钥通过一条受保护的 stdin 初始化连接，写入一个仅所有者可访问的临时文件，登录 shell 读取后即将其删除——它绝不会出现在 SSH 或远程 shell 的参数里。',
      requirements:
        'POSIX 服务器需要启用 `AllowStreamLocalForwarding`；Windows 服务器需要启用 `AllowTcpForwarding`。远程主机需要安装 `vivi`，但不需要显示服务器，也不需要音频设备。',
      tabs: { remote: '远程', nested: '嵌套' },
      sample: {
        remote: '通过 SSH 传输媒体。请在 Vivido 内的 shell 中运行。',
        onHost: '然后，在远程主机上：',
        appears: '会出现在你本地的屏幕上',
        separate: '可选：为大流量媒体另开一条与生命周期绑定的传输通道，\n这样媒体的背压就不会拖慢控制连接。',
        nested: '嵌套：媒体会经过复用器的虚拟呈现端。',
        renders: '在外层的 Vivido 窗口中渲染',
        detach: '分离。服务器会让窗格、PTY 和轨道继续存活。',
        rehydrated: '媒体会被恢复',
      },
    },
    projects: {
      layout:
        '仓库是一组相互关联的 Cargo 项目，而不是单个工作空间。请在你正在处理的项目目录中运行 Cargo 命令；`vivido` 和 `vvmux` 各自定义了自己的工作空间。',
      head: ['项目', '职责'],
      rows: {
        vivid_protocol: '与渲染器无关的线路协议实现：帧格式、有界 CBOR、消息、媒体主体、锚点。',
        vivid_sdk: '全双工 SDK。crate 根是生产端；呈现端角色需通过一个 feature 开关启用。',
        vivid_gateway: '重新发起（re-origination）核心，供那些终结一个会话并发起新会话的网关使用。',
        vivido: '终端模拟器兼参考呈现端，另含 vvssh。',
        vivi: '命令行媒体生产端。',
        vvmux: '可分离的复用器，每个窗格带一个虚拟呈现端。',
        vivida: '内嵌 Vivido 窗格的工作区外壳。',
      },
    },
    spec: {
      contract:
        'Vivid Protocol 1.5 是一份公开发布的规范性契约，而不是私有把戏。注册表的分配只增不改。未知的规范协商项经过中继时逐字节保留；已识别但不支持的项会被明确拒绝，而不是被悄悄丢弃。',
      links: [
        '[Vivid Protocol 1.5 规范](spec)——由多个部分组成的规范性入口文档。',
        '[vivid_sdk](sdk)——同时支持两种角色的全双工 Rust 与 Python SDK。',
        '[vivid_protocol](protocol)——帧格式、确定性的有界 CBOR、带类型的控制消息，以及经过认证的锚点。',
      ],
      history: '仓库中的 1.0 和 1.1 文档属于历史资料或迁移参考。请把 1.5 视为当前唯一的实现契约。',
    },
  },

  config: {
    eyebrow: '配置',
    title: 'vivido.toml，逐节讲解。',
    lede: '每个值都有内置默认值，所以配置文件里只需要写你想改的部分。实时重载默认开启——保存文件，窗口随即更新。',
    where: '配置文件的位置',
    titles: {
      general: '[general] 与 [env]',
      scrolling: '[scrolling] 与 [cursor]',
      keyboard: '[keyboard] 与 [hints]',
    },
    tabs: { paths: '路径', keyboard: '键盘', hints: '提示' },
    head: ['键', '含义'],
    environment:
      'Vivid 媒体路径是通过环境变量配置的，不在这个文件里。仓库中附带了一份完整的带注释示例，列出了所有默认值，位于 [vivido/docs/vivido.toml](vividoToml)。',
    starterTitle: '一个合理的起点',
    general: {
      import: '要合并进来的其他配置文件，可以是绝对路径或相对于当前文件的路径。后面的条目覆盖前面的。最多嵌套 5 层。默认 []。',
      working_directory: 'shell 启动时所在的目录。不设置则继承 Vivido 的工作目录。',
      live_config_reload: '文件变化时自动重新应用配置。默认 true。',
      ipc_socket: '提供 vivido msg 端点。默认 true；--socket 和 --headless 会无条件启用它。',
    },
    env: '`[env]` 中存放要导出给所启动进程的环境变量，例如 `TERM = "vivido"`。',
    window: {
      padding: '网格四周的留白，单位为像素，按 DPI 缩放。默认 { x = 0, y = 0 }。',
      dynamic_padding: '把剩余空间作为额外留白均匀分配。默认 false。',
      decorations: 'Full、None、Transparent 或 Buttonless。默认 Full。',
      opacity: '背景不透明度，取值 0.0 到 1.0。需要合成器支持。默认 1.0。',
      blur: '请求背景模糊。适用于 macOS 和 KDE Wayland。默认 false。',
      startup_mode: 'Windowed、Maximized、Fullscreen 或 SimpleFullscreen。默认 Windowed。',
      'title / dynamic_title': '窗口的初始标题，以及是否允许应用程序修改它。默认分别为 "Vivido" 和 true。',
      resize_increments: '调整大小时对齐到整数个单元格。默认 false。',
      level: 'Normal 或 AlwaysOnTop。默认 Normal。',
      option_as_alt: '仅限 macOS：OnlyLeft、OnlyRight、Both 或 None。默认 None。',
      dimensions: '初始大小，以单元格为单位。columns 和 lines 必须都不为零才会生效。',
      class: 'Wayland 的 app_id 与窗口类。general 和 instance 默认均为 "Vivido"。',
    },
    windowExtra:
      '`decorations_theme_variant` 可将服务端装饰的主题强制设为 `"Light"` 或 `"Dark"`；不设置则跟随系统。`position` 以物理像素指定启动位置；不设置则交由窗口管理器决定。',
    font: {
      size: '字号，单位为磅。默认 11.25。',
      ligatures: '使用字体提供的连字来组合相邻的单元格。默认 true。',
      offset: '在每个单元格四周额外增加的间距。默认 { x = 0, y = 0 }。',
      glyph_offset: '让字形在单元格内偏移。默认 { x = 0, y = 0 }。',
      'normal.family': '基础字体。Linux 上默认为 monospace，macOS 上为 Menlo，Windows 上为 Consolas。',
      'bold / italic / bold_italic': '次要字体。省略 family 时，回退到 font.normal.family。',
    },
    colors: {
      scheme:
        '默认配色是 base16 风格。`[colors.primary]` 设置 `foreground` 和 `background`；`[colors.normal]` 和 `[colors.bright]` 设置十六种 ANSI 颜色，省略 `dim` 时会由 `normal` 推导得出。',
      options: [
        '`transparent_background_colors` 会把 `window.opacity` 同样应用到显式设置了背景色的单元格上。默认 false。',
        '`draw_bold_text_with_bright_colors` 使用亮色调色板渲染粗体文本。默认 false。',
        '`[colors.cursor]` 和 `[colors.selection]` 还接受特殊值 `"CellForeground"` 和 `"CellBackground"`。',
        '`[colors.search.matches]`、`[colors.search.focused_match]`、`[colors.hints.start]`、`[colors.hints.end]` 和 `[colors.footer_bar]` 用于设置各种叠加层的样式。',
        '`[[colors.indexed_colors]]` 用于扩展 256 色调色板；索引必须在 16 到 255 之间。',
      ],
    },
    cursor: {
      'scrolling.history': '保留的回滚行数，最多 100000。默认 10000。',
      'scrolling.multiplier': '滚轮每滚一格所滚动的行数。默认 3。',
      'cursor.style.shape': 'Block、Underline 或 Beam。默认 Block。',
      'cursor.style.blinking': 'Never、Off、On 或 Always。默认 Off。',
      'cursor.unfocused_hollow': '窗口失去焦点时绘制空心光标。默认 true。',
      'cursor.thickness': '竖线或下划线光标相对于单元格的粗细，取值 0.0 到 1.0。默认 0.15。',
      'cursor.blink_interval': '闪烁间隔的毫秒数，下限为 10。默认 750。',
      'cursor.blink_timeout': '空闲这么多秒后停止闪烁。0 表示一直闪烁。默认 5。',
    },
    terminal: {
      'terminal.osc52': '通过 OSC 52 访问剪贴板：disabled、onlycopy、onlypaste 或 copypaste。默认 onlycopy。',
      'terminal.osc_notifications': '允许通过 OSC 9 和 OSC 99 发送桌面通知。默认 true。',
      'terminal.shell': '用来代替登录 shell 启动的 shell，格式为 { program, args }。',
      'selection.save_to_clipboard': '自动把选中的内容复制到系统剪贴板。默认 false。',
      'mouse.hide_when_typing': '输入时隐藏鼠标指针。默认 false。',
      'file_drop.paste_remote_path': '当远端的 vvreceive 通过 vvssh 把拖入的文件复制过去后，自动输入它最终落地的远程路径。默认 true。',
      'message_bar.warning_timeout': '警告自动消失前等待的秒数。0 表示一直显示；错误则始终需要手动关闭。默认 5。',
      'bell.duration / animation / color': '可视响铃。duration 为 0 时禁用。默认动画为 Linear，颜色为 #ffffff。',
    },
    mouseBindings:
      '`[[mouse.bindings]]` 下的自定义鼠标绑定会与默认绑定合并，所以 `{ mouse = "Middle", action = "PasteSelection" }` 就能加上中键粘贴，而不必重新定义其他任何绑定。',
    actions:
      '可用的动作包括 `Copy`、`Paste`、`CopySelection`、`PasteSelection`、`ClearSelection`、调整字号的各个动作、`Scroll*` 系列、`SearchForward`、`SearchBackward`、`ToggleFullscreen`、`ToggleMaximized`、`SpawnNewInstance`、`CreateNewWindow`、`CreateNewTab`、`SelectNextTab`、`SelectPreviousTab`、`SelectTab1`–`SelectTab9`、`SelectLastTab`、`ClearHistory`、`Quit`、`Hide`、`Minimize`、`ReceiveChar` 和 `None`。',
    noVi: 'Vivido 没有 vi 模式相关的动作。这是有意为之，而不是遗漏——完整的刻意差异列表见 [Vivido 页面](/vivido)。',
    debugIntro: '诊断选项。大多数人永远用不到。',
    debug: {
      log_level: 'Off、Error、Warn、Info、Debug 或 Trace。默认 Warn。',
      print_events: '记录窗口事件和输入事件。默认 false。',
      persistent_logging: '退出后保留日志文件。默认 false。',
      render_timer: '叠加显示每帧的渲染耗时。默认 false。',
      highlight_damage: '给重绘的区域着色。默认 false。',
    },
    sample: {
      starter: '只写你想改的部分。没写的键保持默认值。',
      bindings:
        '绑定会与默认绑定合并。\n  key  : "a"、具名按键（"F5"、"Home"、"Enter"）或扫描码\n  mods : 用 | 连接的 Control、Shift、Alt/Option、Super/Command，或 "None"\n  mode : AppCursor | AppKeypad | Alt | Search；加前缀 ~ 表示要求该模式关闭\n  然后在 action、chars、command 中恰好指定一个',
      neutralise: '把字符交还给应用程序，从而屏蔽某个默认绑定。',
      alphabet: '标签按键。至少需要两个宽度为 1 的字符。',
      defaultHint: '默认提示：用系统的打开程序打开 URL 和 OSC 8 超链接。',
      macOpen: 'macOS 上为 "open"',
      copyWord: '用 Control+Shift+R 复制任何以 .rs 结尾的单词。',
    },
  },

  tutorials: {
    eyebrow: '教程',
    title: '第一天就值得做的七件事。',
    lede: '每一篇都很短、自成一体，并且以某样东西真实跑起来收尾。如果你刚接触 Vivido，就从头开始。',
    sections: {
      firstImage: '你的第一张图片',
      video: '视频与音频',
      vvssh: '通过 SSH 传输媒体',
      vvmux: '可以分离的会话',
      agent: '让智能体来驱动',
      ci: 'CI 中的终端',
      producer: '编写你自己的生产端',
    },
    firstImage: {
      run: '打开 Vivido，然后对任意一个图片文件运行 Vivi。整个教程就这么多——没有任何设置步骤。',
      formats:
        'PNG 和 JPEG 会以原始字节提交；其他格式会先转换为 RGBA。用 `-z` 缩放显示结果，传入多个文件则可以逐个浏览：`vivi -z 1.5 a.webp b.png`。',
      noEndpoint:
        '如果 Vivi 报告 `VIVID_ENDPOINT_CONTROL` 未设置，说明你不在 Vivido 的 shell 里。这条提示是预期行为，不是 bug——可以用 `--dry-run` 在没有呈现端的情况下检查文件。',
    },
    video: {
      clock:
        '视频和它的音轨共用同一个时钟，所以它们会在短暂的预缓冲之后一起开始，而不会逐渐错位。把视频滚出可视范围，播放就会暂停；滚回来则继续——可见性是协议的一部分，而不是靠猜。',
      canonical:
        'Opus、Vorbis 和 FLAC 采用规范化的、与容器无关的初始化方式，所以同一个文件无论是在本地播放、通过 SSH 播放，还是嵌套在 vvmux 里播放，表现都完全一致。',
    },
    vvssh: {
      start:
        '从 Vivido **内部**的 shell 出发，用 `vvssh` 代替 `ssh`。在远程主机上安装 `vivi`；它不需要显示服务器，也不需要音频设备。',
      arrives: '画面出现在你的笔记本上。没有拷贝任何东西，也没有用到 X 转发。',
      heavyTitle: '当媒体流量很大时',
      heavy:
        '加上 `--separate-media-transport`，即可为大流量媒体另开一条与生命周期绑定的 SSH 传输通道。这样控制流量就有自己独立的连接，大视频不会拖慢你的按键响应。默认仍然只使用单一的私有传输通道。',
      prerequisitesTitle: '前提条件',
      prerequisites: [
        'POSIX 服务器需要启用 `AllowStreamLocalForwarding`。',
        'Windows 服务器需要启用 `AllowTcpForwarding`。',
        '按照设计，非回环的 TCP 端点会被拒绝。',
      ],
    },
    vvmux: {
      start: '启动一个具名会话，干点活，然后走开。服务器会让你的窗格、PTY、回滚缓冲区和媒体轨道继续存活。',
      keys:
        '用 `Ctrl+b %` 和 `Ctrl+b "` 拆分，用 `Ctrl+b` 加方向键移动焦点，用 `Ctrl+b z` 缩放窗格。重新接入时，媒体会依据稳定快照恢复，而不是从头重新播放。',
      token:
        '分离会释放外层窗口的令牌，因此后台守护进程永远不会对一个它看不到的窗口持有权限。在你打算让一个会话连续运行一周之前，这是唯一值得了解的行为。',
    },
    agent: {
      facts:
        '`vivido msg` 的意义在于，智能体可以等待事实。下面的每一步要么针对一个已知状态成功，要么明确地失败——没有哪一步是 sleep 之后听天由命。',
      habits:
        '两个习惯能让这一切变得可靠。第一，去发现窗口 ID，而不是想当然：ID 很小且单调递增，但含义不透明。第二，把 `typing` 和 `key Enter` 分开，因为 `typing` 有意不追加换行。',
      report:
        '`typing`、`key` 和 `paste` 都接受 `--report`，它会打印解析出的窗口、字节数以及写入是否完成。它还会明确说明并未观察到应用程序**读取**了这些输入——写入 PTY 并不等于程序已经读到。',
      sample: {
        find: '找到窗口。绝不要猜测 ID——去发现它。',
        type: '输入命令和按下 Enter 是两个明确分开的步骤。',
        wait: '等待事实，而不是 sleep。',
        settle: '等屏幕稳定下来，再去读它。',
        evidence: '留下证据。',
      },
    },
    ci: {
      headless: '无头模式运行完整的运行时，不需要窗口，也不需要合成器，这让终端变成了一个可测试的组件。截图是真实渲染出来的帧，而不是事后重建的。',
      size: '需要截图时，请使用 `--headless-size 1280x720px`：它会直接设定渲染表面的大小，而不是根据字体度量去推算像素。',
      sample: {
        session: '整个任务共用一个无头会话。--foreground 会把会话的生命周期\n与当前进程绑定，这正是 CI 所需要的。',
        frame: '一帧真实渲染的画面，包含测试产生的所有内嵌媒体。',
      },
    },
    producer: {
      entry:
        '只要你的程序能产生像素，就能把它们放进终端。`PaneSession` 是最小的实用入口：它最多拥有一个呈现内容，并会替你清除上一个。',
      deeper:
        '对于视频、音频或任何长时间存在的内容，需要再深入一层，直接使用会话、表面、轨道和轨道通道。[SDK README](sdk) 涵盖了建立连接时的重试、经过认证的会话恢复以及流量控制契约；如果你要自己实现线路格式，则以 [1.5 规范](spec)为准。',
      sample: {
        rust: '从 Vivido 导出到当前 shell 的环境变量中\n读取 VIVID_ENDPOINT_CONTROL 和根密钥。',
        python: 'PaneSession 最多拥有一个呈现内容；显示新图片时，\n会替你清除上一个节点和表面。',
      },
    },
  },
}

export default zhHans
