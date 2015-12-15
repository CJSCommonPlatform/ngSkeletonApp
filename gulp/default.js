'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var $            = require('gulp-load-plugins')({ lazy: true });

// main gulp command
// run gulp for development build
// run gulp --production for production build
module.exports = function(){
  gulp.task('default', function(cb) {
    if($.util.env.production) {
      runSequence('jshint', 'build', cb);
    } else {
      runSequence(['jshint', 'build'], 'serve', 'watch', cb);
    }
  });


};
