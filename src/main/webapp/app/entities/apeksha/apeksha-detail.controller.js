(function() {
    'use strict';

    angular
        .module('janasanthwanamApp')
        .controller('ApekshaDetailController', ApekshaDetailController);

    ApekshaDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Apeksha', '$window'];

    function ApekshaDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Apeksha, $window) {
        var vm = this;

        vm.apeksha = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.openFileURL = DataUtils.openFileURL;

        var unsubscribe = $rootScope.$on('janasanthwanamApp:apekshaUpdate', function(event, result) {
            vm.apeksha = result;
        });
        $scope.$on('$destroy', unsubscribe);
        
        vm.applicationFormFileName = $window.atob(vm.apeksha.applicationForm);

        vm.openWindow = function(that) {
            console.log(that)
            var myImage = new Image;
           myImage.src = "data:image/png;base64," + that;
           myImage.style.border = 'none';
           myImage.style.outline = 'none';
           myImage.style.position = 'fixed';
           myImage.style.left = '0';
           myImage.style.top = '0';
           
           myImage.onload = function() {
            var newWindow = window.open("", 'label',"scrollbars=0, toolbar=0, width="+myImage.width+", height="+myImage.height);
            newWindow.document.write(myImage.outerHTML);
           }

        };
    }
})();
