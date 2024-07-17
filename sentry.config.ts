import { buildConfig } from "./lib";

//  Example config file, change as you wish

export default buildConfig({
    version: 0,     // config file v0
    desktops: [{
        displayName: 'My Computer',
        id: 'computer0',
        clientType: 'desktop'
    }, {
        displayName: 'Virtual Machine',
        id: 'computer1',
        clientType: 'server'
    }, {
        displayName: 'MacBook Pro',
        id: 'computer2',
        clientType: 'laptop'
    }]
});