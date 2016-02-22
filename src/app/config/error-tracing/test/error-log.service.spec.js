describe('errorLogService', function(){
    var errorLogService, $httpBackend, $log, stacktraceService, $window, $rootScope, $log;

    describe('error service true', function(){
      var globalConfig = {
        reportErrors: true,
        errorServer: 'test'
      };

      beforeEach(
        module(
          'cpp-ui-spa-master',
          function ($provide) {
            $provide.value('globalConfig', globalConfig);
          }
        )
      );

      beforeEach(inject(function($injector){
        errorLogService = $injector.get('errorLogService');
        $httpBackend = $injector.get('$httpBackend');
        stacktraceService = $injector.get('stacktraceService');
        $rootScope = $injector.get('$rootScope');
        $window = $injector.get('$window');
        $log = $injector.get('$log');
        sinon.stub($log, 'error');
        spyOn(stacktraceService, 'print').and.callThrough();
        spyOn($, 'ajax').and.callThrough();
        $httpBackend.whenGET('/' + globalConfig.errorServer).respond(200, '');
      }));

      it('Should just log the message', function(){
        errorLogService('hello', 'world');
        $rootScope.$digest();
        expect(stacktraceService.print).toHaveBeenCalled();
        expect($.ajax).toHaveBeenCalled();
      });

    });

    describe('error service false', function(){
      var globalConfig = {
        reportErrors: false,
        errorServer: 'test'
      };

      beforeEach(
        module(
          'cpp-ui-spa-master',
          function ($provide) {
            $provide.value('globalConfig', globalConfig);
          }
        )
      );

      beforeEach(inject(function($injector){
        errorLogService = $injector.get('errorLogService');
        $httpBackend = $injector.get('$httpBackend');
        stacktraceService = $injector.get('stacktraceService');
        $rootScope = $injector.get('$rootScope');
        $window = $injector.get('$window');
        $log = $injector.get('$log');
        sinon.stub($log, 'error');
        //stacktraceService = sinon.stub(stacktraceService, 'print').returns('');
        spyOn(stacktraceService, 'print').and.callThrough();
        spyOn($, 'ajax').and.callThrough();
        spyOn($log, 'error').and.callThrough();
        $httpBackend.whenGET('/' + globalConfig.errorServer).respond(200, '');
      }));

      it('Should log the message', function(){
        errorLogService('hello', 'world');
        $rootScope.$digest();
        expect($log.error).toHaveBeenCalled();
      });

    });
});
