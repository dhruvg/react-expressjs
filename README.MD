# Boilerplate for my React + Redux + Express projects

This is a boilerplate to use ReactJS, ExpressJS, Redux, and React Router v4 in a project and hot reload everything (server and client) in development to maximize dev productivity.

The boilerplate uses the most recent versions of all packages as of March 16, 2018. The exception is Webpack (it does not use Webpack 4, which is a whole new beast).

- [ReactJS] - The state based framework for your Views
- [React Router v4] - For routing to different paths
- [Redux] - Redux manages your state
- [Babel] - The compiler to compile your JS files with es6, es7, JSX syntax to regular javascript
- [Webpack] - The module binder which takes all your JS files from different directories and compiles them into a single app.bundle.js (you can change the filename of course) so you can include it in a HTML page
- [ExpressJS] - The node framework to serve your views to the world when they hit the server at example.com or example.com/awesome.html

It builds on this great foundation: https://github.com/tahnik/react-expressjs

# Installation

Node Version: v9.8.0

Just clone this repo or download the zip file. `cd` into the directory and run

    npm install

## Developing App with Hot Reload

To develop your own react application, you can take advantage of React Hot Loader and Webpack Dev Server. To develop app with hot reload:

    npm run build:dev
    npm start

Now you can access your server on http://localhost:3000. The server talks to the webpack-dev-server on http://localhost:8080 which handles hot reloading ReactJS, CSS, and image assets. You can modify your `client/assets`, `client/src` and see the page automatically refresh. 

Furthermore, the server code is also hot loaded. You can modify `server/src` but you need to manually refresh to see effects. Still better than rebuilding and restarting the server.

## Production build and Deploy

To make a production build of your project, run the following commands

    npm run build
  
This will create create two files: `index.js` in `server/public/js` and `server.js` in `server/bin`.

`server.js` will be used for serving the application on port 3000 and `index.js` is the actual react app itself.

Finally run

    npm start

The you will be able to access this app from http://localhost:3000.

To get a distributable tarball of your application, run this command

    npm pack

Remember that you have to run `npm run build` before doing this. This will create a tar.gz file in your root folder. The contents in this file is deployable. All you need to do is copy the contents inside package folder inside this tar.gz file to your server and run the app with something like [pm2].
