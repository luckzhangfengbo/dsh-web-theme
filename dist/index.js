import * as host from './host/index.js';
export const name = 'dsh-web-theme';
export function apply(ctx, config) {
    console.log('[墨韵主题] 宿主端已激活');
    const resolved = {
        activeTheme: '01',
        customImage: '',
        blurAmount: 0,
        particleDensity: 80,
        enableParticles: true,
        autoActivate: true,
    };
    ctx.inject(['webServer', 'loader'], (hostCtx) => {
        const webServer = hostCtx.webServer;
        console.log('[墨韵主题] webServer 注入完成:', !!webServer);
        if (webServer) {
            host.createThemeRoutes(webServer);
            console.log('[墨韵主题] 路由已创建');
            try {
                host.installMoyunSettings(ctx, resolved);
                console.log('[墨韵主题] 设置已注册');
            }
            catch (e) {
                console.log('[墨韵主题] 设置注册失败:', e);
            }
        }
    });
}
export default { name, apply };
