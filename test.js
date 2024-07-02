const path = require("path");
const { packages_data } = require("./packagesData.js");

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

// Update tableTags for each unit from 1 to 10
for (let i = 63055; i <= 63066; i++) {
  const key = `Y${i}`;
  if (!packages_data[key]) {
    packages_data[key] = {};
  }
  if (!packages_data[key].tableTags) {
    packages_data[key].tableTags = {};
  }
  for (let unit = 1; unit <= 10; unit++) {
    packages_data[key].tableTags[
      `unit ${unit}`
    ] = `processed_data/Y${i}_TG_G6_U${unit}.js`;
  }
}

// Ensure packages_data is being used correctly
const Y63055_TG_G6_U1_tables = require(path.join(
  __dirname,
  packages_data.Y63055.tableTags["unit 1"]
));
const searchString = packages_data.Y63055.panel_4_page_1_sidebar_a;
const table = findTableInData(Y63055_TG_G6_U1_tables, searchString);

console.log(table);

module.exports = {
  packages_data,
};
