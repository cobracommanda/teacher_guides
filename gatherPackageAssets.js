const fs = require("fs-extra");
const path = require("path");

const IMG_ROOT = path.resolve("./raw_table_data/");
const { packages_data } = require("./packagesData.js");

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

const runProcessImages = async () => {
  await processImages(10);
  console.log("Image processing complete.");
  // Save the updated packages_data to a JSON file
  await fs.writeJson("./updated_packages_data.json", packages_data, {
    spaces: 2,
  });
  process.exit(0); // Exit the process with a success code
};

runProcessImages().catch((err) => {
  console.error("Error processing images:", err);
  process.exit(1); // Exit the process with an error code
});
