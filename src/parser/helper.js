"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startTagPattern = /<[^<>/]+>/g;
exports.findFirstTag = function (xml) {
    const tagList = xml.match(startTagPattern);
    if (tagList === null) {
        return '';
    }
    return tagList[0];
};
exports.extractTagName = function (tag) {
    return tag.replace(/[</>]/g, '').split(' ')[0];
};
exports.extractTagAttributes = function (tag) {
    let result = {};
    const tagName = exports.extractTagName(tag);
    const attributes = tag.replace(/[</>]/g, '').replace(tagName, '').trim().split(' ');
    attributes.forEach((attribute) => {
        const [key, value] = attribute.split('=');
        result[key] = value;
    });
    return result;
};
exports.getTagCloseStartPosition = (xml, tag) => {
    const tagName = exports.extractTagName(tag);
    const endTag = new RegExp(`</${tagName}>`);
    return xml.search(endTag);
};
exports.getTagCloseEndPosition = (xml, tag) => {
    const tagName = exports.extractTagName(tag);
    const endTag = new RegExp(`</${tagName}>`);
    return xml.search(endTag) + `</${tagName}>`.length;
};
