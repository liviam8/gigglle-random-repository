// -  Create a function called `factorio`
//    that returns it's input's factorial

var num:number = 5; 
var factorial:number = 1; 

while(num >=1) { 
   factorial = factorial * num; 
   num--; 
} 
console.log("The factorial  is "+factorial);  