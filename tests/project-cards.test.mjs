import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const expectedProjects = [
  {
    index: 3,
    zhName: 'AI新译',
    enName: 'AI Xinyi',
    zhTags: '音视频转录 · AI翻译 · 批量处理',
    enTags: 'Audio/Video Transcription · AI Translation · Batch Processing',
    zhDesc: '支持将音视频内容在线转成原文+译文字幕。覆盖转录、翻译、字幕译对和导出四类核心场景，支持SRT/ASS/VTT/SBV多格式导出。',
    enDesc: 'Turns audio and video content into original-language and translated subtitles online. Covers transcription, translation, subtitle pairing, and export, with SRT/ASS/VTT/SBV output.',
    url: 'https://apps.nocmt.com/miman/index.html',
  },
  {
    index: 4,
    zhName: 'Wepak',
    enName: 'Wepak',
    zhTags: 'WebDAV · 文件清理 · 高效管理',
    enTags: 'WebDAV · File Cleanup · Efficient Management',
    zhDesc: '通过WebDAV快速预览目录中的视频和图片文件，上划即可删除，帮助用户高效完成文件清理。轻量低价，即买即用。',
    enDesc: 'Quickly previews video and image files in WebDAV directories; swipe up to delete and clean files efficiently. Lightweight, affordable, and ready to use.',
    url: 'http://xhslink.com/o/4YRDUaZGMjs',
  },
  {
    index: 5,
    zhName: 'Fengling (烽翎)',
    enName: 'Fengling',
    zhTags: '剪贴板同步 · 跨平台 · 后台运行',
    enTags: 'Clipboard Sync · Cross-platform · Background Sync',
    zhDesc: '可能是唯一后台运行的跨系统跨平台同步剪贴板与管理PC文件的工具。支持Windows和macOS、安卓、iOS，剪贴板内容自动后台同步。',
    enDesc: 'Possibly the only background-running tool for cross-system clipboard sync and PC file management. Supports Windows, macOS, Android, and iOS, with clipboard content synced automatically in the background.',
    url: 'https://github.com/nocmt/fengling_publish',
  },
  {
    index: 6,
    zhName: 'DualView',
    enName: 'DualView',
    zhTags: '图片对比 · 双屏同步 · Figma级交互',
    enTags: 'Image Comparison · Dual-screen Sync · Figma-level Interaction',
    zhDesc: '高性能双屏图片对比工具，专为macOS打造。支持Figma级丝滑缩放与平移、双屏像素级同步滚动、以光标为中心的精准缩放。',
    enDesc: 'A high-performance dual-screen image comparison tool built for macOS, with Figma-smooth zooming and panning, pixel-level synchronized scrolling, and precise cursor-centered zoom.',
    url: 'https://github.com/nocmt/dualview',
  },
  {
    index: 7,
    zhName: 'Align',
    enName: 'Align',
    zhTags: '任务管理 · AI辅助 · 健康提醒',
    enTags: 'Task Management · AI-assisted · Wellness Reminders',
    zhDesc: '精简而强大的个人任务管理工具。融合AI自然语言输入、多维度视图（日/周/列表/看板）和健康生活提醒，支持一键部署到Vercel。',
    enDesc: 'A focused yet powerful personal task manager combining AI natural-language input, multiple views (day/week/list/kanban), wellness reminders, and one-click deployment to Vercel.',
    url: 'https://github.com/nocmt/align',
  },
  {
    index: 8,
    zhName: 'ToMic',
    enName: 'ToMic',
    zhTags: '手机变麦克风 · 局域网 · 零安装',
    enTags: 'Phone as Microphone · LAN · No App Install',
    zhDesc: '把手机浏览器变成PC麦克风。通过Wi-Fi传输音频，利用虚拟声卡注入系统输入，无需手机安装任何App。59 ⭐ GitHub。',
    enDesc: 'Turns a phone browser into a PC microphone. Audio streams over Wi-Fi and is injected into the system input through a virtual sound card, with no mobile app required. 59 GitHub stars.',
    url: 'https://github.com/nocmt/toMic',
  },
  {
    index: 9,
    zhName: 'VideoWithCase',
    enName: 'VideoWithCase',
    zhTags: '视频带壳 · 产品演示 · 社媒封面',
    enTags: 'Video Mockups · Product Demos · Social Covers',
    zhDesc: '本地运行的网页工具，把视频快速放进设备外壳中展示。支持手机/平板/笔记本/显示器四类设备壳、多平台尺寸预设和渐变背景。',
    enDesc: 'A local web tool that quickly places videos inside device frames. Supports phone, tablet, laptop, and monitor frames, multi-platform size presets, and gradient backgrounds.',
    url: 'https://github.com/nocmt/videoWithCase',
  },
  {
    index: 10,
    zhName: 'XPort Manager',
    enName: 'XPort Manager',
    zhTags: 'VS Code插件 · 端口管理 · 进程管理',
    enTags: 'VS Code Extension · Port Management · Process Management',
    zhDesc: 'Visual Studio Code 端口管理插件。支持查看TCP/UDP端口、进程名称和PID，可右键停止进程，支持搜索过滤。233次下载。',
    enDesc: 'A Visual Studio Code extension for port management. View TCP/UDP ports, process names, and PIDs, stop processes from the context menu, and filter by search. 233 downloads.',
    url: 'https://marketplace.visualstudio.com/items?itemName=nocmt.xport-manager',
  },
];

