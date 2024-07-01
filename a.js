// function createTableFrame(paragraphData, lastIndex = false) {
//   const styleToTagMapping = {
//     "Lesson_Table-body-txt": { tag: "td", className: "" },
//   };

//   const replacements = {
//     SINGLE_RIGHT_QUOTE: "’",
//     DOUBLE_LEFT_QUOTE: "“",
//     DOUBLE_RIGHT_QUOTE: "”",
//     EN_DASH: "–",
//     FORCED_LINE_BREAK: "",
//   };

//   function applyCharacterStyles(content, characterStyles) {
//     if (!characterStyles || characterStyles.length === 0) {
//       return content;
//     }

//     let styledContent = "";
//     let currentStyle = characterStyles[0].style;
//     let currentClassName =
//       currentStyle === "i" ? "italic" : currentStyle === "b" ? "bold" : "";
//     let currentSpan = currentClassName
//       ? `<span class="${currentClassName}">`
//       : "";

//     for (let i = 0; i < characterStyles.length; i++) {
//       let { character, style } = characterStyles[i];
//       let className = style === "i" ? "italic" : style === "b" ? "bold" : "";

//       character = replacements[character] || character;

//       if (style !== currentStyle) {
//         if (currentClassName) {
//           currentSpan += `</span>`;
//         }
//         styledContent += currentSpan;
//         currentStyle = style;
//         currentClassName = className;
//         currentSpan = currentClassName
//           ? `<span class="${currentClassName}">${character}`
//           : character;
//       } else {
//         currentSpan += character;
//       }
//     }
//     if (currentClassName) {
//       currentSpan += `</span>`;
//     }
//     styledContent += currentSpan;

//     return styledContent;
//   }

//   let listHTML = "<table style='border-collapse: collapse;'><tr>";

//   // If lastIndex is true, find the last occurrence of "Lesson_Table-body-txt"
//   if (lastIndex) {
//     let lastIdx = -1;
//     for (let i = paragraphData.length - 1; i >= 0; i--) {
//       if (paragraphData[i].styleName === "Lesson_Table-body-txt") {
//         lastIdx = i;
//         break;
//       }
//     }

//     if (lastIdx !== -1) {
//       let paragraph = paragraphData[lastIdx];
//       let styleMapping = styleToTagMapping[paragraph.styleName];
//       if (styleMapping) {
//         let tagName = styleMapping.tag;
//         let className = styleMapping.className;
//         let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
//         content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

//         for (let [key, value] of Object.entries(replacements)) {
//           content = content.replace(new RegExp(key, "g"), value);
//         }

//         if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
//           content = applyCharacterStyles(content, paragraph.characterStyles);
//         }

//         listHTML += `<td class="${className}" style='border: 1px solid black;'>${content}</td>`;
//       }
//     }
//   } else {
//     for (let paragraph of paragraphData) {
//       let styleMapping = styleToTagMapping[paragraph.styleName];
//       if (!styleMapping) continue; // Skip if style is not mapped

//       let tagName = styleMapping.tag;
//       let className = styleMapping.className;
//       let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
//       content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

//       for (let [key, value] of Object.entries(replacements)) {
//         content = content.replace(new RegExp(key, "g"), value);
//       }

//       if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
//         content = applyCharacterStyles(content, paragraph.characterStyles);
//       }

//       listHTML += `<td class="${className}" style='border: 1px solid black;'>${content}</td>`;
//     }
//   }

//   listHTML += "</tr></table>";

//   return listHTML;
// }

// // Example usage
// const paragraphData = [
//   {
//     styleName: "Lesson_Table-body-txt",
//     content: "Content 1",
//     characterStyles: [],
//   },
//   {
//     styleName: "Lesson_Table-body-txt",
//     content: "Content 2",
//     characterStyles: [],
//   },
//   { styleName: "Other_Style", content: "Other Content", characterStyles: [] },
//   {
//     styleName: "Lesson_Table-body-txt",
//     content: "Last Content",
//     characterStyles: [],
//   },
// ];

