(function () {
    'use strict';

    var injector = angular.injector(['ng', 'cpp-ui-spa-master.bootstrap']);
    var bootstrap = injector.get('BootstrapService');

    bootstrap.bootstrap('cpp-ui-spa-master').then(function () {
        angular.element(document.body).ready(function () {
            angular.bootstrap(document.body, ['cpp-ui-spa-master']);
            document.body.className = document.body.className + ' ng-app';
        });
    });
}());
