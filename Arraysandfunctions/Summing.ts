// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
let number: number = 0;
let n: number = 6

function sum(number:number, n:number): number {

    for (let i=0; i<n; i++ )
    {  number = number + i}

}

let eredmeny = sum(number, n);
console.log(eredmeny);



