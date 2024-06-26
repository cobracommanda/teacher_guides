function getParagraphStylesAndContentsWithCharacterStyles(label, parentPage) {
  var doc = app.activeDocument;
  var labeledItem = null;

  // Iterate over all page items to find the one with the matching script label
  for (var i = 0; i < doc.allPageItems.length; i++) {
    if (
      doc.allPageItems[i].label == label &&
      doc.allPageItems[i].parentPage.name == parentPage
    ) {
      labeledItem = doc.allPageItems[i];
      break;
    }
  }

  if (!labeledItem) {
    alert(
      "No item with the label '" +
        label +
        "' found on parent page '" +
        parentPage +
        "'."
    );
    return;
  }

  // Get the paragraphs of the labeled item
  var paragraphs = labeledItem.parentStory.paragraphs;
  var result = [];

  function processParagraphs(paragraphs, result) {
    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].parentTextFrames[0].parentPage.name == parentPage) {
        var paragraphObject = {
          styleName: paragraphs[i].appliedParagraphStyle.name,
          content: paragraphs[i].contents
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/"/g, '\\"'),
          parentPageName: paragraphs[i].parentTextFrames[0].parentPage.name,
          characterStyles: [],
        };

        // Check for character styles
        var characters = paragraphs[i].characters;
        for (var j = 0; j < characters.length; j++) {
          var charStyleName = characters[j].appliedCharacterStyle.name;
          var characterContent = String(characters[j].contents)
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/"/g, '\\"');
          if (characterContent !== "\\n" && characterContent !== "\\r") {
            paragraphObject.characterStyles.push({
              character: characterContent,
              style: charStyleName,
            });
          }
        }

        result.push(paragraphObject);
      }
    }
  }

  // Process regular paragraphs
  processParagraphs(paragraphs, result);

  // Process paragraphs in tables
  var tables = labeledItem.parentStory.tables;
  for (var t = 0; t < tables.length; t++) {
    var cells = tables[t].cells;
    for (var c = 0; c < cells.length; c++) {
      processParagraphs(cells[c].paragraphs, result);
    }
  }

  // Manually convert the result array to a string for writing to file
  var resultString = "const paragraphData = [\n";
  for (var k = 0; k < result.length; k++) {
    var paragraph = result[k];
    resultString += "  {\n";
    resultString += '    styleName: "' + paragraph.styleName + '",\n';
    resultString += '    content: "' + paragraph.content + '",\n';
    resultString += '    parentPageName: "' + paragraph.parentPageName + '",\n';
    resultString += "    characterStyles: [\n";
    for (var l = 0; l < paragraph.characterStyles.length; l++) {
      var charStyle = paragraph.characterStyles[l];
      resultString +=
        '      { character: "' +
        charStyle.character +
        '", style: "' +
        charStyle.style +
        '" }';
      if (l < paragraph.characterStyles.length - 1) resultString += ",";
      resultString += "\n";
    }
    resultString += "    ]\n";
    resultString += "  }";
    if (k < result.length - 1) resultString += ",";
    resultString += "\n";
  }
  resultString += "];\n module.exports = paragraphData;\n";

  // Create a root folder on the desktop
  var rootFolderName = root_dir_name;
  var rootFolderPath = Folder.desktop + "/" + rootFolderName;
  var rootFolder = new Folder(rootFolderPath);
  if (!rootFolder.exists) {
    rootFolder.create();
  }

  // Create a subfolder for the label and parent page
  var folderName = label + "_" + parentPage;
  var folderPath = rootFolderPath + "/" + folderName;
  var folder = new Folder(folderPath);
  if (!folder.exists) {
    folder.create();
  }

  // Determine the file path with incrementing filename
  var fileIndex = 1;
  var filePath;
  do {
    filePath =
      folderPath + "/" + label + "_" + parentPage + "_" + fileIndex + ".js";
    fileIndex++;
  } while (new File(filePath).exists);

  var file = new File(filePath);
  file.encoding = "UTF-8";
  file.open("w");
  file.write(resultString);
  file.close();

  // alert("Data written to file successfully.");
}

function getAllScriptLabelsAndPageNames(document) {
  var results = [];

  // Iterate through all the pages in the document
  for (var i = 0; i < document.pages.length; i++) {
    var page = document.pages[i];
    var pageName = page.name;

    // Collect all script labels for the current page
    var allPageItems = page.allPageItems;

    for (var j = 0; j < allPageItems.length; j++) {
      var item = allPageItems[j];
      var label = item.label;
      if (label) {
        results.push([label, pageName]);
      }
    }
  }

  return results;
}

// Example usage:
var document = app.activeDocument;
root_dir_name = document.name.replace(".indd", "");
var runOnThese = getAllScriptLabelsAndPageNames(document);

// Progress bar
var progressBar = new Window(
  "palette",
  "Not a real dev team",
  [150, 150, 600, 260]
);
progressBar.pnl = progressBar.add(
  "panel",
  [10, 10, 440, 100],
  "Exporting Files"
);
progressBar.pnl.progBar = progressBar.pnl.add(
  "progressbar",
  [20, 20, 410, 50],
  0,
  runOnThese.length
);
progressBar.pnl.progBarLabel = progressBar.pnl.add(
  "statictext",
  [20, 55, 410, 75],
  "0 of " + runOnThese.length
);
progressBar.show();
// getParagraphStylesAndContentsWithCharacterStyles("Related_resources", "1");
for (var index = 0; index < runOnThese.length; index++) {
  var indd_label = runOnThese[index][0];
  var indd_page = runOnThese[index][1];
  getParagraphStylesAndContentsWithCharacterStyles(indd_label, indd_page);

  // Update progress bar
  progressBar.pnl.progBar.value = index + 1;
  progressBar.pnl.progBarLabel.text = index + 1 + " of " + runOnThese.length;
  $.sleep(100); // Just to show the progress bar movement more clearly
}

progressBar.close();
