'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ lazy: true });

// renames all bower .css to .less
// (required due to less being unable to import .css files)
module.exports = function(config){
  gulp.task('rename-css-vendor', function() {
    return gulp.src(config.bowerCss)
      .pipe($.rename({prefix: '_', extname: '.less'}))
      .pipe(gulp.dest('bower_components'));
  });

};
