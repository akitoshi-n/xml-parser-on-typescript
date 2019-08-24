import fs = require('fs');
import { xmlParser } from './src/xml-parser';
// import { xmlParser } from './src/xml-parser2';

const data = fs.readFileSync('sample.xml', 'utf-8');
const result = xmlParser(data);
console.log(JSON.stringify(result));
