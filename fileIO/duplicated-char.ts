// Create a method that decrypts duplicated-chars.txt
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.

const fs = require('fs');

let originFile:string = fs.readFileSync('./duplicated-chars.txt', 'utf-8')
let splitByLine = originFile.split('\n')
let newArray:string = ''

for(let i = 0; i < splitByLine.length - 1; i++){

    for(let j = 0; j < splitByLine[i].length; j++){

        if( j % 2 === 0){
            newArray = newArray.concat(splitByLine[i].charAt(j))
        }    
    }
    newArray = newArray.concat('\n')
}

fs.writeFileSync('./duplicated-chars.txt', newArray)

export{}