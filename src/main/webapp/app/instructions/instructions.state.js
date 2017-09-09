(function() {
    'use strict';

    angular
        .module('janasanthwanamApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('dataentryinstructions', {
            parent: 'admin',
            url: '/dataentryinstructionspage',
            data: {
                authorities: ['ROLE_USER'],
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
            parent: 'admin',
            url: '/logininstructionspage',
            data: {
                authorities: ['ROLE_USER'],
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
            parent: 'admin',
            url: '/uploadinstructionspage',
            data: {
                authorities: ['ROLE_USER'],
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
            parent: 'admin',
            url: '/subjectinstructions',
            data: {
                authorities: ['ROLE_USER'],
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
