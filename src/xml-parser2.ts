import XmlClass from './xml-class';

interface XmlParser {
  (xml: string): Array<any> //FIXME: any を使わない方法がわからない
}
export const xmlParser: XmlParser = (xml) => {
  const result = divider(xml);
  if (result.length === 0) {
    return [{ tag: '', content: xml }];
  }
  parser(result);
  return result;
}

// 再帰的にパースする
interface Parser {
  (xmlArray: Array<any>): void //FIXME: any を使わない方法がわからない
}
const parser: Parser = xmlArray => {
  xmlArray.map((xml: string, index) => {
    const xmlInstance = new XmlClass(xml);
    xmlArray[index] = { tag: xmlInstance.firstTagName, content: xmlInstance.innerXml }

    const devidedXml = divider(xmlArray[index].content);
    if (devidedXml.length === 0) {
      return;
    }
    xmlArray[index].content = devidedXml;
    parser(devidedXml);
  })
}

// トップ階層のタグをそれぞれ配列に格納する
interface Divider {
  (xml: string, result?: string[] ): string[]
}
const divider: Divider = (xml, result = []) => {
  const xmlInstance = new XmlClass(xml);
  if (xmlInstance.hasTag() === false) {
    return [];
  }
  const firstXmlBlock = xmlInstance.firstBlock;
  result.push(firstXmlBlock);
  const restXml = xml.split(firstXmlBlock)[1];
  divider(restXml, result);
  return result;
}
