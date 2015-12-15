'use strict';

var del  = require('del');
var gulp = require('gulp');

// remove the /dist folder
module.exports = function(cb){
  gulp.task('clean', function(cb) {
    del(['dist'], cb);
  });

};
