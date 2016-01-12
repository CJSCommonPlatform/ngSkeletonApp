(function () {

  'use strict';

  module.exports = function () {

    var root = './',
        reports = './reports/',
        src = './src/',
        app = src + 'app/',
        dist = './dist/',
        assets = src + 'assets/';

    var wiredep = require('wiredep');
    var packageJson = require('./package.json');

    var config = {
      build_dir: dist,
      servePort: '9009',
      serveHost: '127.0.0.1',
      build_destination: 'dist',
      styles: 'src/assets/styles/app.less',
      distStyles: './dist/styles',
      vendorStyles: 'src/assets/styles/vendor.less',
      imagesSrc: 'src/images/**',
      bowerFiles: '**/*.js',
      protFiles: 'src/**/*.prot.js',
      protConfig: 'protractor.conf.js',
      distJsFiles: [
        'src/**/components/**/*.js',
        'src/**/views/**/*.js',
        '!src/app/views/routes.module.js',
        '!src/**/*.spec.js',
        '!src/**/*.prot.js',
        '!src/**/*.page.js'
      ],
      allLessFiles: [
        'src/**/*.less',
        '!src/styles/vendor.less'
      ],
      allJsButTest: [
        'src/**/*.js',
        '!src/**/*.spec.js',
        '!src/**/*.prot.js',
        '!src/**/*.page.js'
      ],
      allTestFiles: [
        'src/**/*.spec.js'
      ],
      allAppCss: '**/app*.css',
      distScripts: 'dist/scripts',
      distVendor: 'dist/vendor',
      distLanguages: 'dist/languages',
      allLangualgesFiles: 'src/app/**/*.lang.json',
      allJs: [
        'app/app.bootstrap.js',
        'app/app.module.js',
        'app/views/routes.module.js',
        'app/views/index/**/*.js',
        'app/config/**/*.js',
        'external/**/*.js'
      ],
      allJsFilesApartFromTest: [
        'app/app.bootstrap.js',
        'app/app.module.js',
        'app/views/**/*.js',
        'external/**/*.js',
        'app/config/**/*.js',
        '!**/*.spec.js',
        '!**/*.prot.js',
        '!**/*.page.js'
      ],
      distApp: dist + 'app',
      allAppJs: 'src/app/**/*.js',
      fontFiles: '**/*.{otf,eot,svg,ttf,woff,woff2}',
      cppAssets: 'bower_components/ng-gov-uk/dist/assets/**/*',
      bowerCss:'bower_components/**/*.css',
      appProd: '**/app-*.min.{js,css}',
      indexHtml: 'src/index.html',
      allHtml: '**/*.html',
      vendorCss: '**/vendor*.css',
      prodVendorJs: 'scripts/vendor*.js',
      allConfigJs: 'src/app/config/*.js',
      configJs: dist + '**/config.module.js',
      allImagesFiles: '**/*.{png,jpg,jpeg,gif}',
      distImages: 'dist/images',
      banner: '/*! Version ' + packageJson.version + ' - ' + new Date().toString() + ' */\n',
      version: packageJson.version,
      src_dir: src,
      root: root,
      reports: reports,
      e2e_report_dir: reports + 'e2e/',
      tests_report_dir: reports + 'coverage/',

      globs: {
        js: [
          src + '**/*.js',
          '!' + src + '**/test/*'
        ],

        templatesApp: ['./src/app/**/*.html'],

        translations: './languages/*',
        tests: [src + '**/test/*']
      },

      /*
       * Karma and test settings
       */
      karmaConf: __dirname + '/karma.conf.js',
      karmaPlugins: ['karma-jasmine', 'karma-coverage', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-sinon', 'karma-junit-reporter'],
      karmaBowerDependencies: getKarmaBowerDependencies(),
      appFilesToTest: [
        app + '**/*.module.js',
        app + '**/!(*.prot|*.page).js',
        app + '!(bootstrap.js)'
      ],

      ///*
      // * Browser sync serving paths
      // */
      //serve: {
      //  dev: {
      //    root: src,
      //    port: 3008,
      //    routes: {
      //      '/common': "node_modules/common/build",
      //      '/bower_components': 'bower_components',
      //      '/express': 'src/translations',
      //      '/apps/nbt': 'src'
      //    },
      //    index: 'index.app.html'
      //  },
      //  dist: {
      //    root: 'build/app/',
      //    port: 3008
      //  },
      //  prod: {
      //    root: 'build/app/',
      //    port: 3008
      //  }
      //},

      browserReloadDelay: 1000

      /*
       * Node settings
       */
      //defaultPort: 3005,
      //serverFiles: 'mock',
      //swaggerServer: 'mock/server.js'
    };

    config.karma = getKarmaOptions();

    return config;

    ///////////////////////

    function getKarmaBowerDependencies() {
      return wiredep({
        devDependencies: true
      })['js'];

    }

    function getKarmaOptions() {
      var options = {
        files: [].concat(
          config.karmaBowerDependencies, // karma dependencies i.e. angular mocks
          config.appFilesToTest // app modules and files to test
        ),
        coverage: {
          dir: config.tests_report_dir,
          reporters: [ // types of reporters to use
            {type: 'html', subdir: 'report-html'}, // report in browser
            {type: 'lcov', subdir: 'report-lcov'}, // for jenkin reading
            {type: 'text-summary'} // output to the console
          ]
        },
        preprocessors: {
          'src/**/!(test)/*.js': ['coverage']
        }
      };

      return options;
    }
  };
}());
