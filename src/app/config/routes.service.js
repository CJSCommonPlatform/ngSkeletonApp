(function () {
    'use strict';

    angular
        .module('cpp-ui-spa-master.config.routes-service', [])
        .factory('RoutesService', RoutesService);

    function RoutesService($rootScope, $state, routesConfig, dynamicStateProvider, lodash) {
        var service = {
            init: init,
            initialised: false
        };
        return service;

        ////////////////

        function init(){
            lodash.each(routesConfig, function (state) {
                dynamicStateProvider.addState(state);
                service.initialised = true;
            });

            // this needs to be implemented if you want that on permissiondenied redirects you to a given URL
            //$rootScope.$on('$stateChangePermissionDenied', function () {
            //  // so far if no valid permissions we send them to the home page
            //  //  if (!$rootScope.waitingForCallback) {
            //  //    //$state.go('index');
            //  //  }
            //});

            $rootScope.$on('$stateChangeSuccess', function () {
                // updating the page's title
                if ($state.current && $state.current.data && $state.current.data.pageTitle) {
                    $rootScope.pageTitle = $state.current.data.pageTitle;
                }

            });
        }

    }

})();

