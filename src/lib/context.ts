import { writable } from "svelte/store";

export interface Desktop {
    displayName: string;
    id: string;
    clientType?: 'server' | 'laptop' | 'desktop';
}
export interface ConfigData {
    desktops: Desktop[];
}
export const configData = writable<ConfigData>();