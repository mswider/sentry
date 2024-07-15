import { writable } from "svelte/store";

export interface ConfigData {
    desktops: {
        displayName: string;
        websocketPath: string;
        clientType?: 'server' | 'laptop' | 'desktop';
    }[];
}
export const configData = writable<ConfigData>();