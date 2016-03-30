(function () {

  'use strict';

  angular
    .module('cpp-ui-spa-master.routes.validation-example', ['idam-common.form-validation'])
    .controller('ValidationExampleController', ValidationExampleController);

  function ValidationExampleController() {
    var vm = this;

    vm.submitForm = function () {
      alert('Submit form: This gets called only when form is valid');
    };

    vm.checkValidationManually = function () {
      // Check additional criteria before submitting the form
      if (vm.form.$valid) {
        vm.submitForm();
      }
    };
  }

}());
