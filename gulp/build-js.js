'use strict';

var gulp          = require('gulp');
var bowerFiles    = require('main-bower-files');
var merge         = require('merge-stream');
var $             = require('gulp-load-plugins')({ lazy: true });
var lazypipe      = require('lazypipe');
var ngApp         = 'cpp-ui-spa-master';

// annotates angular dependency injections
// catches templates
// wraps concatenated angular modules in IIFE
// [production] appends revision and compresses
// copies to /dist
module.exports = function(config, log){
  gulp.task('build-js-app', function() {
    return merge(
      gulp.src(config.allJsforDist, {cwd: 'src'})
    )
      .pipe($.angularFilesort())
      .pipe($.ngAnnotate({single_quotes: true}))
      .pipe($.concat('app.js'))
      .pipe($.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1\n'))
      .pipe($.wrap("(function(angular) {\n\n'use strict';\n<%= contents %>\n\n})(window.angular);"))
      .pipe(productionJs())
      .pipe(gulp.dest(config.distScripts));
  });

  gulp.task('build-js-vendor', function() {
    return gulp.src(bowerFiles({includeDev: true, filter: avoidIeShims}), {base: 'bower_components'})
      .pipe($.concat('vendor.js'))
      .pipe(productionJs())
      .pipe(gulp.dest(config.distScripts));
  });

  gulp.task('build-js-vendor-shim', function() {
    return gulp.src(config.ieShimsJs)
      .pipe($.concat('shim.js'))
      .pipe(productionJs())
      .pipe(gulp.dest(config.distScripts));
  });

  // filter function
  function avoidIeShims(filePath) {
    for (var i = 0; i < config.avoidShimsJs.length; i++) {
      if (filePath.indexOf('.js') === -1 || filePath.indexOf(config.avoidShimsJs[i]) !== -1)
        return false;
    }
    return true;
  }
};

var productionJs = lazypipe()
  .pipe($.rev)
  .pipe($.uglify)
  .pipe($.rename, {extname: '.min.js'});

