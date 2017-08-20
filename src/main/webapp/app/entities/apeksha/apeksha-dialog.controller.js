(function() {
    'use strict';

    angular
        .module('janasanthwanamApp')
        .controller('ApekshaDialogController', ApekshaDialogController);

    ApekshaDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Apeksha'];

    function ApekshaDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Apeksha) {
        var vm = this;

        vm.apeksha = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.apeksha.id !== null) {
                Apeksha.update(vm.apeksha, onSaveSuccess, onSaveError);
            } else {
                Apeksha.save(vm.apeksha, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('janasanthwanamApp:apekshaUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.dateOfBirth = false;

        vm.setAdditionalDocuments = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.additionalDocuments = base64Data;
                        apeksha.additionalDocumentsContentType = $file.type;
                    });
                });
            }
        };
        vm.datePickerOpenStatus.dateOfApplcation = false;

        vm.setPhoto = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.photo = base64Data;
                        apeksha.photoContentType = $file.type;
                    });
                });
            }
        };

        vm.setApplicationForm = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.applicationForm = base64Data;
                        apeksha.applicationFormContentType = $file.type;
                    });
                });
            }
        };

        vm.setAadharCard = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.aadharCard = base64Data;
                        apeksha.aadharCardContentType = $file.type;
                    });
                });
            }
        };

        vm.setRationCard = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.rationCard = base64Data;
                        apeksha.rationCardContentType = $file.type;
                    });
                });
            }
        };

        vm.setDoctorReport = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.doctorReport = base64Data;
                        apeksha.doctorReportContentType = $file.type;
                    });
                });
            }
        };

        vm.setBankPassbookFrontPage = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.bankPassbookFrontPage = base64Data;
                        apeksha.bankPassbookFrontPageContentType = $file.type;
                    });
                });
            }
        };

        vm.setNomineePhoto = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.nomineePhoto = base64Data;
                        apeksha.nomineePhotoContentType = $file.type;
                    });
                });
            }
        };

        vm.setNomineeAadharCardRationCard = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.nomineeAadharCardRationCard = base64Data;
                        apeksha.nomineeAadharCardRationCardContentType = $file.type;
                    });
                });
            }
        };

        vm.setNomineeRelationShipProof = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.nomineeRelationShipProof = base64Data;
                        apeksha.nomineeRelationShipProofContentType = $file.type;
                    });
                });
            }
        };

        vm.setNomineeBankPassbookFrontPage = function ($file, apeksha) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        apeksha.nomineeBankPassbookFrontPage = base64Data;
                        apeksha.nomineeBankPassbookFrontPageContentType = $file.type;
                    });
                });
            }
        };

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
