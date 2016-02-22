(function () {

    'use strict';

    angular
      .module('cpp-ui-spa-master')
      .factory('errorLogService', errorLogService);

    function errorLogService($log, $window, stacktraceService, globalConfig) {
        function log(exception, cause) {
            if (globalConfig.reportErrors) {
                try {
                    var errorMessage = exception.toString();
                    var stackTrace = stacktraceService.print({ e: exception });
                    // we using ajax to avoid circular dependency as $http service uses the errorLogService
                    $.ajax({
                        type: 'POST',
                        url: globalConfig.errorServer,
                        contentType: 'application/json',
                        data: angular.toJson({
                            errorUrl: $window.location.href,
                            errorMessage: errorMessage,
                            stackTrace: stackTrace,
                            cause: (cause || '')
                        })
                    });
                } catch (loggingError) {
                    $log.warn('Error logging failed');
                    $log.log(loggingError);
                }
            } else {
                $log.error.apply($log, arguments);
            }
        }
        // Return the logging function.
        return (log);
    }

}());
