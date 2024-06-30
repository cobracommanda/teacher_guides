// function createIntelligentTable(configs) {
//   let allTablesHTML = "";

//   configs.forEach((config) => {
//     if (Array.isArray(config)) {
//       // Handle generic HTML elements like paragraphs, lists, and headings
//       const tag = config[0];
//       switch (tag) {
//         case "p":
//           allTablesHTML += `<p style="${config[2] || ""}">${config[1]}</p>`;
//           break;
//         case "ul":
//         case "ol":
//           allTablesHTML += `<${tag} style="${config[2] || ""}">`;
//           config.slice(1, config.length - 1).forEach((item) => {
//             allTablesHTML += `<li style="${
//               config[config.length - 1] || ""
//             }">${item}</li>`;
//           });
//           allTablesHTML += `</${tag}>`;
//           break;
//         default:
//           // Handle headings (h1, h2, h3, etc.)
//           if (tag.startsWith("h") && tag.length === 2) {
//             let level = parseInt(tag.substring(1));
//             if (!isNaN(level) && level >= 1 && level <= 6) {
//               allTablesHTML += `<${tag} style="${config[2] || ""}">${
//                 config[1]
//               }</${tag}>`;
//             }
//           }
//           break;
//       }
//     } else {
//       // Process table configurations
//       const { headers, rows } = config;
//       let tableHTML = "<table>";

//       // Generate headers
//       if (headers) {
//         tableHTML += "<thead><tr>";
//         headers.forEach((header) => {
//           tableHTML += `<th>${header}</th>`;
//         });
//         tableHTML += "</tr></thead>";
//       }

//       // Generate body with intelligent rowspan handling
//       tableHTML += "<tbody>";
//       for (let i = 0; i < rows.length; i++) {
//         tableHTML += "<tr>";
//         for (let j = 0; j < rows[i].length; j++) {
//           if (rows[i][j] !== undefined) {
//             let rowspan = 1;
//             // Calculate rowspan
//             for (
//               let k = i + 1;
//               k < rows.length && rows[k][j] === undefined;
//               k++
//             ) {
//               rowspan++;
//               rows[k][j] = null; // mark as processed
//             }
//             tableHTML += `<td${rowspan > 1 ? ` rowspan="${rowspan}"` : ""}>${
//               rows[i][j] || ""
//             }</td>`;
//           }
//         }
//         tableHTML += "</tr>";
//       }
//       tableHTML += "</tbody>";
//       tableHTML += "</table>";

//       allTablesHTML += tableHTML;
//     }
//   });

//   return allTablesHTML;
// }

// // Example configuration including paragraphs, unordered lists, ordered lists, and headings with styles
// const tableConfigs = [
//   [
//     "p",
//     "This is a full-width paragraph that precedes the tables.",
//     "margin: 0;",
//   ],
//   ["h1", "Main Heading for the Section", "margin-bottom: 0;"],
//   {
//     headers: ["City", "Population", "City", "Population"],
//     rows: [
//       ["New York", "8.4M"],
//       [undefined, "4M"],
//       ["Chicago", "2.7M"],
//     ],
//   },
//   [
//     "ul",
//     "List Item 1",
//     "List Item 2",
//     "List Item 3",
//     "list-style: none; margin-left: 0; padding-left: 0;",
//   ],
//   [
//     "ol",
//     "Ordered Item 1",
//     "Ordered Item 2",
//     "Ordered Item 3",
//     "list-style-type: none; margin-left: 0; padding-left: 0;",
//   ],
// ];

// const generatedTables = createIntelligentTable(tableConfigs);
// console.log(generatedTables);

// function createIntelligentTable(configs) {
//   let allTablesHTML = "";

