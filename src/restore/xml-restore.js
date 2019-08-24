"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
exports.xmlRestore = (data, result = '') => {
    data.forEach((item) => {
        const startTag = helper_1.buildStartTag(item.tag, item.attributes);
        const endTag = helper_1.buildEndTag(item.tag);
        if (typeof item.content === 'string') {
            result += startTag + item.content + endTag;
        }
        else {
            result += startTag + exports.xmlRestore(item.content) + endTag;
        }
    });
    return result;
};
