
/*
Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument (i.e., process.argv[2]). You do not need to make  
  your own test file.  */



//fs module to perform fylesystem operation
let fs = require('fs');
//read file and convert file buffer to string
let file = fs.readFileSync(process.argv[2]).toString();
//split string with file content at the newlines '\n'
let splitfile = file.split('\n');
//count the number of newlines
console.log(splitfile.length-1);


