'use strict';

angular.module('swFrontApp').controller('NewEdgeController', function($scope, edges, categories, ranks){
    $scope.ranks = ranks.query();
    $scope.categories = categories.query();
    $scope.newEdge = new edges;
    $scope.createEdge = function () {
        var edge = $scope.newEdge.$save();
        edge.then(function (response) {
            $scope.edges.push(response);
            $scope.newEdge = new edges;
        });
    };
});