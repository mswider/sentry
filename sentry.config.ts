import { buildConfig } from "./lib";

export default buildConfig({
    version: 0,     // config file v0
    desktops: [{
        displayName: 'My Computer',
        websocketPath: '/connections/computer0',
        clientType: 'desktop'
    }]
});