import { ConfigV1 } from "./config";

export function buildConfig<T extends string = string>(
    config: ConfigV1<T>
) {
    return config;
}