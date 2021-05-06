  
// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(numberFactorial: number) {
    let numberFact: number=1;

    for (let index = 1; index <= numberFactorial; index++) {
        numberFact= numberFact * index
    }
    return numberFact
};

console.log (calculateFactorial(5));
