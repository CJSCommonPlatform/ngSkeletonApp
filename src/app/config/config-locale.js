(function () {
    'use strict';

    angular
        .module('cpp-ui-spa-master.config.locale', [
          'ngLocalize',
          'ngLocalize.Config'
        ])
        .value('localeConf', {
            basePath: 'languages',
            defaultLocale: 'en-GB',
            sharedDictionary: 'common',
            fileExtension: '.lang.json',
            persistSelection: true,
            cookieName: 'COOKIE_LOCALE_LANG',
            observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
            delimiter: '::'
        })
        .value('localeSupported', [
          'en-GB',
          'cy'
        ]);

}());
