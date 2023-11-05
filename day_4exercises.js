day_4exercises.js
//q1

let age = prompt("Enter your age:")
let diff = 18-age
if (age>=18){
    alert("You are old enough to drive")
}else{
    alert("you are left with" +diff +"years to drive")
}
/*
let age =prompt("enter your age:")
let diff= 18-age
(age>=18)? alert("you are old enough to drive"): alert("you are left with" +diff +"years to drive")*/


//2
let yourAge=prompt("Enter your age")
const myAge=35
ageDiff=(myAge-yourAge)
if(myAge<yourAge){
    (console.log("You are" +ageDiff + "years older than me"))
}else{
    console.log("I am older than you")
}

//3

let a=prompt('Enter a value for a')
let b =prompt('Enter a value for b')
if(a<b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${a} is less than ${b}`)
}

/*
let a=4
let b =3
(a<b)? console.log(`${a} is greater than ${b}`):console.log(`${a} is less than ${b}`)*/

//4

let number= prompt('Enter number')
if(number%2 == 0){
    console.log(`${number}is a even number`)

}else{
    console.log(`${number} is an odd number`)
}

//level2

//1

let score =prompt('enter score')
if(score<=100 || score>=80)
{
    console.log('A')
}
    else if(score>=70 || score<=79)
    {
        console.log('B')
    }
        else if(score>=60 || score<=69)
        
    {

         console.log('C')
    }
        else if(score>=50 || score<=59)
        {
            console.log('D')
        }
            else if(score<40){
                console.log('F')
            }
    
//Q2

let myStr = "This is the first sentence. "
myStr+= "this is the second one."