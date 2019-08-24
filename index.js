"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const parser_1 = require("./src/parser/");
const data = fs.readFileSync('sample.xml', 'utf-8');
const parsedData = parser_1.xmlParser(data);
console.log(JSON.stringify(parsedData));
