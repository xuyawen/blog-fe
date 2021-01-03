// next.config.js
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withSass,withCss], { webpack: config => config });