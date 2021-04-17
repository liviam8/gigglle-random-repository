const fs = require("fs");

const MY_ERROR_MESSAGE = "0";
function fileCont(fileName: string) {
  const fileContent = fs.readFileSync(fileName);
  const lines = (fileContent.match(/\n/g) || "").length + 1;
  console.log(lines);
  return lines;
}

try {
  fileCont("readme.txt");
  //throw "My error";
} catch (error) {
  //console.log(MY_ERROR_MESSAGE);
  console.log(error.message);
}

export {};