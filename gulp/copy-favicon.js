'use strict';

var gulp = require('gulp');

// copies favicon to /dist
module.exports = function(config){
  gulp.task('copy-favicon', function() {
    return gulp.src(config.src_dir + 'favicon.ico')
      .pipe(gulp.dest('dist'));
  });

};
