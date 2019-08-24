import { findFirstTag, extractTagName,  getTagCloseStartPosition, getTagCloseEndPosition } from './helper';

export const xmlParser = (data: any) => {
  data = divider(data);
  if (data.length === 0) {
    return;
  }
  data.map((xml: string, index: number) => {
    const tag = findFirstTag(xml);
    const tagName = extractTagName(tag);
    const innerXml = getInnerXml(xml);
    data[index] = { tag: tagName, content: innerXml };
    parser(data[index]);
  })
  return data;
}

const parser = (obj: any) => {
  const { content: xml } = obj;
  const dividedXml = divider(xml, []);
  if (dividedXml.length === 0) {
    return;
  }
  obj.content = dividedXml;
  obj.content.map((xml: string, index: number) => {
    const tag = findFirstTag(xml);
    const tagName = extractTagName(tag);
    const innerXml = getInnerXml(xml);
    obj.content[index] = { tag: tagName, content: innerXml };
    parser(obj.content[index]);
  })
}

// 入れ子の xml を取得
const getInnerXml: (xml: string) => string = function(xml) {
  const tag = findFirstTag(xml);
  const firstTagPosition = xml.search(new RegExp(tag))
  const closeTagEndPosition = getTagCloseStartPosition(xml, tag);
  const block = xml.slice(firstTagPosition + tag.length, closeTagEndPosition).trim();
  return block
}

// トップ階層のタグをそれぞれ配列に格納する
const divider: (xml: string, result?: string[] ) => any[] = function(xml, result = []) {
  const tag = findFirstTag(xml);
  if (tag.length === 0) {
    return [];
  }
  const firstTagPosition = xml.search(new RegExp(tag));
  const closeTagEndPosition = getTagCloseEndPosition(xml, tag);
  const firstBlock = xml.slice(firstTagPosition, closeTagEndPosition);
  result.push(firstBlock);
  const restBlock = xml.split(firstBlock)[1];
  divider(restBlock, result);
  return result;
}
