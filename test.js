function findEmptyTags(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const emptyTags = [];

  function traverse(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.childNodes.length === 0 && node.textContent.trim() === "") {
        emptyTags.push(node);
      } else {
        node.childNodes.forEach(traverse);
      }
    }
  }

  traverse(doc.body);
  return emptyTags.map((tag) => tag.tagName);
}

const htmlString = "<div><p></p><span>Non-empty span</span><div></div></div>";
const emptyTags = findEmptyTags(htmlString);
console.log(emptyTags); // Output: ['P', 'DIV']
