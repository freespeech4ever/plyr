#!/bin/zsh
gulp build
cp dist/plyr.css ../gab-tv/public/css/green.css 
cp dist/plyr.min.js ../gab-tv/public/js/green.min.js 
cp dist/plyr.svg ../gab-tv/public/img/green.svg
