'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({ lazy: true });
var merge       = require('merge-stream');
var bowerFiles  = require('main-bower-files');

// minifies images in production builds
// copies images to /dist
module.exports = function(config, log){
  gulp.task('copy-images', function() {
    return merge(
      gulp.src('src/images/**'),
      gulp.src(bowerFiles(config.allImagesFiles))
    )
      .pipe($.cached('images'))
//    .pipe(gulpif(gutil.env.production, imagemin()))
      .pipe(gulp.dest(config.distImages))
      .pipe($.connect.reload());
  });
};
