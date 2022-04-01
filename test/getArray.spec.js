const { expect } = require('chai');
const Lesson8 = require('../app/calculator');


describe('getArray', function() {
    let calc;
    beforeEach(function() {
        calc = new Lesson8();

    })

    afterEach(function() {
        calc = null;
    })
    
    it('Array Length is 100', function(){
        let addRandomNum = calc.getArray()();
        expect(addRandomNum).to.have.lengthOf(100);
    }) 

    it('Array is array', function(){
        let addRandomNum = calc.getArray()();
        expect(addRandomNum).to.be.a('array').that.includes(100).that.includes(1);
    }) 

    it('Array has members from 1 to 100', function(){
        let addRandomNum = calc.getArray()();
        expect(addRandomNum).to.have.members([40,  8, 53,  3, 14,  9,  1, 82, 61, 30, 29,  27,
            35, 97, 32, 73, 88, 54, 55, 10, 64, 46, 58,  50,
            79, 18, 72, 66, 20, 48, 94, 21, 43, 96, 45,  81,
            49, 76, 16, 59, 36, 22, 47, 26, 98, 62, 87,  25,
            77, 95, 89, 11, 85,  7, 28, 37, 74, 24, 86, 100,
            15, 41,  5, 39, 52, 83, 78, 69, 92, 65, 19,  12,
            51, 90, 33, 70, 34, 71, 60,  4, 23, 91, 80,  75,
            63, 99,  2, 17,  6, 42, 56, 38, 67, 44, 84,  68,
            31, 93, 57, 13]);
    }) 
})