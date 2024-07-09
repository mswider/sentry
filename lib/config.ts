interface ConfigSkeleton {
    version: `${number}.${number}` | number;
}

export interface ConfigV0 extends ConfigSkeleton {
    version: 0;
    desktops: {
        displayName: string;
        websocketPath: string;
        clientType?: 'server' | 'laptop' | 'desktop';
    }[];
}