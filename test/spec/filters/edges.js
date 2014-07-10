'use strict';

describe('EdgesFilter', function(){
    var filter, edges, filterBy;
    beforeEach(module('swFrontApp'));
    beforeEach(inject(function(edgesFilter){
        filter = edgesFilter;
        edges = [
            {
                requirements: [
                    { name: null, value: 'Novice', mode: 'rank' },
                    { name: 'Agility', value: 'd6', mode: 'trait' }
                ],
                category: { name: 'first' }
            },
            {
                requirements: [
                    { name: null, value: 'Seasoned', mode: 'rank' },
                    { name: 'Agility', value: 'd6', mode: 'trait' }
                ],
                category: { name: 'second' }
            }
        ];
        filterBy = { category: { name: 'All' }, rank: { name: 'All' } };
    }));

    describe('Category filter', function () {
        it('filter by category name', function() {
            filterBy.category.name = 'first';
            expect(filter(edges, filterBy).length).toEqual(1);
        });
        it('return all elements when category filter is All', function() {
            expect(filter(edges, filterBy).length).toEqual(2);
        });
    });

    describe('Rank filter', function(){
        it('filter by rank', function () {
            filterBy.rank.name = 'Novice';
            expect(filter(edges, filterBy).length).toEqual(1);
        })
    });
});