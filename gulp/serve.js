'use strict';

var gulp = require('gulp');
var open = require('open');
var $    = require('gulp-load-plugins')({ lazy: true });

// starts development server
// [development] starts livereload and opens browser
module.exports = function(config, log){
  gulp.task('serve', function() {
    var port = config.servePort,
      host = config.serveHost;

    $.connect.server({
      port:       port,
      root:      'dist',
      hostname:   host,
      livereload: true
    });
    open('http://' + host + ':' + port);
  });

};
