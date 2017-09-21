(function() {
    'use strict';

    angular
        .module('janasanthwanamApp')
        .factory('DataUtils', DataUtils);

    DataUtils.$inject = ['$window','$localStorage', '$sessionStorage', '$http'];

    function DataUtils ($window, $localStorage, $sessionStorage, $http) {

        var service = {
            abbreviate: abbreviate,
            byteSize: byteSize,
            openFile: openFile,
            toBase64: toBase64,
            openFileURL: openFileURL
        };

        return service;

        function abbreviate (text) {
            if (!angular.isString(text)) {
                return '';
            }
            if (text.length < 30) {
                return text;
            }
            return text ? (text.substring(0, 15) + '...' + text.slice(-10)) : '';
        }

        function byteSize (base64String) {
            if (!angular.isString(base64String)) {
                return '';
            }

            function endsWith(suffix, str) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            }

            function paddingSize(base64String) {
                if (endsWith('==', base64String)) {
                    return 2;
                }
                if (endsWith('=', base64String)) {
                    return 1;
                }
                return 0;
            }

            function size(base64String) {
                return base64String.length / 4 * 3 - paddingSize(base64String);
            }

            function formatAsBytes(size) {
                return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
            }

            return formatAsBytes(size(base64String));
        }

        function openFile (type, data) {
            $window.open('data:' + type + ';base64,' + data, '_blank', 'height=300,width=400');

        }
        
        //added by maghesh - fileread optimisation
        function openFileURL (filename, id) {
        	var params = {};
        	
        	//Add authentication headers as params
        	var token = $localStorage.authenticationToken || $sessionStorage.authenticationToken;


        	//Add authentication headers in URL
        	var url = ["api/files/" + id + "/" + filename, $.param(params)].join('?');
        	console.log("URL IS > " + url);
 
        	$http({method: 'GET', url: url, headers: {
        	    'Authorization': 'Bearer ' + token,
        	    'Accept': '*/*'}
        	}).then(function(data){
                $window.open('data:image/jpg' + ';base64,' + data.data, '_blank', 'height=300,width=400');
            });

       }

        function toBase64 (file, cb) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                var base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
                cb(base64Data);
            };
        }


    }
})();
