  
'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

// 14:34:42
// atvaltjuk az orakat es perceket masodpercekre
let hoursInSeconds: number = currentHours * 60 * 60 ; 
let minutesInSeconds: number = currentMinutes * 60; 

// 2. összeadjuk 
let sum: number  = hoursInSeconds + minutesInSeconds + currentSeconds;

// 3. kivonom a napból 
let wholeDay: number = 24 * 60 * 60; 

//console.log (wholeDay - sum);

let totalRemainingSeconds: number = wholeDay - sum; 

let remainingHours: number = Math.floor (totalRemainingSeconds / 3600); 
let remainingMinutes: number = Math.floor ((totalRemainingSeconds %3600) /60);
let remainingSeconds: number = totalRemainingSeconds - remainingHours *3600 - remainingMinutes*60;

console.log (remainingHours);
console.log (remainingMinutes);
console.log (remainingSeconds);



