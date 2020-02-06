let mix = require('laravel-mix');

mix.extract(['axios', 'vue', 'alertifyjs'])
    .js('src/app.js', 'dist/js/')       //compile js, put in dist
    .sass('src/app.scss', 'dist/css')   //compile sass
    .setPublicPath('dist');             //set public folder
