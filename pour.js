// const fs = require("fs-extra");
// const path = require("path");
// const unzipper = require("unzipper");

// // Step 1: Unzip the provided file
// const unzipFile = async (zipFilePath, destDir) => {
//   try {
//     await fs
//       .createReadStream(zipFilePath)
//       .pipe(unzipper.Extract({ path: destDir }))
//       .promise();
//     console.log("Unzipped successfully");
//   } catch (err) {
//     console.error("Error unzipping file:", err);
//   }
// };

// // Step 2: Copy the directory
// const copyDirectory = async (sourceDir, destDir) => {
//   try {
//     await fs.copy(sourceDir, destDir);
//     console.log("Directory copied successfully");
//   } catch (err) {
//     console.error("Error copying directory:", err);
//   }
// };

// // Step 3: Remove the __MACOSX directory if it exists
// const removeMacOSXDir = async (dir) => {
//   const macosxDir = path.join(dir, "__MACOSX");
//   if (await fs.pathExists(macosxDir)) {
//     try {
//       await fs.remove(macosxDir);
//       console.log("Removed __MACOSX directory");
//     } catch (err) {
//       console.error("Error removing __MACOSX directory:", err);
//     }
//   }
// };

// // Step 4: Find and Replace in a specific file
// const findAndReplaceInFile = (filePath, findReplacePairs) => {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     }

//     let result = data;
//     findReplacePairs.forEach(([findStr, replaceStr]) => {
//       result = result.replace(findStr, replaceStr);
//     });

//     fs.writeFile(filePath, result, "utf8", (err) => {
//       if (err) {
//         console.error("Error writing file:", err);
//       } else {
//         console.log(`File updated successfully: ${filePath}`);
//       }
//     });
//   });
// };

// // Define the paths and strings to replace
// const zipFilePath = "./template/package.zip";
// const tempUnzipDir = "./temp_unzip";
// const finalDestDir = "./output/X99999";
// const htmlFilePath = path.join(finalDestDir, "html/index.html");
// const cssFilePath = path.join(finalDestDir, "css/style.css");

// const findReplacePairsHtml = [
//   [/<!-- xx tg title xx -->/g, "<!-- new title content -->"],
//   [
//     /<!-- xx panel1 section content xx -->/g,
//     "<!-- new panel1 section content -->",
//   ],
// ];

// const findReplacePairsCss = [
//   [/@@@@@@@@@@@@/g, "#001648"], // Replace @@@@@@ with the --grade-color
//   [/############/g, "rgba(0, 22, 72, 0.1)"], // Replace @!@!@!@! with the --grade-color-tint
// ];

// // Execute the steps
// unzipFile(zipFilePath, tempUnzipDir)
//   .then(() => removeMacOSXDir(tempUnzipDir))
//   .then(() => copyDirectory(tempUnzipDir, finalDestDir))
//   .then(() => findAndReplaceInFile(htmlFilePath, findReplacePairsHtml))
//   .then(() => findAndReplaceInFile(cssFilePath, findReplacePairsCss))
//   .catch((err) => console.error("Error in execution:", err));
const fs = require("fs-extra");
const path = require("path");
const unzipper = require("unzipper");

// Step 1: Unzip the provided file
const unzipFile = async (zipFilePath, destDir) => {
  try {
    await fs
      .createReadStream(zipFilePath)
      .pipe(unzipper.Extract({ path: destDir }))
      .promise();
    console.log("Unzipped successfully");
  } catch (err) {
    console.error("Error unzipping file:", err);
  }
};

// Step 2: Remove the __MACOSX directory if it exists
const removeMacOSXDir = async (dir) => {
  const macosxDir = path.join(dir, "__MACOSX");
  if (await fs.pathExists(macosxDir)) {
    try {
      await fs.remove(macosxDir);
      console.log("Removed __MACOSX directory");
    } catch (err) {
      console.error("Error removing __MACOSX directory:", err);
    }
  }
};

