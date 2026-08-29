window.__ModuleLoader__.load({
    id: 'dsh-web-theme',
    factory: function(require) {
        'use strict';

        var module = { exports: {} };
        var exports = module.exports;

        var react = require('react');

        var SETTINGS_NS = 'settings.moyun';
        var STORAGE_KEY = 'dsh-web-theme:settings';
        var CUSTOM_IMAGE_KEY = 'dsh-web-theme:custom-image';
        var COMBINED_OVERRIDE_SOURCE = 'dsh-web-theme-combined';
        var DB_NAME = 'dsh-web-theme-db';
        var DB_STORE = 'images';

        var zh = {
            'nav': '主题',
            'title': '墨韵主题',
            'subtitle': '中国水墨画风格主题，营造淡雅悠远的意境',
            'presetTitle': '预设主题',
            'customTitle': '自定义图片',
            'uploadHint': '点击或拖拽上传图片',
            'uploadDesc': '支持 PNG / JPG · 自动压缩优化',
            'removeCustom': '移除',
            'blurTitle': '背景模糊',
            'opacityTitle': '背景透明度',
            'particlesTitle': '粒子效果',
            'enableParticles': '启用粒子',
            'density': '密度',
            'themeActivated': '主题已激活',
            'customImage': '自定义图片',
            'uploaded': '已上传并启用',
            'pleaseSelect': '请选择图片文件',
            'processFailed': '图片处理失败，请尝试其他文件'
        };

        var en = {
            'nav': 'Theme',
            'title': 'MoYun Theme',
            'subtitle': 'Chinese ink painting style theme',
            'presetTitle': 'Preset Themes',
            'customTitle': 'Custom Image',
            'uploadHint': 'Click or drag to upload',
            'uploadDesc': 'PNG / JPG · Auto compressed',
            'removeCustom': 'Remove',
            'blurTitle': 'Background Blur',
            'opacityTitle': 'Background Opacity',
            'particlesTitle': 'Particle Effects',
            'enableParticles': 'Enable Particles',
            'density': 'Density',
            'themeActivated': 'Theme Activated',
            'customImage': 'Custom Image',
            'uploaded': 'Uploaded and active',
            'pleaseSelect': 'Please select an image file',
            'processFailed': 'Image processing failed, try another file'
        };

        var ja = {
            'nav': 'テーマ', 'title': '墨韻テーマ',
            'subtitle': '中国水墨画スタイルのテーマ',
            'presetTitle': 'プリセットテーマ', 'customTitle': 'カスタム画像',
            'uploadHint': 'クリックまたはドラッグしてアップロード',
            'uploadDesc': 'PNG / JPG · 自動圧縮', 'removeCustom': '削除',
            'blurTitle': '背景ぼかし', 'opacityTitle': '背景透明度',
            'particlesTitle': 'パーティクル効果', 'enableParticles': 'パーティクルを有効化',
            'density': '密度', 'themeActivated': 'テーマが適用されました',
            'customImage': 'カスタム画像', 'uploaded': 'アップロード済み',
            'pleaseSelect': '画像ファイルを選択してください',
            'processFailed': '画像処理に失敗しました。別のファイルをお試しください'
        };

        var ko = {
            'nav': '테마', 'title': '묘운 테마',
            'subtitle': '중국 수묵화 스타일 테마',
            'presetTitle': '프리셋 테마', 'customTitle': '사용자 지정 이미지',
            'uploadHint': '클릭하거나 드래그하여 업로드',
            'uploadDesc': 'PNG / JPG · 자동 압축', 'removeCustom': '제거',
            'blurTitle': '배경 흐림', 'opacityTitle': '배경 투명도',
            'particlesTitle': '입자 효과', 'enableParticles': '입자 켜기',
            'density': '밀도', 'themeActivated': '테마가 적용되었습니다',
            'customImage': '사용자 지정 이미지', 'uploaded': '업로드됨',
            'pleaseSelect': '이미지 파일을 선택해 주세요',
            'processFailed': '이미지 처리에 실패했습니다. 다른 파일을 시도해 주세요'
        };

        var es = {
            'nav': 'Tema', 'title': 'Tema MoYun',
            'subtitle': 'Tema de estilo pintura a tinta china',
            'presetTitle': 'Temas preestablecidos', 'customTitle': 'Imagen personalizada',
            'uploadHint': 'Haz clic o arrastra para subir',
            'uploadDesc': 'PNG / JPG · Compresión automática', 'removeCustom': 'Eliminar',
            'blurTitle': 'Desenfoque de fondo', 'opacityTitle': 'Opacidad de fondo',
            'particlesTitle': 'Efectos de partículas', 'enableParticles': 'Activar partículas',
            'density': 'Densidad', 'themeActivated': 'Tema activado',
            'customImage': 'Imagen personalizada', 'uploaded': 'Subida y activa',
            'pleaseSelect': 'Por favor selecciona un archivo de imagen',
            'processFailed': 'Error al procesar la imagen, prueba con otro archivo'
        };

        var fr = {
            'nav': 'Thème', 'title': 'Thème MoYun',
            'subtitle': 'Thème style peinture à l\'encre chinoise',
            'presetTitle': 'Thèmes préréglés', 'customTitle': 'Image personnalisée',
            'uploadHint': 'Cliquez ou glissez pour téléverser',
            'uploadDesc': 'PNG / JPG · Compression automatique', 'removeCustom': 'Supprimer',
            'blurTitle': 'Flou d\'arrière-plan', 'opacityTitle': 'Opacité de l\'arrière-plan',
            'particlesTitle': 'Effets de particules', 'enableParticles': 'Activer les particules',
            'density': 'Densité', 'themeActivated': 'Thème activé',
            'customImage': 'Image personnalisée', 'uploaded': 'Téléversée et active',
            'pleaseSelect': 'Veuillez sélectionner un fichier image',
            'processFailed': 'Échec du traitement de l\'image, veuillez essayer un autre fichier'
        };

        var de = {
            'nav': 'Thema', 'title': 'MoYun Thema',
            'subtitle': 'Chinesisches Tuschmalerei-Thema',
            'presetTitle': 'Voreingestellte Themen', 'customTitle': 'Benutzerdefiniertes Bild',
            'uploadHint': 'Klicken oder ziehen zum Hochladen',
            'uploadDesc': 'PNG / JPG · Automatische Komprimierung', 'removeCustom': 'Entfernen',
            'blurTitle': 'Hintergrundunschärfe', 'opacityTitle': 'Hintergrunddeckkraft',
            'particlesTitle': 'Partikeleffekte', 'enableParticles': 'Partikel aktivieren',
            'density': 'Dichte', 'themeActivated': 'Thema aktiviert',
            'customImage': 'Benutzerdefiniertes Bild', 'uploaded': 'Hochgeladen und aktiv',
            'pleaseSelect': 'Bitte wählen Sie eine Bilddatei',
            'processFailed': 'Bildverarbeitung fehlgeschlagen, bitte andere Datei versuchen'
        };

        var ru = {
            'nav': 'Тема', 'title': 'Тема МоЮнь',
            'subtitle': 'Тема в стиле китайской туши',
            'presetTitle': 'Предустановленные темы', 'customTitle': 'Пользовательское изображение',
            'uploadHint': 'Нажмите или перетащите для загрузки',
            'uploadDesc': 'PNG / JPG · Автосжатие', 'removeCustom': 'Удалить',
            'blurTitle': 'Размытие фона', 'opacityTitle': 'Прозрачность фона',
            'particlesTitle': 'Эффекты частиц', 'enableParticles': 'Включить частицы',
            'density': 'Плотность', 'themeActivated': 'Тема активирована',
            'customImage': 'Пользовательское изображение', 'uploaded': 'Загружено и активно',
            'pleaseSelect': 'Пожалуйста, выберите файл изображения',
            'processFailed': 'Ошибка обработки изображения, попробуйте другой файл'
        };

        var THEMES = [
            { id: '01', name: '远山孤松', nameEn: 'Mountains & Pine', nameJa: '遠山の松', nameKo: '산과 소나무', nameEs: 'Montañas y Pino', nameFr: 'Montagnes et Pin', nameDe: 'Berge & Kiefer', nameRu: 'Горы и сосна', color: '#0a0e18', accent: '#c8b89a', icon: '松', desc: '远山淡影，苍松独立', descEn: 'Distant mountains, solitary pine', descJa: '遠山に浮かぶ松', descKo: '멀리 있는 산과 홀로 선 소나무', descEs: 'Montañas lejanas, pino solitario', descFr: 'Montagnes lointaines, pin solitaire', descDe: 'Ferne Berge, einsame Kiefer', descRu: 'Дальние горы, одинокая сосна' },
            { id: '02', name: '烟雨江南', nameEn: 'Misty Jiangnan', nameJa: '烟雨の江南', nameKo: '안개 강남', nameEs: 'Jiangnan neblinoso', nameFr: 'Jiangnan brumeux', nameDe: 'Nebliges Jiangnan', nameRu: 'Туманный Цзяннань', color: '#080c16', accent: '#d4a060', icon: '舟', desc: '水乡烟雨，灯影朦胧', descEn: 'Misty waterside, lantern glow', descJa: '水郷の灯り', descKo: '물마을의 등불', descEs: 'Orilla neblina, linterna', descFr: 'Rive brumeuse, lanterne', descDe: 'Nebliges Ufer, Laterne', descRu: 'Туманный берег, фонари' },
            { id: '03', name: '竹影清风', nameEn: 'Bamboo Breeze', nameJa: '竹と風', nameKo: '대나무 바람', nameEs: 'Bambú y viento', nameFr: 'Bambou et vent', nameDe: 'Bambus & Wind', nameRu: 'Бамбук и ветер', color: '#060a12', accent: '#2a3545', icon: '竹', desc: '翠竹摇曳，清风徐来', descEn: 'Bamboo swaying, gentle breeze', descJa: '風に揺れる竹', descKo: '바람에 흔들리는 대나무', descEs: 'Bambú meciéndose, brisa suave', descFr: 'Bambou qui se balance, brise douce', descDe: 'Schwankender Bambus, sanfte Brise', descRu: 'Бамбук качается, тихий ветер' },
            { id: '04', name: '梅傲霜雪', nameEn: 'Plum in Snow', nameJa: '雪の梅', nameKo: '눈속의 매화', nameEs: 'Ciruelo en nieve', nameFr: 'Prunier en neige', nameDe: 'Pflaumenbaum im Schnee', nameRu: 'Слива в снегу', color: '#080c16', accent: '#c4565a', icon: '梅', desc: '梅花傲雪，枝干虬曲', descEn: 'Plum blossoms in snow', descJa: '雪に映える梅', descKo: '눈속의 매화꽃', descEs: 'Flores de ciruelo en nieve', descFr: 'Fleurs de prunier sur neige', descDe: 'Pflaumenblüten im Schnee', descRu: 'Цветы сливы в снегу' },
            { id: '05', name: '山水留白', nameEn: 'Landscape White', nameJa: '山水の余白', nameKo: '수묵 여백', nameEs: 'Paisaje en blanco', nameFr: 'Paysage en blanc', nameDe: 'Landschaft in Weiß', nameRu: 'Пейзаж в белом', color: '#0a0e18', accent: '#c8b89a', icon: '山', desc: '留白写意，远山孤亭', descEn: 'Minimalist landscape', descJa: '余白の美', descKo: '여백의 미', descEs: 'Paisaje minimalista', descFr: 'Paysage minimaliste', descDe: 'Minimalistische Landschaft', descRu: 'Минималистичный пейзаж' }
        ];

        function getLocalizedField(tm, field) {
            var map = {};
            map['zh'] = tm[field]; map['en'] = tm[field + 'En'];
            map['ja'] = tm[field + 'Ja']; map['ko'] = tm[field + 'Ko'];
            map['es'] = tm[field + 'Es']; map['fr'] = tm[field + 'Fr'];
            map['de'] = tm[field + 'De']; map['ru'] = tm[field + 'Ru'];
            return function(locale) {
                return map[locale] || map['en'] || map['zh'] || tm[field];
            };
        }

        var _db = null;
        function openDB() {
            if (_db) return Promise.resolve(_db);
            return new Promise(function(resolve, reject) {
                var req = indexedDB.open(DB_NAME, 1);
                req.onupgradeneeded = function(e) {
                    var db = e.target.result;
                    if (!db.objectStoreNames.contains(DB_STORE)) {
                        db.createObjectStore(DB_STORE);
                    }
                };
                req.onsuccess = function(e) { _db = e.target.result; resolve(_db); };
                req.onerror = function(e) { reject(e.target.error); };
            });
        }
        function saveToDB(key, value) {
            return openDB().then(function(db) {
                return new Promise(function(resolve, reject) {
                    var tx = db.transaction(DB_STORE, 'readwrite');
                    tx.objectStore(DB_STORE).put(value, key);
                    tx.oncomplete = function() { resolve(); };
                    tx.onerror = function(e) { reject(e.target.error); };
                });
            });
        }
        function loadFromDB(key) {
            return openDB().then(function(db) {
                return new Promise(function(resolve, reject) {
                    var tx = db.transaction(DB_STORE, 'readonly');
                    var req = tx.objectStore(DB_STORE).get(key);
                    req.onsuccess = function() { resolve(req.result || null); };
                    req.onerror = function(e) { reject(e.target.error); };
                });
            });
        }
        function deleteFromDB(key) {
            return openDB().then(function(db) {
                return new Promise(function(resolve, reject) {
                    var tx = db.transaction(DB_STORE, 'readwrite');
                    tx.objectStore(DB_STORE).delete(key);
                    tx.oncomplete = function() { resolve(); };
                    tx.onerror = function(e) { reject(e.target.error); };
                });
            });
        }

        function buildSkinDefinition(tm) {
            return {
                id: tm.id,
                colorScheme: 'dark',
                tokens: {
                    '--dsw-alias-bg-base': tm.color,
                    '--dsw-alias-bg-layer-1': tm.color,
                    '--dsw-alias-bg-layer-2': 'rgba(15,20,35,0.85)',
                    '--dsw-alias-bg-layer-3': tm.color,
                    '--dsw-alias-bg-module-platform': tm.color,
                    '--dsw-alias-bg-overlay': 'rgba(15,20,35,0.86)',
                    '--dsw-specific-input-major': 'rgba(255,255,255,0.06)',
                    '--dsw-specific-tip': 'rgba(20,25,35,0.9)',
                    '--dsw-alias-border-l1': 'rgba(200,184,154,0.10)',
                    '--dsw-alias-border-l2': 'rgba(200,184,154,0.18)',
                    '--dsw-alias-label-primary': '#f5e6c8',
                    '--dsw-alias-label-secondary': '#8a9bb5',
                    '--dsw-alias-label-tertiary': '#6a7a95',
                    '--dsw-alias-brand-primary': tm.accent,
                    '--dsw-specific-bubble': 'rgba(25,30,45,0.9)',
                    '--dsw-specific-bubble-highlight': 'rgba(200,184,154,0.12)',
                    '--dsw-specific-selector': 'rgba(255,255,255,0.08)',
                    '--dsw-alias-brand-text': '#0a0e18',
                    '--dsw-alias-button-primary-hover': tm.accent,
                    '--dsw-alias-button-primary-dimmed': 'rgba(200,184,154,0.14)',
                    '--dsw-alias-state-business-primary': tm.accent,
                    '--dsw-alias-state-business-tertiary': 'rgba(200,184,154,0.14)',
                    '--dsw-alias-interactive-bg-hover': 'rgba(200,184,154,0.14)',
                    '--dsw-alias-interactive-bg-active': 'rgba(200,184,154,0.22)',
                    '--dsw-alias-markdown-code-block': 'rgba(0,0,0,0.35)',
                    '--dsw-alias-markdown-inline-code': 'rgba(255,255,255,0.09)',
                    '--dsw-specific-sidebar-fill': 'rgba(10,14,24,0.92)',
                    '--dsw-specific-sidebar-nav-item-active': 'rgba(200,184,154,0.12)',
                    '--dsw-specific-sidebar-nav-item-hover': 'rgba(255,255,255,0.05)',
                    '--dsw-alias-scrollbar-bg-l1': 'rgba(200,184,154,0.12)',
                    '--dsw-alias-scrollbar-bg-l2': 'rgba(200,184,154,0.18)',
                    '--dsw-alias-scrollbar-hover-l1': 'rgba(200,184,154,0.25)',
                    '--dsw-alias-scrollbar-hover-l2': 'rgba(200,184,154,0.25)'
                }
            };
        }

        var SKIN_DEFS = [];
        for (var i = 0; i < THEMES.length; i++) {
            SKIN_DEFS.push(buildSkinDefinition(THEMES[i]));
        }

        var state = {
            activeTheme: '01',
            customImage: '',
            blurAmount: 0,
            bgOpacity: 0.8,
            enableParticles: true,
            particleDensity: 80
        };

        var particleSystem = null;
        var wallpaperEl = null;
        var registeredSkinDisposers = [];
        var combinedOverrideDispose = null;
        var wallpaperTokenOverrides = {};

        function loadState() {
            try {
                var raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    var p = JSON.parse(raw);
                    state.activeTheme = p.activeTheme || state.activeTheme;
                    state.customImage = p.customImage || '';
                    state.blurAmount = p.blurAmount || 0;
                    state.bgOpacity = p.bgOpacity !== undefined ? p.bgOpacity : 0.8;
                    state.enableParticles = p.enableParticles !== false;
                    state.particleDensity = p.particleDensity || 80;
                }
            } catch (e) {}
        }

        function saveState() {
            try {
                var toSave = {
                    activeTheme: state.activeTheme,
                    customImage: state.customImage ? 'custom' : '',
                    blurAmount: state.blurAmount,
                    bgOpacity: state.bgOpacity,
                    enableParticles: state.enableParticles,
                    particleDensity: state.particleDensity || 80
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
            } catch (e) {}
        }

        function getCurrentTheme() {
            for (var i = 0; i < THEMES.length; i++) {
                if (THEMES[i].id === state.activeTheme) return THEMES[i];
            }
            return THEMES[0];
        }

        function getThemeBgUrl(themeId) {
            return '/api/dsh-web-theme/themes/' + themeId + '.png';
        }

        function toRgba(color, alpha) {
            var hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(color.trim());
            if (hex !== null) {
                var digits = hex[1];
                if (digits.length === 3) digits = digits.split('').map(function(c) { return c + c; }).join('');
                var n = parseInt(digits, 16);
                return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + alpha + ')';
            }
            var rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(color.trim());
            if (rgb !== null) return 'rgba(' + rgb[1] + ',' + rgb[2] + ',' + rgb[3] + ',' + alpha + ')';
            return color.trim();
        }

        function compressImage(image, maxSide, quality) {
            var scale = Math.min(1, maxSide / Math.max(image.width, image.height));
            var canvas = document.createElement('canvas');
            canvas.width = Math.max(1, Math.round(image.width * scale));
            canvas.height = Math.max(1, Math.round(image.height * scale));
            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            return canvas.toDataURL('image/jpeg', quality);
        }

        function readImageAsDataUrl(file, onDone) {
            var reader = new FileReader();
            reader.onerror = function() { onDone(null); };
            reader.onload = function() {
                var image = new Image();
                image.onerror = function() { onDone(null); };
                image.onload = function() {
                    try {
                        var dataUrl = compressImage(image, 1600, 0.75);
                        if (dataUrl.length > 2000000) dataUrl = compressImage(image, 1000, 0.6);
                        if (dataUrl.length > 2000000) dataUrl = compressImage(image, 800, 0.5);
                        onDone(dataUrl);
                    } catch (e) {
                        onDone(null);
                    }
                };
                image.src = reader.result;
            };
            reader.readAsDataURL(file);
        }

        function applyWallpaper(ctx) {
            var theme = getCurrentTheme();
            var bgUrl = state.customImage || getThemeBgUrl(state.activeTheme);

            if (!bgUrl) {
                teardownWallpaper(ctx);
                return;
            }

            if (!wallpaperEl || !document.body.contains(wallpaperEl)) {
                wallpaperEl = document.createElement('div');
                wallpaperEl.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;background-size:cover;background-position:center;background-repeat:no-repeat;';
                document.body.prepend(wallpaperEl);
            }

            wallpaperEl.style.backgroundImage = 'url("' + bgUrl + '")';
            wallpaperEl.style.filter = state.blurAmount > 0 ? 'blur(' + state.blurAmount + 'px)' : 'none';

            var canvasAlpha = state.bgOpacity;
            var overrides = {
                '--dsw-alias-bg-base': {
                    light: toRgba(theme.color, canvasAlpha),
                    dark: toRgba(theme.color, canvasAlpha)
                },
                '--dsw-specific-sidebar-fill': {
                    light: toRgba(theme.color, canvasAlpha),
                    dark: toRgba(theme.color, canvasAlpha)
                }
            };
            wallpaperTokenOverrides = overrides;
            applyCombinedTokenOverrides(ctx);
        }

        function teardownWallpaper(ctx) {
            if (wallpaperEl) {
                wallpaperEl.remove();
                wallpaperEl = null;
            }
            wallpaperTokenOverrides = {};
            if (ctx) applyCombinedTokenOverrides(ctx);
        }

        function applyCombinedTokenOverrides(ctx) {
            if (Object.keys(wallpaperTokenOverrides).length > 0) {
                var prev = combinedOverrideDispose;
                combinedOverrideDispose = ctx.theme.overrideTokens(COMBINED_OVERRIDE_SOURCE, wallpaperTokenOverrides);
                if (prev) prev();
            } else {
                if (combinedOverrideDispose) {
                    combinedOverrideDispose();
                    combinedOverrideDispose = null;
                }
            }
        }

        function ensureWallpaper() {
            if (!wallpaperEl || !document.body.contains(wallpaperEl)) {
                var theme = getCurrentTheme();
                var bgUrl = state.customImage || getThemeBgUrl(state.activeTheme);
                if (!bgUrl) return;
                wallpaperEl = document.createElement('div');
                wallpaperEl.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;background-size:cover;background-position:center;background-repeat:no-repeat;';
                wallpaperEl.style.backgroundImage = 'url("' + bgUrl + '")';
                wallpaperEl.style.filter = state.blurAmount > 0 ? 'blur(' + state.blurAmount + 'px)' : 'none';
                document.body.prepend(wallpaperEl);
            }
        }

        function createParticleSys() {
            var canvas = document.createElement('canvas');
            canvas.id = 'dsh-moyun-particles';
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
            var pctx = canvas.getContext('2d');
            var w = window.innerWidth;
            var h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            return { canvas: canvas, ctx: pctx, particles: [], raf: 0, w: w, h: h, mx: w / 2, my: h / 2 };
        }

        function makeParticle(sys) {
            var r = Math.random();
            var colors = ['#2a3545', '#3a4555', '#4a5565', '#c8b89a', '#d4c8a8'];
            var type, color, size, life;
            if (r < 0.5) {
                type = 'ink'; color = colors[Math.floor(Math.random() * colors.length)];
                size = 1 + Math.random() * 2.5; life = 150 + Math.random() * 200;
            } else if (r < 0.85) {
                type = 'drop'; color = '#c8b89a';
                size = 0.5 + Math.random() * 1.5; life = 200 + Math.random() * 300;
            } else {
                type = 'dot'; color = '#e8dcc4';
                size = 0.5 + Math.random(); life = 300 + Math.random() * 400;
            }
            return { x: Math.random() * sys.w, y: sys.h + 10, vx: (Math.random() - 0.5) * 0.2, vy: -(0.15 + Math.random() * 0.4), size: size, opacity: 0, color: color, life: 0, maxLife: life, type: type };
        }

        function animateParticles(sys) {
            if (sys.particles.length < state.particleDensity) {
                var count = Math.min(3, state.particleDensity - sys.particles.length);
                for (var i = 0; i < count; i++) sys.particles.push(makeParticle(sys));
            }
            for (var i = sys.particles.length - 1; i >= 0; i--) {
                var p = sys.particles[i];
                p.life++; p.x += p.vx; p.y += p.vy;
                p.opacity = Math.sin((p.life / p.maxLife) * Math.PI);
                var dx = sys.mx - p.x, dy = sys.my - p.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) { var force = (120 - dist) / 120; p.vx += (dx / dist) * force * 0.03; p.vy += (dy / dist) * force * 0.03; }
                p.vx *= 0.99; p.vy = Math.max(p.vy, -1.2);
                if (p.life >= p.maxLife || p.y < -10 || p.x < -10 || p.x > sys.w + 10) sys.particles.splice(i, 1);
            }
            sys.ctx.clearRect(0, 0, sys.w, sys.h);
            for (var i = 0; i < sys.particles.length; i++) {
                var p = sys.particles[i];
                sys.ctx.save();
                sys.ctx.globalAlpha = p.opacity;
                if (p.type === 'ink') {
                    var grad = sys.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
                    grad.addColorStop(0, p.color); grad.addColorStop(0.6, p.color + '60'); grad.addColorStop(1, 'transparent');
                    sys.ctx.fillStyle = grad; sys.ctx.beginPath(); sys.ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2); sys.ctx.fill();
                } else if (p.type === 'drop') {
                    sys.ctx.fillStyle = p.color + '80'; sys.ctx.beginPath(); sys.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); sys.ctx.fill();
                } else {
                    var tw = 0.5 + 0.5 * Math.sin(p.life * 0.08);
                    sys.ctx.globalAlpha = p.opacity * tw; sys.ctx.fillStyle = p.color; sys.ctx.beginPath(); sys.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); sys.ctx.fill();
                }
                sys.ctx.restore();
            }
            sys.raf = requestAnimationFrame(function() { animateParticles(sys); });
        }

        function initParticles() {
            if (particleSystem) return;
            particleSystem = createParticleSys();
            document.body.appendChild(particleSystem.canvas);
            window.addEventListener('resize', function() {
                if (!particleSystem) return;
                particleSystem.w = window.innerWidth; particleSystem.h = window.innerHeight;
                particleSystem.canvas.width = particleSystem.w;
                particleSystem.canvas.height = particleSystem.h;
            });
            window.addEventListener('mousemove', function(e) {
                if (!particleSystem) return;
                particleSystem.mx = e.clientX; particleSystem.my = e.clientY;
            });
            animateParticles(particleSystem);
        }

        function removeParticles() {
            if (particleSystem) {
                cancelAnimationFrame(particleSystem.raf);
                if (particleSystem.canvas && particleSystem.canvas.parentNode) particleSystem.canvas.parentNode.removeChild(particleSystem.canvas);
                particleSystem = null;
            }
        }

        function setTheme(ctx, themeId) {
            state.activeTheme = themeId;
            state.customImage = '';
            saveState();
            applyWallpaper(ctx);
            ctx.theme.setTheme(themeId);
        }

        function setCustomImage(ctx, dataUrl) {
            state.customImage = dataUrl;
            state.activeTheme = 'custom';
            saveState();
            saveToDB(CUSTOM_IMAGE_KEY, dataUrl);
            applyWallpaper(ctx);
        }

        function handleFileUpload(ctx, file, t) {
            if (!file.type.startsWith('image/')) { alert(t('pleaseSelect')); return; }
            readImageAsDataUrl(file, function(dataUrl) {
                if (dataUrl) {
                    setCustomImage(ctx, dataUrl);
                } else {
                    alert(t('processFailed'));
                }
            });
        }

        var MoyunSection = function(props) {
            var t = props.t;
            var locale = props.locale;
            var ctx = props.ctx;

            var forceUpdate = react.useState(0)[1];
            var refresh = react.useCallback(function() {
                forceUpdate(function(x) { return x + 1; });
            }, []);

            var cards = THEMES.map(function(tm) {
                var active = state.activeTheme === tm.id && !state.customImage;
                var thumbUrl = getThemeBgUrl(tm.id);
                var getNm = getLocalizedField(tm, 'name');
                var getDs = getLocalizedField(tm, 'desc');
                var cardStyle = {
                    cursor: 'pointer',
                    border: '1px solid ' + (active ? '#c8b89a' : 'rgba(200,184,154,0.2)'),
                    borderRadius: '10px',
                    overflow: 'hidden',
                    transition: 'all 0.2s',
                    background: 'rgba(15,20,35,0.6)',
                    boxShadow: active ? '0 0 16px rgba(200,184,154,0.3)' : 'none',
                    padding: '0'
                };
                return react.createElement('div', {
                    key: tm.id,
                    onClick: function() { setTheme(ctx, tm.id); refresh(); },
                    style: cardStyle,
                    onMouseEnter: function(e) { e.currentTarget.style.borderColor = '#c8b89a'; },
                    onMouseLeave: function(e) {
                        var a = state.activeTheme === tm.id && !state.customImage;
                        e.currentTarget.style.borderColor = a ? '#c8b89a' : 'rgba(200,184,154,0.2)';
                    }
                },
                    react.createElement('div', {
                        style: {
                            width: '100%', height: '80px', background: tm.color,
                            backgroundImage: 'url(' + thumbUrl + ')',
                            backgroundSize: 'cover', backgroundPosition: 'center'
                        }
                    }),
                    react.createElement('div', { style: { padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '10px' } },
                        react.createElement('div', {
                            style: {
                                width: '28px', height: '28px', borderRadius: '6px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: tm.accent, fontSize: '15px',
                                border: '1px solid ' + tm.accent + '40', background: 'rgba(0,0,0,0.2)'
                            }
                        }, tm.icon),
                        react.createElement('div', { style: { flex: 1, minWidth: 0 } },
                            react.createElement('div', { style: { color: '#f5e6c8', fontSize: '13px', fontWeight: '500' } }, getNm(locale)),
                            react.createElement('div', { style: { color: '#8a9bb5', fontSize: '11px', marginTop: '2px' } }, getDs(locale))
                        ),
                        active ? react.createElement('div', { style: { fontSize: '14px', color: '#c8b89a' } }, '✓') : null
                    )
                );
            });

            var fileInputId = 'moyun-file-input';

            var handleUploadClick = react.useCallback(function() {
                var el = document.getElementById(fileInputId);
                if (el) el.click();
            }, []);

            var handleFileChange = react.useCallback(function(e) {
                if (e.target.files && e.target.files[0]) {
                    handleFileUpload(ctx, e.target.files[0], t);
                    refresh();
                }
            }, []);

            var handleDrop = react.useCallback(function(e) {
                e.preventDefault();
                if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
                    handleFileUpload(ctx, e.dataTransfer.files[0], t);
                    refresh();
                }
            }, []);

            var handleBlurChange = react.useCallback(function(e) {
                var val = parseInt(e.target.value);
                state.blurAmount = val;
                saveState();
                applyWallpaper(ctx);
                refresh();
            }, []);

            var handleOpacityChange = react.useCallback(function(e) {
                var val = parseFloat(e.target.value);
                state.bgOpacity = val;
                saveState();
                applyWallpaper(ctx);
                refresh();
            }, []);

            var handleParticlesChange = react.useCallback(function(e) {
                state.enableParticles = e.target.checked;
                saveState();
                if (state.enableParticles) initParticles();
                else removeParticles();
                refresh();
            }, []);

            var handleDensityChange = react.useCallback(function(e) {
                state.particleDensity = parseInt(e.target.value);
                saveState();
            }, []);

            var handleRemoveCustom = react.useCallback(function() {
                state.customImage = '';
                state.activeTheme = '01';
                saveState();
                deleteFromDB(CUSTOM_IMAGE_KEY);
                applyWallpaper(ctx);
                refresh();
            }, []);

            var sections = [];

            sections.push(react.createElement('div', { key: 'header', style: { marginBottom: '24px' } },
                react.createElement('h2', { style: { color: '#c8b89a', fontSize: '18px', margin: '0 0 4px 0', fontWeight: '500', letterSpacing: '1px' } }, t('title')),
                react.createElement('p', { style: { color: '#8a9bb5', fontSize: '13px', margin: '0' } }, t('subtitle'))
            ));

            sections.push(react.createElement('div', { key: 'preset', style: { marginBottom: '24px' } },
                react.createElement('div', { style: { color: '#c8b89a', fontSize: '13px', marginBottom: '12px', letterSpacing: '1px' } }, t('presetTitle')),
                react.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '12px' } }, cards)
            ));

            var customChildren = [];
            customChildren.push(react.createElement('div', {
                key: 'upload-area',
                onClick: handleUploadClick,
                onDragOver: function(e) { e.preventDefault(); e.currentTarget.style.borderColor = '#c8b89a'; },
                onDragLeave: function(e) { e.currentTarget.style.borderColor = 'rgba(200,184,154,0.3)'; },
                onDrop: handleDrop,
                style: {
                    border: '1px dashed rgba(200,184,154,0.3)',
                    borderRadius: '10px', padding: '30px', textAlign: 'center',
                    cursor: 'pointer', transition: 'all 0.2s',
                    background: 'rgba(15,20,35,0.5)'
                }
            },
                react.createElement('div', { style: { color: '#c8b89a', fontSize: '16px', marginBottom: '8px' } }, '🖼'),
                react.createElement('div', { style: { color: '#f5e6c8', fontSize: '13px' } }, t('uploadHint')),
                react.createElement('div', { style: { color: '#8a9bb5', fontSize: '11px', marginTop: '4px' } }, t('uploadDesc'))
            ));

            customChildren.push(react.createElement('input', {
                key: 'file-input',
                type: 'file', id: fileInputId, accept: 'image/*',
                style: { display: 'none' },
                onChange: handleFileChange
            }));

            if (state.customImage) {
                customChildren.push(react.createElement('div', {
                    key: 'custom-preview',
                    style: {
                        marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '12px', background: 'rgba(15,20,35,0.5)',
                        borderRadius: '8px', border: '1px solid rgba(200,184,154,0.15)'
                    }
                },
                    react.createElement('img', {
                        src: state.customImage,
                        style: { width: '60px', height: '38px', objectFit: 'cover', borderRadius: '4px', border: '1px solid rgba(200,184,154,0.2)' }
                    }),
                    react.createElement('div', { style: { flex: 1 } },
                        react.createElement('div', { style: { color: '#c8b89a', fontSize: '13px', fontWeight: '500' } }, t('customImage')),
                        react.createElement('div', { style: { color: '#8a9bb5', fontSize: '11px', marginTop: '2px' } }, t('uploaded'))
                    ),
                    react.createElement('button', {
                        key: 'remove-btn',
                        onClick: handleRemoveCustom,
                        style: {
                            background: 'rgba(196,86,90,0.2)', color: '#c4565a',
                            border: '1px solid rgba(196,86,90,0.3)', borderRadius: '6px',
                            padding: '6px 14px', cursor: 'pointer', fontSize: '12px'
                        }
                    }, t('removeCustom'))
                ));
            }

            sections.push(react.createElement('div', { key: 'custom', style: { marginBottom: '24px' } },
                react.createElement('div', { style: { color: '#c8b89a', fontSize: '13px', marginBottom: '12px', letterSpacing: '1px' } }, t('customTitle')),
                customChildren
            ));

            sections.push(react.createElement('div', { key: 'opacity', style: { marginBottom: '24px' } },
                react.createElement('div', { style: { color: '#c8b89a', fontSize: '13px', marginBottom: '12px', letterSpacing: '1px' } }, t('opacityTitle')),
                react.createElement('div', {
                    style: {
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                        background: 'rgba(15,20,35,0.5)', borderRadius: '8px',
                        border: '1px solid rgba(200,184,154,0.15)'
                    }
                },
                    react.createElement('input', {
                        type: 'range', min: '0', max: '1', step: '0.05', value: state.bgOpacity,
                        onChange: handleOpacityChange,
                        style: { flex: '1', accentColor: '#c8b89a' }
                    }),
                    react.createElement('span', { style: { color: '#8a9bb5', fontSize: '12px', minWidth: '60px', textAlign: 'right' } }, Math.round(state.bgOpacity * 100) + '%')
                )
            ));

            sections.push(react.createElement('div', { key: 'blur', style: { marginBottom: '24px' } },
                react.createElement('div', { style: { color: '#c8b89a', fontSize: '13px', marginBottom: '12px', letterSpacing: '1px' } }, t('blurTitle')),
                react.createElement('div', {
                    style: {
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                        background: 'rgba(15,20,35,0.5)', borderRadius: '8px',
                        border: '1px solid rgba(200,184,154,0.15)'
                    }
                },
                    react.createElement('input', {
                        type: 'range', min: '0', max: '20', value: state.blurAmount,
                        onChange: handleBlurChange,
                        style: { flex: '1', accentColor: '#c8b89a' }
                    }),
                    react.createElement('span', { style: { color: '#8a9bb5', fontSize: '12px', minWidth: '60px', textAlign: 'right' } }, state.blurAmount + 'px')
                )
            ));

            var densityControl = null;
            if (state.enableParticles) {
                densityControl = react.createElement('div', {
                    key: 'density',
                    style: { display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }
                },
                    react.createElement('span', { style: { color: '#8a9bb5', fontSize: '12px' } }, t('density')),
                    react.createElement('input', {
                        type: 'range', min: '20', max: '200', value: state.particleDensity,
                        onChange: handleDensityChange,
                        style: { width: '100px', accentColor: '#c8b89a' }
                    }),
                    react.createElement('span', { style: { color: '#8a9bb5', fontSize: '12px', minWidth: '30px', textAlign: 'right' } }, state.particleDensity)
                );
            }

            sections.push(react.createElement('div', { key: 'particles', style: { marginBottom: '16px' } },
                react.createElement('div', { style: { color: '#c8b89a', fontSize: '13px', marginBottom: '12px', letterSpacing: '1px' } }, t('particlesTitle')),
                react.createElement('div', {
                    style: {
                        display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 16px',
                        background: 'rgba(15,20,35,0.5)', borderRadius: '8px',
                        border: '1px solid rgba(200,184,154,0.15)'
                    }
                },
                    react.createElement('label', { style: { display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' } },
                        react.createElement('input', {
                            type: 'checkbox', checked: state.enableParticles,
                            onChange: handleParticlesChange,
                            style: { accentColor: '#c8b89a', width: '16px', height: '16px' }
                        }),
                        react.createElement('span', { style: { color: '#f5e6c8', fontSize: '13px' } }, t('enableParticles'))
                    ),
                    densityControl
                )
            ));

            return react.createElement('div', { style: { padding: '20px', maxWidth: '700px', margin: '0 auto' } }, sections);
        };

        var inject = ['slots', 'locale', 'theme'];

        function apply(ctx) {
            var disposers = SKIN_DEFS.map(function(def) { return ctx.theme.register(def); });
            registeredSkinDisposers = disposers;

            ctx.effect(function() {
                return function() {
                    for (var i = 0; i < disposers.length; i++) disposers[i]();
                };
            }, 'dsh-web-theme: skin registration');

            ctx.effect(function() {
                return ctx.locale.register(SETTINGS_NS, { zh: zh, en: en, ja: ja, ko: ko, es: es, fr: fr, de: de, ru: ru });
            }, 'dsh-web-theme: dictionaries');

            var t = typeof ctx.locale && typeof ctx.locale.bind === 'function'
                ? ctx.locale.bind(SETTINGS_NS)
                : function(key) { return key; };

            var locale = 'zh';
            try {
                if (ctx.locale && typeof ctx.locale.getLocale === 'function') {
                    locale = ctx.locale.getLocale() || 'zh';
                }
            } catch (e) {}

            loadState();

            var currentTheme = ctx.theme.getTheme();
            var savedSkin = state.customImage ? null : state.activeTheme;
            if (savedSkin && SKIN_DEFS.some(function(d) { return d.id === savedSkin; })) {
                if (currentTheme.preference !== savedSkin) {
                    ctx.theme.setTheme(savedSkin);
                }
            }

            applyWallpaper(ctx);

            ctx.slots.inject('settings.section', function() {
                var off = ctx.slots.register({
                    name: 'settings.section',
                    id: 'moyun',
                    order: 50,
                    label: t('nav'),
                    locale: SETTINGS_NS
                }, function() {
                    return react.createElement(MoyunSection, {
                        t: t,
                        locale: locale,
                        ctx: ctx,
                        theme: ctx.theme
                    });
                });
                return off;
            });

            ctx.effect(function() {
                loadState();
                applyWallpaper(ctx);
                if (state.enableParticles) initParticles();

                var onResize = function() { ensureWallpaper(); };
                var onOrientation = function() { ensureWallpaper(); };
                var onVisibility = function() {
                    if (!document.hidden) ensureWallpaper();
                };
                window.addEventListener('resize', onResize);
                window.addEventListener('orientationchange', onOrientation);
                document.addEventListener('visibilitychange', onVisibility);

                loadFromDB(CUSTOM_IMAGE_KEY).then(function(dataUrl) {
                    if (dataUrl && state.activeTheme === 'custom') {
                        state.customImage = dataUrl;
                        applyWallpaper(ctx);
                    }
                });

                return function() {
                    window.removeEventListener('resize', onResize);
                    window.removeEventListener('orientationchange', onOrientation);
                    document.removeEventListener('visibilitychange', onVisibility);
                    removeParticles();
                    teardownWallpaper(null);
                    if (combinedOverrideDispose) {
                        combinedOverrideDispose();
                        combinedOverrideDispose = null;
                    }
                };
            }, 'dsh-web-theme: cleanup');

            console.log('%c[墨韵主题] 已激活 · 水墨丹青，意境悠远', 'color: #c8b89a; font-size: 14px; font-weight: bold;');
        }

        exports.apply = apply;
        exports.inject = inject;
        return module.exports;
    }
});