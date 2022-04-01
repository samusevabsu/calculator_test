const { expect } = require('chai');
const Lesson8 = require('../app/calculator');

describe('getNumberOfcall', function() {
    let calc;
    beforeEach(function() {
        calc = new Lesson8();

    })

    afterEach(function() {
        calc = null;
    })
    
    it('getNumberOfCall returns 1 call', function(){
        expect(calc.getNumberOfCall()()).to.be.equal(1);
    }) 

    it('getNumberOfCall returns 3 calls', function(){
        let getFunction = calc.getNumberOfCall();
        let count1 = getFunction();
        let count2 = getFunction();
        let count3 = getFunction();
        expect(count3).to.be.equal(3);
    }) 
})