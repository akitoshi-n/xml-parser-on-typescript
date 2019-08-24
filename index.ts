import fs = require('fs');
import { xmlParser } from './src/parser/';

const data = fs.readFileSync('sample.xml', 'utf-8');
const parsedData = xmlParser(data);
console.log(JSON.stringify(parsedData));
