function createDynamicTable(paragraphData, num_of_rows) {
  const styleToTagMapping = {
    "table header": "th",
    "Generic_sidebar_Table-body-txt": "td",
  };

  const replacements = {
    // Define any character replacements here
    // Example: '\u2026': '&hellip;'
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

  return firstTableHTML + secondTableHTML;
}

// Example call to the function
const paragraphData = [
  // Example data structure
  { styleName: "table header", content: "Text Evidence", characterStyles: [] },
  { styleName: "table header", content: "Conclusion", characterStyles: [] },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content: "The more mass an object has, the more inertia it has. (p. 15)",
    characterStyles: [],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "According to the equation, if the mass increases and you want the cart to accelerate the same as before. . . . The force has to increase, which means you have to push harder. (p. 19)",
    characterStyles: [],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "Solve This math feature challenges readers to use Newton’s math equation of force = mass x acceleration to figure out how much force is needed to move a filled shopping cart. (p. 19)",
    characterStyles: [],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "When one object exerts a force on another object, the second object exerts a force of equal strength on the first object, but in the opposite direction. (p. 24)",
    characterStyles: [],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "Picture of girl letting air out of a balloon illustrates the concept that forces act in pairs, and that the forces are equal in strength but opposite in direction. (p. 24)",
    characterStyles: [],
  },
  {
    styleName: "Generic_sidebar_Table-body-txt",
    content:
      "Seeing multiple sources presenting the same information supports and deepens readers’ understanding of.",
    characterStyles: [],
  },
];

const tableHTML = createDynamicTable(paragraphData, 2);
console.log(tableHTML);
