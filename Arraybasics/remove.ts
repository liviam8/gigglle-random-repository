/*
array.splice(index, howMany, [element1][, ..., elementN]);
Parameter Details
index − Index at which to start changing the array.

howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.

element1, ..., elementN − The elements to add to the array. If you don't specify any elements, splice simply removes the elements from the array.
*/
let arr = ["orange", "mango", "banana", "sugar", "tea"];  
let removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed);