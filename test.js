const findTableInData = (data, searchString, frame = true) => {
  const foundTable = data.tables.find((table) => table.includes(searchString));

  if (!foundTable) {
    return null;
  }

  if (frame) {
    return foundTable;
  } else {
    // Extract inner text from the table
    const innerText = foundTable.replace(/<[^>]+>/g, "").trim();
    return `<table border="1"><td><p>${innerText}</p></td></table>`;
  }
};

// Example data object (replace this with your actual data object)
const data = {
  tables: [
    "<table><thead><tr><th>What Makes This Text Complex?</th></tr></thead><tbody><tr><td><p>Purpose and Levels <br>of Meaning </p><p><span>➌</span></p></td><td><p>The purpose of the text is to explore the adaptations that allow living organisms to survive. (pp. 3–6, 9)*</p></td></tr><tr><td><p>Structure </p><p><span>➌</span></p></td><td><p>The book includes descriptive, cause and effect, explanatory, and procedural text, as well as many sidebars, charts, and rich graphics. (p. 7)*</p></td></tr><tr><td><p>Language Conventionality <br>and Clarity </p><p><span>➋</span></p></td><td><p>• Text contains simple and complex sentence structures. </p><p>• Domain-specific, otherwise unfamiliar terms are supported by direct definitions, context clues, and descriptions. (p. 8)*</p></td></tr><tr><td><p>Knowledge Demands </p><p><span>➌</span></p></td><td><p>The text assumes some prior knowledge of Life Science and Physical Science concepts.</p></td></tr></tbody></table>",
    "<table><thead><tr><th>Aquatic environments differ from one another based on the amount of salinity, or salt in the water. Oceans, for example, have a great amount of salinity while rivers and lakes are freshwater bodies, so they have very little salinity.</th></tr></thead><tbody></tbody></table>",
    // Add other tables as needed
  ],
};

// Example usage
const searchString = "Aquatic environments ";
// const tableWithFrame = findTableInData(data, searchString, true);
const tableWithoutFrame = findTableInData(data, searchString, false);

console.log("Table with frame:", tableWithFrame);
console.log("Table without frame:", tableWithoutFrame);
