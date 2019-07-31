import fs = require('fs');

const data = fs.readFileSync('sample.xml', 'utf-8')
console.log(data);
