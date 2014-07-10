'use strict';

describe('Navigation Menu', function(){
    it('changes active link depending on route', function(){
        browser.get('/');
        var activeListItem = element(by.css('.active'));
        expect(activeListItem.getText()).toEqual('Home');

        var edgesLink = element(by.linkText('Edges'));
        edgesLink.click();
        activeListItem = element(by.css('.active'));
        expect(activeListItem.getText()).toEqual('Edges');
    });
});