(function () {
  'use strict';

  describe('stacktraceService', function(){

    var stacktraceService;

    beforeEach(module('cpp-ui-spa-master'));
    beforeEach(inject(function(_stacktraceService_){
      stacktraceService = _stacktraceService_;
    }));

    it('Should have a method print defined', function(){
      expect(stacktraceService.print).toBeDefined();
    });
  });

}());
