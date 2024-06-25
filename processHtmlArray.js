const cheerio = require("cheerio");

const {
  panel_1_section_table_data,
  panel_2_page_1_section_content,
  panel_2_page_2_section_content,
  panel_2_page_3_section_content,
  panel_2_page_4_section_content,
  panel_3_page_1_section_content,
  panel_3_page_2_section_content,
  panel_3_page_3_section_content,
  panel_3_page_4_section_content,
  panel_4_page_1_section_content,
  panel_5_page_1_section_content,
} = require("./getHTML.js");

function splitHtmlStringIntoArray(htmlString) {
  // Load the HTML string into cheerio
  const $ = cheerio.load(htmlString);

  // Find all paragraph elements with the specified class
  const paragraphs = $("p.ELA_Strategies_Table-body-txt");

  // Map the paragraphs to their HTML strings
  const paragraphsArray = paragraphs
    .map((index, element) => {
      return $.html(element).trim();
    })
    .get(); // .get() converts the cheerio object to a regular array

  return paragraphsArray;
}

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

const panel_1_section_data = processHtmlArray(panel_1_section_table_data);

const panel_2_page_1_section_tags = processHtmlArray(
  panel_2_page_1_section_content
);
const panel_2_page_2_section_tags = processHtmlArray(
  panel_2_page_2_section_content
);
const panel_2_page_3_section_tags = processHtmlArray(
  panel_2_page_3_section_content
);
const panel_2_page_4_section_tags = processHtmlArray(
  panel_2_page_4_section_content
);
const panel_3_page_1_section_tags = processHtmlArray(
  panel_3_page_1_section_content
);
const panel_3_page_2_section_tags = processHtmlArray(
  panel_3_page_2_section_content
);
const panel_3_page_3_section_tags = processHtmlArray(
  panel_3_page_3_section_content
);
const panel_3_page_4_section_tags = processHtmlArray(
  panel_3_page_4_section_content
);
const panel_4_page_1_section_tags = processHtmlArray(
  panel_4_page_1_section_content
);
const panel_5_page_1_section_tags = processHtmlArray(
  panel_5_page_1_section_content
);

const panel_1_section_table_data_array = splitHtmlStringIntoArray(
  panel_1_section_data.taggedContent
);

// console.log(panel_1_section_table_data_array);
module.exports = {
  panel_1_section_table_data_array,
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
};

// console.log(panel_2_page_4_section_tags);
