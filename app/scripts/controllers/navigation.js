'use strict';

angular.module('swFrontApp').controller('NavigationController', function($scope, $location){
    $scope.isActive = function(path){
        var currentpath = $location.path().split('?')[0].split('/')[1];
        return path.split('/')[1] === currentpath;
    };
});