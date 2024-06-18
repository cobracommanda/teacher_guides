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
var runOnThese = getAllScriptLabelsAndPageNames(document);

// Output the array directly in the alert
alert(runOnThese[0]);
