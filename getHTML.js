function parseParagraphData(paragraphData) {
  const styleToTagMapping = {
    "Lesson_B-hd": "h3",
    "Lesson_Body-txt": "p",
    "Lesson_Tchr-tlk": "span",
  };

  const replacements = {
    SINGLE_RIGHT_QUOTE: "’",
    EN_DASH: "–",
    FORCED_LINE_BREAK: "",
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

      // Replace constants with their respective characters
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

  const filteredData = paragraphData
    .map((paragraph) => {
      const tagName = styleToTagMapping[paragraph.styleName];
      let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
      content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

      if (tagName) {
        if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
          content = applyCharacterStyles(content, paragraph.characterStyles);
        }
        return `<${tagName} class="${paragraph.styleName}">${content}</${tagName}>`;
      } else {
        return content;
      }
    })
    .filter(
      (content) => content.trim() !== "" && !/[\x00-\x1F\x7F]/.test(content)
    ); // Filter out empty or control character-only contents

  return filteredData;
}

const wrappedContents = parseParagraphData(paragraphData);
console.log(wrappedContents);
