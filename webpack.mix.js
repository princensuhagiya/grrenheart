

let mix = require("laravel-mix");

mix.js('src/js/main.js', 'public/js/main.js')
   .sass("src/scss/main.scss", "public/css/style.css");


