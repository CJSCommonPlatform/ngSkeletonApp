// Karma configuration
// Generated on Thu Nov 20 2014 20:21:04 GMT+0100 (West-Europa (standaardtijd))

module.exports = function (config) {

  'use strict';

  var gulpConfig = require('./gulp.config')();

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon'],

    // need for the reporter to work or not
    plugins: gulpConfig.karmaPlugins,

    files: gulpConfig.karma.files,

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: gulpConfig.karma.preprocessors,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'junit'],

    coverageReporter: {
      dir: gulpConfig.karma.coverage.dir,
      reporters: gulpConfig.karma.coverage.reporters
    },

    junitReporter : {
      outputDir: gulpConfig.reports,
      suite: 'ccs'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /* jshint -W101 */
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    autoWatchBatchDelay: 2000,

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    browserNoActivityTimeout: 100000
  });
};
