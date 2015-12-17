(function () {
  'use strict';

  angular
    .module('cpp-ui-spa-master.global.error-tracing.exceptionHandler')
    .provider('$exceptionHandler',
    {
      $get: function( errorLogService ) {
        return( errorLogService );
      }
    }
  );

})();