// Step 3: Move the contents of the unzipped directory to the final destination
const moveContents = async (sourceDir, destDir) => {
  try {
    const items = await fs.readdir(sourceDir);
    for (const item of items) {
      const srcPath = path.join(sourceDir, item);
      const destPath = path.join(destDir, item);
      await fs.move(srcPath, destPath, { overwrite: true });
    }
    console.log("Contents moved successfully");
  } catch (err) {
    console.error("Error moving contents:", err);
  }
};

// Step 4: Find and Replace in a specific file
const findAndReplaceInFile = (filePath, findReplacePairs) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${filePath}`, err);
      return;
    }

    let result = data;
    findReplacePairs.forEach(([findStr, replaceStr]) => {
      result = result.replace(findStr, replaceStr);
    });

    fs.writeFile(filePath, result, "utf8", (err) => {
      if (err) {
        console.error(`Error writing file: ${filePath}`, err);
      } else {
        console.log(`File updated successfully: ${filePath}`);
      }
    });
  });
};

// Define the paths and strings to replace
const xCode = "X44444";
const zipFilePath = "./template/package.zip";
const tempUnzipDir = "./temp_unzip";
const finalDestDir = `./output/${xCode}`;
const sourceDir = path.join(tempUnzipDir, "package");
const htmlFilePath = path.join(finalDestDir, "html/index.html");
const cssFilePath = path.join(finalDestDir, "css/styles.css");

const gradeColors = {
  gradekColor: "#ef4b3d",
  gradekTint: "rgba(240, 76, 61, 0.1)",
  grade1Color: "#9d3393",
  grade1Tint: "rgba(157, 51, 147, 0.1)",
  grade2Color: "#f8971d",
  grade2Tint: "rgba(248, 151, 29, 0.1)",
  grade3Color: "#00acd4",
  grade3Tint: "rgba(0, 172, 212, 0.1)",
  grade4Color: "#f15a22",
  grade4Tint: "rgba(241, 90, 34, 0.1)",
  grade5Color: "#00a14e",
  grade5Tint: "rgba(0, 161, 78, 0.1)",
  grade6Color: "#001648",
  grade6Tint: "rgba(0, 22, 72, 0.1)",
};

const findReplacePairsHtml = [
  [/<!-- xx tg title xx -->/g, "<!-- new title content -->"],
  [
    /<!-- xx panel1 section content xx -->/g,
    "<!-- new panel1 section content -->",
  ],
];

const findReplacePairsCss = [
  [/@@@@@@@@@@@@/g, gradeColors.grade6Color], // Replace @@@@@@ with the --grade-color
  [/############/g, gradeColors.grade6Tint], // Replace @!@!@!@! with the --grade-color-tint
];

// Execute the steps
unzipFile(zipFilePath, tempUnzipDir)
  .then(() => removeMacOSXDir(tempUnzipDir))
  .then(() => {
    // Log the contents of the temp directory to verify structure
    return fs.readdir(tempUnzipDir).then((contents) => {
      //   console.log("Contents of temp_unzip:", contents);
      return moveContents(sourceDir, finalDestDir);
    });
  })
  .then(() => {
    // Log the contents of the final destination directory
    return fs.readdir(finalDestDir).then((contents) => {
      //   console.log("Contents of finalDestDir:", contents);
      return fs.readdir(path.join(finalDestDir, "css")).then((cssContents) => {
        // console.log("Contents of css directory:", cssContents);
      });
    });
  })
  .then(() => {
    // Check if html file exists before proceeding
    return fs.pathExists(htmlFilePath).then((exists) => {
      if (exists) {
        findAndReplaceInFile(htmlFilePath, findReplacePairsHtml);
      } else {
        console.error(`HTML file does not exist: ${htmlFilePath}`);
      }
    });
  })
  .then(() => {
    // Check if css file exists before proceeding
    return fs.pathExists(cssFilePath).then((exists) => {
      if (exists) {
        findAndReplaceInFile(cssFilePath, findReplacePairsCss);
      } else {
        console.error(`CSS file does not exist: ${cssFilePath}`);
      }
    });
  })
  .catch((err) => console.error("Error in execution:", err));
