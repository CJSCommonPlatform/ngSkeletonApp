'use strict';

var gulp      = require('gulp');
var lazypipe  = require('lazypipe');
var $         = require('gulp-load-plugins')({ lazy: true });

// compiles .less to .css
// [production] auto-prefixes, appends revision and compresses
// copies .css to /dist
module.exports = function(config, log){
  var productionCss = lazypipe()
    .pipe($.autoprefixer)
    .pipe($.minifyCss)
    .pipe($.rev)
    .pipe($.rename, {extname: '.min.css'});


  gulp.task('build-css-app', function() {
    var stream = gulp.src(config.styles)
      .pipe($.less());

    if($.util.env.production) {
      stream = stream
        .pipe(productionCss());
    }
    return stream
      .pipe(gulp.dest(config.distStyles))
      .pipe($.connect.reload());
  });

  gulp.task('build-css-vendor', function() {
    var stream = gulp.src(config.vendorStyles)
      .pipe($.less());

    if($.util.env.production) {
      stream = stream
        .pipe(productionCss());
    }
    return stream
      .pipe(gulp.dest(config.distStyles))
      .pipe($.connect.reload());
  });
};
