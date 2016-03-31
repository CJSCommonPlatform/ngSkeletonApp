'use strict';

var gulp        = require('gulp');
var merge       = require('merge-stream');
var bowerFiles  = require('main-bower-files');
var $           = require('gulp-load-plugins')({ lazy: true });

// copies bower main javascript files to /dist
module.exports = function(config){
  gulp.task('copy-js-vendor', ['copy-js-shim'], function() {
    return gulp.src(bowerFiles({includeDev: true, filter: avoidIeShims}), {base: 'bower_components'})
      .pipe($.if($.util.env.production, $.uglify()))
      .pipe($.cached())
      .pipe(gulp.dest(config.distVendor))
      .pipe($.connect.reload());
  })

  gulp.task('copy-js-shim', function() {
    return gulp.src(bowerFiles({includeDev: true, filter: onlyIeShims}), {base: 'bower_components'})
      .pipe($.if($.util.env.production, $.uglify()))
      .pipe($.cached())
      .pipe(gulp.dest(config.distVendor))
      .pipe($.connect.reload());
  })

  // Avoid shim files as they go somewhere else
  function avoidIeShims(filePath) {
    for (var i = 0; i < config.avoidShimsJs.length; i++) {
      if (filePath.indexOf('.js') === -1 || filePath.indexOf(config.avoidShimsJs[i]) !== -1)
        return false;
    }
    return true;
  }

  // include only shim files
  function onlyIeShims(filePath) {
    for (var i = 0; i < config.avoidShimsJs.length; i++) {
      if (filePath.indexOf('.js') !== -1 && filePath.indexOf(config.avoidShimsJs[i]) !== -1)
        return true;
    }
    return false;
  }
};

