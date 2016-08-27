angular.module('farmSupervise.app', [
    'ui.router',
    'ui.bootstrap',
    'talent.framework',
    'farm.app.config',
    'farm.templates',
    'farm.common',
    'farm.home',
    'mgcrea.ngStrap.modal'
])

    .run(['$rootScope', '$httpBackend', 'mrBookMarksService', '$state', '$http', '$filter', '$timeout', '$modal',
        function ($rootScope, $httpBackend, mrBookMarksService, $state, $http, $filter, $timeout, $modal) {
            $rootScope.bookMarks = [];

            $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
                $rootScope.$on('$stateChangeStart',function(evt, toState, toParams, fromState, fromParams) {
                    mrBookMarksService.pushNewState($rootScope,toState);
                })
            });
        }
    ])

    .controller('AppController', ['$window', '$state',
        function ($window, $state) {

        }
    ])