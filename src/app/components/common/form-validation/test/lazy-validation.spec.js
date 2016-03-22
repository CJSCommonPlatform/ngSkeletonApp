(function () {
    'use strict';

    describe('lazy-validation directive', function () {
        var lazyValidationController, formController, $compile, $scope, template;

        function compileDirective(template) {
            mockDirectiveController('form', formController, template);
            return $compile(template)($scope);
        }

        function mockDirectiveController(directiveName, controller, element) {
            element.data('$' + directiveName + 'Controller', controller);
        }

        beforeEach(module('idam-common.form-validation.lazy-validation'));

        beforeEach(module(function ($compileProvider) {
            $compileProvider.directive('validationTriggerMock', function () {
                return {
                    restrict: 'A',
                    require: '^^lazyValidation',
                    link: function ($scope, element, attrs, _lazyValidationController_) {
                        lazyValidationController = _lazyValidationController_;
                    }
                };
            });
        }));

        beforeEach(inject(function (_$rootScope_, _$compile_) {
            $scope = _$rootScope_.$new();
            $compile = _$compile_;

            formController = {
                $valid: true,
                someField: '123'
            };
        }));

        describe('when it binds form validation to element on a scope', function () {
            beforeEach(function () {
                template = angular.element('<div lazy-validation="formValidation"><button validation-trigger-mock /></div>');
            });

            describe('on initialisation', function () {
                it('should NOT run validation and NOT bind validation errors', function () {
                    compileDirective(template);

                    expect($scope.formValidation).toBe(undefined);
                });
            });

            describe('after initialisation', function () {
                beforeEach(function () {
                    compileDirective(template);
                });

                describe('when isValid called', function () {
                    describe('and $valid property on formController is true', function () {
                        beforeEach(function () {
                            formController.$valid = true;
                        });

                        it('should return actual validation status', function () {
                            expect(lazyValidationController.isValid()).toBe(true);
                        });
                    });

                    describe('and $valid property on formController is false', function () {
                        beforeEach(function () {
                            formController.$valid = false;
                        });

                        it('should return actual validation status', function () {
                            expect(lazyValidationController.isValid()).toBe(false);
                        });
                    });
                });

                describe('when revalidate function called', function () {
                    beforeEach(function () {
                        lazyValidationController.revalidate();
                        $scope.$digest();
                    });

                    it('should update scope property with validation errors', function () {
                        expect($scope.formValidation).toEqual(angular.copy(formController));
                    });

                    describe('and validation changes afterwards', function () {
                        beforeEach(function () {
                            formController.$valid = false;
                            formController.someOtherChange = '123';
                        });

                        it('should not affect the validation on a scope', function () {
                            expect($scope.formValidation).not.toEqual(angular.copy(formController));
                            expect($scope.formValidation.$valid).toBe(true);
                        });

                        describe('and there was another revalidate() call', function () {
                            beforeEach(function () {
                                lazyValidationController.revalidate();
                                $scope.$digest();
                            });

                            it('should update scope property', function () {
                                expect($scope.formValidation).toEqual(angular.copy(formController));
                                expect($scope.formValidation.$valid).toBe(false);
                            });
                        });
                    });
                });
            });
        });
    });
})();