//   configs.forEach((config) => {
//     if (Array.isArray(config)) {
//       // Handle generic HTML elements like paragraphs, lists, and headings
//       const tag = config[0];
//       switch (tag) {
//         case "p":
//           allTablesHTML += `<p style="${config[2] || ""}">${config[1]}</p>`;
//           break;
//         case "ul":
//         case "ol":
//           allTablesHTML += `<${tag} style="${config[2] || ""}">`;
//           config.slice(1, config.length - 1).forEach((item) => {
//             allTablesHTML += `<li style="${
//               config[config.length - 1] || ""
//             }">${item}</li>`;
//           });
//           allTablesHTML += `</${tag}>`;
//           break;
//         default:
//           // Handle headings (h1, h2, h3, etc.)
//           if (tag.startsWith("h") && tag.length === 2) {
//             let level = parseInt(tag.substring(1));
//             if (!isNaN(level) && level >= 1 && level <= 6) {
//               allTablesHTML += `<${tag} style="${config[2] || ""}">${
//                 config[1]
//               }</${tag}>`;
//             }
//           }
//           break;
//       }
//     } else {
//       // Process table configurations
//       const { headers, rows } = config;
//       let tableHTML = "<table>";

//       // Generate headers
//       if (headers) {
//         tableHTML += "<thead><tr>";
//         headers.forEach((header) => {
//           tableHTML += `<th>${header}</th>`;
//         });
//         tableHTML += "</tr></thead>";
//       }

//       // Generate body with intelligent rowspan handling
//       tableHTML += "<tbody>";
//       for (let i = 0; i < rows.length; i++) {
//         tableHTML += "<tr>";
//         for (let j = 0; j < rows[i].length; j++) {
//           if (rows[i][j] !== undefined) {
//             let rowspan = 1;
//             // Calculate rowspan
//             for (
//               let k = i + 1;
//               k < rows.length && rows[k][j] === undefined;
//               k++
//             ) {
//               rowspan++;
//               rows[k][j] = null; // mark as processed
//             }
//             tableHTML += `<td${rowspan > 1 ? ` rowspan="${rowspan}"` : ""}>${
//               rows[i][j] || ""
//             }</td>`;
//           }
//         }
//         tableHTML += "</tr>";
//       }
//       tableHTML += "</tbody>";
//       tableHTML += "</table>";

//       allTablesHTML += tableHTML;
//     }
//   });

//   return allTablesHTML;
// }

// // Example configuration including paragraphs, unordered lists, ordered lists, and headings with styles
// const tableConfigs = [
//   [
//     "p",
//     "This is a full-width paragraph that precedes the tables.",
//     "margin: 0;",
//   ],
//   ["h1", "Main Heading for the Section", "margin-bottom: 0;"],
//   {
//     headers: ["City", "Population", "City", "Population"],
//     rows: [
//       ["New York", "8.4M"],
//       [undefined, "4M"],
//       ["Chicago", "2.7M"],
//     ],
//   },
//   [
//     "ul",
//     "List Item 1",
//     "List Item 2",
//     "List Item 3",
//     "list-style: none; margin-left: 0; padding-left: 0;",
//   ],
//   [
//     "ol",
//     "Ordered Item 1",
//     "Ordered Item 2",
//     "Ordered Item 3",
//     "list-style-type: none; margin-left: 0; padding-left: 0;",
//   ],
// ];

// const generatedTables = createIntelligentTable(tableConfigs);
// console.log(generatedTables);

// const replacements = {
//   "&": "&amp;",
//   "<": "&lt;",
//   ">": "&gt;",
//   '"': "&quot;",
//   SINGLE_RIGHT_QUOTE: "’",
//   SINGLE_LEFT_QUOTE: "‘",
//   DOUBLE_LEFT_QUOTE: "“",
//   DOUBLE_RIGHT_QUOTE: "”",
//   EN_DASH: "–",
//   EM_DASH: "—",
//   FORCED_LINE_BREAK: "<br>",
//   NONBREAKING_SPACE: "&nbsp;",
//   ELLIPSIS: "…",
// };

// function escapeHTML(content) {
//   return content
//     .split("")
//     .map((char) => {
//       return replacements[char] || char;
//     })
//     .join("");
// }

// function applyCharacterStyles(content, characterStyles) {
//   if (!characterStyles || characterStyles.length === 0) {
//     return escapeHTML(content);
//   }

//   let styledContent = "";
//   let currentStyle = "";
//   let currentClassName = "";
//   let currentSpan = "";

