'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:EdgesController
 * @description
 * # EdgesController
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
    .controller('EdgesController', function ($scope, $resource, _, edges, categories, ranks) {
        $scope.edges = edges.query();
        $scope.categories = categories.query();
        $scope.ranks = ranks.query();

        $scope.filterBy = {
            search: '',
            category: $scope.categories[0],
            rank: $scope.ranks[0]
        };

        var selectedEdge = null;

        $scope.selectEdge = function(edge){
            selectedEdge = (edge === selectedEdge) ? null : edge;
        };

        $scope.isSelected = function(edge){
            return edge === selectedEdge;
        };

        $scope.displayRequirements = function(reqs){
            var result = _.map(reqs, function(obj){
                if (obj.name) {
                    return obj.name + ' ' + obj.value;
                }
                return obj.value
            });
            return result.join(', ');
        };
//        $resource('/api/edges').query();
    });
