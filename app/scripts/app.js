'use strict';

/**
 * @ngdoc overview
 * @name swFrontApp
 * @description
 * # swFrontApp
 *
 * Main module of the application.
 */
angular
    .module('swFrontApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'tastypie',
        'underscore'
    ])
    .factory('authInterceptor', function($q){
        return {
            request: function(config){
                if (localStorage.apikey && localStorage.username){
                    config.headers.Authorization = 'ApiKey ' + localStorage.username + ':' + localStorage.apikey;
                }
                return config
            },
            responseError: function (response) {
                return $q.reject(response);
            } 
        }
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'
            })
            .when('/edges', {
                templateUrl: 'views/edges.html',
                controller: 'EdgesController'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .when('/admin', {
                templateUrl: 'views/admin.html',
                controller: 'AdminController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
