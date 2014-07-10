'use strict';

angular.module('swFrontApp').controller('LoginController', function ($scope, auth, $location) {
    $scope.login = function(){
        if($scope.loginForm.$valid) {
            var promise = auth.login($scope.user);
            promise.then(success, error);
        }
    };

    var success = function (response) {
        localStorage.setItem('apikey', response.data.apikey.key);
        localStorage.setItem('username', response.data.username);
        $location.path('/edges');
    };

    var error = function (response) {
        $scope.formErrors = response.data.__all__;
    };
});