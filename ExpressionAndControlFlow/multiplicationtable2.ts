'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

for (let index: number = 1; index <= 10 ; index++) {
    console.log (multiplicationLine(index, number));
    
}


function multiplicationLine (num1: number, num2: number)
{

    return (num1 + '*' + num2 + "=" + num1*num2 );
}