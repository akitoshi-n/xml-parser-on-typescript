"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStartTag = (tagName, attributes = {}) => {
    let tag = tagName;
    Object.keys(attributes).forEach(key => {
        if (typeof key === 'undefined' || key.length === 0) {
            return;
        }
        tag = `${tag} ${key}=${attributes[key]}`;
    });
    return `<${tag}>`;
};
exports.buildEndTag = function (tagName) {
    return `</${tagName}>`;
};
