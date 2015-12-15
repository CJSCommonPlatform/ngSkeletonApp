'use strict';

var gulp = require('gulp'),
    del = require('del'),
    $ = require('gulp-load-plugins')({lazy: true});

module.exports = function (config, log) {
  gulp.task('test', ['lint'], function (done) {

    del(config.tests_report_dir);

    startTests(true /*singleRun mode*/, done);
  });

  gulp.task('autotest', ['lint'], function (done) {
    startTests(false /*continuous testing mode*/, done);
  });

  function startTests(singleRun, done) {

    var karma = require('karma').server;

    var excludeFiles = [];

    karma.start({
      configFile: config.karmaConf,
      exclude: excludeFiles,
      singleRun: !!singleRun
    }, karmaCompleted);

    function karmaCompleted(karmaResult) {
      log('Karma completed!');

      if (karmaResult === 1) {
        // passing a string into a callback in func in gulp signifies an error
        done('karma: tests failed with code ' + karmaResult);
      }
      else {
        done();
      }
    }
  }
};
