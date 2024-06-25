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

// function parseParagraphData(paragraphData) {
//   const styleToTagMapping = {
//     "Lesson_B-hd": "h4",
//     "Lesson_Body-txt": "p",
//     "Lesson_Tchr-tlk": "span",
//   };

//   const replacements = {
//     SINGLE_RIGHT_QUOTE: "’",
//     SINGLE_LEFT_QUOTE: "‘",
//     DOUBLE_LEFT_QUOTE: "“",
//     DOUBLE_RIGHT_QUOTE: "”",
//     EN_DASH: "–",
//     EM_DASH: "—",
//     FORCED_LINE_BREAK: "<br>",
//     NONBREAKING_SPACE: "&nbsp;",
//     ELLIPSIS: "…",
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

//   const filteredData = paragraphData
//     .map((paragraph) => {
//       const tagName = styleToTagMapping[paragraph.styleName];
//       let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
//       content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

//       if (tagName) {
//         if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
//           content = applyCharacterStyles(content, paragraph.characterStyles);
//         }
//         return `<${tagName} class="${paragraph.styleName}">${content}</${tagName}>`;
//       } else {
//         return content;
//       }
//     })
//     .filter(
//       (content) => content.trim() !== "" && !/[\x00-\x1F\x7F]/.test(content)
//     ); // Filter out empty or control character-only contents

//   return filteredData;
// }

// // const wrappedContents = parseParagraphData(paragraphData);
// // console.log(wrappedContents);

// // console.log(createTableFrame(paragraphData, true)); // Uses the last occurrence of "Lesson_Table-body-txt"
// // console.log(createTableFrame(paragraphData, false)); // Uses all occurrences of "Lesson_Table-body-txt"

// // const wrappedContents = createTableFrame(paragraphData);
// // console.log(wrappedContents);
// module.exports = {
//   createTableFrame,
// };

const cheerio = require("cheerio");

function createTableFrame(paragraphData, lastIndex = false) {
  const styleToTagMapping = {
    "Lesson_Table-body-txt": { tag: "td", className: "" },
  };

  const replacements = {
    SINGLE_RIGHT_QUOTE: "’",
    DOUBLE_LEFT_QUOTE: "“",
    DOUBLE_RIGHT_QUOTE: "”",
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

  let listHTML = "<table style='border-collapse: collapse;'><tr>";

  // If lastIndex is true, find the last occurrence of "Lesson_Table-body-txt"
  if (lastIndex) {
    let lastIdx = -1;
    for (let i = paragraphData.length - 1; i >= 0; i--) {
      if (paragraphData[i].styleName === "Lesson_Table-body-txt") {
        lastIdx = i;
        break;
      }
    }

    if (lastIdx !== -1) {
      let paragraph = paragraphData[lastIdx];
      let styleMapping = styleToTagMapping[paragraph.styleName];
      if (styleMapping) {
        let tagName = styleMapping.tag;
        let className = styleMapping.className;
        let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
        content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

        for (let [key, value] of Object.entries(replacements)) {
          content = content.replace(new RegExp(key, "g"), value);
        }

        if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
          content = applyCharacterStyles(content, paragraph.characterStyles);
        }

        listHTML += `<td class="${className}" style='border: 1px solid black;'><p>${content}</p></td>`;
      }
    }
  } else {
    for (let paragraph of paragraphData) {
      let styleMapping = styleToTagMapping[paragraph.styleName];
      if (!styleMapping) continue; // Skip if style is not mapped

      let tagName = styleMapping.tag;
      let className = styleMapping.className;
      let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
      content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

      for (let [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(key, "g"), value);
      }

      if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
        content = applyCharacterStyles(content, paragraph.characterStyles);
      }

      listHTML += `<td class="${className}" style='border: 1px solid black;'><p>${content}</p></td>`;
    }
  }

  listHTML += "</tr></table>";

  return listHTML;
}

module.exports = {
  createTableFrame,
};
