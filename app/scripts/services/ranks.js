'use strict';

angular.module('swFrontApp').factory('ranks', function($resource, tastypie){
    return $resource('/api/requirements/values/');
});