  
'use strict';

// Create a program that prints a few operations on two numbers: 22 and 13

// Print the result of 13 added to 22

// Print the result of 13 substracted from 22

// Print the result of 22 multiplied by 13

// Print the result of 22 divided by 13 (as a decimal fraction)

// Print the remainder of 22 divided by 13
// Arithmetic operations

let firstnumber=22;
let secondnumber=13;

console.log(firstnumber + secondnumber);  
console.log(firstnumber - secondnumber);  
console.log(firstnumber * secondnumber);  
console.log(firstnumber / secondnumber);  
console.log(Math.round(firstnumber / secondnumber));  //kerekít, 1-4ig lefelé, 5-9-től felfelé
console.log(Math.floor(firstnumber / secondnumber)); //kerekít, mindig lelé
console.log(Math.ceil(firstnumber / secondnumber));  //kerekít, mindig felfelé
console.log(Math.max(firstnumber, secondnumber));    // visszaadja a maximumot



console.log(firstnumber % secondnumber);  
