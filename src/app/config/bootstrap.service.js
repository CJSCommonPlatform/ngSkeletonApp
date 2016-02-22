(function () {
    'use strict';

    angular
        .module('cpp-ui-spa-master.bootstrap', [])
        .factory('BootstrapService', BootstrapService);

    function BootstrapService($q, $http) {
        var service = {
            bootstrap: bootstrap,
            done: false
        };
        return service;

        ////////////////

        function bootstrap(moduleName) {
            return $q.all([
                $http.get('./app/config/app.config.json'),
                $http.get('./app/config/routes.config.json')
            ])
            .then(function (results) {
                service.done = true;
                angular.module(moduleName)
                  .value('globalConfig', results[0].data)
                  .value('routesConfig', results[1].data);
            });
        }
    }

})();
