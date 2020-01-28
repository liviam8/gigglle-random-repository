// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

'use strickt';

let numList: number [];
numList = [1, 2, 3, 8, 5];


for (let i = 0; i < numList.length; i++) {
    if ( i===2 )
    {
    numList[i] =  numList[i] + 2;
    }  
}
console.log(numList[2]);