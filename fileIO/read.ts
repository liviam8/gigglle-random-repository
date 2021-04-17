var fs = require ("fs");

var readMe = fs.readFileSync("readMe.txt, "UTF8");

console.log(readMe);

