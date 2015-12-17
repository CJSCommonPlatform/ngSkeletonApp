(function () {
  'use strict';

  angular
    .module('cpp-ui-spa-master.global.error-tracing.traceError')
    .factory('traceError', traceError);

  /* @ngInject */
  function traceError($window) {
    var service = {
      print: $window.printStackTrace
    };
    return service;
  }

})();

