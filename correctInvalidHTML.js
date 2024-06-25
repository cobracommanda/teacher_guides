const fs = require("fs");
const path = require("path");

function correctInvalidHTML(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Regular expression to find invalid tags like <<p
    const correctedData = data.replace(/<<p/g, "<p");

    fs.writeFile(filePath, correctedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log(`File corrected successfully: ${filePath}`);
    });
  });
}

function findFiles(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.log("No directory found:", startPath);
    return;
  }

  const files = fs.readdirSync(startPath);
  for (const file of files) {
    const filePath = path.join(startPath, file);
    const stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {
      findFiles(filePath, filter, callback); // Recurse into subdirectories
    } else if (filePath.endsWith(filter)) {
      callback(filePath);
    }
  }
}

// // Usage
// const outputDir = path.join(__dirname, "output"); // Replace with the path to your output directory
// findFiles(outputDir, "index.html", correctInvalidHTML);
module.exports = {
  correctInvalidHTML,
  findFiles,
};
