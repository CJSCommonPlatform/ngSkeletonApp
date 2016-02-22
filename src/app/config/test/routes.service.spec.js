describe('routes-service', function(){

  var routesConfig,
      mockDynamicStateProvider;

  var mockRoutes = [
    {
      "state": "index",
      "url":"/",
      "templateUrl": "app/views/index/index.tpl.html",
      "pageTitle":"Welcome to the Common Platform",
      "permissions": [],
      "controller": "IndexController",
      "controllerAs": "index",
      "name": "cpp-ui-spa-master.routes.index",
      "files":[
        "app/views/index/index.controller.js"
      ]
    },
    {
      "state": "lazy",
      "url":"/lazy",
      "templateUrl": "app/views/lazy/lazy.tpl.html",
      "pageTitle":"Lazy Loading Example",
      "permissions": [],
      "controller": "LazyController",
      "controllerAs": "lazy",
      "name": "cpp-ui-spa-master.routes.lazy",
      "files":[
        "app/views/lazy/lazy.controller.js",
        "app/components/case/case-example.service.js"
      ]
    }

  ];

  beforeEach(module('cpp-ui-spa-master.config.routes-service', 'ngLodash', 'ui.router'));

  beforeEach(
    function(){
      mockDynamicStateProvider = sinon.stub({addState: function(){}});
      module(
        function($provide) {
          $provide.value('dynamicStateProvider', mockDynamicStateProvider);
          $provide.value('routesConfig', mockRoutes);
        }
      )
    }
  );


  it('Should set the routes on init', inject(function(RoutesService, $injector, $state){
    RoutesService.init();
    expect(RoutesService.initialised).toEqual(true);
    var $rootScope = $injector.get('$rootScope');
    $state.current = {
      data: {
        pageTitle: 'test'
      }
    };
    $rootScope.$emit('$stateChangeSuccess');
    $rootScope.$apply();
    expect($rootScope.pageTitle).toEqual('test');
  }));

});
