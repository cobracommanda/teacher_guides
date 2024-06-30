const fs = require("fs").promises; // Use promises-based fs module
const path = require("path");

// Function to load JSON file and search for a specific string in the tables
const findTableInJson = async (xcode, grade, searchString) => {
  try {
    const jsonFilePath = `./reformatted_${xcode}_TG_G${grade}_U1_processed_tables.json`;
    const data = await fs.readFile(jsonFilePath, "utf-8");

    const jsonData = JSON.parse(data);
    const tables = jsonData.tables;

    const foundTable = tables.find((table) => table.includes(searchString));

    if (foundTable) {
      console.log("Table found:");
      console.log(foundTable);
      return foundTable;
    } else {
      console.log("Table not found.");
      return null;
    }
  } catch (err) {
    console.error(`Error reading JSON file: ${err}`);
    return null;
  }
};

// Example usage
const xcode = "Y63055";
const grade = 6;
const searchString =
  "Aquatic environments differ from one another based on the";

findTableInJson(xcode, grade, searchString)
  .then((result) => {
    const table = result;
    console.log(` I got the code:${table}`);
  })
  .catch((err) => {
    console.error(err);
  });
