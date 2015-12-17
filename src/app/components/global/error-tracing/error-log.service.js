(function () {
  'use strict';

  angular
    .module('cpp-ui-spa-master.global.error-tracing.errorLog',[{
     name:'cpp-ui-spa-master.global.error-tracing.traceError',
     files:['app/components/global/error-tracing/error-tracing.service.js']
    }])
    .factory('errorLog', errorLog);

  /* @ngInject */
  function errorLog($log, $window, traceError, $http, globalConfig) {
    var service = {
      log: log
    };
    return service;

    // I log the given error to the remote server.
    function log(exception, cause) {
      $log.error.apply( $log, arguments );
      try {
        var errorMessage = exception.toString();
        var stackTrace = traceError.print({ e: exception });
        var data = angular.toJson({
          errorUrl: $window.location.href,
          errorMessage: errorMessage,
          stackTrace: stackTrace,
          cause: ( cause || '' )
        });

        $http.post(globalConfig.errorServer, data, {contentType: 'application/json'})
          .error(function(loggingError){
            $log.warn( 'Error logging failed' );
            $log.log( loggingError );
          });
      } catch ( loggingError ) {
        $log.warn( 'Error logging failed' );
        $log.log( loggingError );
      }
    }
  }

})();

