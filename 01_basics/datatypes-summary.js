// kis trh se data ko store kiye h{memory me rakha jata hai}, kis trh se access krte hai (call by value and call by references)
//two data types => primitive and non primitive data types
//# Primitive(call by value)= 7 types : String , Number, Boolean, null, undefined, symbol (used to unique a value), BigInt
 

//Reference Type (Non Primitive type): Array , Objects , Functions  //there return type is function and function data type is object function
const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

const bigNumber = 397848719737486904n    //for bigInt values we have to write n after number


const heros = ["shaktiman" , "nagraj", "doga"];  //array
let myObj = {   //this is object
    name : "hitesh",
    age : 22,
}

const myfunction = function (){            // function as a variable
    console.log("hello world");
}


// javascript is a dynamically ryped language.Beacause data type will automatically assigned at the time of compilation or code execution

/*
Return type of variables in javascript 
{Primitive Type}
1. Number => Number
2. string => string 
3. Boolean => boolean 
4. null => Object
5. undefined => undefined 
6. symbol => symbol
7. bigInt => bigInt

{Non-Primitive type}
1. Array => object
2. Function => function
3. Object => object
*/
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// Stack (Primitive)=> does not change original value, Heap (Non-Primitive)=> change the original value
//example

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename 
anothername = "chaiaurcode";        //so these changes only anothername value not myYoutubename beacuse it is a primitive datatype so it give copy of the value

console.log(myYoutubename); // output=> hiteshchoudharydot.com
console.log(anothername);   //output=> chaiaurcode

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email); //output => hitesh@google.com
console.log(userTwo.email); //output => hitesh@google.com // beacuse it chnge the original value in heap 



