(function() {
    'use strict';

    angular
        .module('janasanthwanamApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('dataentryinstructions', {
            parent: 'app',
            url: '/dataentryinstructionspage',
            data: {
                authorities: [],
                pageTitle: 'instructions.dataentryinstructionstitle'
            },
            views: {
                'content@': {
                    templateUrl: 'app/instructions/dataentryinstructionspage.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('instructions');
                    return $translate.refresh();
                }]
            }
        }).state('logininstructions', {
            parent: 'app',
            url: '/logininstructionspage',
            data: {
                authorities: [],
                pageTitle: 'instructions.logininstructionstitle'
            },
            views: {
                'content@': {
                    templateUrl: 'app/instructions/logininstructionspage.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('instructions');
                    return $translate.refresh();
                }]
            }
        }).state('uploadinstructions', {
            parent: 'app',
            url: '/uploadinstructionspage',
            data: {
                authorities: [],
                pageTitle: 'instructions.uploadinstructionstitle'
            },
            views: {
                'content@': {
                    templateUrl: 'app/instructions/uploadinstructionspage.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('instructions');
                    return $translate.refresh();
                }]
            }
        }).state('subjectinstructions', {
            parent: 'app',
            url: '/subjectinstructions',
            data: {
                authorities: [],
                pageTitle: 'instructions.subjectinstructionstitle'
            },
            views: {
                'content@': {
                    templateUrl: 'app/instructions/subjectinstructionspage.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('instructions');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
