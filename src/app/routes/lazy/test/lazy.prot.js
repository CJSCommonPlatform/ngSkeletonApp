(function () {
  'use strict';

  var LazyPage = require('./lazy.page');

  describe('LazyController', function () {

    var page = new LazyPage();
    beforeEach(function() {
      page.get('/#/');
    });

    it('should ...', function () {

      expect(page.getCurrentUrl()).toMatch('/#/');

    });

  });

}());
