'use strict';

var gulp    = require('gulp');
var $       = require('gulp-load-plugins')({ lazy: true });
var stylish = require('jshint-stylish');

// lints javascript
module.exports = function(config, log){
  gulp.task('jshint', function() {
    return gulp.src(config.allAppJs)
      .pipe($.arialinter({
        level: 'AA'
      }))
      .pipe($.jshint())
      .pipe($.jshint.reporter(stylish));
  });

};