//   characterStyles.forEach(({ character, style }) => {
//     let className = style === "i" ? "italic" : style === "b" ? "bold" : "";
//     character = replacements[character] || escapeHTML(character);

//     if (style !== currentStyle) {
//       if (currentSpan) {
//         styledContent += `</span>`;
//       }
//       currentStyle = style;
//       currentClassName = className;
//       currentSpan = currentClassName
//         ? `<span class="${currentClassName}">${character}`
//         : character;
//     } else {
//       currentSpan += character;
//     }
//   });

//   if (currentSpan) {
//     styledContent += currentSpan + `</span>`;
//   }

//   return styledContent;
// }

// const styleToTagMapping = {
//   "Generic_sidebar_A-hd": "h3",
//   "Generic_sidebar_Body-txt": "p",
//   "Generic_sidebar_C-hd": "p",
// };

// function generateContent(data) {
//   if (data.type === "table") {
//     // Table generation logic
//     const headers = `<tr>${data.headers
//       .map((header) => `<th>${escapeHTML(header)}</th>`)
//       .join("")}</tr>`;
//     const body = data.rows
//       .map((row) => {
//         return `<tr>${row
//           .map(
//             (cell) =>
//               `<td>${applyCharacterStyles(
//                 cell.content,
//                 cell.characterStyles
//               )}</td>`
//           )
//           .join("")}</tr>`;
//       })
//       .join("");
//     return `<table ${data.attributes}><thead>${headers}</thead><tbody>${body}</tbody></table>`;
//   } else {
//     // Paragraph data logic
//     return data
//       .map((paragraph) => {
//         const htmlTag = styleToTagMapping[paragraph.styleName] || "div"; // Default to div if no mapping found
//         return `<${htmlTag}>${applyCharacterStyles(
//           paragraph.content,
//           paragraph.characterStyles
//         )}</${htmlTag}>`;
//       })
//       .join("\n");
//   }
// }

// // Example usage for both table and paragraph data
// const tableConfig = {
//   type: "table",
//   attributes: 'class="my-table" style="width: 100%;"',
//   headers: ["City", "Population", "Remarks"],
//   rows: [
//     [
//       {
//         content: "New York",
//         characterStyles: [
//           { character: "N", style: "b" },
//           { character: "e", style: "i" },
//         ],
//       },
//       { content: "8.4M", characterStyles: [{ character: "8", style: "b" }] },
//       {
//         content: "Largest city",
//         characterStyles: [{ character: "L", style: "i" }],
//       },
//     ],
//     // More rows as needed
//   ],
// };

// const paragraphData = [
//   {
//     styleName: "Generic_sidebar_A-hd",
//     content: "Scaffolded Preview for ELs and Struggling Readers",
//     characterStyles: [
//       { character: "S", style: "b" },
//       // More characters and styles as needed
//     ],
//   },
//   // More paragraphs as needed
// ];

// console.log(generateContent(tableConfig));
// console.log(generateContent(paragraphData));

const replacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
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

function escapeHTML(content) {
  if (content == null) {
    return "";
  }
  return content
    .split("")
    .map((char) => replacements[char] || char)
    .join("");
}

function applyCharacterStyles(content, characterStyles) {
  if (!characterStyles || characterStyles.length === 0) {
    return escapeHTML(content);
  }

  let styledContent = "";
  let currentStyle = "";
  let currentClassName = "";
  let currentSpan = "";

  characterStyles.forEach(({ character, style }) => {
    let className = style === "i" ? "italic" : style === "b" ? "bold" : "";
    character = replacements[character] || escapeHTML(character);

    if (style !== currentStyle) {
      if (currentSpan) {
        styledContent += `</span>`;
      }
      currentStyle = style;
      currentClassName = className;
      currentSpan = currentClassName
        ? `<span class="${currentClassName}">${character}`
        : character;
    } else {
      currentSpan += character;
    }
  });

  if (currentSpan) {
    styledContent += currentSpan + `</span>`;
  }

  return styledContent;
}

