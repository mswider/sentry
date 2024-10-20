# Sentry setup guide

## General requirements
- Cloudflare account with a domain configured
- Computer(s) with a VNC server

## Build environment requirements
- npm & Node.js

## Infrastructure setup
### Cloudflare Tunnel
Sentry's portals are powered by [Cloudflare Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/).  
You should set up one Cloudflare Tunnel in each network that you have desktops you would like to access.  
> [!TIP]
> You can run `cloudflared` on the same computer as one that you would like to add to Sentry.

Once you've set up your Cloudflare Tunnels, it's time to connect your desktops.  
Open your [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com/) and go to **Networks** > **Tunnels**.  
For each desktop you want to connect, you'll need to edit the corresponding Tunnel to add a "[Public Hostname](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/routing-to-tunnel/)".  
All desktops accessible by a given Cloudflare Tunnel should all be given the same hostname.  
For example, if my Tunnel was named "Home", I might want to make my hostname "`portal-home.example.com`".  
You may wish to have all of the sockets to your desktops to be under a common path, like `sockets/`, as shown in the example below. The service should be configured as TCP.
![Cloudflare Tunnel example config](https://github.com/user-attachments/assets/2c9f03ae-1e40-470f-9351-cb7ee57ffa62)

## Sentry setup
### Install dependencies
Run `npm install`

### Configure Sentry
`sentry.config.ts` is Sentry's configuration file.  
When you've made your configuration, run `npm run config`

### Build Sentry
Run `npm run build`
> [!TIP]
> You don't need to rebuild after making new configuration changes

### Deploy Sentry
Run `npx wrangler pages deploy`  
Add a [custom domain](https://developers.cloudflare.com/pages/configuration/custom-domains/) to your Cloudflare Pages deployment to host Sentry on your own domain.
> [!NOTE]
> Sentry was designed for use with Cloudflare Pages. It's possible to use other hosting providers, including self-hosting, but you may lose out on the ability to protect your deployment with Cloudflare Access.

### Set up Cloudflare Access
> [!CAUTION]
> Your Sentry deployment, along with the sockets used to connect to your desktops will be publicly available unless you configure Cloudflare Access to protect them.

This part will be slightly less detailed, since teaching how to use Cloudflare Access is a bit out of scope for this guide.

#### Restricting access to `pages.dev` sites
Create a new Cloudflare Access application with these domains (assuming you have a project deployed at `sentry.pages.dev`):
- sentry.pages.dev
- *.sentry.pages.dev

Then, restrict access as needed.
> [!IMPORTANT]
> If you intend to give someone access to Sentry, they MUST have access to the pages.dev deployment.

#### Restricting access to your Sentry deployment
Create a new Cloudflare Access application with your Sentry deployment and portals included.  
Refer to the screenshot below for an example:
![Cloudflare Access example config](https://github.com/user-attachments/assets/0f1b674e-572e-4f42-93f7-2585f31ad364)
Then, restrict access as needed.