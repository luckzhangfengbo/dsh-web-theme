window.__ModuleLoader__.load({
    id: 'dsh-web-theme/themes',
    factory: function() {
        'use strict';

        var THEMES = [
            {
                id: '01',
                name: '远山孤松',
                nameEn: 'Mountains & Pine',
                nameJa: '遠山の松',
                nameKo: '산과 소나무',
                nameEs: 'Montañas y Pino',
                nameFr: 'Montagnes et Pin',
                nameDe: 'Berge & Kiefer',
                nameRu: 'Горы и сосна',
                color: '#0a0e18',
                accent: '#c8b89a',
                icon: '松',
                desc: '远山淡影，苍松独立',
                descEn: 'Distant mountains, solitary pine',
                descJa: '遠山に浮かぶ松',
                descKo: '멀리 있는 산과 홀로 선 소나무',
                descEs: 'Montañas lejanas, pino solitario',
                descFr: 'Montagnes lointaines, pin solitaire',
                descDe: 'Ferne Berge, einsame Kiefer',
                descRu: 'Дальние горы, одинокая сосна'
            },
            {
                id: '02',
                name: '烟雨江南',
                nameEn: 'Misty Jiangnan',
                nameJa: '烟雨の江南',
                nameKo: '안개 강남',
                nameEs: 'Jiangnan neblinoso',
                nameFr: 'Jiangnan brumeux',
                nameDe: 'Nebliges Jiangnan',
                nameRu: 'Туманный Цзяннань',
                color: '#080c16',
                accent: '#d4a060',
                icon: '舟',
                desc: '水乡烟雨，灯影朦胧',
                descEn: 'Misty waterside, lantern glow',
                descJa: '水郷の灯り',
                descKo: '물마을의 등불',
                descEs: 'Orilla neblina, linterna',
                descFr: 'Rive brumeuse, lanterne',
                descDe: 'Nebliges Ufer, Laterne',
                descRu: 'Туманный берег, фонари'
            },
            {
                id: '03',
                name: '竹影清风',
                nameEn: 'Bamboo Breeze',
                nameJa: '竹と風',
                nameKo: '대나무 바람',
                nameEs: 'Bambú y viento',
                nameFr: 'Bambou et vent',
                nameDe: 'Bambus & Wind',
                nameRu: 'Бамбук и ветер',
                color: '#060a12',
                accent: '#2a3545',
                icon: '竹',
                desc: '翠竹摇曳，清风徐来',
                descEn: 'Bamboo swaying, gentle breeze',
                descJa: '風に揺れる竹',
                descKo: '바람에 흔들리는 대나무',
                descEs: 'Bambú meciéndose, brisa suave',
                descFr: 'Bambou qui se balance, brise douce',
                descDe: 'Schwankender Bambus, sanfte Brise',
                descRu: 'Бамбук качается, тихий ветер'
            },
            {
                id: '04',
                name: '梅傲霜雪',
                nameEn: 'Plum in Snow',
                nameJa: '雪の梅',
                nameKo: '눈속의 매화',
                nameEs: 'Ciruelo en nieve',
                nameFr: 'Prunier en neige',
                nameDe: 'Pflaumenbaum im Schnee',
                nameRu: 'Слива в снегу',
                color: '#080c16',
                accent: '#c4565a',
                icon: '梅',
                desc: '梅花傲雪，枝干虬曲',
                descEn: 'Plum blossoms in snow',
                descJa: '雪に映える梅',
                descKo: '눈속의 매화꽃',
                descEs: 'Flores de ciruelo en nieve',
                descFr: 'Fleurs de prunier sur neige',
                descDe: 'Pflaumenblüten im Schnee',
                descRu: 'Цветы сливы в снегу'
            },
            {
                id: '05',
                name: '山水留白',
                nameEn: 'Landscape White',
                nameJa: '山水の余白',
                nameKo: '수묵 여백',
                nameEs: 'Paisaje en blanco',
                nameFr: 'Paysage en blanc',
                nameDe: 'Landschaft in Weiß',
                nameRu: 'Пейзаж в белом',
                color: '#0a0e18',
                accent: '#c8b89a',
                icon: '山',
                desc: '留白写意，远山孤亭',
                descEn: 'Minimalist landscape',
                descJa: '余白の美',
                descKo: '여백의 미',
                descEs: 'Paisaje minimalista',
                descFr: 'Paysage minimaliste',
                descDe: 'Minimalistische Landschaft',
                descRu: 'Минималистичный пейзаж'
            }
        ];

        function getLocalizedField(tm, field) {
            var map = {};
            map['zh'] = tm[field];
            map['en'] = tm[field + 'En'];
            map['ja'] = tm[field + 'Ja'];
            map['ko'] = tm[field + 'Ko'];
            map['es'] = tm[field + 'Es'];
            map['fr'] = tm[field + 'Fr'];
            map['de'] = tm[field + 'De'];
            map['ru'] = tm[field + 'Ru'];
            return function(locale) {
                return map[locale] || map['en'] || map['zh'] || tm[field];
            };
        }

        return { THEMES: THEMES, getLocalizedField: getLocalizedField };
    }
});