'use strict';

var gulp = require('gulp'),
  tasks = require('gulp-task-listing');

module.exports = function (config, log) {
  gulp.task('help', function () {
    return tasks();
  });

  gulp.task('tasks', ['help']);
};
