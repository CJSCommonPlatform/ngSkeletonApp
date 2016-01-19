'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

// create standalone build
module.exports = function () {
    gulp.task('build', ['clean-dist'], function (cb) {
        if (gutil.env.production) {
            runSequence([
                'copy-images',
                'build-css-app',
                'build-css-vendor',
                'build-js-app',
                'build-js-vendor',
                'copy-config',
                'copy-favicon',
                'copy-fonts',
                'copy-html',
                'copy-js-app',
                'copy-cppui-assets',
                'copy-localisation'
            ], 'build-index', cb);
        } else {
            runSequence([
                'copy-images',
                'build-css-app',
                'build-css-vendor',
                //'cache-templates',
                'copy-js-vendor',
                'copy-config',
                'copy-favicon',
                'copy-fonts',
                'copy-html',
                'copy-js-app',
                'copy-cppui-assets',
                'copy-localisation'
            ], 'build-index', cb);
        }
    });

};