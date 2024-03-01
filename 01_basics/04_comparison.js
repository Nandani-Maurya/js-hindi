//console.log(2>1); //output will give boolean value


console.log(null > 0);
console.log(null==0);
console.log(null>=0);
/*
the reason is that an equity check == and comparisons ><>= 
<= work differently.
Comparisons convert null to a number , treating it as 0.
that's why (3) null>=0 is true and (1) null>0 is false.
*/

// same for undefined 
// in java == and comparison <> works diff(not a same syntax for == and <>)

// === strictly checking with datatype
// for example 
console.log("2" === 2);  //they are not same because there data type are different

