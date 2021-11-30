const { readFileSync, writeFileSync} = require('fs');

console.log('start');
const first = readFileSync('./first.txt', 'utf-8');
const second = readFileSync('./second.txt', 'utf-8');
console.log('processing...');
const result = writeFileSync('./third.txt', `This is ${first} and ${second}.`)
console.log('end');
