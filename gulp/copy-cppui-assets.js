'use strict';

var gulp = require('gulp');

// copies cpp-ui assets
module.exports = function(config, log){
  gulp.task('copy-cppui-assets', function() {
    return gulp.src(config.cppAssets)
      .pipe(gulp.dest('dist/assets'));
  });
};
