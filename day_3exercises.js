//exercise Level 1
//question 1
let firstName = "Mutiat";
let lastName = "Junaid";
let country = "Nigeria";
let city = "Lagos";
let age = "35";
let isMarried = true;
year = 2023;
console.log(typeof firstName);
console.log(typeof "Nigeria");
console.log(typeof"Lagos");
console.log(typeof 35);
console.log(typeof true) ;
console.log(typeof 2023);
console.log(typeof lastName);

//question2

console.log( 10 == '10');

//question3
console.log('9.8'==10);

/*question4
truthy values
All positive and negative numbers except 0
all strings except empty string and boolean true
falsy values
null Statement, undefine variables, boolean false,empty string,0, NaN,on*/


//question 5

console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(!4==4);
console.log(4!='4');
console.log(4=='4');
console.log(4==='4');
let string="python"
let string2="jargon"
console.log(string.length!=string2.length)

//question6
console.log(4>3 && 10<12)
console.log(4>3  && 10>12)
console.log(4>3||10<12)
console.log(4>3||10>12)
console.log (!(4>3))
console.log (!(4<3))
// didnt run.       console.log (!(false))
console.log (!(4>3&& 10<12))
console.log (!(4>3&& 10>12))
console.log(!(4==='4'))


//didnt run console.log(!())
/*
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.setMonth());
console.log(now);*/


// question Level2
//1
let base = prompt('enter base', 'number')
let height = prompt('enter height', 'number')
let area= 0.5* base * height;
console.log(area);
alert('The area of a triangle is '+ area)

//2

let a = prompt(' enter side a')
let b = prompt('enter side b')
let c = prompt('enter side c')
let perimeter = (+a) + (+b) + (+c)
console.log(perimeter)
alert('The perimeter of s triangle '+perimeter);

//3

let length = prompt('enter length')
let width = prompt('enter width')
let area3 = (length * width);
let perimeter = 2*(length+width)
console.log(perimeter)
console.log(area3);alert('The area and perimeter of the rectangle is' +area3, and +perimeter)
//3
let length = prompt('enter length')
let width = prompt('enter width')
let area3 = (length * width);
let perimeter = 2*(length+width)
console.log(perimeter)
console.log(area3);
alert("The area of the rectangle is "+area3)
alert("the perimeter of the rectangle is" +perimeter)
//4
let r = prompt('Enter radius')
const pi= 3.14
let area = pi* r*r
console.log(area)
alert('The area of the circle is' +area)

//5Calculate the slope, x-intercept and y-intercept of y = 2x -2

//6Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

//7 Compare the slope of above two questions.

//8
let x = 0
let y = x**2+6*(x) + 9
console.log(y)

let hour =prompt("Enter hours")
let rate = prompt("Enter rate per hour")
let wage = hour*rate
console.log(wage)
alert("Your weekly earning is" +wage)


//9

let name = prompt('enter name')
if (name.length>=7){
    alert('name is long');
}else{

 alert('name is short');}

 let name =prompt('Enter name')
 (name.length>=7)? alert('name is long'): alert('nameis short')

 let firstName =prompt('Enter first name')
 let lastName = prompt('Enter your last name')
if (firstName.length>lastName.length){
    alert("Your first name,"+firstName + "is longer than your family name", +lastName)
}

//12
let myAge = 250
let yourAge = 25
console.log('I am 225 years older than you')

//13
 
const year= 2023
let birthDay= prompt('Enter birth year')
let age = year - birthDay
let young=age-18
if (age>=18){
    alert("you are" +age + "you are old enough to ride")
}else{alert("You are" +age +"you will ba allowed to drive after" +young +"years")
}
