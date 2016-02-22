describe('init-language-service', function(){

    var $rootScope, locale, InitLanguageService, lodash;

    beforeEach(
      module(
        'cpp-ui-spa-master.config.init-language',
        'cpp-ui-spa-master'
      )
    );

    beforeEach(inject(function($injector){
      InitLanguageService = $injector.get('InitLanguageService');
      $rootScope = $injector.get('$rootScope');
      locale = $injector.get('locale');
      lodash = $injector.get('lodash');
    }));

  it('Should set the locale to en-US', function(){
      InitLanguageService.updateLang({
        value: 'en-US',
        label: 'English'
      });
      $rootScope.$digest();
      expect(locale.getLocale()).toBe('en-US');
  });

  it('Should set the locale to en-GB if en-US', function(){
      InitLanguageService.updateLang({
        value: 'en-US',
        label: 'English'
      });
      $rootScope.$digest();
      InitLanguageService.init();
      $rootScope.$digest();
      expect(locale.getLocale()).toBe('en-GB');
  });
});
