interface ConfigSkeleton {
    version: `${number}.${number}` | number;
}

export type ClientType = 'server' | 'laptop' | 'desktop';
export interface ConfigV0 extends ConfigSkeleton {
    version: 0;
    desktops: {
        displayName: string;
        id: string;
        clientType?: ClientType;
    }[];
}
export interface ConfigV1 extends ConfigSkeleton {
    version: 1;
    portals: {
        displayName: string;
        id: string;
        path: string;
    }[];
    desktops: {
        displayName: string;
        id: string;
        portal: string;
        clientType?: ClientType;
    }[];
}

export type AnyConfig = ConfigV0 | ConfigV1 | (ConfigSkeleton & Record<string, any>);