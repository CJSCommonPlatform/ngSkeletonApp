var LazyPage = require('./lazy.page');

(function () {
  'use strict';

  describe('LazyController', function () {

    var page = new LazyPage();

    it('should ...', function () {
      page.goToUrl('/#/lazy');
      expect(page.getCurrentUrl()).toMatch('/#/lazy');
    });

  });

}());
