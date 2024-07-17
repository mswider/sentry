import { buildConfig } from "./lib";

//  Example config file, change as you wish

export default buildConfig({
    version: 0,     // config file v0
    desktops: [{
        displayName: 'My Computer',
        websocketPath: '/connections/computer0',
        clientType: 'desktop'
    }, {
        displayName: 'Virtual Machine',
        websocketPath: '/connections/computer1',
        clientType: 'server'
    }, {
        displayName: 'MacBook Pro',
        websocketPath: '/connections/computer2',
        clientType: 'laptop'
    }]
});