function createDynamicOrderedLists(paragraphData) {
  const styleToTagMapping = {
    "Related_resources_B-hd": "ol",
    Related_resources_Bullets: "li",
    "ELA_Strategies_B-hd": "ol",
    ELA_Strategies_Bullets: "li",
    Unordered_list_header: "ul",
    Unordered_list_item: "li",
  };

  const replacements = {
    SINGLE_RIGHT_QUOTE: "’",
    EN_DASH: "–",
  };

  function applyCharacterStyles(content, characterStyles) {
    if (!characterStyles || characterStyles.length === 0) {
      return content;
    }

    let styledContent = "";
    let currentStyle = characterStyles[0].style;
    let currentClassName =
      currentStyle === "i" ? "italic" : currentStyle === "b" ? "bold" : "";
    let currentSpan = currentClassName
      ? `<span class="${currentClassName}">`
      : "";

    for (let i = 0; i < characterStyles.length; i++) {
      let { character, style } = characterStyles[i];
      let className = style === "i" ? "italic" : style === "b" ? "bold" : "";

      character = replacements[character] || character;

      if (style !== currentStyle) {
        if (currentClassName) {
          currentSpan += `</span>`;
        }
        styledContent += currentSpan;
        currentStyle = style;
        currentClassName = className;
        currentSpan = currentClassName
          ? `<span class="${currentClassName}">${character}`
          : character;
      } else {
        currentSpan += character;
      }
    }
    if (currentClassName) {
      currentSpan += `</span>`;
    }
    styledContent += currentSpan;

    return styledContent;
  }

  let currentOl = null;
  let currentUl = null;
  let listHTML = "";

  for (let paragraph of paragraphData) {
    let tagName = styleToTagMapping[paragraph.styleName];
    let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
    content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

    if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
      content = applyCharacterStyles(content, paragraph.characterStyles);
    }

    if (tagName === "ol" || tagName === "ul") {
      if (currentOl) {
        listHTML += "</ol>";
        currentOl = null;
      }
      if (currentUl) {
        listHTML += "</ul>";
        currentUl = null;
      }
      listHTML += `<h3>${content}</h3><${tagName}>`;
      if (tagName === "ol") {
        currentOl = true;
      } else {
        currentUl = true;
      }
    } else if (tagName === "li" && (currentOl || currentUl)) {
      listHTML += `<li>${content}</li>`;
    }
  }

  if (currentOl) {
    listHTML += "</ol>";
  }
  if (currentUl) {
    listHTML += "</ul>";
  }

  return listHTML;
}

console.log(createDynamicOrderedLists(paragraphData));
