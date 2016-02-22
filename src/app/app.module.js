(function () {

    'use strict';

    angular
        .module('cpp-ui-spa-master', [
            'ui.router',
            'oc.lazyLoad',
            'cpp-ui-spa-master.config',
            'cpp-ui-spa-master.routes',
            'ui.bootstrap',
            'ngGovUk',
            'angularUtils.directives.dirPagination',
            'ngAnimate',
            'ngSanitize',
            'ngLocalize',
            'ngLocalize.Config',
            'ngLocalize.Events',
            'ngLocalize.InstalledLanguages',
            'ngCookies',
            'permission',
            'angular-ladda',
            'ngLodash'
        ])
        .value('globalConfig', {})
        .value('routesConfig', [])
        .run(runBlock);

    function runBlock($rootScope, InitLanguageService, RoutesService, globalConfig) {


        InitLanguageService.init();
        RoutesService.init();

        $rootScope.globalNav = {
            pageTitle: {
                title: 'Page title',
                type: 'text',
                ref: '#'
            }
        };

    }

}());
