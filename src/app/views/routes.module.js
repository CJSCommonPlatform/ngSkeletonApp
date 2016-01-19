(function () {

    'use strict';

    angular
        .module('cpp-ui-spa-master.routes', [])
        .config(routes);

    function routes($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(false);

        //$urlRouterProvider.otherwise('/');
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('index');
        });
    }

}());
