# Deployment production

## Prerequisites

- Install Nodejs >= 14

## Setting environment

Please change .env.production before build

## Install yarn

```bash
npm i -g yarn
```

## Build project

```bash
yarn build
```

## Start project

```bash
sudo touch /etc/init.d/web
sudo vi /etc/init.d/web
sudo /etc/init.d/web start
```
