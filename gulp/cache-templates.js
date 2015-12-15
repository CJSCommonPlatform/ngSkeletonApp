'use strict';

var gulp        = require('gulp');
var bowerFiles  = require('main-bower-files');
var merge       = require('merge-stream');
var $           = require('gulp-load-plugins')({ lazy: true });
var ngApp       = 'cpp-ui-spa-master';

// caches html files to $templateCache
// copies to /dist
module.exports = function(config, log){
  gulp.task('cache-templates', ['html-lint'], function() {
    //return merge(
    //  gulp.src(config.globs.templatesApp),
    //  gulp.src(bowerFiles(config.allHtml))
    //)
    //  .pipe($.plumber())
    //  .pipe($.minifyHtml()) // used in development to catch angular expression errors
    //  .pipe($.angularTemplatecache('templates.js', {module: ngApp}))
    //  .pipe(gulp.dest(config.distApp))
    //  .pipe($.connect.reload());
  });
};
