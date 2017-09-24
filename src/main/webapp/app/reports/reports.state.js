(function() {
    'use strict';

    angular
        .module('janasanthwanamApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('reports', {
            parent: 'app',
            url: '/summaryReportUrl',
            data: {
                authorities: [],
                pageTitle: 'global.menu.reports.summaryreport'
            },
            views: {
                'content@': {
                    templateUrl: 'app/reports/summaryReport1.html'
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
