
 // copy and paste test file to the test_file folder

const isBinaryFile = require("isbinaryfile").isBinaryFile;
const fs = require("fs");

const testFolder = 'test_file/';

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    const filePath = `${testFolder}${file}`
    
    //test for binary [Begin]     
    const isBinaryFileSync = require("isbinaryfile").isBinaryFileSync;
    const bytes = fs.readFileSync(filePath);
    const size = fs.lstatSync(filePath).size;
    const result = isBinaryFileSync(bytes, size)

    const resultStr = result?`${file} IS a binary file (${result})`:`${file} is NOT a binary file (${result}) `

    console.log('\n');
    console.log(resultStr);
    //test for binary [End]
  });
  console.log('\n');
});