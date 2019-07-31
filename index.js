"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const data = fs.readFileSync('sample.xml', 'utf-8');
console.log(data);
