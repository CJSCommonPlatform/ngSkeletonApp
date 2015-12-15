(function () {
  'use strict';

  describe('IndexController', function () {

    beforeEach(module('cpp-ui-spa-master.routes.index'));

    beforeEach(function() {
      browser.get('/#/');
    });

    it('should ...', inject(function () {

      expect(browser.getCurrentUrl()).toMatch('/#/');

    }));

  });

}());
