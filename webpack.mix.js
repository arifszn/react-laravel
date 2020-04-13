const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .react('resources/js/views/Dashboard.js', 'public/js/views')
   .react('resources/js/views/Login.js', 'public/js/views')
   .react('resources/js/views/Leads.js', 'public/js/views')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/Leads.scss', 'public/css');
