(function () {

  'use strict';

  angular
      .module('cpp-ui-spa-master.config.routes', [])
      .provider('dynamicStateProvider', dynamicState);

  function dynamicState($stateProvider) {
    this.$get = function () {
      return {
        /**
         * @function app-ui-spa-master.config.routes
         * @memberof app-ui-spa-master.config
         * @param {string} state - a state object
         * @author Fabio Tisci
         * @description method to create states
         */
        addState: function (state) {
          $stateProvider.state(state.state, {
            url: state.url,
            templateUrl: state.templateUrl,
            data: {
              pageTitle: state.pageTitle
              //permissions:{
              //  only: state.permissions
              //}
            },
            controller: function (module, $controller) {
              return new $controller(state.controller);
            },
            controllerAs: state.controllerAs,
            resolve:{
              module: function ($ocLazyLoad){
                return $ocLazyLoad.load({
                  name: state.name,
                  files: state.files,
                  serie: true
                });
              }
            }
          });
        }
      };
    };
  }
}());
