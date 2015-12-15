'use strict';

var del         = require('del');
var gulp        = require('gulp');

// remove any config.js file
// this is used by deployment builds
module.exports = function(cb){
  gulp.task('clean-config', function(cb) {
    del(['dist/**/config.module.js'], cb);
  });
};
