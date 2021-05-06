// Create a method that decrypts reversed-order.txt
// Create a method that decrypts reversed-order.txt

const fs = require('fs');

let originFile:string = fs.readFileSync('./reversedOrder.txt', 'utf-8')

let splitByLine = originFile.split('\n')

let newArray:string = ''

for(let i = splitByLine.length - 1; i > -1; i--){

    newArray = newArray.concat(splitByLine[i])

    newArray = newArray.concat('\n')

}

fs.writeFileSync('./reversedOrder.txt', newArray)

export{}