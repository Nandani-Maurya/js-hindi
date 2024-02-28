let score = "33abc";

//const {score} = req.body   //this is a way to take input from user

console.log(typeof score); //output=> number
console.log(typeof (score));// output => number 
/*
sometime what happened is that , we excatly dont know that user give which type of input
*/



let age = 23;

console.log(typeof age); //output=> number
console.log(typeof (age));// output => number 

let valueInNumber = Number(score);  
console.log(typeof (valueInNumber));
console.log(valueInNumber);  //when score value is "33abc" then the value of "valueInNumber" is {Nan} so the typeof score is number but acutual value is not


/* 
when score value is "33abc" then the value of "valueInNumber"will give output {Nan},
 when score value is "33" then the value of "valueInNumber" will give output {33}
 */

