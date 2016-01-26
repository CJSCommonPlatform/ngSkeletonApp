(function () {
    'use strict';

    angular
      .module('cpp-ui-spa-master.global.filterSample', [])
      .filter('filterSample', filterSample);

    function filterSample() {
        return filterSampleFilter;

        ////////////////

        function filterSampleFilter(parameters) {
            return parameters;
        }
    }

}());

