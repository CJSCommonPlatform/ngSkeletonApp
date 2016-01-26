(function () {


  // this is an example of how to lazy load the module HelloWorld
    angular
        .module('cpp-ui-spa-master.routes.lazy',[])
        .controller('LazyController', LazyController);

    function LazyController(HelloWorld){
        var vm = this;
        vm.message = HelloWorld.greetings();

        //vm.causeError = function() {
        //  console.log('test');
        //  throw ('Throwing error');
        //};
        // I cause an error to be thrown in nested functions.
        vm.causeError = function () {
            foo();
        };
        // ---
        // PRIVATE METHODS.
        // ---
        function bar() {
            // NOTE: "y" is undefined.
            var x = y;
        }
        function foo() {
            bar();
        }
    }

}());
