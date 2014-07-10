'use strict';

angular.module('swFrontApp').filter('edges', function(){
    return function(edges, filterby){

        var getRank = function (reqs) {
            var req = {};
            for (var i = 0; i < reqs.length; i++) {
                if (reqs[i].mode === 'rank'){
                    req = reqs[i];
                    break;
                }
            }
            return req.value;
        };
        
        return edges.filter(function(element, index, array){
            var category = (element.category.name === filterby.category.name || filterby.category.name === 'All');
            var rank = (filterby.rank.name === 'All' || getRank(element.requirements) === filterby.rank.name);
            return category && rank;
        });
    }
});