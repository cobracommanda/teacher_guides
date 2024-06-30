const panel_3_page_1_aside_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Generic_sidebar_6/Generic_sidebar_6_1.js");

function singleTableMultipleHeaders(paragraphData, numInstances, config) {
  const styleToTagMapping = {
    "table header": "th",
    "Generic_sidebar_Table-body-txt": "td",
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
      if (bodyTexts.length < numInstances) {
        bodyTexts.push(content);
      } else {
        remainingBodyTexts.push(content);
      }
    }
  }

  // Function to distribute paragraphs into rows based on the configuration
  function distributeTexts(paragraphConfig) {
    let rows = [];
    let bodyTextIndex = 0;
    for (let i = 0; i < paragraphConfig.length; i++) {
      let rowContent = [];
      for (let j = 0; j < paragraphConfig[i]; j++) {
        if (bodyTextIndex < bodyTexts.length) {
          rowContent.push(`<p>${bodyTexts[bodyTextIndex]}</p>`);
          bodyTextIndex++;
        }
      }
      rows.push(`<tr><td>${rowContent.join("")}</td></tr>`);
    }
    return rows;
  }

  // Creating rows for the first thead
  let firstTheadRows = distributeTexts(config.firstTheadParagraphConfig);

  // Creating rows for the second thead
  let secondTheadRows = distributeTexts(config.secondTheadParagraphConfig);

  // Creating the first table HTML
  const firstTableHTML = `
      <table>
        <thead>
          <tr><th>${headers[0]}</th></tr>
        </thead>
        <tbody>
          ${firstTheadRows.join("")}
        </tbody>
        <thead>
          <tr><th>${headers[1]}</th></tr>
        </thead>
        <tbody>
          ${secondTheadRows.join("")}
        </tbody>
      </table>
    `;

  return firstTableHTML;
}

const panel_3_page_1_aside_table = singleTableMultipleHeaders(
  panel_3_page_1_aside_data,
  6,
  {
    firstTheadNumberOfTds: 1,
    firstTheadParagraphConfig: [1],
    secondTheadNumberOfTds: 3,
    secondTheadParagraphConfig: [2, 2, 1],
  }
);
module.exports = {
  panel_3_page_1_aside_table,
};

console.log(panel_3_page_1_aside_table);
