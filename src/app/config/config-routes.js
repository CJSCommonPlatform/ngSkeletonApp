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
                        controller: state.controller,
                        controllerAs: state.controllerAs,
                        resolve: {
                            state: function ($ocLazyLoad) {
                                /**
                                 * This makes HTTP requests for JS files
                                 * despite everything is already loaded from minified bundle
                                 */
                                /*return $ocLazyLoad.load({
                                    name: state.name,
                                    files: state.files
                                });*/

                                /**
                                 * Since minified bundle is already in memory
                                 * We just have to tell angular to initialise it
                                 *
                                 * I was not sure of the purpose of 'name' property
                                 * But I assumed it's a module name for given view
                                 */
                                $ocLazyLoad.inject(state.name);
                            }
                        }
                    });
                }
            };
        };
    }

}());
