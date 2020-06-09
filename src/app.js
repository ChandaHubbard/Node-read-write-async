const fs = require('fs');

function readAndOutputFile(pathOfFile) {
  const ourFile = fs.readFileSync(pathOfFile, 'utf8');

  return ourFile;
}

function writeIntoFileSync(pathOfFile, text){
  fs.writeFileSync(pathOfFile, text);

  return readAndOutputFile(pathOfFile);
}


writeIntoFileSync('./test.txt', 'We are writing into a file')