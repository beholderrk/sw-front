'use strict';

describe('EdgesController', function () {
    var scope, http, response;

    beforeEach(module('swFrontApp'));

    beforeEach(inject(function($controller, $rootScope, $httpBackend){
        http = $httpBackend;
        response = [{ key: 'hello' }];
        http.whenGET('/api/edges').respond(response);
        scope = $rootScope.$new();
        $controller('EdgesController', {
            $scope: scope
        });
    }));

    afterEach(function () {
        http.verifyNoOutstandingExpectation();
        http.verifyNoOutstandingRequest();
    });

    it('makes request to api to fetch edges', function(){
        http.expectGET('/api/edges');
        http.flush();
    });

    it('assign response data to edges', function () {

        http.flush();
    });

    describe('displayRequirements', function(){
        var reqs;
        it('it concatenates name and value of the requirement', function(){
            http.flush();
            reqs = [{name: 'Agility', value: 'd6'}];
            expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
        });
        it('ignore name if it is null', function(){
            http.flush();
            reqs = [{name: null, value: 'Novice'}];
            expect(scope.displayRequirements(reqs)).toEqual('Novice');
        });
        it('ignore name if it is null', function(){
            http.flush();
            reqs = [{name: null, value: 'Novice'}, {name: 'Agility', value: 'd6'}];
            expect(scope.displayRequirements(reqs)).toEqual('Novice, Agility d6');
        });
    });
});
