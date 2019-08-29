import fs = require('fs');
import { xmlParser } from './src/parser/';
import { xmlRestore } from './src/restore/';

const data = fs.readFileSync('sample.xml', 'utf-8');
const parsedData = xmlParser(data);
fs.writeFileSync('parsed.json', JSON.stringify(parsedData));

const restoredData = xmlRestore(parsedData);
fs.writeFileSync('exported.xml', restoredData);
