var dev = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

let providePlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery"
});

module.exports = {
  context: __dirname,
  devtool: dev ? "inline-sourcemap" : null,
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "main.min.js"
  },
  resolve: {
    alias: {
      // bind version of jquery-ui
      'jquery-ui': 'jquery-ui-dist/jquery-ui.js',
      // bind to modules;
      modules: path.join(__dirname, "node_modules")
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.html$/,
      loader: 'ngtemplate?relativeTo=' + __dirname + '/!html',
      exclude: [
        path.resolve(__dirname, 'src/index.html')
      ]
    }, {
      test: /[\/\\]node_modules[\/\\]jquery-ui-dist[\/\\]jquery-ui\.js$/,
      loader: "imports?this=>window"
    }]
  },
  plugins: dev ? [new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    providePlugin
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    }),
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    }),
    providePlugin
  ],
};