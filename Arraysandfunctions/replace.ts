// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strickt';

let numList: number [];
numList = [1, 2, 3, 8, 5, 6];


for (let i = 0; i < numList.length; i++) {
    if (numList[i] === 8 )
    {
    numList[i] = 4;
    }  
}
console.log(numList[3]);