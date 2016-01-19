'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    browserSync = require('browser-sync'),
    map = require('map-stream'),
    $ = require('gulp-load-plugins')({ lazy: true });


module.exports = function (config, log) {

    gulp.task('check-commit', ['lint-break', 'test']);

    gulp.task('lint', function () {
        log('Analysing source with ESLint');

        return lint(false);
    });

    gulp.task('lint-break', function () {
        return lint(true);
    });

    function lint(breakOnError) {
        return gulp.src(config.globs.js)
            .pipe($.if(args.verbose, $.print()))/*gulp lint --verbose*/
            .pipe($.eslint()) // defaults to local linting config
            .pipe($.eslint.format())
            .pipe($.if(breakOnError, $.eslint.failOnError()))
            .pipe(browserSync.reload({ stream: true }));
    }
};

