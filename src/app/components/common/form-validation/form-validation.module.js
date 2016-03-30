(function () {
  'use strict';

  angular
    .module('idam-common.form-validation', [
      'idam-common.form-validation.lazy-validation',
      'idam-common.form-validation.lazy-validation-on-click'
    ]);
})();
