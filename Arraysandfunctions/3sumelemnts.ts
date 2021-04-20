// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

'use strickt';
let numberelemts:number[];
let sumelements:number=0;


numberelemts = [54, 23, 66, 12];

for (let index = 0; index < numberelemts.length; index++) {
    sumelements = sumelements + numberelemts[index];
    
}

console.log(sumelements);
