'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({ lazy: true });

// copies all main fonts to /dist
module.exports = function (config) {
  gulp.task('copy-fonts', function () {
    return gulp.src(config.fontFiles)
      .pipe($.rename({ dirname: ''}))
      .pipe(gulp.dest(config.fontDest))
      .pipe($.connect.reload());
  });

};
