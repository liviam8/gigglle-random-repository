// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

let typo: string= "Chinchill"; 
let a: string= "a";

function appendAFunc(typo: string, a:string): string {
     typo= typo + a;
    return typo;
}

  let result2 = appendAFunc(typo,a);
  console.log(result2);