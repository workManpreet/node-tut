const _ = require('lodash');

const item =[1,32,432,[3232,[3,434]]]
const newitems =_.flattenDeep(item)
console.log(newitems)
