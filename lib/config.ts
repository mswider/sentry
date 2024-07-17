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

export type AnyConfig = ConfigV0 | (ConfigSkeleton & Record<string, any>);