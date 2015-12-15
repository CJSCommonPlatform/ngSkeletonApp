'use strict';

var gulp  = require('gulp');
var karma = require('karma');

// run karma unit tests
module.exports = function(config, log){
  gulp.task('karma', function(done) {
    karma.server.start({
      configFile: config.karmaConf,
      singleRun:  true
    }, function() {
      done();
    });
  });

};
