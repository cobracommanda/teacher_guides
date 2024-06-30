// const fs = require("fs");
// const path = require("path");
// const { JSDOM } = require("jsdom");

// const htmlFilePath = "./formatted_data/reformatted_Y63055_TG_G6_U1.html";
// const outputFilePath = "reformatted_Y63055_TG_G6_U1_processed_tables.json";

// // Function to extract tables from HTML content
// const extractTablesFromHtml = (htmlContent) => {
//   const dom = new JSDOM(htmlContent);
//   const document = dom.window.document;

//   const tables = [];
//   const tableElements = document.querySelectorAll("table");

//   tableElements.forEach((table) => {
//     tables.push(table.outerHTML);
//   });

//   return tables;
// };

// // Function to read HTML file, extract tables, and save to JSON
// const processHtmlFile = (htmlFilePath, outputFilePath) => {
//   fs.readFile(htmlFilePath, "utf-8", (err, data) => {
//     if (err) {
//       console.error(`Error reading HTML file: ${err}`);
//       return;
//     }

//     const tables = extractTablesFromHtml(data);

//     const result = {
//       tables: tables,
//       view: () => {
//         tables.forEach((table, index) => {
//           console.log(`Table ${index + 1}:`);
//           console.log(table);
//         });
//       },
//     };

//     fs.writeFile(
//       outputFilePath,
//       JSON.stringify(result, null, 2),
//       "utf-8",
//       (err) => {
//         if (err) {
//           console.error(`Error writing JSON file: ${err}`);
//           return;
//         }

//         console.log(`Processed data saved to ${outputFilePath}`);
//       }
//     );
//   });
// };

// // Run the function
// processHtmlFile(htmlFilePath, outputFilePath);

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const inputDir = "./formatted_data";
const outputDir = "./processed_data";

// Function to extract tables from HTML content
const extractTablesFromHtml = (htmlContent) => {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  const tables = [];
  const tableElements = document.querySelectorAll("table");

  tableElements.forEach((table) => {
    tables.push(table.outerHTML.replace(/\n/g, "")); // Remove newline characters
  });

  return tables;
};

// Function to read HTML file, extract tables, and save to JSON
const processHtmlFile = (htmlFilePath, outputFilePath) => {
  fs.readFile(htmlFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error(`Error reading HTML file: ${err}`);
      return;
    }

    const tables = extractTablesFromHtml(data);

    const result = {
      tables: tables,
      view: () => {
        tables.forEach((table, index) => {
          console.log(`Table ${index + 1}:`);
          console.log(table);
        });
      },
    };

    fs.writeFile(
      outputFilePath,
      JSON.stringify(result, null, 2),
      "utf-8",
      (err) => {
        if (err) {
          console.error(`Error writing JSON file: ${err}`);
          return;
        }

        console.log(`Processed data saved to ${outputFilePath}`);
      }
    );
  });
};

// Function to process all HTML files in the input directory
const processAllHtmlFiles = (inputDir, outputDir) => {
  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error(`Error reading input directory: ${err}`);
      return;
    }

    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    files.forEach((file) => {
      if (path.extname(file) === ".html") {
        const htmlFilePath = path.join(inputDir, file);
        const outputFileName = path.basename(file, ".html") + ".json";
        const outputFilePath = path.join(outputDir, outputFileName);

        processHtmlFile(htmlFilePath, outputFilePath);
      }
    });
  });
};

// Run the function to process all HTML files
processAllHtmlFiles(inputDir, outputDir);