for (const project of expectedProjects) {
  assert.match(html, new RegExp(`'project${project.index}-name'\\s*:\\s*'${escapeRegExp(project.zhName)}'`));
  assert.match(html, new RegExp(`'project${project.index}-tags'\\s*:\\s*'${escapeRegExp(project.zhTags)}'`));
  assert.match(html, new RegExp(`'project${project.index}-desc'\\s*:\\s*'${escapeRegExp(project.zhDesc)}'`));
  assert.match(html, new RegExp(`'project${project.index}-name'\\s*:\\s*'${escapeRegExp(project.enName)}'`));
  assert.match(html, new RegExp(`'project${project.index}-tags'\\s*:\\s*'${escapeRegExp(project.enTags)}'`));
  assert.match(html, new RegExp(`'project${project.index}-desc'\\s*:\\s*'${escapeRegExp(project.enDesc)}'`));
  assert.ok(html.includes(project.url), `missing URL for project ${project.index}`);
  assert.ok(html.includes(`nameKey: 'project${project.index}-name'`), `missing project data name key ${project.index}`);
  assert.ok(html.includes(`descKey: 'project${project.index}-desc'`), `missing project data desc key ${project.index}`);
  assert.ok(html.includes(`tagsKey: 'project${project.index}-tags'`), `missing project data tags key ${project.index}`);
}

const projectDataNames = html.match(/nameKey: 'project\d+-name'/g) || [];
assert.equal(projectDataNames.length, 10, 'projectsData should contain ten project cards');

