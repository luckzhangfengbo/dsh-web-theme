export declare function getPresetThemes(): {
    id: string;
    name: string;
    description: string;
    color: string;
    accent: string;
    icon: string;
}[];
export declare function getThemePng(themeId: string): Buffer | null;
export declare function getThemeList(): {
    id: string;
    name: string;
    description: string;
    color: string;
    accent: string;
    icon: string;
    pngUrl: string;
}[];
export declare function createThemeRoutes(webServer: any): void;
export declare function installMoyunSettings(ctx: any, resolved: any): Promise<void>;
export declare function getInjectionScripts(): {
    kind: string;
    placement: string;
    text: string;
}[];
export declare function getHostInfo(): {
    name: string;
    displayName: string;
    version: string;
    type: string;
    author: string;
    description: string;
    themes: {
        id: string;
        name: string;
        description: string;
    }[];
};
