'use strict';

var gulp        = require('gulp');
var bowerFiles  = require('main-bower-files');
var $           = require('gulp-load-plugins')({ lazy: true });

// copies all main fonts to /dist
module.exports = function(config){
  gulp.task('copy-fonts', function() {
    return gulp.src(bowerFiles(config.fontFiles))
      .pipe(gulp.dest('dist/fonts'))
      .pipe($.connect.reload());
  });

};
