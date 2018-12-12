# My First React App
###Setting up a React project from scratch:
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