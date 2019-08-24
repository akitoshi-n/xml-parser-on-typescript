"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xml_class_1 = require("./xml-class");
exports.xmlParser = (xml) => {
    const result = divider(xml);
    if (result.length === 0) {
        return [{ tag: '', content: xml }];
    }
    parser(result);
    return result;
};
const parser = xmlArray => {
    xmlArray.map((xml, index) => {
        const xmlInstance = new xml_class_1.default(xml);
        xmlArray[index] = { tag: xmlInstance.firstTagName, content: xmlInstance.innerXml };
        const devidedXml = divider(xmlArray[index].content);
        if (devidedXml.length === 0) {
            return;
        }
        xmlArray[index].content = devidedXml;
        parser(devidedXml);
    });
};
const divider = (xml, result = []) => {
    const xmlInstance = new xml_class_1.default(xml);
    if (xmlInstance.hasTag() === false) {
        return [];
    }
    const firstXmlBlock = xmlInstance.firstBlock;
    result.push(firstXmlBlock);
    const restXml = xml.split(firstXmlBlock)[1];
    divider(restXml, result);
    return result;
};
