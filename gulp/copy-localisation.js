'use strict';

var gulp = require('gulp');
var path = require('path');
var $    = require('gulp-load-plugins')({ lazy: true });

// copies lang files into languages folders
module.exports = function(config, log){
  gulp.task('copy-localisation', function() {
    return gulp.src(config.allLangualgesFiles)
      .pipe($.rename(function(filepath) {
        var filename = path.basename(filepath.basename);
        var dirName = filename.substring(0,filename.indexOf('.'));
        filepath.basename = filename.substring(filename.indexOf('.') + 1, filename.length);
        filepath.dirname = dirName;
      }))
      .pipe(gulp.dest(config.distLanguages));
  });
};

