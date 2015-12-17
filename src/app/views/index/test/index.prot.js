var IndexPage = require('./index.page');

(function () {
  'use strict';

  describe('IndexController', function () {

    var page = new IndexPage();

    it('should ...', function () {
      page.goToUrl('/#/');
      expect(page.getCurrentUrl()).toMatch('/#/');
    });

  });

}());
