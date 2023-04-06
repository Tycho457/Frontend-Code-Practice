const math = require('mathjs');
const a = math.bignumber('0.1');
const b = math.bignumber('0.2');
const result = math.add(a, b);
console.log(result.toString()); // '0.3'
