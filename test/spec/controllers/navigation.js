'use strict';

describe('NavigationController', function () {
    var location, scope;

    beforeEach(module('swFrontApp'));

    beforeEach(inject(function($controller, $rootScope, $location){
        location = $location;
        scope = $rootScope.$new();
        $controller('NavigationController', {
            $scope: scope
        });
    }));

    describe('isActive', function(){
        it('returns true when paths are the same', function(){
            location.path('/test');
            expect(scope.isActive('/test')).toBeTruthy();
        });
        it('returns false when paths are the different', function(){
            location.path('/different');
            expect(scope.isActive('/test')).toBeFalsy();
        });
        it('returns true if it starts with the same word', function(){
            location.path('/test/1/show');
            expect(scope.isActive('/test')).toBeTruthy();
        });
        it('returns true if it starts with the same word followed by query string', function(){
            location.path('/test?test=123');
            expect(scope.isActive('/test')).toBeTruthy();
        });
    });
});
