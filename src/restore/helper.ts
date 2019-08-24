interface BuildStartTag {
  (tagName: string, attributes: any): string
}
export const buildStartTag: BuildStartTag = (tagName, attributes = {}) => {
  let tag: string = tagName
  Object.keys(attributes).forEach(key => {
    if (typeof key === 'undefined' || key.length === 0) {
      return;
    }
    tag = `${tag} ${key}=${attributes[key]}`
  })
  return `<${tag}>`
}

export const buildEndTag: (tagName: string) => string = function(tagName) {
  return `</${tagName}>`
}
