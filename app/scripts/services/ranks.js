'use strict';

angular.module('swFrontApp').service('ranks', function(){
    this.query = function(){
        return [
            {name: 'All'},
            {name: 'Novice'},
            {name: 'Vigor'}
        ];
    }
});