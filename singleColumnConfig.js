const Generic_sidebar_2 = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Generic_sidebar_2/Generic_sidebar_2_1.js");
const Generic_sidebar_4 = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Generic_sidebar_4/Generic_sidebar_4_1.js");
const Generic_sidebar_5 = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Generic_sidebar_5/Generic_sidebar_5_1.js");

function singleColumnConfig(paragraphData) {
  const styleToTagMapping = {
    "Generic_sidebar_A-hd": "th",
    "Generic_sidebar_Body-txt": "td",
    "Generic_sidebar_C-hd": "td",
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

  let headers = [];
  let bodyTexts = [];

  for (let paragraph of paragraphData) {
    let tagName = styleToTagMapping[paragraph.styleName];
    let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
    content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

    content = applyCharacterStyles(content, paragraph.characterStyles);

    if (tagName === "th") {
      headers.push(content);
    } else if (tagName === "td") {
      bodyTexts.push(`<td>${content}</td>`);
    }
  }

  // Creating the table rows
  let tableRows = [];
  for (let i = 0; i < bodyTexts.length; i++) {
    tableRows.push(`<tr>${bodyTexts[i]}</tr>`);
  }

  // Creating the table
  const tableHTML = `
    <table>
        <thead>
          <tr><th>${headers[0]}</th></tr>
        </thead>
        <tbody>
          ${tableRows.join("")}
        </tbody>
      </table>
   
    `;

  return tableHTML;
}

const Generic_sidebar_2_tags = singleColumnConfig(Generic_sidebar_2);
const Generic_sidebar_4_tags = singleColumnConfig(Generic_sidebar_4);
const Generic_sidebar_5_tags = singleColumnConfig(Generic_sidebar_5);

// console.log(Generic_sidebar_2_tags);
// console.log(Generic_sidebar_4_tags);
// console.log(Generic_sidebar_5_tags);

module.exports = {
  Generic_sidebar_2_tags,
  Generic_sidebar_4_tags,
  Generic_sidebar_5_tags,
};
