'use strict';

angular.module('swFrontApp').service('auth', function($http){
    this.login = function (user) {
        return $http.post('/api/login', { username: user.email, password: user.password });
    }
});