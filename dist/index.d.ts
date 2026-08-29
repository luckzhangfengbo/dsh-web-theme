export declare const name = "dsh-web-theme";
export declare const inject: string[];
export declare function getHostInfo(): {
    name: string;
    displayName: string;
    version: string;
    type: string;
    author: string;
    description: string;
    features: string[];
    keywords: string[];
    homepage: string;
    repository: string;
    bugs: string;
    screenshots: string[];
    themes: {
        id: string;
        name: string;
        description: string;
        color: string;
        accent: string;
        icon: string;
    }[];
};
export declare function apply(ctx: any): void;
declare const _default: {
    name: string;
    apply: typeof apply;
    getHostInfo: typeof getHostInfo;
};
export default _default;
