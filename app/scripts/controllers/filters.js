'use strict';

angular.module('swFrontApp').controller('FiltersController', function($scope, filterBy, ranks, categories){
    $scope.ranks = ranks.query(function(){
        $scope.ranks.unshift({name: 'All'});
        $scope.filterBy.rank = $scope.ranks[0];
    });
    $scope.categories = categories.query(function () {
        $scope.categories.unshift({name: 'All'});
        $scope.filterBy.category = $scope.categories[0];
    });
});