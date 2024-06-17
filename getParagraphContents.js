function getParagraphStylesAndContentsWithCharacterStyles(label, parentPage) {
  var doc = app.activeDocument;
  var labeledItem = null;

  // Iterate over all page items to find the one with the matching script label
  for (var i = 0; i < doc.allPageItems.length; i++) {
    if (doc.allPageItems[i].label == label) {
      labeledItem = doc.allPageItems[i];
      break;
    }
  }

  if (labeledItem != null && labeledItem.isValid) {
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
    var resultString = "var paragraphData = [\n";
    for (var k = 0; k < result.length; k++) {
      var paragraph = result[k];
      resultString += "  {\n";
      resultString += '    styleName: "' + paragraph.styleName + '",\n';
      resultString += '    content: "' + paragraph.content + '",\n';
      resultString +=
        '    parentPageName: "' + paragraph.parentPageName + '",\n';
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
    resultString += "];\n";

    // Write to file
    var desktopPath = Folder.desktop + "/paragraphStylesAndContents.js";
    var file = new File(desktopPath);
    file.open("w");
    file.write(resultString);
    file.close();

    alert("Output written to " + desktopPath);
  } else {
    alert("Item with label '" + label + "' not found or invalid.");
  }
}

// Example usage
getParagraphStylesAndContentsWithCharacterStyles("Lesson", "2");
