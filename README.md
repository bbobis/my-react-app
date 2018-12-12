# My First React App
### Setting up a Hello World React project from scratch:
1. install webpack and webpack cli 
* `npm i -D webpack webpack-cli`
2. Install babel, preset-env and loader for webpack. Babel is used to transpile ES6 and above code down to ES5 so the code works for older browsers
* `npm i -D @babel/core babel-loader @babel/preset-env`
3. Configure babel to use the preset by creating a `.bablerc` file

```javascript
{
    "presets": ["@babel/preset-env"]
}
 ````
 4. Configure webpack to use the babel-loader by creating a `webpack.config.js` file
* We add a rule in webpack config to use babel-loader for any .js file excluding the ones `node_modules` directory
 ````javascript
 module.exports = {
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader"
         }
       }
     ]
   }
 };
 ````
 5. Install eslint and Prettier
 * `npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier`
 6. Install Airbnb style guide
 * `npx install-peerdeps --dev eslint-config-airbnb`
 7. Configure eslint to use airbnb style guide as well as prettier by creating a `.eslintrc` file
 ````javascript
 {
   "extends": ["airbnb", "prettier"],
   "plugins": ["prettier"],
   "rules": {
     "prettier/prettier": ["error"]
   }
 }
 ````
 8. To configure prettier, a `.prettierrc` should be created. In this project i'm using the following configuration for prettier:
 * Always include trailing commas
 * Always use single quotes
 * Setting a print width of 100 characters
 ````javascript
 {
   "singleQuote": true,
   "trailingComma": "all",
   "printWidth": 100
 }
 ````
 9. Install react, react-dom and the react babel preset
 * `npm i react react-dom`
 * `npm i -D @babel/preset-react`
 10. Add the react babel preset to the `.babelrc` file
 ````javascript
 {
   "presets": ["@babel/preset-env", "@babel/preset-react"]
 }
 ````
 11. Install the html webpack plugin as this is a react app
 * `npm i -D html-webpack-plugin`
 12. Add the html webpack plugin to your webpack config file
 ````javascript
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const htmlWebpackPlugin = new HtmlWebpackPlugin({
   template: "./public/index.html",
   filename: "index.html"
 });
 
 module.exports = {
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: [
           "babel-loader"
         ]
       }
     ]
   },
   plugins: [htmlWebpackPlugin]
 };
 ````
 13. Install webpack dev server so we can start our react app
 * `npm i -D webpack-dev-server`
 14. Modify the `package.json` file to use the webpack dev server
 ````json
"scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  }
 ```` 