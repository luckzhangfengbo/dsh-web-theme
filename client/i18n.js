window.__ModuleLoader__.load({
    id: 'dsh-web-theme/i18n',
    factory: function() {
        'use strict';

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
            'nav': 'テーマ',
            'title': '墨韻テーマ',
            'subtitle': '中国水墨画スタイルのテーマ',
            'presetTitle': 'プリセットテーマ',
            'customTitle': 'カスタム画像',
            'uploadHint': 'クリックまたはドラッグしてアップロード',
            'uploadDesc': 'PNG / JPG · 自動圧縮',
            'removeCustom': '削除',
            'blurTitle': '背景ぼかし',
            'opacityTitle': '背景透明度',
            'particlesTitle': 'パーティクル効果',
            'enableParticles': 'パーティクルを有効化',
            'density': '密度',
            'themeActivated': 'テーマが適用されました',
            'customImage': 'カスタム画像',
            'uploaded': 'アップロード済み',
            'pleaseSelect': '画像ファイルを選択してください',
            'processFailed': '画像処理に失敗しました。別のファイルをお試しください'
        };

        var ko = {
            'nav': '테마',
            'title': '묘운 테마',
            'subtitle': '중국 수묵화 스타일 테마',
            'presetTitle': '프리셋 테마',
            'customTitle': '사용자 지정 이미지',
            'uploadHint': '클릭하거나 드래그하여 업로드',
            'uploadDesc': 'PNG / JPG · 자동 압축',
            'removeCustom': '제거',
            'blurTitle': '배경 흐림',
            'opacityTitle': '배경 투명도',
            'particlesTitle': '입자 효과',
            'enableParticles': '입자 켜기',
            'density': '밀도',
            'themeActivated': '테마가 적용되었습니다',
            'customImage': '사용자 지정 이미지',
            'uploaded': '업로드됨',
            'pleaseSelect': '이미지 파일을 선택해 주세요',
            'processFailed': '이미지 처리에 실패했습니다. 다른 파일을 시도해 주세요'
        };

        var es = {
            'nav': 'Tema',
            'title': 'Tema MoYun',
            'subtitle': 'Tema de estilo pintura a tinta china',
            'presetTitle': 'Temas preestablecidos',
            'customTitle': 'Imagen personalizada',
            'uploadHint': 'Haz clic o arrastra para subir',
            'uploadDesc': 'PNG / JPG · Compresión automática',
            'removeCustom': 'Eliminar',
            'blurTitle': 'Desenfoque de fondo',
            'opacityTitle': 'Opacidad de fondo',
            'particlesTitle': 'Efectos de partículas',
            'enableParticles': 'Activar partículas',
            'density': 'Densidad',
            'themeActivated': 'Tema activado',
            'customImage': 'Imagen personalizada',
            'uploaded': 'Subida y activa',
            'pleaseSelect': 'Por favor selecciona un archivo de imagen',
            'processFailed': 'Error al procesar la imagen, prueba con otro archivo'
        };

        var fr = {
            'nav': 'Thème',
            'title': 'Thème MoYun',
            'subtitle': 'Thème style peinture à l\'encre chinoise',
            'presetTitle': 'Thèmes préréglés',
            'customTitle': 'Image personnalisée',
            'uploadHint': 'Cliquez ou glissez pour téléverser',
            'uploadDesc': 'PNG / JPG · Compression automatique',
            'removeCustom': 'Supprimer',
            'blurTitle': 'Flou d\'arrière-plan',
            'opacityTitle': 'Opacité de l\'arrière-plan',
            'particlesTitle': 'Effets de particules',
            'enableParticles': 'Activer les particules',
            'density': 'Densité',
            'themeActivated': 'Thème activé',
            'customImage': 'Image personnalisée',
            'uploaded': 'Téléversée et active',
            'pleaseSelect': 'Veuillez sélectionner un fichier image',
            'processFailed': 'Échec du traitement de l\'image, veuillez essayer un autre fichier'
        };

        var de = {
            'nav': 'Thema',
            'title': 'MoYun Thema',
            'subtitle': 'Chinesisches Tuschmalerei-Thema',
            'presetTitle': 'Voreingestellte Themen',
            'customTitle': 'Benutzerdefiniertes Bild',
            'uploadHint': 'Klicken oder ziehen zum Hochladen',
            'uploadDesc': 'PNG / JPG · Automatische Komprimierung',
            'removeCustom': 'Entfernen',
            'blurTitle': 'Hintergrundunschärfe',
            'opacityTitle': 'Hintergrunddeckkraft',
            'particlesTitle': 'Partikeleffekte',
            'enableParticles': 'Partikel aktivieren',
            'density': 'Dichte',
            'themeActivated': 'Thema aktiviert',
            'customImage': 'Benutzerdefiniertes Bild',
            'uploaded': 'Hochgeladen und aktiv',
            'pleaseSelect': 'Bitte wählen Sie eine Bilddatei',
            'processFailed': 'Bildverarbeitung fehlgeschlagen, bitte andere Datei versuchen'
        };

        var ru = {
            'nav': 'Тема',
            'title': 'Тема МоЮнь',
            'subtitle': 'Тема в стиле китайской туши',
            'presetTitle': 'Предустановленные темы',
            'customTitle': 'Пользовательское изображение',
            'uploadHint': 'Нажмите или перетащите для загрузки',
            'uploadDesc': 'PNG / JPG · Автосжатие',
            'removeCustom': 'Удалить',
            'blurTitle': 'Размытие фона',
            'opacityTitle': 'Прозрачность фона',
            'particlesTitle': 'Эффекты частиц',
            'enableParticles': 'Включить частицы',
            'density': 'Плотность',
            'themeActivated': 'Тема активирована',
            'customImage': 'Пользовательское изображение',
            'uploaded': 'Загружено и активно',
            'pleaseSelect': 'Пожалуйста, выберите файл изображения',
            'processFailed': 'Ошибка обработки изображения, попробуйте другой файл'
        };

        return { zh: zh, en: en, ja: ja, ko: ko, es: es, fr: fr, de: de, ru: ru };
    }
});