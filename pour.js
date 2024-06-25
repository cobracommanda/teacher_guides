const fs = require("fs-extra");
const path = require("path");
const unzipper = require("unzipper");
const cheerio = require("cheerio");
const panel_2_page_2_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_3/Lesson_3_1.js");
const panel_2_page_3_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_4/Lesson_4_1.js");
const panel_2_page_4_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_5/Lesson_5_1.js");
const { correctInvalidHTML, findFiles } = require("./correctInvalidHTML.js");
const { replaceLastHtmlElement } = require("./replaceHtmlElement.js");
const { createTableFrame } = require("./createTableFrame.js");
const {
  page_1_ELA_Strategies,
  page_1_Related_resources,
  panel_2_page_1_sample_chart,
  panel_2_page_3_sample_summary,
  panel_2_page_4_sample_summary,
} = require("./createDynamicOrderedLists.js");
const {
  panel_2_page_1_section_tags,
  panel_2_page_2_section_tags,
  panel_2_page_3_section_tags,
  panel_2_page_4_section_tags,
  panel_3_page_1_section_tags,
  panel_3_page_2_section_tags,
  panel_3_page_3_section_tags,
  panel_3_page_4_section_tags,
  panel_4_page_1_section_tags,
  panel_5_page_1_section_tags,
  panel_1_section_table_data_array,
} = require("./processHtmlArray.js");

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

    const outputDir = path.join(__dirname, "output");
    findFiles(outputDir, "index.html", correctInvalidHTML);
  });
};

// Define the paths and strings to replace
const xCode = "Gk";
const zipFilePath = "./template/package.zip";
const tempUnzipDir = "./temp_unzip";
const finalDestDir = `./output/${xCode}`;
const sourceDir = path.join(tempUnzipDir, "package");
const htmlFilePath = path.join(finalDestDir, "html/index.html");
const cssFilePath = path.join(finalDestDir, "css/styles.css");

const findReplacePairsCss = [
  [/@@@@@@@@@@@@/g, gradeColors.gradekColor], // Replace @@@@@@ with the --grade-color

  [/############/g, gradeColors.gradekTint], // Replace @!@!@!@! with the --grade-color-tint
];

const findReplacePairsHtml = [
  // [/<!-- xx tg title xx -->/g, "<!-- new title content -->"],
  [/<!-- xx tg title xx -->/g, "Isaac Newton and His Laws of Motion"],

  [/<!-- xx panel1 aside content xx -->/g, page_1_Related_resources],
  [
    /<!-- Purpose and Levels of Meaning Content -->/g,
    panel_1_section_table_data_array[0],
  ],
  [/<!-- Structure  Content -->/g, panel_1_section_table_data_array[1]],

  [
    /!-- Language Conventionality and Clarity Content -->/g,
    panel_1_section_table_data_array[2],
  ],
  [/!-- Knowledge Demands Content -->/g, panel_1_section_table_data_array[3]],
  [/<!-- xx panel1 section content xx -->/g, page_1_ELA_Strategies],
  [
    /<!-- xx panel2 page 1 section content xx -->/g,
    replaceLastHtmlElement(
      panel_2_page_1_section_tags.taggedContent,
      panel_2_page_1_sample_chart,
      true
    ),
  ],
  [
    /<!-- xx panel2 page 2 section content xx -->/g,
    replaceLastHtmlElement(
      replaceLastHtmlElement(
        panel_2_page_2_section_tags.taggedContent,
        "",
        false
      ),
      createTableFrame(panel_2_page_2_section_data, true),
      true
    ),
  ],
  [
    /<!-- xx panel2 page 3 section content xx -->/g,
    replaceLastHtmlElement(
      replaceLastHtmlElement(
        panel_2_page_3_section_tags.taggedContent,
        "",
        false
      ),
      `${panel_2_page_3_sample_summary} ${createTableFrame(
        panel_2_page_3_section_data,
        true
      )}`,
      true
    ),
  ],
  [
    /<!-- xx panel2 page 4 section content xx -->/g,
    replaceLastHtmlElement(
      replaceLastHtmlElement(
        panel_2_page_4_section_tags.taggedContent,
        "",
        false
      ),
      `${panel_2_page_4_sample_summary} ${createTableFrame(
        panel_2_page_4_section_data,
        true
      )}`,
      true
    ),
  ],
  [
    / <!-- xx panel3 page 1 section content xx -->/g,
    panel_3_page_1_section_tags.taggedContent,
  ],
  [
    / <!-- xx panel3 page 2 section content xx -->/g,
    panel_3_page_2_section_tags.taggedContent,
  ],
  [
    / <!-- xx panel3 page 3 section content xx -->/g,
    panel_3_page_3_section_tags.taggedContent,
  ],
  [
    / <!-- xx panel3 page 4 section content xx -->/g,
    panel_3_page_4_section_tags.taggedContent,
  ],
  [
    / <!-- xx panel4 section content xx -->/g,
    panel_4_page_1_section_tags.taggedContent,
  ],
  [
    / <!-- xx panel5 section content xx -->/g,
    panel_5_page_1_section_tags.taggedContent,
  ],
];

// const findReplacePairsCss = [
//   [/@@@@@@@@@@@@/g, gradeColors.grade6Color], // Replace @@@@@@ with the --grade-color

//   [/############/g, gradeColors.grade6Tint], // Replace @!@!@!@! with the --grade-color-tint
// ];

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
