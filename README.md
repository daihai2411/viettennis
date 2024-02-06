## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. If the first time you access it pls enter login with the following login information:

## Deploy project

Runs the app in the dev mode.

- address : 85.31.234.69
- password: VTen155D@123#

1. Open terminal
2. Run "ssh root@85.31.234.69"
3. Input password: VTen155D@123#
4. Run "cd /var/www/html/viettennis-web/viettennis"
5. Run "git pull"
6. Run "npm install"
7. Run "npm run build"
8. Run 'pm2 start npm --name "app name" -- start' when first run, and 'pm2 restart "app name"' when have been running

Runs the app in the production mode.

- address : srv432740.hstgr.cloud
- password: VT3n1710@123#@

1. Open terminal
2. Run "ssh root@srv432740.hstgr.cloud"
3. Input password: VT3n1710@123#@
4. Run "cd /var/www/html/viettennis-web/viettennis"
5. Run "git pull"
6. Run "npm install"
7. Run "npm run build"
8. Run 'pm2 start npm --name "app name" -- start' when first run, and 'pm2 restart "app name"' when have been running

## Note

- Master OTP to test: 080994 or 891994
