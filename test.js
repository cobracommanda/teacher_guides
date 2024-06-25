// const cheerio = require("cheerio");

// function splitHtmlStringIntoArray(htmlString) {
//   // Load the HTML string into cheerio
//   const $ = cheerio.load(htmlString);

//   // Find all paragraph elements with the specified class
//   const paragraphs = $("p.ELA_Strategies_Table-body-txt");

//   // Map the paragraphs to their HTML strings
//   const paragraphsArray = paragraphs
//     .map((index, element) => {
//       return $.html(element).trim();
//     })
//     .get(); // .get() converts the cheerio object to a regular array

//   return paragraphsArray;
// }

// const htmlString =
//   '<p class="ELA_Strategies_Table-body-txt">The text conveys descriptions and examples of complex physics concepts. (pp. 2–11)*</p><p class="ELA_Strategies_Table-body-txt">Frequent sidebars, including mathematics problems and hands-on experiments, occur. (pp. 7–9, 11)*</p><p class="ELA_Strategies_Table-body-txt">Extensive use of scientific terminology makes the text challenging within its complexity band. (pp. 9–11)*</p><p class="ELA_Strategies_Table-body-txt">Challenging physical science concepts appear in the text.</p>';

// const resultArray = splitHtmlStringIntoArray(htmlString);
// console.log(resultArray[0]);

// const fs = require("fs");
// const path = require("path");

// function correctInvalidHTML(filePath) {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     }

//     // Regular expression to find invalid tags like <<p
//     const correctedData = data.replace(/<<p/g, "<p");

//     fs.writeFile(filePath, correctedData, "utf8", (err) => {
//       if (err) {
//         console.error("Error writing file:", err);
//         return;
//       }
//       console.log("File corrected successfully");
//     });
//   });
// }

// // Usage
// const filePath = path.join(__dirname, "/output/test/html/index.html"); // Replace with the path to your HTML file
// correctInvalidHTML(filePath);
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

// Usage
const outputDir = path.join(__dirname, "output"); // Replace with the path to your output directory
findFiles(outputDir, "index.html", correctInvalidHTML);
