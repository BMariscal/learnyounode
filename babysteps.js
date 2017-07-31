let newNumArr = process.argv;
let arrLength = process.argv.length;
let total = 0;
for (let i = 2; i < arrLength; i++){
    total += Number(newNumArr[i])
}

console.log(total)



