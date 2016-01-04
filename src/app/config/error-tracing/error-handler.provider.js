(function () {
  'use strict';

  angular
    .module('cpp-ui-spa-master')
    .provider('$exceptionHandler',
    {
      $get: function( errorLogService ) {
        return( errorLogService );
      }
    }
  );

})();

