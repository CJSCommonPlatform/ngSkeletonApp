(function () {
  'use strict';

  angular
    .module('cpp-ui-spa-master.routes.lazy',[])
    .controller('LazyController', LazyController);

  function LazyController($injector, $ocLazyLoad){
    $ocLazyLoad.load({
      name: 'cpp-ui-spa-master.case.HelloWorld',
      files: ['app/components/case/case-example.service.js']
    }).then(function(){
      var HelloWorld = $injector.get('HelloWorld');
      vm.message = HelloWorld.greetings();
    });
    var vm = this;
    vm.message = 'Nice lazy loading !!';
  }

}());
