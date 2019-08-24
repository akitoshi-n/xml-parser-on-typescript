"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const xml_parser_1 = require("./src/xml-parser");
// import { xmlParser } from './src/xml-parser2';
const data = fs.readFileSync('sample.xml', 'utf-8');
const result = xml_parser_1.xmlParser(data);
console.log(JSON.stringify(result));
