'use strict';

angular.module('swFrontApp').service('categories', function(){
    this.query = function(){
        return [
            {name: 'All'},
            {name: 'Lorem'},
            {name: 'Ipsum'},
            {name: 'Dolor'}
        ];
    }
});