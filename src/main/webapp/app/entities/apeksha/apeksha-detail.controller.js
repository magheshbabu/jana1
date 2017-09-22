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
        
        vm.additionalDocumentsFileName = $window.atob(vm.apeksha.additionalDocuments);
        vm.applicationFormFileName = $window.atob(vm.apeksha.applicationForm);
        vm.aadharCardFileName = $window.atob(vm.apeksha.aadharCard);
        vm.rationCardFileName = $window.atob(vm.apeksha.rationCard);
        vm.doctorReportFileName = $window.atob(vm.apeksha.doctorReport);
        vm.bankPassbookFrontPageFileName = $window.atob(vm.apeksha.bankPassbookFrontPage);
        vm.nomineePhotoFileName = $window.atob(vm.apeksha.nomineePhoto);
        vm.nomineeAadharCardRationCardFileName = $window.atob(vm.apeksha.nomineeAadharCardRationCard);
        vm.nomineeRelationShipProofFileName = $window.atob(vm.apeksha.nomineeRelationShipProof);
        vm.nomineeBankPassbookFrontPageFileName = $window.atob(vm.apeksha.nomineeBankPassbookFrontPage);

        /**
         * we dont store the place of the hospital in database as a seperate field...
         * but we store the place of hospital in database along with hospital with hypen seperated
         * in this function...we are retreving the place name by splitting the hospital name
         * // THIS IS REQUIRED TO FILL HOSPITAL PLACE AND HOSPITAL NAME COMBO BOXES
         */
        function getHospitalPlaceName(hospitalFullNameAndPlace) {
            console.log('calling getHospitalPlaceName');
            var hospitalPlaceName = '';
            if (typeof (vm.apeksha.hospitalName) !== 'undefined' && vm.apeksha.hospitalName !== null && vm.apeksha.hospitalName.indexOf('-') !== -1) {
                vm.hosptialFullStrings = hospitalFullNameAndPlace.split("-")
                // console.log(vm.hosptialFullStrings);
                // console.log(vm.hosptialFullStrings[0]);
                // console.log(vm.hosptialFullStrings[1]);
                hospitalPlaceName = vm.hosptialFullStrings[1].trim();
                // console.log('trimmed place name = ' + hospitalPlaceName);
            }
            return hospitalPlaceName;
        }

        vm.hospitalPlaceName = getHospitalPlaceName(vm.apeksha.hospitalName);
        vm.apeksha.hospitalDistrict = vm.hospitalPlaceName;        

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
