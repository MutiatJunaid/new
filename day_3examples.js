let numOne = 4
let numTwo = 3
let sum = numOne+numTwo;
let diff = numOne-numTwo;
let mult = numOne*numTwo;
let div = numOne/numTwo;
let remainder = numOne % numTwo ;
let powerOf = numOne ** numTwo;
console.log(sum,diff, mult, div, remainder, powerOf);

// let us calculate the area of a circle
PI = 3.14
radius = 100 //length in meter
let areaOfCircle = PI*radius*radius
console.log(areaOfCircle)

const gravity = 9.81   //in m/s2
let mass = 72    //in kilogram
//calculate the weight
const weight= mass*gravity
console.log(weight);

//comparison operator
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false




// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const checks= 4 > 3 && 10 < 5         // true && false -> false
const checka = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const checkb = 4 > 3 || 10 > 5         // true  || true -> true
const checkc = 4 > 3 || 10 < 5         // true  || false -> true
const checkd = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let checke = 4 > 3                     // true
let checkf = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

let count = 0
console.log(count++)
console.log(count)
console.log(++count)
console.log(count)
console.log(count--)
console.log(count)
console.log(--count)
console.log(count)
let message="welcome to 30 days of Javascript"
alert(message)
alert('welcomme to 30 days of JAVASCRIPT')
let number = prompt('Enter number', 'number goes here')
console.log(number)

//date object

const now = new Date();
console.log(now);
console.log(now.getFullYear);
console.log(now.getMonth);

