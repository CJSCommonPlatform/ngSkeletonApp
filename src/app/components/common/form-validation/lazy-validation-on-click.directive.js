(function () {
    'use strict';

    angular
        .module('idam-common.form-validation.lazy-validation-on-click', [
            'idam-common.form-validation.lazy-validation'
        ])
        .directive('lazyValidationOnClick', lazyValidationOnClick);

    /**
     * This directive triggers revalidation of a form on a click event
     *
     * <form lazy-validation="scopePropertyToBindFormValidation">
     *     <button lazy-validation-on-click="optionalCallbackWhenFormValid()" />
     * </form>
     */
    function lazyValidationOnClick() {
        return {
            restrict: 'A',
            require: '^^lazyValidation',
            /** Makes sure postLink runs before ng-click */
            priority: '-1',
            link: function ($scope, element, attrs, lazyValidationController) {
                var revalidateAndRunCallbackIfDefined = function () {
                    lazyValidationController.revalidate();

                    if (lazyValidationController.isValid() && $scope.ifValidCallback) {
                        $scope.ifValidCallback();
                    }
                };

                element.bind('click', function () {
                    $scope.$apply(revalidateAndRunCallbackIfDefined);
                });
            },
            scope: {
                ifValidCallback: '&?lazyValidationOnClick'
            }
        };
    }
})();