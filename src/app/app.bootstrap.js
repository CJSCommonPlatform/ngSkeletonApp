(function () {
    'use strict';

    function fetchData() {

        var initInjector = angular.injector(['ng']);

        var $http = initInjector.get('$http');

        return $http.get('./app/config/app.config.json').then(function (response) {
            angular.module('cpp-ui-spa-master').value('globalConfig', response.data);
            return $http.get('./app/config/routes.config.json').then(function (response) {
                angular.module('cpp-ui-spa-master').value('routesConfig', response.data);
            }, function (errorResponse) {
                // Handle error case
                console.log('Error on loading routes:', errorResponse);
            });
        }, function (errorResponse) {
            // Handle error case
            console.log('Error on bootstrapping:', errorResponse);
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['cpp-ui-spa-master']);
        });
    }

    fetchData().then(bootstrapApplication);
}());
