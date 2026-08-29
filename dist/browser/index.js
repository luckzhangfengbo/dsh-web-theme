export const name = 'dsh-web-theme';
export const displayName = '墨韵';
export const version = '0.1.0';
export function activate() {
    const css = `
html[data-dsh-skin="moyun"] {
  --moyun-bg-primary: #0a0e18;
  --moyun-accent: #c8b89a;
  --moyun-text: #f5e6c8;
  --moyun-text-muted: #8a9bb5;
  --moyun-border: rgba(200,184,154,0.2);
  --moyun-glass: rgba(15,20,35,0.75);
}
html[data-dsh-skin="moyun"] body {
  color: var(--moyun-text);
}
html[data-dsh-skin="moyun"] body * {
  color-scheme: dark;
}
html[data-dsh-skin="moyun"] ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
html[data-dsh-skin="moyun"] ::-webkit-scrollbar-track {
  background: rgba(15,20,35,0.5);
}
html[data-dsh-skin="moyun"] ::-webkit-scrollbar-thumb {
  background: rgba(200,184,154,0.3);
  border-radius: 3px;
}
html[data-dsh-skin="moyun"] ::-webkit-scrollbar-thumb:hover {
  background: rgba(0,212,170,0.5);
}
html[data-dsh-skin="moyun"] ::selection {
  background: rgba(0,212,170,0.4);
  color: #f0d890;
}
`;
    const style = document.createElement('style');
    style.id = 'dsh-moyun-base-style';
    style.textContent = css;
    document.head.appendChild(style);
    document.documentElement.setAttribute('data-dsh-skin', 'moyun');
}
export function deactivate() {
    const style = document.getElementById('dsh-moyun-base-style');
    if (style)
        style.remove();
    document.documentElement.removeAttribute('data-dsh-skin');
}
export function getInfo() {
    return {
        name: 'dsh-web-theme',
        displayName: '墨韵',
        version: '0.1.0',
        description: '中国水墨画主题',
        features: ['预设主题', '自定义上传', '粒子效果', '模糊控制'],
    };
}