const styleToTagMapping = {
  "Generic_sidebar_A-hd": "h3",
  "Generic_sidebar_Body-txt": "p",
  "Generic_sidebar_C-hd": "p",
};

function generateContent(data) {
  if (data.type === "table") {
    let htmlOutput = `<table ${data.attributes}><thead><tr>`;
    data.headers.forEach(
      (header) => (htmlOutput += `<th>${escapeHTML(header)}</th>`)
    );
    htmlOutput += "</tr></thead><tbody>";

    for (let i = 0; i < data.rows.length; i++) {
      htmlOutput += "<tr>";
      for (let j = 0; j < data.rows[i].length; j++) {
        let cell = data.rows[i][j];
        if (cell !== undefined) {
          let rowspan = 1;
          for (
            let k = i + 1;
            k < data.rows.length && data.rows[k][j] === undefined;
            k++
          ) {
            rowspan++;
            data.rows[k][j] = null; // Prevent processing this cell again
          }
          htmlOutput += `<td${
            rowspan > 1 ? ` rowspan="${rowspan}"` : ""
          }>${applyCharacterStyles(cell, data.characterStyles || [])}</td>`;
        }
      }
      htmlOutput += "</tr>";
    }
    htmlOutput += "</tbody></table>";
    return htmlOutput;
  } else {
    return data
      .map((paragraph) => {
        const htmlTag = styleToTagMapping[paragraph.styleName] || "div";
        return `<${htmlTag}>${applyCharacterStyles(
          paragraph.content,
          paragraph.characterStyles
        )}</${htmlTag}>`;
      })
      .join("\n");
  }
}

// Example usage for both table and paragraph data
const tableConfig = {
  type: "table",
  attributes: 'class="my-table" style="width: 50%;"',
  headers: ["City", "Population", "Remarks"],
  rows: [
    ["New York", "8.4M", "Remarks"],
    ["Los Angeles", "4M", "City"],
  ],
};

