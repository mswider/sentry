import { buildConfig } from "./lib";

//  Example config file, change as you wish

export default buildConfig({
    version: 1,     // config file v1
    portals: [{
        displayName: 'Home',
        id: 'home',
        hostname: 'portal-home.example.com',
        path: '/sockets/'
    }, {
        displayName: 'University',
        id: 'uni',
        hostname: 'portal-uni.example.com',
        path: '/sockets/'
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