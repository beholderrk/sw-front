'use strict';

angular.module('tastypie', []).factory('tastypie', function($http) {
    return {
        dataTransformer: function() {
            return $http.defaults.transformResponse.concat([
                function (data, headersGetter) {
                    var result = [];
                    if (data && data.meta !== undefined){
                        result = data.objects;
                        result.meta = data.meta;
                    }
                    return result;
                }
            ])
        }
    };
});