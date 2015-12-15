(function () {
  'use strict';

  angular
    .module('cpp-ui-spa-master.case.HelloWorld',[])
    .factory('HelloWorld', HelloWorld);

  /* @ngInject */
  function HelloWorld() {
    var service = {
      greetings: greetings
    };
    return service;

    ////////////////

    function greetings() {
      return 'Hello World !!';
    }
  }

})();

