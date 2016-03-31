'use strict';

var gulp        = require('gulp');
var bowerFiles  = require('main-bower-files');
var merge       = require('merge-stream');
var $           = require('gulp-load-plugins')({ lazy: true });

// $.injects links for js/css files into dist/index.html
module.exports = function(config, log){
  gulp.task('build-index', function() {
    var app, dist = {read: false, cwd: config.build_destination};
    if($.util.env.production) {
      app = gulp.src(config.appProd, dist);
    } else {
      app = merge(
        gulp.src(config.allAppCss, dist),
        gulp.src(config.allJs, {cwd: config.build_destination})
          .pipe($.plumber())
          .pipe($.angularFilesort())
      );
    }

    return gulp.src(config.indexHtml)
      // [production, development] vendor styles
      .pipe($.inject(
        gulp.src(config.vendorCss, dist), {
          addRootSlash: false,
          name:        'vendor'
        }
      ))
      // [development] vendor scripts - references bowerFiles() in order to establish file order
      .pipe($.if(!$.util.env.production, $.inject(
        gulp.src(bowerFiles({includeDev: true, filter: avoidIeShims}), {read: false, cwd: 'bower_components'}), {
          addRootSlash: false,
          name:        'vendor',
          addPrefix:   'vendor'
        }
      )))
      // [development] shim scripts
      .pipe($.if(!$.util.env.production, $.inject(
        gulp.src(bowerFiles({includeDev: true, filter: onlyIeShims}), {read: false, cwd: 'bower_components'}), {
          addRootSlash: false,
          name:        'shim',
          addPrefix:   'vendor'
        }
      )))
      // [production] vendor scripts
      .pipe($.if($.util.env.production, $.inject(
        gulp.src(config.prodVendorJs, dist), {
          name: 'vendor',
          addRootSlash: false
        }
      )))
      // [production] shim scripts
      .pipe($.if($.util.env.production, $.inject(
        gulp.src(config.prodShimJs, dist), {
          name: 'shim',
          addRootSlash: false
        }
      )))
      // [development, production] app scripts/styles
      .pipe($.inject(
        app, {
          name: 'app',
          addRootSlash: false
        }
      ))
      // [production] config.js - a timestamp revision is appended to cache bust
      //.pipe($.if($.util.env.production, $.inject(
      //  gulp.src(config.allConfigJs, dist), {
      //    name: 'config',
      //    addRootSlash: false,
      //    transform: function(filepath) {
      //      var now = new Date().getTime();
      //      return '<script src="' + filepath + '?v=' + now + '"></script>';
      //    }
      //  }
      //)))
      .pipe($.if($.util.env.production, $.minifyHtml({conditionals: true})))
      .pipe(gulp.dest(config.build_destination))
      .pipe($.connect.reload());
  });

  // Avoid shim files as they go somewhere else
  function avoidIeShims(filePath) {
    for (var i = 0; i < config.avoidShimsJs.length; i++) {
      if (filePath.indexOf('.js') === -1 || filePath.indexOf(config.avoidShimsJs[i]) !== -1)
        return false;
    }
    return true;
  }

  // include only shim files
  function onlyIeShims(filePath) {
    for (var i = 0; i < config.avoidShimsJs.length; i++) {
      if (filePath.indexOf('.js') !== -1 && filePath.indexOf(config.avoidShimsJs[i]) !== -1)
        return true;
    }
    return false;
  }
};
