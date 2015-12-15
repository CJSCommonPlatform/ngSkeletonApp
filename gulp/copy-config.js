'use strict';

var gulp        = require('gulp');

// copy configuration to dist/scripts
// this is required for running production builds locally as config.js is omitted
// from the javascript bundle
module.exports = function(cb){
  gulp.task('copy-config', function() {
    return gulp.src(['src/app/config/*.json'])
      .pipe(gulp.dest('dist/app/config'));
  });
};
