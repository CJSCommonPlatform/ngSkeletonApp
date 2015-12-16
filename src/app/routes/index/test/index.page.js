'use strict';

function IndexPage() {
  this.pageTitle = by.tagName('h1');

  this.getPageTitle = function() {
    return element(this.pageTitle).getText();
  };

  this.goToUrl = function(url){
    browser.get(url);
  };

  this.getCurrentUrl = function(){
    return browser.getCurrentUrl();
  };
}

module.exports = IndexPage;
