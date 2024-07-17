import { writable } from "svelte/store";

export interface ConfigData {
    desktops: {
        displayName: string;
        id: string;
        clientType?: 'server' | 'laptop' | 'desktop';
    }[];
}
export const configData = writable<ConfigData>();