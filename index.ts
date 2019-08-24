import fs = require('fs');
import { xmlParser } from './src/parser/';
import { xmlRestore } from './src/restore/';

const data = fs.readFileSync('sample.xml', 'utf-8');
const parsedData = xmlParser(data);
console.log(JSON.stringify(parsedData));

const restoredData = xmlRestore(parsedData)
console.log(restoredData);
