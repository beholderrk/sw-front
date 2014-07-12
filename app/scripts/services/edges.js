'use strict';

angular.module('swFrontApp').factory('edges', function($resource, tastypie) {
    return $resource('/api/edges/', {}, {
        query: {
            method: 'GET',
            isArray: true,
            transformResponse: tastypie.dataTransformer()
        }
    });
});