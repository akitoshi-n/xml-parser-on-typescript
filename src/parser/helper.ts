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
