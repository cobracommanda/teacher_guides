const fs = require("fs-extra");
const path = require("path");
const unzipper = require("unzipper");

const panel_2_page_2_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_3/Lesson_3_1.js");
const panel_2_page_3_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_4/Lesson_4_1.js");
const panel_2_page_4_section_data = require("/Users/DRobinson/Desktop/Y63112_TG_G6_U10/Lesson_5/Lesson_5_1.js");

const { correctInvalidHTML, findFiles } = require("./correctInvalidHTML.js");
const { replaceLastHtmlElement } = require("./replaceHtmlElement.js");
const { createTableFrame } = require("./createTableFrame.js");

const {
  panel_3_page_2_section_table,
  panel_3_page_3_section_table,
} = require("./singleColumnTableConfig");

const {
  page_1_ELA_Strategies,
  page_1_Related_resources,
  panel_2_page_1_sample_chart,
  panel_2_page_3_sample_summary,
  panel_2_page_4_sample_summary,
  panel_3_page_1_sample_summary,
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

const {
  Generic_sidebar_2_tags,
  Generic_sidebar_4_tags,
  Generic_sidebar_5_tags,
} = require("./singleColumnConfig.js");

const {
  panel_3_page_1_aside_table,
} = require("./singleTableMultipleHeaders.js");

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

const IMG_ROOT = path.resolve("./raw_table_data/");
const { packages_data } = require("./packagesData.js");

const getImageName = (filePath) => {
  return path.basename(filePath);
};

const processImages = async (units = 10) => {
  for (const [key, value] of Object.entries(packages_data)) {
    value.cover_img = [];
    value.TEQC = [];
    value.aside_imgs = [];

    for (let unit = 1; unit <= units; unit++) {
      const directory = path.join(
        IMG_ROOT,
        `${key}_TG_G${value.grade}_U${unit}-web-resources/image`
      );

      if (await fs.pathExists(directory)) {
        const files = await fs.readdir(directory);

        files.forEach((file) => {
          const filePath = path.join(directory, file);
          if (file.includes("TEQC")) {
            value.TEQC.push(filePath);
          } else if (file.includes("_CV")) {
            value.cover_img.push(filePath);
          } else {
            value.aside_imgs.push(filePath);
          }
        });

        console.log(`Processed images for ${key}, Unit ${unit}:`);
        console.log("Cover Images:", value.cover_img);
        console.log("TEQC Images:", value.TEQC);
        console.log("Aside Images:", value.aside_imgs);
      } else {
        console.warn(`Directory does not exist: ${directory}`);
      }
    }
  }
};

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
// Sample data structure for testing
const sampleData = {
  tables: [
    "<table><thead><tr><th>What Makes This Text Complex?</th></tr></thead><tbody><tr><td><p>Purpose and Levels <br>of Meaning </p><p><span>➌</span></p></td><td><p>The purpose of the text is to explore the adaptations that allow living organisms to survive. (pp. 3–6, 9)*</p></td></tr><tr><td><p>Structure </p><p><span>➌</span></p></td><td><p>The book includes descriptive, cause and effect, explanatory, and procedural text, as well as many sidebars, charts, and rich graphics. (p. 7)*</p></td></tr><tr><td><p>Language Conventionality <br>and Clarity </p><p><span>➋</span></p></td><td><p>• Text contains simple and complex sentence structures. </p><p>• Domain-specific, otherwise unfamiliar terms are supported by direct definitions, context clues, and descriptions. (p. 8)*</p></td></tr><tr><td><p>Knowledge Demands </p><p><span>➌</span></p></td><td><p>The text assumes some prior knowledge of Life Science and Physical Science concepts.</p></td></tr></tbody></table>",
    "<table><thead><tr><th>Aquatic environments differ from one another based on the amount of salinity, or salt in the water. Oceans, for example, have a great amount of salinity while rivers and lakes are freshwater bodies, so they have very little salinity.</th></tr></thead><tbody></tbody></table>",
    // ... more tables
  ],
};

// Function to process HTML and CSS files
const processData = async (key, value) => {
  const xCode = value.xcode;
  const zipFilePath = `./template/package.zip`;
  const tempUnzipDir = `./temp_trash/temp_unzip_${key}`;
  const finalDestDir = `./output/${xCode}`;
  const sourceDir = path.join(tempUnzipDir, "package");
  const htmlFilePath = path.join(finalDestDir, "html/index.html");
  const cssFilePath = path.join(finalDestDir, "css/styles.css");

  const findTable = findTableInData(
    sampleData,
    "Aquatic environments differ from one another based on the",
    false
  );

  const findReplacePairsCss = [
    [new RegExp("@@@@@@@@@@@@", "g"), gradeColors[`grade${value.grade}Color`]],
    [new RegExp("############", "g"), gradeColors[`grade${value.grade}Tint`]],
  ];

  const findReplacePairsHtml = [
    [/<!-- xx img-src xx -->/g, getImageName(value.cover_img[0])],
    [/<!-- xx alt xx -->/g, `Image of ${value.title}'s book cover`],
    [/ <!-- xx panel1 section content xx -->/g, findTable || "Table not found"],
    [/<!-- xx tg title xx -->/g, value.title],
    [/<!-- xx Lexile xx -->/g, value.lexile],
    [/<!-- Purpose and Levels of Meaning Rating -->/g, value.levels[0]],
    [/<!-- Structure Rating -->/g, value.levels[1]],
    [/<!-- Language Conventionality and Clarity Rating -->/g, value.levels[2]],
    [/<!-- Knowledge Demands Rating -->/g, value.levels[3]],
  ];

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

  const findAndReplaceInFile = (filePath, findReplacePairs) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading file: ${filePath}`, err);
        return;
      }

      console.log(`Original content of ${filePath}:`, data);

      let result = data;
      findReplacePairs.forEach(([findStr, replaceStr]) => {
        result = result.replace(findStr, replaceStr);
      });

      console.log(`Modified content of ${filePath}:`, result);

      fs.writeFile(filePath, result, "utf8", (err) => {
        if (err) {
          console.error(`Error writing file: ${filePath}`, err);
        } else {
          console.log(`File updated successfully: ${filePath}`);
        }
      });
    });
  };

  await unzipFile(zipFilePath, tempUnzipDir)
    .then(() => removeMacOSXDir(tempUnzipDir))
    .then(() => moveContents(sourceDir, finalDestDir))
    .then(() => fs.pathExists(htmlFilePath))
    .then((exists) => {
      if (exists) {
        console.log(`HTML file exists: ${htmlFilePath}`);
        findAndReplaceInFile(htmlFilePath, findReplacePairsHtml);
      } else {
        console.error(`HTML file does not exist: ${htmlFilePath}`);
      }
    })
    .then(() => fs.pathExists(cssFilePath))
    .then((exists) => {
      if (exists) {
        console.log(`CSS file exists: ${cssFilePath}`);
        findAndReplaceInFile(cssFilePath, findReplacePairsCss);
      } else {
        console.error(`CSS file does not exist: ${cssFilePath}`);
      }
    })
    .catch((err) => console.error("Error in execution:", err));
};

const copyAssets = async (key, value) => {
  const xCode = value.xcode;
  const allImages = [...value.cover_img, ...value.TEQC, ...value.aside_imgs];
  const imgDestDir = path.join("output", xCode, "images", "thumbs");
  const pdfDestDir = path.join("output", xCode, "images", "pdf");

  try {
    await fs.ensureDir(imgDestDir);
    for (const image of allImages) {
      const destPath = path.join(imgDestDir, path.basename(image));
      await fs.copy(image, destPath);
    }
    console.log(`Images copied to ${imgDestDir}`);

    for (let unit = 1; unit <= 10; unit++) {
      const pdfSourcePath = path.join(
        "/Users/DRobinson/Desktop/tg_pour/packages_pdf",
        `${key}_TG_G${value.grade}_U${unit}.pdf`
      );
      const pdfDestPath = path.join(pdfDestDir, `reproducible.pdf`);

      if (await fs.pathExists(pdfSourcePath)) {
        await fs.ensureDir(pdfDestDir);
        await fs.copy(pdfSourcePath, pdfDestPath);
        console.log(`PDF copied to ${pdfDestDir}`);
      } else {
        console.warn(`PDF does not exist: ${pdfSourcePath}`);
      }
    }
  } catch (err) {
    console.error(
      `Error copying assets to ${imgDestDir} or ${pdfDestDir}:`,
      err
    );
  }
};

// Main function to run the entire process
const main = async () => {
  await processImages(10);

  for (const [key, value] of Object.entries(packages_data)) {
    await processData(key, value);
    await copyAssets(key, value);
  }

  console.log("All data processed successfully.");
  process.exit(0);
};

main().catch((err) => {
  console.error("Error in main execution:", err);
  process.exit(1);
});
