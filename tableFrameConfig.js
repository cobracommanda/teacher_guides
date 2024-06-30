const paragraphData = require("/Users/DRobinson/Desktop/Y63060_TG_G6_U1/Generic_sidebar_6/Generic_sidebar_6_1.js");

function generateHTMLTable(paragraphData) {
  const styleToTagMapping = {
    "Generic_sidebar_A-hd": "th", // Table header
    "Generic_sidebar_B-hd": "h3", // Header level 3
    "Generic_sidebar_C-hd": "p", // Header level 4
    "Generic_sidebar_Body-txt": "p", // Paragraph
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
      currentStyle === "Italic" || currentStyle === "i"
        ? "italic"
        : currentStyle === "Bold" || currentStyle === "b"
        ? "bold"
        : "";
    let currentSpan = currentClassName
      ? `<span class="${currentClassName}">`
      : "";

    for (let i = 0; i < characterStyles.length; i++) {
      let { character, style } = characterStyles[i];
      let className =
        style === "Italic" || style === "i"
          ? "italic"
          : style === "Bold" || style === "b"
          ? "bold"
          : "";

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

  let headerContent = "";
  let bodyContent = "";

  paragraphData.forEach((paragraph) => {
    let tagName = styleToTagMapping[paragraph.styleName];
    let styledContent = applyCharacterStyles(
      paragraph.content,
      paragraph.characterStyles
    );
    if (tagName === "th") {
      headerContent += `<tr><${tagName}>${styledContent}</${tagName}></tr>`;
    } else {
      bodyContent += `<${tagName}>${styledContent}</${tagName}>`;
    }
  });

  const tableHTML = `
    <table>
      <thead>
        ${headerContent}
      </thead>
      <tbody>
        <tr><td>${bodyContent}</td></tr>
      </tbody>
    </table>
  `;

  return tableHTML;
}

const generatedHTML = generateHTMLTable(paragraphData);
console.log(generatedHTML);
