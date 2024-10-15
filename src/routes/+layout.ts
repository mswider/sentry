import type { AnyConfig } from 'lib/config';
import type { LayoutLoad } from "./$types";
import type { ConfigData } from '$lib/context';
import { base } from '$app/paths'

type LoadValue = {
    status: 200,
    data: {
        config: ConfigData
    }
} | {
    status: 500 | 404,
    data: { message: string }
};

export const ssr = false;
export const load: LayoutLoad = async ({ fetch }): Promise<LoadValue> => {
    try {
        const req = await fetch(`${base}/config.json`);
        if (!req.ok) throw new Error(`HTTP ${req.status}`);

        let data: AnyConfig;
        try {
            data = await req.json();
        } catch (e) {
            throw new Error('Config file is not valid JSON');
        }

        if (data.version !== 1) {
            throw new Error(`Config version ${data.version} is unsupported. Please migrate to version 1`);
        }

        return {
            status: 200,
            data: {
                config: {
                    portals: data.portals,
                    desktops: data.desktops
                }
            }
        };
    } catch (e) {
        const isNetError = e instanceof Error && e.name === 'TypeError';
        if (isNetError) console.error(e);

        return {
            status: isNetError ? 500 : 404,
            data: { message: `Failed to fetch config: ${(e as Error).message || e}` }
        };
    }
};