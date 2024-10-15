import { writable } from "svelte/store";

export interface Desktop {
    displayName: string;
    id: string;
    portal: string;
    clientType?: 'server' | 'laptop' | 'desktop';
}
export interface Portal {
    displayName: string;
    id: string;
    hostname: string;
    path?: string;
};
export interface ConfigData {
    portals: Portal[];
    desktops: Desktop[];
}
export const configData = writable<ConfigData>();