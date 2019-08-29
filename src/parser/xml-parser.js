"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// deprecation
// use xml-parser2
const helper_1 = require("./helper");
exports.xmlParser = (data) => {
    data = divider(data);
    if (data.length === 0) {
        return;
    }
    data.map((xml, index) => {
        const tag = helper_1.findFirstTag(xml);
        const tagName = helper_1.extractTagName(tag);
        const innerXml = getInnerXml(xml);
        data[index] = { tag: tagName, content: innerXml };
        parser(data[index]);
    });
    return data;
};
const parser = (obj) => {
    const { content: xml } = obj;
    const dividedXml = divider(xml, []);
    if (dividedXml.length === 0) {
        return;
    }
    obj.content = dividedXml;
    obj.content.map((xml, index) => {
        const tag = helper_1.findFirstTag(xml);
        const tagName = helper_1.extractTagName(tag);
        const innerXml = getInnerXml(xml);
        obj.content[index] = { tag: tagName, content: innerXml };
        parser(obj.content[index]);
    });
};
// 入れ子の xml を取得
const getInnerXml = function (xml) {
    const tag = helper_1.findFirstTag(xml);
    const firstTagPosition = xml.search(new RegExp(tag));
    const closeTagEndPosition = helper_1.getTagCloseStartPosition(xml, tag);
    const block = xml.slice(firstTagPosition + tag.length, closeTagEndPosition).trim();
    return block;
};
// トップ階層のタグをそれぞれ配列に格納する
const divider = function (xml, result = []) {
    const tag = helper_1.findFirstTag(xml);
    if (tag.length === 0) {
        return [];
    }
    const firstTagPosition = xml.search(new RegExp(tag));
    const closeTagEndPosition = helper_1.getTagCloseEndPosition(xml, tag);
    const firstBlock = xml.slice(firstTagPosition, closeTagEndPosition);
    result.push(firstBlock);
    const restBlock = xml.split(firstBlock)[1];
    divider(restBlock, result);
    return result;
};
