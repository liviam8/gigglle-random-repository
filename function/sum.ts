// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(NumberfromZero:number) {
    let summa : number= 0; 
    for (let index = 0; index <= NumberfromZero; index++) {
        
        summa  = summa + index;         
    }
    return summa;
}
console.log (sum(4));