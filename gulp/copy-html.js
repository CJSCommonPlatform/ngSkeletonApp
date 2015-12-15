'use strict';

var gulp        = require('gulp');
var merge       = require('merge-stream');
var $           = require('gulp-load-plugins')({ lazy: true });


// copies root .html files (those not used by angular) to /dist
module.exports = function(config){
  gulp.task('copy-html', function() {
    return gulp.src([config.src_dir + config.allHtml, '!' + config.src_dir + 'index.html'])
      .pipe($.angularHtmlify())
      .pipe($.if($.util.env.production, $.minifyHtml()))
      .pipe(gulp.dest(config.build_destination))
      .pipe($.connect.reload());
  });

};
