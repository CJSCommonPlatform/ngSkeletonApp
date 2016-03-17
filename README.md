#AngularJS skelleton using Gulp.js for tasks automation

As coding styles we are following John Papa's recommendations: https://github.com/johnpapa/angular-styleguide

# Requires

Node.js v4.0

# Installation

```
The project requires of Gulp.js and Bower.js to work and Karma and selenium-webdriver to run protractor tests

$ npm install -g gulp
$ npm install -g bower
$ npm install -g selenium-webdriver
$ webdriver-manager update
$ webdriver-manager start (webdriver needs to be running in order to run protractor tests)
$ npm install && bower install
```

# Afer Installation
```
Go to your local .git/hooks folder and if you see the file 'commit-msg.old'
rename it to 'commit.msg' and if there is an existing 'commit-msg' rename it to
'commit-msg.new'. This is so that the pre-git plugin installed as part of npm install
works as it should and you continue to get a change Id for every commit.

```

# Application loading

Angular.bootstrap is set up to load initial resources like configuration and routes, but this can also be used for permissions and users. So we make sure that all the essential resources are ready from the beginning.

# Structure

```
root
  |
  |- external (to include all external JS libraries that are not included in bower)
  |- gulp (includes all the gulp tasks in modular files)
  |- src
      |- app
          |- components
          |- config
              |- app.config.json
              |- routes.config.json
          |- views
              |- routes.module.js
          |- app.bootsptrap.js
          |- app.module.js
      |- assets
          |- css
          |- fonts
          |- images
          |- styles
      |- index.html
  |- bower.json
  |- gulp.config.js (configuration file that includes constants for gulp tasks)
  |- gulpfile.js
  |- karma.conf.js
  |- package.json

```
# Gulp tasks to take into consideration

```
gulp: Will generate a dist folder, inject into the index all the dependencies, copy all the relevant files and serve project
gulp --production: Will generate a dist folder with minified, merged and uglified js files, inject into the index all the dependencies, copy all the relevant files
gulp test: Will run the unit tests
gulp autotest: Will run the unit tests in continuous mode
gulp protractor: Will run protractor tests
gult -T: Will display a tree structure of all the tasks available
gulp help: Will list all the available main and sub tasks
```

# lazy loading

The project uses lazy loading (https://oclazyload.readme.io) for routes and modules, which means that just the essential modules and files are preloaded. Controllers, templates and extra modules will be loaded on the fly when needed. The best way to implement the ocLazyLoad and test the components is through adding all the file dependencies un the routes.config.json:
```
  {
    "state": "lazy",
    "url":"/lazy",
    "templateUrl": "app/views/lazy/lazy.tpl.html",
    "pageTitle":"Lazy Loading Example",
    "permissions": [],
    "controller": "LazyController",
    "controllerAs": "lazy",
    "name": "cpp-ui-spa-master.routes.lazy",
    "files":[
      "app/views/lazy/lazy.controller.js",
      "app/components/case/case-example.service.js"
    ]
  }
```
In this way the files will be already available and the dependencies are reachable on the tests as well.

# Dynamic Routing

Routes are provided initially through src/app/config/routes.config.json. This is done so later the system can be plugged to a 3rd party API to manage routes dynamically.

# Permissions

To manage permissions we use Angular Permissions library (https://github.com/Narzerus/angular-permission). In the routes.config.json you basically need to add array of permissions that are entitled to visit that path.
```
  // We define a route via ui-router's $stateProvider
  $stateProvider
    .state('staffpanel', {
      url: '...',
      data: {
        permissions: {
          only: ['admin', 'moderator']
        }
      }
    });
```

# StackTracing Errors

We have override the $exceptionHandler so the platform will try to send any error to a server (errorServer) specified in the app/config/app.config.json. StackTrace.js (www.stacktracejs.com) is the library used to provide this functionality.

# Linting
To maintain common JS coding style and syntax amongst developers we use Eslint linting utility.
