'use strict';

var gulp        = require('gulp');
var merge       = require('merge-stream');
var bowerFiles  = require('main-bower-files');
var $           = require('gulp-load-plugins')({ lazy: true });

// copies bower main javascript files to /dist
module.exports = function(config){
  gulp.task('copy-js-vendor', function() {
    return gulp.src(bowerFiles(config.bowerFiles, {includeDev: true}), {base: 'bower_components'})
      .pipe($.if($.util.env.production, $.uglify()))
      .pipe($.cached())
      .pipe(gulp.dest(config.distVendor))
      .pipe($.connect.reload());
  });
};
