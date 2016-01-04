(function () {
  'use strict';

  angular
    .module('cpp-ui-spa-master')
    .factory('stacktraceService', stacktraceService);

  /* @ngInject */
  function stacktraceService() {
    var service = {
      print: printStackTrace
    };
    return service;
  }

})();

