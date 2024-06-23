function parseParagraphData(paragraphData) {
  const styleToTagMapping = {
    "Lesson_A-hd": ["h2"],
    "Lesson_B-hd": ["h3", "blue"],
    "Lesson_C-hd": ["span", "teacher-talk"],
    table_label: ["h4"],
    "Lesson_Body-txt": ["p"],
    "Lesson_Tchr-tlk": ["span", "teacher-talk"],
    "Generic_sidebar_Body-txt": ["p"],
    "Generic_sidebar_C-hd": ["p"],
    "Lesson_Table-body-txt": ["p"],
  };

  const replacements = {
    SINGLE_RIGHT_QUOTE: "’",
    SINGLE_LEFT_QUOTE: "‘",
    DOUBLE_LEFT_QUOTE: "“",
    DOUBLE_RIGHT_QUOTE: "”",
    EN_DASH: "–",
    EM_DASH: "—",
    FORCED_LINE_BREAK: "<br>",
    NONBREAKING_SPACE: "&nbsp;",
    ELLIPSIS: "…",
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

  const filteredData = paragraphData
    .map((paragraph) => {
      const [tagName, optionalClass] =
        styleToTagMapping[paragraph.styleName] || [];
      let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
      content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

      if (tagName) {
        if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
          content = applyCharacterStyles(content, paragraph.characterStyles);
        }
        // Special handling for Lesson_A-hd to wrap standards in a span
        if (paragraph.styleName === "Lesson_A-hd") {
          const standardsRegex = /(?:[A-Z]+\.\d+\.\d+[a-z]*,?\s*)+/g;
          content = content.replace(
            standardsRegex,
            '<span class="standards">$&</span>'
          );
        }
        const className = optionalClass ? optionalClass : paragraph.styleName;
        return `<${tagName} class="${className}">${content}</${tagName}>`;
      } else {
        return content;
      }
    })
    .filter(
      (content) => content.trim() !== "" && !/[\x00-\x1F\x7F]/.test(content)
    ); // Filter out empty or control character-only contents

  return filteredData;
}
