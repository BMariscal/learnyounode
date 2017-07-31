//fs module to perform fylesystem operation
let fs = require('fs');
//read file and convert file buffer to string
let file = fs.readFileSync(process.argv[2]).toString();
//split string with file content at the newlines '\n'
let splitfile = file.split('\n');
//count the number of newlines
console.log(splitfile.length-1);


