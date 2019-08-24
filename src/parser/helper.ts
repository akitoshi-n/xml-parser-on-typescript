const startTagPattern = /<[^<>/]+>/g;

export const findFirstTag: (xml: string) => string = function(xml) {
  const tagList = xml.match(startTagPattern);
  if (tagList === null) {
    return '';
  }
  return tagList[0];
}

export const extractTagName: (tag: string) => string = function(tag) {
  return tag.replace(/[</>]/g, '').split(' ')[0];
}

export const extractTagAttributes: (tag: string) => any = function(tag) {
  let result: any = {}
  const tagName = extractTagName(tag);
  const attributes = tag.replace(/[</>]/g, '').replace(tagName, '').trim().split(' ');
  attributes.forEach((attribute) => {
    const [key, value] = attribute.split('=')
    result[key] = value
  })
  return result
}

export const getTagCloseStartPosition = (xml: string, tag: string) => {
  const tagName = extractTagName(tag);
  const endTag = new RegExp(`</${tagName}>`);
  return xml.search(endTag);
}

export const getTagCloseEndPosition = (xml: string, tag: string) => {
  const tagName = extractTagName(tag);
  const endTag = new RegExp(`</${tagName}>`);
  return xml.search(endTag) + `</${tagName}>`.length;
}
