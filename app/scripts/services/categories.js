'use strict';

angular.module('swFrontApp').factory('categories', function($resource, tastypie){
    return $resource('/api/categories/', {}, {
        query: {
            method: 'GET',
            isArray: true,
            transformResponse: tastypie.dataTransformer()
        }
    })
});