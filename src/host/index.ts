import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function resolvePackageRoot(): string {
  let dir = __dirname;
  for (let i = 0; i < 5; i++) {
    if (existsSync(join(dir, 'package.json'))) return dir;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return __dirname;
}

const pkgRoot = resolvePackageRoot();
const themesDir = join(pkgRoot, 'themes');
const clientDir = join(pkgRoot, 'client');

const PRESET_THEMES = [
  { id: '01', name: '远山孤松', description: '远山淡影，苍松独立', color: '#0a0e18', accent: '#c8b89a', icon: '松' },
  { id: '02', name: '烟雨江南', description: '水乡烟雨，灯影朦胧', color: '#080c16', accent: '#d4a060', icon: '舟' },
  { id: '03', name: '竹影清风', description: '翠竹摇曳，清风徐来', color: '#060a12', accent: '#2a3545', icon: '竹' },
  { id: '04', name: '梅傲霜雪', description: '梅花傲雪，枝干虬曲', color: '#080c16', accent: '#c4565a', icon: '梅' },
  { id: '05', name: '山水留白', description: '留白写意，远山孤亭', color: '#0a0e18', accent: '#c8b89a', icon: '山' },
];

export function getPresetThemes() {
  return PRESET_THEMES;
}

export function getThemePng(themeId: string): Buffer | null {
  const theme = PRESET_THEMES.find((t) => t.id === themeId);
  if (!theme) return null;
  const pngPath = join(themesDir, `${themeId}.png`);
  try {
    return readFileSync(pngPath);
  } catch {
    return null;
  }
}

export function getThemeList() {
  return PRESET_THEMES.map((t) => ({
    id: t.id,
    name: t.name,
    description: t.description,
    color: t.color,
    accent: t.accent,
    icon: t.icon,
    pngUrl: `/api/dsh-web-theme/themes/${t.id}.png`,
  }));
}

export function createThemeRoutes(webServer: any) {
  webServer.register({
    kind: 'exact',
    path: '/api/dsh-web-theme/themes',
    handler: async (_req: any, res: any) => {
      const data = JSON.stringify(getThemeList());
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    },
  });

  for (const theme of PRESET_THEMES) {
    const themeId = theme.id;
    webServer.register({
      kind: 'exact',
      path: `/api/dsh-web-theme/themes/${themeId}.png`,
      handler: async (_req: any, res: any) => {
        const png = getThemePng(themeId);
        if (png) {
          res.writeHead(200, {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=86400',
          });
          res.end(png);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not found');
        }
      },
    });
  }

  webServer.register({
    kind: 'exact',
    path: '/api/dsh-web-theme/config',
    handler: async (_req: any, res: any) => {
      const data = JSON.stringify({
        defaultTheme: '01',
        themes: getThemeList(),
        features: {
          customUpload: true,
          presetThemes: true,
          blurControl: true,
          particles: true,
        },
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    },
  });

  webServer.register({
    kind: 'exact',
    path: '/api/dsh-web-theme/res/i18n.js',
    handler: async (_req: any, res: any) => {
      try {
        const content = readFileSync(join(clientDir, 'i18n.js'), 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    },
  });

  webServer.register({
    kind: 'exact',
    path: '/api/dsh-web-theme/res/themes.js',
    handler: async (_req: any, res: any) => {
      try {
        const content = readFileSync(join(clientDir, 'themes.js'), 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    },
  });
}

export async function installMoyunSettings(ctx: any, resolved: any) {
  try {
    const { installSettingsSection, settingsNamespace } = await import('@deepseek-ai/dsh-settings');
    const Schema = (await import('@deepseek-ai/schemastery')).default;

    const MOYUN_NS = settingsNamespace('dsh-web-theme');

    const MoyunSettings = Schema.object({
      activeTheme: Schema.string().default('01'),
      customImage: Schema.string().default(''),
      blurAmount: Schema.number().default(0),
      particleDensity: Schema.number().default(80),
      enableParticles: Schema.boolean().default(true),
      autoActivate: Schema.boolean().default(true),
    });

    const entry = {
      activeTheme: '01',
      customImage: '',
      blurAmount: 0,
      particleDensity: 80,
      enableParticles: true,
      autoActivate: true,
    };

    let source = () => entry;

    installSettingsSection(ctx, MOYUN_NS, MoyunSettings, entry, {
      setSource: (current: any) => {
        source = current;
      },
      onChange: () => {
        const s = source();
        resolved.activeTheme = s.activeTheme;
        resolved.customImage = s.customImage;
        resolved.blurAmount = s.blurAmount;
        resolved.particleDensity = s.particleDensity;
        resolved.enableParticles = s.enableParticles;
        resolved.autoActivate = s.autoActivate;
      },
    });
  } catch (e) {
    console.log('[墨韵主题] 设置注册跳过:', e);
  }
}

export function getInjectionScripts() {
  const clientPath = join(pkgRoot, 'client', 'client.js');
  let clientJs = '';
  try {
    clientJs = readFileSync(clientPath, 'utf-8');
  } catch {
    clientJs = `console.warn('[墨韵主题] 客户端脚本未找到: ${clientPath}');`;
  }

  const themesJs = `
(function() {
  window.dshMoyunThemes = ${JSON.stringify(getThemeList())};
  window.dshMoyunConfig = {
    defaultTheme: '01',
    features: {
      customUpload: true,
      presetThemes: true,
      blurControl: true,
      particles: true,
    },
  };
})();
`;
  return [
    { kind: 'script', placement: 'head', text: themesJs },
    { kind: 'script', placement: 'head', text: clientJs },
  ];
}

export function getHostInfo() {
  return {
    name: 'dsh-web-theme',
    displayName: '墨韵',
    version: '0.1.0',
    type: 'theme',
    author: '橙虚得猿',
    description: '墨韵 · 中国水墨画风格主题 · 8 种语言支持',
    themes: PRESET_THEMES.map((t) => ({ id: t.id, name: t.name, description: t.description })),
  };
}