// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

'use strickt';

let drinks: string [];
drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];


for (let i = 0; i < drinks.length; i++) {
    
    

    {
        drinks[i] =  drinks[i] + drinks[i];
 
    }  

    console.log(drinks[i]);
   
}




//const myNumber = 1;
//function sum(n: number): number {
 // let result = 0;
  //for (let i = 1; i < n; i++) {
   // result += i;
  //}
 // return result;
 //}
