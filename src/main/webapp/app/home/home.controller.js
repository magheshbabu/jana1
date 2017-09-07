(function() {
    'use strict';

    angular
        .module('janasanthwanamApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state','$translate'];

    function HomeController ($scope, Principal, LoginService, $state,$translate) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;

        vm.currLang = $translate.use();

        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        //$scope.locale = $translate.use();// ON INIT
        
        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }
    }
})();
