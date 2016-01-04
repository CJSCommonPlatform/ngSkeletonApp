(function () {
    'use strict';

    angular
        .module('cpp-ui-spa-master', [
            'ui.router',
            'oc.lazyLoad',
            'cpp-ui-spa-master.config',
            'cpp-ui-spa-master.routes',
            'ui.bootstrap',
            'ui.cpp',
            'angularUtils.directives.dirPagination',
            'ngAnimate',
            'ngSanitize',
            'ngLocalize',
            'ngLocalize.Config',
            'ngLocalize.Events',
            'ngLocalize.InstalledLanguages',
            'ngCookies',
            'permission',
            'angular-ladda',
            'ngLodash'
        ])
        .value('globalConfig', {})
        .value('routesConfig', [])
        .run(runBlock)
        //.factory(
        //  'stacktraceService',
        //  function() {
        //    // 'printStackTrace' is a global object.
        //    return({
        //      print: printStackTrace
        //    });
        //  }
        //)
        //.provider(
        //  '$exceptionHandler',
        //  {
        //    $get: function( errorLogService ) {
        //      return( errorLogService );
        //    }
        //  }
        //)
        //.factory(
        //  'errorLogService',
        //  function( $log, $window, stacktraceService ) {
        //    // I log the given error to the remote server.
        //    function log( exception, cause ) {
        //      // Pass off the error to the default error handler
        //      // on the AngualrJS logger. This will output the
        //      // error to the console (and let the application
        //      // keep running normally for the user).
        //      $log.error.apply( $log, arguments );
        //      // Now, we need to try and log the error the server.
        //      // --
        //      // NOTE: In production, I have some debouncing
        //      // logic here to prevent the same client from
        //      // logging the same error over and over again! All
        //      // that would do is add noise to the log.
        //      try {
        //        var errorMessage = exception.toString();
        //        var stackTrace = stacktraceService.print({ e: exception });
        //        // Log the JavaScript error to the server.
        //        // --
        //        // NOTE: In this demo, the POST URL doesn't
        //        // exists and will simply return a 404.
        //        $.ajax({
        //          type: 'POST',
        //          url: './javascript-errors',
        //          contentType: 'application/json',
        //          data: angular.toJson({
        //            errorUrl: $window.location.href,
        //            errorMessage: errorMessage,
        //            stackTrace: stackTrace,
        //            cause: ( cause || '' )
        //          })
        //        });
        //      } catch ( loggingError ) {
        //        // For Developers - log the log-failure.
        //        $log.warn( 'Error logging failed' );
        //        $log.log( loggingError );
        //      }
        //    }
        //    // Return the logging function.
        //    return( log );
        //  }
        //)
    ;

    function runBlock($rootScope, locale, routesConfig, dynamicStateProvider, lodash) {

      lodash.each(routesConfig, function(state){
        dynamicStateProvider.addState(state);
      });

      $rootScope.langs = [{
        value: 'en-GB',
        label: 'English'
      }, {
        value: 'cy',
        label: 'Cymraeg'
      }];

      if(locale.getLocale() === 'en-US'){
        locale.setLocale('en-GB');
      }

      // Language Select Function
      $rootScope.selectedLanguage = $rootScope.langs[lodash.findIndex($rootScope.langs, {value: locale.getLocale()})];

      $rootScope.updadeLang = function(lang) {
        locale.setLocale(lang.value);
      };

      $rootScope.globalNav = {
        pageTitle: {
          title: 'Page title',
          type: 'text',
          ref: '#'
        }
      };

      $rootScope.$on('$stateChangePermissionDenied', function() {
        // so far if no valid permissions we send them to the home page
        if (!$rootScope.waitingForCallback)
        {
          //$state.go('index');
        }
      });

    }

}());



