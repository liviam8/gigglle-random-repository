let number1=1;
let number2=2;
let number3=3;

let number100=100;
const arrOne: Array<number> = [];
const arrTwo: number []=[];


const bearsDeathNote: string[] = ['farkas', 'roka'];
bearsDeathNote.push ('oroszlán');
bearsDeathNote[3] = 'nyuszika';
//bearsDeathNote[bearsDeathNote.length] = 'nyuszika';

//bearsDeathNote[0] = 'nyuszika'; farkast atirna
//bearsDeathNote[6]='sas';

console.log('bears death note', bearsDeathNote);
console.log('nyuszika?', bearsDeathNote[3]);
console.log('lenght', bearsDeathNote.length);



for (let i:number = 0; i < bearsDeathNote.length; i++) {
    console.log(bearsDeathNote [i]);
    
}

const eatenAnimals:string[] = [];

/*for (let animal of bearsDeathNote) {
    if (animal==='nyuszika') {
        continue;
    }
    else{
       // console.log (animal);
    eatenAnimals.push (animal);
    }
}
   
*/
for (let animal /*string */of bearsDeathNote) {
    if (!(animal==='nyuszika') || animal!=='nyuszika' {
    eatenAnimals.push (animal);
    
    }
}


//bearsDeathNote.reverse();

const numberArray: number[] = [1, 77, 7, -5, 11, -1, 5, 59];
// sort megváltoztatja az eredeti tömböt
numberArray.sort (function (numberOne: number, numberTwo: number): number {
    if (numberOne < numberTwo){
        return -1;// negativ keruljon a numberOne ele 

    }

    else if (numberOne> numberTwo) {
        return 1; // pozitiv keruljon a numberTwo Ele
    }
    else {
        return 0; // hagyja helyben 
    }
} );
console.log (numberArray);


numberArray.sort (function (numberOne: number, numberTwo: number): number {
   return numberOne - numberTwo;
});
console.log (numberArray);