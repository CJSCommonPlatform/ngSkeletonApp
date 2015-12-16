(function () {
  'use strict';

  // this is an example of how to lazy load the module HelloWorld
  angular
    .module('cpp-ui-spa-master.routes.lazy',[{
      name: 'cpp-ui-spa-master.case.HelloWorld',
      files: ['app/components/case/case-example.service.js']
    }])
    .controller('LazyController', LazyController);

  function LazyController(HelloWorld){
    var vm = this;
    vm.message = HelloWorld.greetings();
  }

}());
