import { buildConfig } from "./lib";

//  Example config file, change as you wish

export default buildConfig({
    version: 1,     // config file v1
    portals: [{
        displayName: 'Home',
        id: 'home',
        path: '78d77df9-7af6-411b-8c8a-19c3c97ce17b.cfargotunnel.com/sockets/'
    }, {
        displayName: 'University',
        id: 'uni',
        path: '96727994-8f81-46de-860d-0e7f6681483d.cfargotunnel.com/sockets/'
    }],
    desktops: [{
        displayName: 'Home Server',
        id: 'server-1',
        portal: 'home',
        clientType: 'server'
    }, {
        displayName: 'Dorm PC',
        id: 'desktop-1',
        portal: 'uni',
        clientType: 'desktop'
    }]
});