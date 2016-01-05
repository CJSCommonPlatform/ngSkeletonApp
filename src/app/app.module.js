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

    function runBlock($rootScope, locale, routesConfig, dynamicStateProvider, lodash, $state) {

      lodash.each(routesConfig, function(state){
        dynamicStateProvider.addState(state);
      });

      $rootScope.langs = [{
        value: 'en-GB',
        label: 'English'
      }, {
        value: 'cy',
        label: 'Cymraeg'
      }];

      if(locale.getLocale() === 'en-US'){
        locale.setLocale('en-GB');
      }

      // Language Select Function
      $rootScope.selectedLanguage = $rootScope.langs[lodash.findIndex($rootScope.langs, {value: locale.getLocale()})];

      $rootScope.updadeLang = function(lang) {
        locale.setLocale(lang.value);
      };

      $rootScope.globalNav = {
        pageTitle: {
          title: 'Page title',
          type: 'text',
          ref: '#'
        }
      };

      $rootScope.$on('$stateChangePermissionDenied', function() {
        // so far if no valid permissions we send them to the home page
        if (!$rootScope.waitingForCallback)
        {
          //$state.go('index');
        }
      });

      $rootScope.$on('$stateChangeSuccess',  function() {
        // uopdating the page's title
        if($state.current && $state.current.data && $state.current.data.pageTitle){
          $rootScope.pageTitle = $state.current.data.pageTitle;
        }

      });

    }

}());



