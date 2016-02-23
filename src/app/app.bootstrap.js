(function () {
    'use strict';

    var injector = angular.injector(['ng', 'cpp-ui-spa-master.bootstrap']);
    var bootstrap = injector.get('BootstrapService');

    bootstrap.bootstrap('cpp-ui-spa-master').then(function () {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['cpp-ui-spa-master']);
        });
    });
}());
