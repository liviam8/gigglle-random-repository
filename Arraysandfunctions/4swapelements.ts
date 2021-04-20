// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let  arrnames: string[] = ["Arthur", "Boe", "Chloe"];//.reverse(); 
console.log("Reversed array is : " + arrnames );

let first = arrnames[2];
arrnames[2] = arrnames[0];
arrnames[0] = first;

console.log(arrnames);
// for (let index = arrnames.length - 1; index >= 0; index--) {
//     console.log(arrnames[index]);
// }
