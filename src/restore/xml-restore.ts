import { buildStartTag, buildEndTag } from './helper';

interface XmlRestore {
  (data: Array<any>, result?: string): string,
}
export const xmlRestore: XmlRestore = (data, result = '') => {
  data.forEach((item: any) => {
    const startTag = buildStartTag(item.tag, item.attributes);
    const endTag = buildEndTag(item.tag);
    if (typeof item.content === 'string') {
      result += startTag + item.content + endTag;
    } else {
      result += startTag + xmlRestore(item.content) + endTag;
    }
  })
  return result;
}
