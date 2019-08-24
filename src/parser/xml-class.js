"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
class XmlClass {
    constructor(xml) {
        this.xml = xml;
    }
    get firstBlock() {
        if (this.hasTag() === false) {
            return '';
        }
        const start = this.xml.search(new RegExp(this._firstTag()));
        const end = this.xml.search(new RegExp(this._firstCloseTag())) + this._firstCloseTag().length;
        return this.xml.slice(start, end);
    }
    get innerXml() {
        if (this.hasTag() === false) {
            return '';
        }
        const start = this.xml.search(new RegExp(this._firstTag())) + this._firstTag().length;
        const end = this.xml.search(new RegExp(this._firstCloseTag()));
        return this.xml.slice(start, end);
    }
    get firstTagName() {
        return this._firstTagName();
    }
    get firstTagAttributes() {
        return helper_1.extractTagAttributes(this._firstTag());
    }
    hasTag() {
        const tag = this._firstTag();
        return tag.length > 0;
    }
    _firstTagName() {
        if (this.hasTag() === false) {
            return '';
        }
        return helper_1.extractTagName(this._firstTag());
    }
    _firstTag() {
        return helper_1.findFirstTag(this.xml);
    }
    _firstCloseTag() {
        if (this.hasTag() === false) {
            return '';
        }
        return `</${this._firstTagName()}>`;
    }
}
exports.default = XmlClass;
