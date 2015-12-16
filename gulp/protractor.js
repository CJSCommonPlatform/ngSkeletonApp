'use strict';

var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;

module.exports = function(config, log){

  gulp.task('protractor', ['default'], function () {
    gulp.src([config.protFiles])
      .pipe(protractor({
        configFile: config.protConfig
      }))
      .on('error', function (e) {
        throw e;
      })
      .once('end', function () {
        process.exit();
      });
  });

};
