(function () {
    'use strict';

    angular
        .module('cpp-ui-spa-master.config.init-language', [])
        .factory('InitLanguageService', InitLanguage);

    function InitLanguage($rootScope, lodash, locale) {
        var _langs = [{
            value: 'en-GB',
            label: 'English'
        }, {
            value: 'cy',
            label: 'Cymraeg'
        }];


        var service = {
            updateLang: updateLang,
            init:init
        };
        return service;

        ////////////////

        function updateLang(lang) {
            locale.setLocale(lang.value);
        }

        function init(){
            if (locale.getLocale() !== 'en-GB' && locale.getLocale() !== 'cy') {
                locale.setLocale('en-GB');
            }

            // Language Select Function
            $rootScope.selectedLanguage = _langs[lodash.findIndex(_langs, { value: locale.getLocale() })];

        }
    }

})();

