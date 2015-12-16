#AngularJS skelleton using Gulp.js for tasks automation

As coding styles we are following John Papa's recommendations: https://github.com/johnpapa/angular-styleguide

# Installation

'''
The project requires of Gulp.js and Bower.js to work

$ npm install --global gulp
$ npm install --global bower-cli
$ npm install && bower install
'''

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
          |- routes
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
gult -T: Will display all the tasks available
```

# lazy loading

The project uses lazy loading (https://oclazyload.readme.io) for routes and modules, which means that just the essential modules and files are preloaded. Controllers, templates and extra modules will be loaded on the fly when needed.

# Dynamic Routing

Routes are provided initially through src/app/config/routes.config.json. This is done so later the system can be plugged to a 3rd party API to manage routes dynamically.