// console.log(createTableFrame(paragraphData, true)); // Uses the last occurrence of "Lesson_Table-body-txt"
// console.log(createTableFrame(paragraphData, false)); // Uses all occurrences of "Lesson_Table-body-txt"

// function createDynamicTable(paragraphData, numInstances, config) {
//   const styleToTagMapping = {
//     "table header": "th",
//     "Generic_sidebar_Table-body-txt": "td",
//   };

//   const replacements = {
//     SINGLE_RIGHT_QUOTE: "’",
//     DOUBLE_LEFT_QUOTE: "“",
//     DOUBLE_RIGHT_QUOTE: "”",
//     EN_DASH: "–",
//     FORCED_LINE_BREAK: "",
//     NONBREAKING_SPACE: "&nbsp;",
//   };

//   function applyCharacterStyles(content, characterStyles) {
//     if (!characterStyles || characterStyles.length === 0) {
//       return content;
//     }

//     let styledContent = "";
//     let currentStyle = characterStyles[0].style;
//     let currentClassName =
//       currentStyle === "i" ? "italic" : currentStyle === "b" ? "bold" : "";
//     let currentSpan = currentClassName
//       ? `<span class="${currentClassName}">`
//       : "";

//     for (let i = 0; i < characterStyles.length; i++) {
//       let { character, style } = characterStyles[i];
//       let className = style === "i" ? "italic" : style === "b" ? "bold" : "";

//       // Replace constants with their respective characters
//       character = replacements[character] || character;

//       if (style !== currentStyle) {
//         if (currentClassName) {
//           currentSpan += `</span>`;
//         }
//         styledContent += currentSpan;
//         currentStyle = style;
//         currentClassName = className;
//         currentSpan = currentClassName
//           ? `<span class="${currentClassName}">${character}`
//           : character;
//       } else {
//         currentSpan += character;
//       }
//     }
//     if (currentClassName) {
//       currentSpan += `</span>`;
//     }
//     styledContent += currentSpan;

//     return styledContent;
//   }

//   let headers = [];
//   let bodyTexts = [];
//   let remainingBodyTexts = [];
//   let headerCount = 0;

//   for (let paragraph of paragraphData) {
//     let tagName = styleToTagMapping[paragraph.styleName];
//     let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
//     content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

//     content = applyCharacterStyles(content, paragraph.characterStyles);

//     if (tagName === "th") {
//       headers.push(content);
//       headerCount++;
//     } else if (tagName === "td") {
//       if (bodyTexts.length < numInstances) {
//         bodyTexts.push(content);
//       } else {
//         remainingBodyTexts.push(content);
//       }
//     }
//   }

//   // Creating the first table with distribution logic
//   let firstTableRows = [];
//   let bodyTextIndex = 0;

//   for (let i = 0; i < config.paragraphConfig.length; i++) {
//     let rowContent = [];
//     for (let j = 0; j < config.paragraphConfig[i]; j++) {
//       if (bodyTextIndex < bodyTexts.length) {
//         rowContent.push(`<p>${bodyTexts[bodyTextIndex]}</p>`);
//         bodyTextIndex++;
//       }
//     }
//     firstTableRows.push(`<tr><td>${rowContent.join("")}</td></tr>`);
//   }

//   // Adding remaining body texts to the second table
//   let secondTableRows = [];
//   for (let i = bodyTextIndex; i < bodyTexts.length; i++) {
//     secondTableRows.push(`<tr><td><p>${bodyTexts[i]}</p></td></tr>`);
//   }

//   for (let i = 0; i < remainingBodyTexts.length; i++) {
//     secondTableRows.push(`<tr><td><p>${remainingBodyTexts[i]}</p></td></tr>`);
//   }

