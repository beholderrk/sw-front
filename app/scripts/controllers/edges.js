'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:EdgesController
 * @description
 * # EdgesController
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
    .controller('EdgesController', function ($scope, $resource, _, edges, filterBy) {
        $scope.edges = edges.query();
        $scope.filterBy = filterBy;

        $scope.deleteEdge = function (edge) {
            edge.$delete({}, function(){
                var index = $scope.edges.indexOf(edge);
                delete $scope.edges[index];
            });
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
    });
