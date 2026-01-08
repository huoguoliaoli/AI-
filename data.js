const aiSites = [
  // AI工具
  {
    id: 1,
    name: "ChatGPT",
    cover: "images/chatgpt.png",
    desc: "强大的对话式 AI",
    url: "https://chat.openai.com",
    category: "chat"
  },
  {
    id: 2,
    name: "Midjourney",
    cover: "images/midjourney.png",
    desc: "AI 图像生成工具",
    url: "https://www.midjourney.com",
    category: "image"
  },
  {
    id: 3,
    name: "Notion AI",
    cover: "images/notion.png",
    desc: "智能写作与笔记",
    url: "https://www.notion.so",
    category: "other"
  },
  // 设计软件
  {
    id: 4,
    name: "After Effects 2024",
    cover: "images/After Effects 2024 v24.4.1.002 Win_thumbnail.png",
    desc: "专业视频特效与动画制作软件",
    url: "#",
    category: "design"
  },
  {
    id: 5,
    name: "Illustrator 2024",
    cover: "images/Illustrator 2024 v28.5.0.132 Win_thumbnail.png",
    desc: "专业矢量图形设计工具",
    url: "#",
    category: "design"
  },
  {
    id: 6,
    name: "InDesign",
    cover: "images/InDesign - 快捷方式.png",
    desc: "专业排版与出版设计软件",
    url: "#",
    category: "design"
  },
  {
    id: 7,
    name: "Media Encoder 2024",
    cover: "images/Media Encoder 2024.png",
    desc: "专业视频编码与格式转换工具",
    url: "#",
    category: "design"
  },
  {
    id: 8,
    name: "Photoshop",
    cover: "images/Photoshop - 快捷方式.png",
    desc: "专业图像编辑与处理软件",
    url: "#",
    category: "design"
  },
  {
    id: 9,
    name: "Premiere Pro 2024",
    cover: "images/Premiere Pro 2024 v24.4.1.002 Win_thumbnail.png",
    desc: "专业视频剪辑与后期制作软件",
    url: "#",
    category: "design"
  },
  {
    id: 10,
    name: "Blender",
    cover: "images/Blender.png",
    desc: "开源3D建模与动画软件",
    url: "#",
    category: "design"
  },
  {
    id: 11,
    name: "fSpy",
    cover: "images/fSpy-1.0.3-win_thumbnail.png",
    desc: "透视匹配与相机匹配工具",
    url: "#",
    category: "design"
  },
  // 3D建模软件
  {
    id: 12,
    name: "3ds Max 2021",
    cover: "images/3ds Max 2021.png",
    desc: "专业3D建模、动画和渲染软件",
    url: "#",
    category: "3d"
  },
  {
    id: 13,
    name: "Rhinoceros",
    cover: "images/Rhinoceros 8.22.25217.12451 x64_thumbnail.png",
    desc: "专业3D建模软件",
    url: "#",
    category: "3d"
  },
  {
    id: 14,
    name: "SketchUp 2020",
    cover: "images/SketchUp 2020.2_thumbnail.png",
    desc: "易用的3D建模软件",
    url: "#",
    category: "3d"
  },
  {
    id: 15,
    name: "SketchUp 2025",
    cover: "images/SU2025_thumbnail.png",
    desc: "SketchUp 2025 版本",
    url: "#",
    category: "3d"
  },
  // 建筑设计软件
  {
    id: 16,
    name: "Archicad 28",
    cover: "images/Archicad 28.png",
    desc: "建筑信息建模(BIM)软件",
    url: "#",
    category: "architecture"
  },
  {
    id: 17,
    name: "AutoCAD 2020",
    cover: "images/AutoCAD 2020.png",
    desc: "专业CAD制图软件",
    url: "#",
    category: "architecture"
  },
  {
    id: 18,
    name: "Revit 2018",
    cover: "images/Revit 2018_thumbnail.png",
    desc: "建筑信息建模(BIM)软件",
    url: "#",
    category: "architecture"
  },
  {
    id: 19,
    name: "Revit 2020",
    cover: "images/REVIT 2020_thumbnail.png",
    desc: "Revit 2020 版本",
    url: "#",
    category: "architecture"
  },
  {
    id: 20,
    name: "天正建筑V9.0",
    cover: "images/T20天正建筑V9.0.png",
    desc: "建筑设计辅助软件",
    url: "#",
    category: "architecture"
  },
  {
    id: 21,
    name: "浩辰CAD",
    cover: "images/浩辰CAD_thumbnail.png",
    desc: "CAD制图软件",
    url: "#",
    category: "architecture"
  },
  {
    id: 22,
    name: "SU版本转换器",
    cover: "images/SU版本转换器_thumbnail.png",
    desc: "SketchUp文件版本转换工具",
    url: "#",
    category: "architecture"
  },
  {
    id: 23,
    name: "Pathfinder 2024",
    cover: "images/Pathfinder2024.1_thumbnail.png",
    desc: "人员疏散模拟软件",
    url: "#",
    category: "architecture"
  },
  // 媒体播放器
  {
    id: 24,
    name: "PotPlayer",
    cover: "images/PotPlayerSetup64_thumbnail.png",
    desc: "强大的视频播放器",
    url: "#",
    category: "media"
  },
  {
    id: 25,
    name: "EVPlayer",
    cover: "images/EVPlayer_v3.4.9_thumbnail.png",
    desc: "视频播放器",
    url: "#",
    category: "media"
  },
  {
    id: 26,
    name: "网易云音乐",
    cover: "images/NeteaseCloudMusic_Music_official_3.0.1.202965_64_thumbnail.png",
    desc: "音乐播放与发现平台",
    url: "#",
    category: "media"
  },
  // 工具软件
  {
    id: 27,
    name: "Chrome",
    cover: "images/ChromeSetup_thumbnail.png",
    desc: "Google Chrome 浏览器",
    url: "#",
    category: "tools"
  },
  {
    id: 28,
    name: "百度网盘",
    cover: "images/BaiduNetdisk_7.42.0.5_thumbnail.png",
    desc: "云存储与文件同步",
    url: "#",
    category: "tools"
  },
  {
    id: 29,
    name: "夸克网盘",
    cover: "images/QuarkCloudDrive_v3.2.7_release2_(Build1787741-20240524182734)_thumbnail.png",
    desc: "云端存储服务",
    url: "#",
    category: "tools"
  },
  {
    id: 30,
    name: "Clash",
    cover: "images/Clash.for.Windows.Setup.0.19.29_thumbnail.png",
    desc: "网络代理工具",
    url: "#",
    category: "tools"
  },
  {
    id: 31,
    name: "ToDesk",
    cover: "images/ToDesk_thumbnail.png",
    desc: "远程桌面控制工具",
    url: "#",
    category: "tools"
  },
  {
    id: 32,
    name: "QtScrcpy",
    cover: "images/QtScrcpy-win-x64-v3.0.1_thumbnail.png",
    desc: "Android手机投屏工具",
    url: "#",
    category: "tools"
  },
  {
    id: 33,
    name: "Eagle",
    cover: "images/Eagle-4.0-x64-build1_thumbnail.png",
    desc: "图片收藏与管理工具",
    url: "#",
    category: "tools"
  },
  {
    id: 34,
    name: "Obsidian",
    cover: "images/Obsidian.1.5.12_thumbnail.png",
    desc: "强大的笔记软件",
    url: "#",
    category: "tools"
  },
  {
    id: 35,
    name: "Notion Calendar",
    cover: "images/Notion Calendar Setup 1.117.0 - x64_thumbnail.png",
    desc: "Notion日历应用",
    url: "#",
    category: "tools"
  },
  {
    id: 36,
    name: "文件转换器",
    cover: "images/FileConverter.exe.png",
    desc: "文件格式转换工具",
    url: "#",
    category: "tools"
  },
  {
    id: 37,
    name: "批量重命名",
    cover: "images/renamer-7.7_thumbnail.png",
    desc: "文件批量重命名工具",
    url: "#",
    category: "tools"
  },
  {
    id: 38,
    name: "SpaceSniffer",
    cover: "images/SpaceSniffer.exe",
    desc: "磁盘空间分析工具",
    url: "#",
    category: "tools"
  },
  {
    id: 39,
    name: "图标提取转换器",
    cover: "images/图标提取转换器(Quick Any2Ico)3.2.0.0汉化版_thumbnail.png",
    desc: "图标提取与转换工具",
    url: "#",
    category: "tools"
  },
  {
    id: 40,
    name: "英伟达显卡驱动",
    cover: "images/英伟达显卡驱动_thumbnail.png",
    desc: "NVIDIA显卡驱动",
    url: "#",
    category: "tools"
  },
  {
    id: 41,
    name: "搜狗输入法",
    cover: "images/搜狗输入法14.9.0.9966去广告精简优化版_thumbnail.png",
    desc: "中文输入法",
    url: "#",
    category: "tools"
  },
  // 视频处理
  {
    id: 42,
    name: "ScreenToGif",
    cover: "images/ScreenToGif_thumbnail.png",
    desc: "屏幕录制与GIF制作工具",
    url: "#",
    category: "video"
  },
  {
    id: 43,
    name: "Subtitle Edit",
    cover: "images/Subtitle Edit403整合版_thumbnail.png",
    desc: "字幕编辑工具",
    url: "#",
    category: "video"
  },
  // 其他
  {
    id: 44,
    name: "bilidown",
    cover: "images/bilidown Setup 1.1.7_thumbnail.png",
    desc: "B站视频下载工具",
    url: "#",
    category: "other"
  },
  {
    id: 45,
    name: "ncmdump",
    cover: "images/ncmdump-gui_thumbnail.png",
    desc: "网易云音乐格式转换工具",
    url: "#",
    category: "other"
  },
  {
    id: 46,
    name: "QGIS",
    cover: "images/QGIS-OSGeo4W-3.36.3-2_thumbnail.png",
    desc: "开源地理信息系统",
    url: "#",
    category: "other"
  }
];
