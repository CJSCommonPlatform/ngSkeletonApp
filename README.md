#AngularJS skelleton using Gulp.js for tasks automation

As coding styles we are following John Papa's recommendations: https://github.com/johnpapa/angular-styleguide

# Installation

npm install && bower install

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
```
