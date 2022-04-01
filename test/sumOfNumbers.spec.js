const { expect } = require('chai');
const Lesson8 = require('../app/calculator');


describe('sumOfNumbers', function() {
    let calc;
    beforeEach(function() {
        calc = new Lesson8();
    })

    afterEach(function() {
        calc = null;
    })
    
    it('More than 9 >> Summ of 93 = 3', function(){
        let a = calc.sumOfNumbers(93);
        expect(a).to.be.equal(3);
    }) 

    it('Less than 9 >> Sum of 11 = 2', function(){
        let a = calc.sumOfNumbers(11);
        expect(a).to.be.equal(2);
    }) 
})