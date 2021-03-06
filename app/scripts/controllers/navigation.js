'use strict';

angular.module('swFrontApp').controller('NavigationController', function($scope, $location, auth){
    $scope.isLoggedIn = auth.isLoggedIn;
    $scope.logout = function(){
        var promise = auth.logout();
        promise.then(function () {
            localStorage.removeItem('apikey');
            localStorage.removeItem('username');
            $location.path('/login');
        });
    };
    $scope.isActive = function(path){
        var currentpath = $location.path().split('?')[0].split('/')[1];
        return path.split('/')[1] === currentpath;
    };
});