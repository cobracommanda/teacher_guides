const cheerio = require("cheerio");
const wrappedContents = require("./Lesson_2_1.js");

function processHtmlArray(arr) {
  const taggedContentArr = [];
  const untaggedContentArr = [];

  arr.forEach((item) => {
    const $ = cheerio.load(item, null, false); // Load the item without adding <html><head><body> tags

    // Remove empty tags but ignore <br> tags
    $("*").each((index, element) => {
      if (
        element.tagName !== "br" &&
        $(element).children().length === 0 &&
        $(element).text().trim() === ""
      ) {
        $(element).remove();
      }
    });

    // Wrap top-level <span> elements in <p> tags
    $("span").each((index, element) => {
      if (
        $(element).parent().length === 0 ||
        $(element).parent()[0].name === "body"
      ) {
        $(element).wrap("<p></p>");
      }
    });

    const cleanedItem = $.html().trim();
    if (cleanedItem.startsWith("<")) {
      taggedContentArr.push(cleanedItem);
    } else if (cleanedItem) {
      untaggedContentArr.push(cleanedItem);
    }
  });

  return {
    taggedContent: taggedContentArr.join(""),
    untaggedContent: untaggedContentArr,
  };
}

const result = processHtmlArray(wrappedContents);
console.log(result);
