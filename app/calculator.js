class Lesson8 { 

    getNumberOfCall() {
        let count = 1;
        return function () {
            //console.log(count);
            return count++
        }
    }

    getArray() {
        let array = [];
        return function addRandomNumber () {
            let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            if (!array.includes(randomNumber)) {
                array.push(randomNumber)
            }
            if (array.length < 100) {
                addRandomNumber();
            }
            return array;
        } 
    }

    filterArray(array) {
        let filteredArray = array.filter(num => num > 0);
        let sqrtArray = filteredArray.map((number) => {
            return Math.sqrt(number)
        })
        return sqrtArray;
    }

    sumOfNumbers(number) {
        let sum = number.toString().split('').reduce((a, b) => {
            return Number(a) + Number(b)
        });
        if (sum > 9) {
            return this.sumOfNumbers(sum)
        }
        return sum
    }
}

module.exports = Lesson8;