assert.ok(html.includes('#section-1 {\n            height: auto;'), 'projects section should expand naturally');
assert.ok(html.includes('min-height: 100vh;'), 'projects section should keep at least one viewport of height');
assert.doesNotMatch(
  html,
  /#section-1\s+\.content\s*\{[^}]*overflow-y\s*:\s*auto/i,
  'projects content should not create an internal scrollbar',
);
assert.ok(
  html.includes('grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));'),
  'project grid should use wider cards so desktop does not become too dense',
);
assert.ok(html.includes('-webkit-line-clamp: 4;'), 'project card summaries should be clamped for scanability');
assert.match(
  html,
  /@media \(max-width: 640px\)[\s\S]*?\.projects-grid\s*\{[\s\S]*?grid-template-columns:\s*1fr;/,
  'mobile project cards should be one column for readability',
);
assert.match(
  html,
  /\.modal-media\s*\{[^}]*linear-gradient\(135deg,[^}]*padding:\s*clamp\(10px,\s*2vw,\s*18px\);/s,
  'modal preview should use a macOS-style gradient frame',
);
assert.doesNotMatch(html, /\.modal-media\s*\{[^}]*background:\s*#ffffff;/s, 'modal preview frame should not be pure white');
assert.ok(html.includes('object-fit: contain;'), 'modal preview should show media without cropping');
assert.doesNotMatch(html, /object-fit:\s*cover;/, 'modal preview should not crop media');
assert.ok(html.includes('id="modalCarousel"'), 'modal should include carousel controls');
assert.ok(html.includes('function getProjectMediaItems(project)'), 'modal should normalize single and multiple media items');
assert.ok(html.includes("modalCarousel.hidden = mediaItems.length <= 1;"), 'carousel controls should hide for a single image');
assert.ok(html.includes('function showModalMedia(index)'), 'modal should support switching carousel images');
assert.ok(html.includes('#section-0::before'), 'home section should include a dedicated animated background layer');
assert.ok(html.includes('#section-0::after'), 'home section should include a foreground texture/light layer');
assert.ok(html.includes('@keyframes homeSpotlightDrift'), 'dark home spotlight should animate gently');
assert.ok(html.includes('@keyframes homeLightSweep'), 'light home background should animate gently');
assert.match(
  html,
  /\[data-theme="dark"\]\s+#section-0::before\s*\{[^}]*radial-gradient\(ellipse at/s,
  'dark mode home background should use a spotlight-style radial gradient',
);
assert.match(
  html,
  /#section-0::after\s*\{[^}]*linear-gradient\(115deg/s,
  'light mode home background should use a subtle sweeping light treatment',
);
assert.match(
  html,
  /@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?#section-0::before,[\s\S]*?#section-0::after[\s\S]*?animation:\s*none;/,
  'home background motion should respect reduced motion preferences',
);
assert.doesNotMatch(html, /home-pointer/, 'home background should not track the pointer');
assert.doesNotMatch(html, /pointermove/, 'home background should not listen to pointer movement');
assert.match(
  html,
  /#section-0::after\s*\{[^}]*opacity:\s*0\.68;/s,
  'light home animation should be visible enough to notice',
);
assert.match(
  html,
  /@keyframes homeLightSweep\s*\{[\s\S]*?0%,[\s\S]*?100%\s*\{[\s\S]*?opacity:\s*0\.36;[\s\S]*?50%\s*\{[\s\S]*?opacity:\s*0\.78;/,
  'light home sweep should visibly change opacity during animation',
);
assert.ok(html.includes('@keyframes modalContentEnter'), 'modal content should have an opening animation');
assert.ok(html.includes('@keyframes modalMediaEnter'), 'modal media should have a staged opening animation');
assert.ok(html.includes('animation: modalContentEnter'), 'active modal should animate content in');
assert.ok(html.includes('animation: modalMediaEnter'), 'active modal should animate media in');
assert.match(
  html,
  /\.modal-content\s*\{[^}]*max-width:\s*1040px;/s,
  'project modal should be large enough to showcase screenshots',
);
assert.ok(html.includes('let modalCarouselTimer = null;'), 'modal carousel should track a single timer');
assert.ok(html.includes('function stopModalCarouselTimer()'), 'modal carousel should expose timer cleanup');
assert.ok(html.includes('clearInterval(modalCarouselTimer);'), 'modal carousel should clear its timer on cleanup');
assert.ok(html.includes('function startModalCarouselTimer(mediaItems)'), 'modal carousel should auto-play multi-image previews');
assert.ok(html.includes('stopModalCarouselTimer();\n                if (mediaItems.length <= 1)'), 'modal carousel should stop old timers before deciding whether to autoplay');
assert.ok(html.includes('modalCarouselTimer = setInterval'), 'modal carousel should start an interval for multi-image previews');
assert.ok(html.includes('stopModalCarouselTimer();\n                modalOverlay.classList.remove'), 'closing the modal should clear the carousel timer');
assert.match(
  html,
  /@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?\.modal-overlay\.active \.modal-content,[\s\S]*?\.modal-overlay\.active \.modal-media[\s\S]*?animation:\s*none;/,
  'modal opening animation should respect reduced motion preferences',
);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
