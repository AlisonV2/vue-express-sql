# Vue Client & Node/Express/MySQL Server

The goal was to have both apps running on the same port. 

## Project setup

Install dependencies : 

```
yarn install
```
Setup DB connexion : 

In ```/config``` create a config.js file : 

```js
const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "express-sql"
}

export default config;
```

## Development

The Vue app is localized in ```/src```.
There's only one ```package.json``` for both apps.

To start Node Server : 

```
yarn start
```
To start Vue Client : 
```
yarn serve
```

## Production

```
yarn prod
```
This command will build the app, copy the ```/dist``` folder to the ```/public``` folder (overwritting) and start the node instance.
