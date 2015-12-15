'use strict';

var gulp  = require('gulp');
var merge = require('merge-stream');
var $     = require('gulp-load-plugins')({ lazy: true });

// copies angular app and dependencies to /dist
module.exports = function(config){
  gulp.task('copy-js-app', function() {
    if($.util.env.production) {
      return gulp.src(config.distJsFiles)
        .pipe($.plumber())
        .pipe($.cached('js'))
        .pipe(gulp.dest(config.build_destination))
        .pipe($.connect.reload());
    } else {
      return gulp.src(config.allJsButTest)
        .pipe($.plumber())
        .pipe($.cached('js'))
        .pipe(gulp.dest(config.build_destination))
        .pipe($.connect.reload());
    }
  });

};
