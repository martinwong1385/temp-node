console.log('Start');
const {readFile, writeFile} = require('fs');
readFile('./first.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./second.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('.third.txt', `This is ${first} and ${second}`, (err, result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
    console.log('processing');
});
console.log('end');