// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test
'use strict'
let numberschange: number[]=[1, 2, 3, 8, 5, 6];
let changevalue = numberschange.map(function(value, index, array){
   if (value === 8)
        array[index]=4;
});

console.log(numberschange);


// for (let i = 0; i<numberschange.length;i++){
//     if(numberschange[i]===8){
//         numberschange[i]=4;
//     }
// }
// console.log(numberschange[3]);

