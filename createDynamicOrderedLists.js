const page_1_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/ELA_Strategies_1/ELA_Strategies_1_1.js");
const page_1_aside_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Related_resources_1/Related_resources_1_1.js");
const panel_2_page_1_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_2/Lesson_2_1.js");
const panel_2_page_3_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_4/Lesson_4_1.js");
const panel_2_page_4_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_5/Lesson_5_1.js");

// function createDynamicOrderedLists(paragraphData, wrapped) {
//   const styleToTagMapping = {
//     "Related_resources_B-hd": "ul",
//     Related_resources_Bullets: "li",
//     "ELA_Strategies_B-hd": "ul",
//     ELA_Strategies_Bullets: "li",
//     "Lesson_B-hd": "ul",
//     "Generic_sidebar_Body-txt": "li",
//     "GO-B-hd": "ul",
//     "Chart-body-txt-bullets": "li",
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

//   let currentOl = null;
//   let currentUl = null;
//   let listHTML = "";

//   for (let paragraph of paragraphData) {
//     let tagName = styleToTagMapping[paragraph.styleName];
//     let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
//     content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

//     if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
//       content = applyCharacterStyles(content, paragraph.characterStyles);
//     }

//     if (tagName === "ol" || tagName === "ul") {
//       if (currentOl) {
//         listHTML += "</ol>";
//         currentOl = null;
//       }
//       if (currentUl) {
//         listHTML += "</ul>";
//         currentUl = null;
//       }
//       listHTML += `<h4>${content}</h4><${tagName}>`;
//       if (tagName === "ol") {
//         currentOl = true;
//       } else {
//         currentUl = true;
//       }
//     } else if (tagName === "li" && (currentOl || currentUl)) {
//       listHTML += `<li>${content}</li>`;
//     }
//   }

//   if (currentOl) {
//     listHTML += "</ol>";
//   }
//   if (currentUl) {
//     listHTML += "</ul>";
//   }
//   if (wrapped) {
//     return `<table border="1"><td> ${listHTML}</td></table>`;
//   }

//   return listHTML;
// }
function createDynamicOrderedLists(paragraphData, wrapped) {
  const styleToTagMapping = {
    "Related_resources_B-hd": "ul",
    Related_resources_Bullets: "li",
    "ELA_Strategies_B-hd": "ul",
    ELA_Strategies_Bullets: "li",
    "Lesson_B-hd": "ul",
    "Generic_sidebar_Body-txt": "li",
    "GO-B-hd": "ul",
    "Chart-body-txt-bullets": "li",
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

  let listHTML = "";
  let currentUl = false;

  for (let paragraph of paragraphData) {
    let tagName = styleToTagMapping[paragraph.styleName];
    let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
    content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

    if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
      content = applyCharacterStyles(content, paragraph.characterStyles);
    }

    if (tagName === "ul") {
      if (currentUl) {
        listHTML += "</ul>";
      }
      listHTML += `<h4>${content}</h4><ul>`;
      currentUl = true;
    } else if (tagName === "li" && currentUl) {
      listHTML += `<li>${content}</li>`;
    }
  }

  if (currentUl) {
    listHTML += "</ul>";
  }

  // Filter out empty <ul> elements
  listHTML = listHTML.replace(/<h4>[\s\S]*?<\/h4><ul><\/ul>/g, "");

  if (wrapped) {
    return `<table border="1"><td>${listHTML}</td></table>`;
  }

  return listHTML;
}

const page_1_ELA_Strategies = createDynamicOrderedLists(
  page_1_section_data,
  false
);
const page_1_Related_resources = createDynamicOrderedLists(
  page_1_aside_data,
  false
);
const panel_2_page_1_sample_chart = createDynamicOrderedLists(
  panel_2_page_1_section_data,
  true
);
const panel_2_page_3_sample_summary = createDynamicOrderedLists(
  panel_2_page_3_section_data,
  true
);

const panel_2_page_4_sample_summary = createDynamicOrderedLists(
  panel_2_page_4_section_data,
  true
);

module.exports = {
  page_1_ELA_Strategies,
  page_1_Related_resources,
  panel_2_page_1_sample_chart,
  panel_2_page_3_sample_summary,
  panel_2_page_4_sample_summary,
};
