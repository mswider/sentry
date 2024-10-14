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
export interface ConfigV1<PortalID extends string> extends ConfigSkeleton {
    version: 1;
    portals: {
        displayName: string;
        id: PortalID;
        path: string;
    }[];
    desktops: {
        displayName: string;
        id: string;
        portal: PortalID;
        clientType?: ClientType;
    }[];
}

export type AnyConfig = ConfigV0 | ConfigV1<string> | (ConfigSkeleton & Record<string, any>);