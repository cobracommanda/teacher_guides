const Generic_sidebar_2 = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Generic_sidebar_2/Generic_sidebar_2_1.js");

function singleColumnConfig(paragraphData, num_of_rows) {
  const styleToTagMapping = {
    "Generic_sidebar_A-hd": "th",
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
  let firstBodyTexts = [];
  let remainingBodyTexts = [];
  let headerCount = 0;

  for (let paragraph of paragraphData) {
    let tagName = styleToTagMapping[paragraph.styleName];
    let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
    content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

    content = applyCharacterStyles(content, paragraph.characterStyles);

    if (tagName === "th") {
      headers.push(content);
      headerCount++;
    } else if (tagName === "td") {
      if (firstBodyTexts.length < num_of_rows) {
        firstBodyTexts.push(`<td>${content}</td>`);
      } else {
        remainingBodyTexts.push(`<td>${content}</td>`);
      }
    }
  }

  // Creating the first table
  let firstTableRows = [];
  for (let i = 0; i < firstBodyTexts.length; i++) {
    firstTableRows.push(`<tr>${firstBodyTexts[i]}</tr>`);
  }

  // Creating the second table
  let secondTableRows = [];
  for (let i = 0; i < remainingBodyTexts.length; i++) {
    secondTableRows.push(`<tr>${remainingBodyTexts[i]}</tr>`);
  }

  const firstTableHTML = `
      <table>
        <thead>
          <tr><th>${headers[0]}</th></tr>
        </thead>
        <tbody>
          ${firstTableRows.join("")}
        </tbody>
      </table>
    `;

  const secondTableHTML = `
      <table>
        <thead>
          <tr><th>${headers[1]}</th></tr>
        </thead>
        <tbody>
          ${secondTableRows.join("")}
        </tbody>
      </table>
    `;

  return firstTableHTML;
}

const tableHTML = singleColumnConfig(Generic_sidebar_2, 7);
// console.log(tableHTML);
