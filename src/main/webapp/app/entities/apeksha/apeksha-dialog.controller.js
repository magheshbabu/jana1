(function () {
    'use strict';

    angular
        .module('janasanthwanamApp')
        .controller('ApekshaDialogController', ApekshaDialogController);

    ApekshaDialogController.$inject = ['$translate', '$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Apeksha', 'masterDataPopulator', 'masterCasteReligion', 'masterHospitals'];

    function ApekshaDialogController($translate, $timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Apeksha, masterDataPopulator, masterCasteReligion, masterHospitals) {
        var vm = this;

        vm.currentSelectedLanguage = $translate.use();
        //ng-init="vm.apeksha.hasOwnProperty=false"

        vm.apeksha = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;

        console.log('message11' + JSON.stringify(vm.apeksha.id));
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

        /**
         * function to calculate age automatically
         */
        vm.calculateAge = function () {
            if (angular.isDefined(vm.apeksha.dateOfBirth) && vm.apeksha.dateOfBirth !== null) {
                var now = new Date();
                var past = new Date(vm.apeksha.dateOfBirth);
                var nowYear = now.getFullYear();
                var pastYear = past.getFullYear();
                var age = nowYear - pastYear;

                vm.apeksha.age = age;

            }

        };


        /**
         * function to validate and see if any one of voterscardnumber OR aadharcardnumber OR rationcardnumber is filled in
         */
        vm.mustFillRationOrAadharOrVoters = function() {
            if(vm.apeksha.rationCard.trim().length || vm.apeksha.aadharCard.trim().length || vm.apeksha.trim().voterscard) {
                return false;
            }
            else {
                return true;
            }
        };

        vm.masterCasteReligions = function (castename) {
            vm.casteReligions = masterCasteReligion.getReligionForCaste(castename);
        };


        vm.masterDistricts = masterDataPopulator.getDistricts();

        vm.landMasterDistricts = masterDataPopulator.getDistricts();



        /**
         * Update hospitals list based on district selection
         */
        vm.updateHospitalMasters = function (districtName) {
            vm.hospitalList = masterHospitals.getHospitalsForDistrict(districtName);
        };




        /**
         * Update dropdown boxes of VILLAGES, THALUKS, PO AND BLOCS
         * based on district selection
         */
        vm.updateblocks = function (districtName) {
            vm.blockslist = masterDataPopulator.getBlocksForDistrict(districtName);
            vm.postofficelist = masterDataPopulator.getPostOfficesForDistrict(districtName);
            vm.villagelist = masterDataPopulator.getVillagesForDistrict(districtName);
            vm.thalukList = masterDataPopulator.getTaluksForDistrict(districtName);

        };



        /**
         * Update dropdown boxes of VILLAGES, THALUKS, PO AND BLOCKS
         * of Land details of application
         * based on district selection
         */
        vm.landMasters = function (districtName) {
            //alert('i');
            vm.landBlockslist = masterDataPopulator.getBlocksForDistrict(districtName);
            vm.landPostofficelist = masterDataPopulator.getPostOfficesForDistrict(districtName);
            vm.landVillagelist = masterDataPopulator.getVillagesForDistrict(districtName);
            vm.landThalukList = masterDataPopulator.getTaluksForDistrict(districtName);

        };


        $timeout(function () {
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            vm.isSaving = true;
            if (vm.apeksha.id !== null) {
                Apeksha.update(vm.apeksha, onSaveSuccess, onSaveError);
            } else {
                Apeksha.save(vm.apeksha, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess(result) {
            $scope.$emit('janasanthwanamApp:apekshaUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError() {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.dateOfBirth = false;

        vm.setAdditionalDocuments = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.additionalDocuments = base64Data;
                        apeksha.additionalDocumentsContentType = $file.type;
                    });
                });
            }
        };
        vm.datePickerOpenStatus.dateOfApplcation = false;

        vm.setPhoto = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.photo = base64Data;
                        apeksha.photoContentType = $file.type;
                    });
                });
            }
        };

        vm.setApplicationForm = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.applicationForm = base64Data;
                        apeksha.applicationFormContentType = $file.type;
                    });
                });
            }
        };

        vm.setAadharCard = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.aadharCard = base64Data;
                        apeksha.aadharCardContentType = $file.type;
                    });
                });
            }
        };

        vm.setRationCard = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.rationCard = base64Data;
                        apeksha.rationCardContentType = $file.type;
                    });
                });
            }
        };

        vm.setDoctorReport = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.doctorReport = base64Data;
                        apeksha.doctorReportContentType = $file.type;
                    });
                });
            }
        };

        vm.setBankPassbookFrontPage = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.bankPassbookFrontPage = base64Data;
                        apeksha.bankPassbookFrontPageContentType = $file.type;
                    });
                });
            }
        };

        vm.setNomineePhoto = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.nomineePhoto = base64Data;
                        apeksha.nomineePhotoContentType = $file.type;
                    });
                });
            }
        };

        vm.setNomineeAadharCardRationCard = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.nomineeAadharCardRationCard = base64Data;
                        apeksha.nomineeAadharCardRationCardContentType = $file.type;
                    });
                });
            }
        };

        vm.setNomineeRelationShipProof = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.nomineeRelationShipProof = base64Data;
                        apeksha.nomineeRelationShipProofContentType = $file.type;
                    });
                });
            }
        };

        vm.setNomineeBankPassbookFrontPage = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function (base64Data) {
                    $scope.$apply(function () {
                        apeksha.nomineeBankPassbookFrontPage = base64Data;
                        apeksha.nomineeBankPassbookFrontPageContentType = $file.type;
                    });
                });
            }
        };

        function openCalendar(date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
