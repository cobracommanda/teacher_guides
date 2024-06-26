const panel_3_page_2_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Generic_sidebar_7/Generic_sidebar_7_1.js");
const panel_3_page_3_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Generic_sidebar_8/Generic_sidebar_8_1.js");

function singleColumnTableConfig(paragraphData, numInstances, config) {
  const styleToTagMapping = {
    "Generic_sidebar_A-hd": "th",
    "table header": "th",
    "Generic_sidebar_Table-body-txt": "td",
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

  // Creating the first table with distribution logic
  let firstTableRows = [];
  let bodyTextIndex = 0;

  for (let i = 0; i < config.paragraphConfig.length; i++) {
    let rowContent = [];
    for (let j = 0; j < config.paragraphConfig[i]; j++) {
      if (bodyTextIndex < bodyTexts.length) {
        rowContent.push(`<p>${bodyTexts[bodyTextIndex]}</p>`);
        bodyTextIndex++;
      }
    }
    firstTableRows.push(`<tr><td>${rowContent.join("")}</td></tr>`);
  }

  // Adding remaining body texts to the second table
  let secondTableRows = [];
  for (let i = bodyTextIndex; i < bodyTexts.length; i++) {
    secondTableRows.push(`<tr><td><p>${bodyTexts[i]}</p></td></tr>`);
  }

  for (let i = 0; i < remainingBodyTexts.length; i++) {
    secondTableRows.push(`<tr><td><p>${remainingBodyTexts[i]}</p></td></tr>`);
  }

  // Handling additional headers and their respective body texts
  let additionalHeaderIndex = 1;
  while (headerCount > 2 && additionalHeaderIndex < headers.length) {
    secondTableRows.unshift(
      `<tr><th>${headers[additionalHeaderIndex]}</th></tr>`
    );
    additionalHeaderIndex++;
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
          ${
            additionalHeaderIndex < headers.length
              ? `<tr><th>${headers[additionalHeaderIndex]}</th></tr>`
              : ""
          }
        </thead>
        <tbody>
          ${secondTableRows.join("")}
        </tbody>
      </table>
    `;

  return firstTableHTML + secondTableHTML;
}

const panel_3_page_2_section_table = singleColumnTableConfig(
  panel_3_page_2_section_data,
  6,
  {
    numberOfTds: 3,
    paragraphConfig: [2, 2, 2],
  }
);
const panel_3_page_3_section_table = singleColumnTableConfig(
  panel_3_page_3_section_data,
  6,
  {
    numberOfTds: 3,
    paragraphConfig: [1, 1, 2],
  }
);

module.exports = {
  panel_3_page_2_section_table,
  panel_3_page_3_section_table,
};

// const tableHTML = singleColumnTableConfig(Generic_sidebar_2, 4, {
//   numberOfTds: 1,
//   paragraphConfig: [4],
// });
// console.log(panel_3_page_3_section_table);
