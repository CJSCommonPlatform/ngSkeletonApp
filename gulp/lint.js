'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    browserSync = require('browser-sync'),
    map = require('map-stream'),
    $ = require('gulp-load-plugins')({ lazy: true });

module.exports = function(config, log) {
  //gulp.task('check-commit', ['lint-break', 'test']);

  gulp.task('lint', function () {
    log('Analysing source with JSHint and JSCS');

    return lint(false);
  });

  gulp.task('lint-break', function () {
    return lint(true);
  });

  function lint(breakOnError) {
    return gulp.src(config.globs.js)
      .pipe($.if(args.verbose, $.print()))/*gulp lint --verbose*/
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
      .pipe($.arialinter({
        level: 'AA'
      }))
      .pipe($.if(breakOnError, jsHintErrorReporter()))
      .pipe(browserSync.reload({stream: true}));
  }

  function jsHintErrorReporter() {
    return map(function (file, cb) {
      if (!file.jshint.success) {
        console.log('Error: ' + file.path);
        process.exit(1);
      }
      cb(null, file);
    });
  }
};
