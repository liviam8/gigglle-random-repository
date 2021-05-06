// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

try {
    let fileContent:string = fs.readFileSync('./my-file.txt', 'utf-8');
    let nbLines = (fileContent.split("\n")).length
    console.log(nbLines)
}

catch(err){
    if (err instanceof Error) {
    console.log(0)
    } 
}

export{}