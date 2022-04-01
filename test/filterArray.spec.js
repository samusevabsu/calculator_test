const { expect } = require('chai');
const Lesson8 = require('../app/calculator');

describe('filterArray test', function() {
    let calc;
    beforeEach(function() {
        calc = new Lesson8();
    })
    afterEach(function() {
        calc = null;
    })
    
    it('Array is returned', function(){
        let a = calc.getArray()();
        let b = calc.filterArray(a);
        expect(b).to.be.a('array');  
    }) 
})