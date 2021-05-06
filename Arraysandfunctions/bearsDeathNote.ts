const bearsDeathNote: string [] = ['farkas', 'roka'];
bearsDeathNote.push('oroszlan');
bearsDeathNote[3] = 'nyuszika';
bearsDeathNote[4] = 'nyuszika';
bearsDeathNote[5] = 'sas';


console.log(bearsDeathNote);

for (let index: number = 0; index < bearsDeathNote.length; index++) {
    if (bearsDeathNote[index]=== "nyuszika") {
        bearsDeathNote.splice(index,1);
        //delete bearsDeathNote[index] ;
    }
 
}

const indexOfNyuszika: number = bearsDeathNote.indexOf('nyuszika');

bearsDeathNote.splice(indexOfNyuszika, 1);
console.log (indexOfNyuszika, bearsDeathNote);




const otherAnimals: string[] = ['menyet', 'bagoly', 'kigyo'];
console.log(otherAnimals);

console.log(...otherAnimals);
bearsDeathNote.splice (bearsDeathNote.indexOf('roka'), 0, 'menyet', 'bagoly', 'kigyo');
//megtartja a rokat es ele teszi a tobbit
bearsDeathNote.splice (bearsDeathNote.indexOf('roka'), 1, ...otherAnimals);

//kitorli a rokat 

console.log(bearsDeathNote);