//   // Handling additional headers and their respective body texts
//   let additionalHeaderIndex = 1;
//   while (headerCount > 2 && additionalHeaderIndex < headers.length) {
//     secondTableRows.unshift(
//       `<tr><th>${headers[additionalHeaderIndex]}</th></tr>`
//     );
//     additionalHeaderIndex++;
//   }

//   const firstTableHTML = `
//       <table>
//         <thead>
//           <tr><th>${headers[0]}</th></tr>
//         </thead>
//         <tbody>
//           ${firstTableRows.join("")}
//         </tbody>
//       </table>
//     `;

//   const secondTableHTML = `
//       <table>
//         <thead>
//           ${
//             additionalHeaderIndex < headers.length
//               ? `<tr><th>${headers[additionalHeaderIndex]}</th></tr>`
//               : ""
//           }
//         </thead>
//         <tbody>
//           ${secondTableRows.join("")}
//         </tbody>
//       </table>
//     `;

//   return firstTableHTML + secondTableHTML;
// }

function singleColumnTableConfig(paragraphData, numInstances, config) {
  const styleToTagMapping = {
    "table header": "th",
    "Generic_sidebar_Table-body-txt": "td",
  };

  const replacements = {
    SINGLE_RIGHT_QUOTE: "’",
    DOUBLE_LEFT_QUOTE: "“",
    DOUBLE_RIGHT_QUOTE: "”",
    EN_DASH: "–",
    FORCED_LINE_BREAK: "",
    NONBREAKING_SPACE: "&nbsp;",
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

var paragraphData = [
  {
    styleName: "Generic_sidebar_Body-txt",
    content: "\r",
    parentPageName: "7",
    characterStyles: [{ character: "", style: "" }],
  },
  {
    styleName: "table_label",
    content: "Sample Multiple Sources \nOrganizer",
    parentPageName: "7",
    characterStyles: [
      { character: "S", style: "b" },
      { character: "a", style: "b" },
      { character: "m", style: "b" },
      { character: "p", style: "b" },
      { character: "l", style: "b" },
      { character: "e", style: "b" },
      { character: " ", style: "b" },
      { character: "M", style: "b" },
      { character: "u", style: "b" },
      { character: "l", style: "b" },
      { character: "t", style: "b" },
      { character: "i", style: "b" },
      { character: "p", style: "b" },
      { character: "l", style: "b" },
      { character: "e", style: "b" },
      { character: " ", style: "b" },
      { character: "S", style: "b" },
      { character: "o", style: "b" },
      { character: "u", style: "b" },
      { character: "r", style: "b" },
      { character: "c", style: "b" },
      { character: "e", style: "b" },
      { character: "s", style: "b" },
      { character: " ", style: "b" },
      { character: "FORCED_LINE_BREAK", style: "b" },
      { character: "O", style: "b" },
      { character: "r", style: "b" },
      { character: "g", style: "b" },
      { character: "a", style: "b" },
      { character: "n", style: "b" },
      { character: "i", style: "b" },
      { character: "z", style: "b" },
      { character: "e", style: "b" },
      { character: "r", style: "b" },
    ],
  },
  {
    styleName: "table header",
    content: "Text Evidence",
    parentPageName: "7",
    characterStyles: [
      { character: "T", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "x", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "E", style: "Character Style 1" },
      { character: "v", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
    ],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "�The more mass an object has, the more inertia it has.� (p. 15)\r",
    parentPageName: "7",
    characterStyles: [
      { character: "DOUBLE_LEFT_QUOTE", style: "Character Style 1" },
      { character: "T", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "j", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: ",", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: "DOUBLE_RIGHT_QUOTE", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "(", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "1", style: "Character Style 1" },
      { character: "5", style: "Character Style 1" },
      { character: ")", style: "Character Style 1" },
    ],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "Hands-On Experiment in which students test a coin�s inertia (p. 15)",
    parentPageName: "7",
    characterStyles: [
      { character: "H", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "-", style: "Character Style 1" },
      { character: "O", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "E", style: "Character Style 1" },
      { character: "x", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "w", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "SINGLE_RIGHT_QUOTE", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "(", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "1", style: "Character Style 1" },
      { character: "5", style: "Character Style 1" },
      { character: ")", style: "Character Style 1" },
    ],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "�According to the equation, if the mass increases and you want the cart to accelerate the same as before .�.�.� �The force has to increase, which means you have to push harder.� (p. 19)\r",
    parentPageName: "7",
    characterStyles: [
      { character: "DOUBLE_LEFT_QUOTE", style: "Character Style 1" },
      { character: "A", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "q", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: ",", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "y", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "w", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: "NONBREAKING_SPACE", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: "NONBREAKING_SPACE", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: "DOUBLE_RIGHT_QUOTE", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "DOUBLE_LEFT_QUOTE", style: "Character Style 1" },
      { character: "T", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: ",", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "w", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "y", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "v", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: "DOUBLE_RIGHT_QUOTE", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "(", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "1", style: "Character Style 1" },
      { character: "9", style: "Character Style 1" },
      { character: ")", style: "Character Style 1" },
    ],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "Solve This math feature challenges readers to use Newton�s math equation of force = mass x acceleration to figure out how much force is needed to move a filled shopping cart. (p. 19)",
    parentPageName: "7",
    characterStyles: [
      { character: "S", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "v", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "T", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "N", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "w", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "SINGLE_RIGHT_QUOTE", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "q", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "=", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "x", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "w", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "v", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "(", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "1", style: "Character Style 1" },
      { character: "9", style: "Character Style 1" },
      { character: ")", style: "Character Style 1" },
    ],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "�When one object exerts a force on another object, the second object exerts a force of equal strength on the first object, but in the opposite direction.� (p. 24)\r",
    parentPageName: "7",
    characterStyles: [
      { character: "DOUBLE_LEFT_QUOTE", style: "Character Style 1" },
      { character: "W", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "j", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "x", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "j", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: ",", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "j", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "x", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "q", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "j", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: ",", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: "DOUBLE_RIGHT_QUOTE", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "(", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "2", style: "Character Style 1" },
      { character: "4", style: "Character Style 1" },
      { character: ")", style: "Character Style 1" },
    ],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "Picture of girl letting air out of a balloon illustrates the concept that forces act in pairs, and that the forces are equal in strength but opposite in direction. (p. 24)",
    parentPageName: "7",
    characterStyles: [
      { character: "P", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: ",", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "q", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "b", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "(", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "2", style: "Character Style 1" },
      { character: "4", style: "Character Style 1" },
      { character: ")", style: "Character Style 1" },
    ],
  },
  {
    styleName: "table arrows",
    content: "t",
    parentPageName: "7",
    characterStyles: [{ character: "t", style: "Character Style 1" }],
  },
  {
    styleName: "table header",
    content: "Conclusion",
    parentPageName: "7",
    characterStyles: [
      { character: "C", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
    ],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "Seeing multiple sources presenting the same information supports and deepens readers� understanding of.",
    parentPageName: "7",
    characterStyles: [
      { character: "S", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "l", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "c", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "h", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "m", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "p", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "SINGLE_RIGHT_QUOTE", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "u", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "e", style: "Character Style 1" },
      { character: "r", style: "Character Style 1" },
      { character: "s", style: "Character Style 1" },
      { character: "t", style: "Character Style 1" },
      { character: "a", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "d", style: "Character Style 1" },
      { character: "i", style: "Character Style 1" },
      { character: "n", style: "Character Style 1" },
      { character: "g", style: "Character Style 1" },
      { character: " ", style: "Character Style 1" },
      { character: "o", style: "Character Style 1" },
      { character: "f", style: "Character Style 1" },
      { character: ".", style: "Character Style 1" },
    ],
  },
];

const tableHTML = singleColumnTableConfig(paragraphData, 6, {
  numberOfTds: 3,
  paragraphConfig: [2, 2, 2],
});
console.log(tableHTML);
