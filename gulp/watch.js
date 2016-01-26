'use strict';

var gulp      = require('gulp');
var runSequence = require('run-sequence');

// watch files for changes and invokes respective tasks
module.exports = function(config, log){
  gulp.task('watch', function() {
    gulp.watch('bower.json',  function() { runSequence(['copy-js-vendor', 'copy-fonts', 'copy-images'], 'build-index'); });
    gulp.watch(config.allJsButTest, function() { runSequence('copy-js-app', 'build-index', 'lint'); });
    gulp.watch(config.allTestFiles, function() { runSequence('test'); });
    gulp.watch('src/app/**/*.html', function() { runSequence('copy-html'); });
    gulp.watch(config.allLessFiles, ['build-css-app']);
    gulp.watch([
      config.vendorStyles
    ], ['build-css-vendor']);
    gulp.watch(config.imagesSrc, ['copy-images']);
    gulp.watch([config.indexHtml], ['build-index']);
  });

};
