'use strict';

var gulp        = require('gulp');
var bowerFiles  = require('main-bower-files');
var $           = require('gulp-load-plugins')({ lazy: true });

// copies all main fonts to /dist
module.exports = function (config) {
  gulp.task('copy-fonts', function () {
    console.log('files:', bowerFiles(config.fontFiles));
    return gulp.src(bowerFiles(config.fontFiles))
      .pipe($.rename({ dirname: ''}))
      .pipe(gulp.dest('dist/assets/fonts'))
      .pipe($.connect.reload());
  });

};
