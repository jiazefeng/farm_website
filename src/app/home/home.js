angular.module('farm.home', [
    'ngAnimate',
    'ui.router',
    'farm.home.mock',
    'mgcrea.ngStrap.dropdown',
    'mgcrea.ngStrap.popover'
])
    //注释
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            abstract: true,
            url: '/home',
            cache: false,
            controller: 'homeController',
            templateUrl: 'home/home.tpl.html',
            resolve: {
                resolvedData: ['$http', function ($http) {
                    return $http.get('/type/typeList');
                }],
                userInfo: ['$http', function ($http) {
                    return $http.get('/user/getUserInfo');
                }],
            }
        })
    }])
    .controller('homeController', ['$modal','$rootScope', '$scope', '$http', '$state', '$uibModal', '$filter','$location',
        function ($modal,$rootScope, $scope, $http, $state, $uibModal, $filter,$location) {
        }])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home.index', {
            url: '/index',
            bookname: '欢迎页',
            parentsname: '首页',
            views: {
                'content': {
                    controller: 'indexController',
                    // templateUrl: 'home/ranchingType.tpl.html'
                    template: '<h4>欢迎您来到管理系统！</h4>'
                }
            }
        })
    }])
    .controller('indexController', ['$scope', '$http', function ($scope, $http) {

    }])


