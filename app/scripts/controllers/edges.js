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
        $scope.categories = [{name: 'All'}];
        $scope.serverCategories = categories.query(function () {
            $scope.categories = $scope.categories.concat($scope.serverCategories);
        });
        $scope.ranks = [{name: 'All'}];
        $scope.clearRanks = ranks.query(function(){
            $scope.ranks = $scope.ranks.concat($scope.clearRanks);
        });

        $scope.newEdge = new edges;
        $scope.createEdge = function () {
            var edge = $scope.newEdge.$save();
            edge.then(function (response) {
                $scope.edges.push(response);
                $scope.newEdge = new edges;
            });
        };

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