const paragraphData = [
  {
    styleName: "Generic_sidebar_A-hd",
    content: "Scaffolded Preview for ELs and Struggling Readers\r",
    parentPageName: "2",
    characterStyles: [
      { character: "S", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "f", style: "[None]" },
      { character: "f", style: "[None]" },
      { character: "o", style: "[None]" },
      { character: "l", style: "[None]" },
      { character: "d", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "d", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "P", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "v", style: "[None]" },
      { character: "i", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "w", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "f", style: "[None]" },
      { character: "o", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "E", style: "[None]" },
      { character: "L", style: "[None]" },
      { character: "s", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "n", style: "[None]" },
      { character: "d", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "S", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "u", style: "[None]" },
      { character: "g", style: "[None]" },
      { character: "g", style: "[None]" },
      { character: "l", style: "[None]" },
      { character: "i", style: "[None]" },
      { character: "n", style: "[None]" },
      { character: "g", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "R", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "d", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "s", style: "[None]" },
    ],
  },
  {
    styleName: "Generic_sidebar_Body-txt",
    content:
      "Support students’ access to the text by orally introducing academic vocabulary, language structures, and concepts.\r",
    parentPageName: "2",
    characterStyles: [
      { character: "S", style: "[None]" },
      { character: "u", style: "[None]" },
      { character: "p", style: "[None]" },
      { character: "p", style: "[None]" },
      { character: "o", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "s", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "u", style: "[None]" },
      { character: "d", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "n", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "s", style: "[None]" },
      { character: "SINGLE_RIGHT_QUOTE", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "s", style: "[None]" },
      { character: "s", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "o", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "h", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "x", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "b", style: "[None]" },
      { character: "y", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "o", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "l", style: "[None]" },
      { character: "l", style: "[None]" },
      { character: "y", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "i", style: "[None]" },
      { character: "n", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "o", style: "[None]" },
      { character: "d", style: "[None]" },
      { character: "u", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "i", style: "[None]" },
      { character: "n", style: "[None]" },
      { character: "g", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "d", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "m", style: "[None]" },
      { character: "i", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "v", style: "[None]" },
      { character: "o", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "b", style: "[None]" },
      { character: "u", style: "[None]" },
      { character: "l", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "y", style: "[None]" },
      { character: ",", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "l", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "n", style: "[None]" },
      { character: "g", style: "[None]" },
      { character: "u", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "g", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "s", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "u", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "u", style: "[None]" },
      { character: "r", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "s", style: "[None]" },
      { character: ",", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "a", style: "[None]" },
      { character: "n", style: "[None]" },
      { character: "d", style: "[None]" },
      { character: " ", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "o", style: "[None]" },
      { character: "n", style: "[None]" },
      { character: "c", style: "[None]" },
      { character: "e", style: "[None]" },
      { character: "p", style: "[None]" },
      { character: "t", style: "[None]" },
      { character: "s", style: "[None]" },
      { character: ".", style: "[None]" },
    ],
  },
  {
    styleName: "Generic_sidebar_C-hd",
    content:
      "Pages 2–3: This book is about the scientist Sir Isaac Newton and his laws of motion that explain how things move, including the planets. The math activity shows the time it takes for each planet to orbit the Sun. Which planet moves the slowest? Which moves the fastest?\r",
    parentPageName: "2",
    characterStyles: [
      { character: "P", style: "b" },
      { character: "a", style: "b" },
      { character: "g", style: "b" },
      { character: "e", style: "b" },
      { character: "s", style: "b" },
      { character: " ", style: "b" },
      { character: "2", style: "b" },
      { character: "EN_DASH", style: "b" },
      { character: "3", style: "b" },
      { character: ":", style: "b" },
      { character: " ", style: "b" },
      { character: "T", style: "i" },
      { character: "h", style: "i" },
      { character: "i", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "b", style: "i" },
      { character: "o", style: "i" },
      { character: "o", style: "i" },
      { character: "k", style: "i" },
      { character: " ", style: "i" },
      { character: "i", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "a", style: "i" },
      { character: "b", style: "i" },
      { character: "o", style: "i" },
      { character: "u", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "s", style: "i" },
      { character: "c", style: "i" },
      { character: "i", style: "i" },
      { character: "e", style: "i" },
      { character: "n", style: "i" },
      { character: "t", style: "i" },
      { character: "i", style: "i" },
      { character: "s", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "S", style: "i" },
      { character: "i", style: "i" },
      { character: "r", style: "i" },
      { character: " ", style: "i" },
      { character: "I", style: "i" },
      { character: "s", style: "i" },
      { character: "a", style: "i" },
      { character: "a", style: "i" },
      { character: "c", style: "i" },
      { character: " ", style: "i" },
      { character: "N", style: "i" },
      { character: "e", style: "i" },
      { character: "w", style: "i" },
      { character: "t", style: "i" },
      { character: "o", style: "i" },
      { character: "n", style: "i" },
      { character: " ", style: "i" },
      { character: "a", style: "i" },
      { character: "n", style: "i" },
      { character: "d", style: "i" },
      { character: " ", style: "i" },
      { character: "h", style: "i" },
      { character: "i", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "l", style: "i" },
      { character: "a", style: "i" },
      { character: "w", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "o", style: "i" },
      { character: "f", style: "i" },
      { character: " ", style: "i" },
      { character: "m", style: "i" },
      { character: "o", style: "i" },
      { character: "t", style: "i" },
      { character: "i", style: "i" },
      { character: "o", style: "i" },
      { character: "n", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "a", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "e", style: "i" },
      { character: "x", style: "i" },
      { character: "p", style: "i" },
      { character: "l", style: "i" },
      { character: "a", style: "i" },
      { character: "i", style: "i" },
      { character: "n", style: "i" },
      { character: " ", style: "i" },
      { character: "h", style: "i" },
      { character: "o", style: "i" },
      { character: "w", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "i", style: "i" },
      { character: "n", style: "i" },
      { character: "g", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "m", style: "i" },
      { character: "o", style: "i" },
      { character: "v", style: "i" },
      { character: "e", style: "i" },
      { character: ",", style: "i" },
      { character: " ", style: "i" },
      { character: "i", style: "i" },
      { character: "n", style: "i" },
      { character: "c", style: "i" },
      { character: "l", style: "i" },
      { character: "u", style: "i" },
      { character: "d", style: "i" },
      { character: "i", style: "i" },
      { character: "n", style: "i" },
      { character: "g", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "p", style: "i" },
      { character: "l", style: "i" },
      { character: "a", style: "i" },
      { character: "n", style: "i" },
      { character: "e", style: "i" },
      { character: "t", style: "i" },
      { character: "s", style: "i" },
      { character: ".", style: "i" },
      { character: " ", style: "i" },
      { character: "T", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "m", style: "i" },
      { character: "a", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: " ", style: "i" },
      { character: "a", style: "i" },
      { character: "c", style: "i" },
      { character: "t", style: "i" },
      { character: "i", style: "i" },
      { character: "v", style: "i" },
      { character: "i", style: "i" },
      { character: "t", style: "i" },
      { character: "y", style: "i" },
      { character: " ", style: "i" },
      { character: "s", style: "i" },
      { character: "h", style: "i" },
      { character: "o", style: "i" },
      { character: "w", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "i", style: "i" },
      { character: "m", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "i", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "a", style: "i" },
      { character: "k", style: "i" },
      { character: "e", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "f", style: "i" },
      { character: "o", style: "i" },
      { character: "r", style: "i" },
      { character: " ", style: "i" },
      { character: "e", style: "i" },
      { character: "a", style: "i" },
      { character: "c", style: "i" },
      { character: "h", style: "i" },
      { character: " ", style: "i" },
      { character: "p", style: "i" },
      { character: "l", style: "i" },
      { character: "a", style: "i" },
      { character: "n", style: "i" },
      { character: "e", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "o", style: "i" },
      { character: " ", style: "i" },
      { character: "o", style: "i" },
      { character: "r", style: "i" },
      { character: "b", style: "i" },
      { character: "i", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "S", style: "i" },
      { character: "u", style: "i" },
      { character: "n", style: "i" },
      { character: ".", style: "i" },
      { character: " ", style: "i" },
      { character: "W", style: "i" },
      { character: "h", style: "i" },
      { character: "i", style: "i" },
      { character: "c", style: "i" },
      { character: "h", style: "i" },
      { character: " ", style: "i" },
      { character: "p", style: "i" },
      { character: "l", style: "i" },
      { character: "a", style: "i" },
      { character: "n", style: "i" },
      { character: "e", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "m", style: "i" },
      { character: "o", style: "i" },
      { character: "v", style: "i" },
      { character: "e", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "s", style: "i" },
      { character: "l", style: "i" },
      { character: "o", style: "i" },
      { character: "w", style: "i" },
      { character: "e", style: "i" },
      { character: "s", style: "i" },
      { character: "t", style: "i" },
      { character: "?", style: "i" },
      { character: " ", style: "i" },
      { character: "W", style: "i" },
      { character: "h", style: "i" },
      { character: "i", style: "i" },
      { character: "c", style: "i" },
      { character: "h", style: "i" },
      { character: " ", style: "i" },
      { character: "m", style: "i" },
      { character: "o", style: "i" },
      { character: "v", style: "i" },
      { character: "e", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "f", style: "i" },
      { character: "a", style: "i" },
      { character: "s", style: "i" },
      { character: "t", style: "i" },
      { character: "e", style: "i" },
      { character: "s", style: "i" },
      { character: "t", style: "i" },
      { character: "?", style: "i" },
    ],
  },
  {
    styleName: "Generic_sidebar_C-hd",
    content:
      "Pages 6: Newton was the first to recognize that the force holding objects to Earth was the same force that held the moon and planets in their orbit. What is the force? Yes, it’s gravity!",
    parentPageName: "2",
    characterStyles: [
      { character: "P", style: "b" },
      { character: "a", style: "b" },
      { character: "g", style: "b" },
      { character: "e", style: "b" },
      { character: "s", style: "b" },
      { character: " ", style: "b" },
      { character: "6", style: "b" },
      { character: ":", style: "b" },
      { character: " ", style: "[None]" },
      { character: "N", style: "i" },
      { character: "e", style: "i" },
      { character: "w", style: "i" },
      { character: "t", style: "i" },
      { character: "o", style: "i" },
      { character: "n", style: "i" },
      { character: " ", style: "i" },
      { character: "w", style: "i" },
      { character: "a", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "f", style: "i" },
      { character: "i", style: "i" },
      { character: "r", style: "i" },
      { character: "s", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "o", style: "i" },
      { character: " ", style: "i" },
      { character: "r", style: "i" },
      { character: "e", style: "i" },
      { character: "c", style: "i" },
      { character: "o", style: "i" },
      { character: "g", style: "i" },
      { character: "n", style: "i" },
      { character: "i", style: "i" },
      { character: "z", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "a", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "f", style: "i" },
      { character: "o", style: "i" },
      { character: "r", style: "i" },
      { character: "c", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "h", style: "i" },
      { character: "o", style: "i" },
      { character: "l", style: "i" },
      { character: "d", style: "i" },
      { character: "i", style: "i" },
      { character: "n", style: "i" },
      { character: "g", style: "i" },
      { character: " ", style: "i" },
      { character: "o", style: "i" },
      { character: "b", style: "i" },
      { character: "j", style: "i" },
      { character: "e", style: "i" },
      { character: "c", style: "i" },
      { character: "t", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "o", style: "i" },
      { character: " ", style: "i" },
      { character: "E", style: "i" },
      { character: "a", style: "i" },
      { character: "r", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: " ", style: "i" },
      { character: "w", style: "i" },
      { character: "a", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "s", style: "i" },
      { character: "a", style: "i" },
      { character: "m", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "f", style: "i" },
      { character: "o", style: "i" },
      { character: "r", style: "i" },
      { character: "c", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "a", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: "l", style: "i" },
      { character: "d", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "m", style: "i" },
      { character: "o", style: "i" },
      { character: "o", style: "i" },
      { character: "n", style: "i" },
      { character: " ", style: "i" },
      { character: "a", style: "i" },
      { character: "n", style: "i" },
      { character: "d", style: "i" },
      { character: " ", style: "i" },
      { character: "p", style: "i" },
      { character: "l", style: "i" },
      { character: "a", style: "i" },
      { character: "n", style: "i" },
      { character: "e", style: "i" },
      { character: "t", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "i", style: "i" },
      { character: "n", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: "i", style: "i" },
      { character: "r", style: "i" },
      { character: " ", style: "i" },
      { character: "o", style: "i" },
      { character: "r", style: "i" },
      { character: "b", style: "i" },
      { character: "i", style: "i" },
      { character: "t", style: "i" },
      { character: ".", style: "i" },
      { character: " ", style: "i" },
      { character: "W", style: "i" },
      { character: "h", style: "i" },
      { character: "a", style: "i" },
      { character: "t", style: "i" },
      { character: " ", style: "i" },
      { character: "i", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "t", style: "i" },
      { character: "h", style: "i" },
      { character: "e", style: "i" },
      { character: " ", style: "i" },
      { character: "f", style: "i" },
      { character: "o", style: "i" },
      { character: "r", style: "i" },
      { character: "c", style: "i" },
      { character: "e", style: "i" },
      { character: "?", style: "i" },
      { character: " ", style: "i" },
      { character: "Y", style: "i" },
      { character: "e", style: "i" },
      { character: "s", style: "i" },
      { character: ",", style: "i" },
      { character: " ", style: "i" },
      { character: "i", style: "i" },
      { character: "t", style: "i" },
      { character: "SINGLE_RIGHT_QUOTE", style: "i" },
      { character: "s", style: "i" },
      { character: " ", style: "i" },
      { character: "g", style: "i" },
      { character: "r", style: "i" },
      { character: "a", style: "i" },
      { character: "v", style: "i" },
      { character: "i", style: "i" },
      { character: "t", style: "i" },
      { character: "y", style: "i" },
      { character: "!", style: "i" },
    ],
  },
];

console.log(generateContent(tableConfig));
console.log(generateContent(paragraphData));
