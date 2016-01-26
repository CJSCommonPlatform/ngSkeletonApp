(function () {
  'use strict';

  describe('lazyController', function () {
    var $controller, controller, HelloWorld, $rootScope, $q;
    beforeEach(module('cpp-ui-spa-master.routes.lazy'));

    beforeEach(inject(function(_$controller_, _HelloWorld_, _$rootScope_, _$q_) {
      HelloWorld = _HelloWorld_;
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $q = _$q_;
      sinon.stub(HelloWorld, 'greetings').returns('test');
      controller = $controller('LazyController', { HelloWorld: HelloWorld});
    }));

    it('controller should be defined', function() {
      $rootScope.$apply();
      expect(controller.message).toBe('test');
    });

  });

}());
