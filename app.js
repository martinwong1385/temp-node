const lodash = require('lodash');
const arr = [1, [2, [3, [4, 5]]]];
const newArr = lodash.flattenDeep(arr);
console.log(newArr);