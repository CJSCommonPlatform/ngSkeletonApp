(function () {
  'use strict';

  var IndexPage = function () {};


  IndexPage.prototype = Object.create({}, {
    sample: {
      get: function (keys) {
        return element(by.model('username')).sendKeys(keys);
      }
    }
  });

  module.exports = IndexPage;

}());
