const fs = require("fs-extra");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

const updatePdfMetadata = async (pdfPath, newTitle) => {
  try {
    const pdfBytes = await fs.readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const title = newTitle;
    const subject = "PRIME Teacher Guide";
    const author = "Benchmark Education Company";

    pdfDoc.setTitle(title);
    pdfDoc.setSubject(subject);
    pdfDoc.setAuthor(author);

    const updatedPdfBytes = await pdfDoc.save();
    await fs.writeFile(pdfPath, updatedPdfBytes);
    console.log(`Updated metadata for ${pdfPath}`);
  } catch (err) {
    console.error(`Error updating metadata for ${pdfPath}:`, err);
  }
};

const updateMetadataForAllPdfs = async () => {
  const pdfDir = "/Users/DRobinson/Desktop/tg_pour/packages_pdf";
  const files = await fs.readdir(pdfDir);

  for (const file of files) {
    if (path.extname(file) === ".pdf") {
      const filePath = path.join(pdfDir, file);
      const baseName = "PRIME Teacher Guide Reproducible";
      await updatePdfMetadata(filePath, baseName);
    }
  }

  console.log("All PDF metadata updated successfully.");
};

updateMetadataForAllPdfs().catch((err) => {
  console.error("Error updating PDF metadata:", err);
});
