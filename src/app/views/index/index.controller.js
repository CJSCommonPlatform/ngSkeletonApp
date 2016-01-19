(function () {

    'use strict';

    angular
        .module('cpp-ui-spa-master.routes.index')
        .controller('IndexController', IndexController);

    function IndexController() {
        var vm = this;
        vm.message = 'Welcome to the common Platform';
    }

}());
