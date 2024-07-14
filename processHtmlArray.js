const cheerio = require("cheerio");

const {
  Y63055_panel_2_page_1_section_content,
  Y63055_panel_2_page_2_section_content,
  Y63055_panel_2_page_3_section_content,
  Y63055_panel_2_page_4_section_content,
  Y63055_panel_2_page_5_section_content,
  Y63055_panel_3_page_1_section_content,
  Y63055_panel_3_page_2_section_content,
  Y63055_panel_3_page_3_section_content,
  Y63055_panel_3_page_4_section_content,
  Y63055_panel_4_page_1_section_content,
  Y63055_panel_5_page_1_section_content,

  Y63056_panel_2_page_1_section_content,
  Y63056_panel_2_page_2_section_content,
  Y63056_panel_2_page_3_section_content,
  Y63056_panel_2_page_4_section_content,
  Y63056_panel_2_page_5_section_content,
  Y63056_panel_3_page_1_section_content,
  Y63056_panel_3_page_2_section_content,
  Y63056_panel_3_page_3_section_content,
  Y63056_panel_3_page_4_section_content,
  Y63056_panel_4_page_1_section_content,
  Y63056_panel_5_page_1_section_content,

  Y63057_panel_2_page_1_section_content,
  Y63057_panel_2_page_2_section_content,
  Y63057_panel_2_page_3_section_content,
  Y63057_panel_2_page_4_section_content,
  Y63057_panel_2_page_5_section_content,
  Y63057_panel_3_page_1_section_content,
  Y63057_panel_3_page_2_section_content,
  Y63057_panel_3_page_3_section_content,
  Y63057_panel_3_page_4_section_content,
  Y63057_panel_4_page_1_section_content,
  Y63057_panel_5_page_1_section_content,

  Y63058_panel_2_page_1_section_content,
  Y63058_panel_2_page_2_section_content,
  Y63058_panel_2_page_3_section_content,
  Y63058_panel_2_page_4_section_content,
  Y63058_panel_2_page_5_section_content,
  Y63058_panel_3_page_1_section_content,
  Y63058_panel_3_page_2_section_content,
  Y63058_panel_3_page_3_section_content,
  Y63058_panel_3_page_4_section_content,
  Y63058_panel_4_page_1_section_content,
  Y63058_panel_5_page_1_section_content,

  Y63059_panel_2_page_1_section_content,
  Y63059_panel_2_page_2_section_content,
  Y63059_panel_2_page_3_section_content,
  Y63059_panel_2_page_4_section_content,
  Y63059_panel_2_page_5_section_content,
  Y63059_panel_3_page_1_section_content,
  Y63059_panel_3_page_2_section_content,
  Y63059_panel_3_page_3_section_content,
  Y63059_panel_3_page_4_section_content,
  Y63059_panel_4_page_1_section_content,
  Y63059_panel_5_page_1_section_content,

  Y63060_panel_2_page_1_section_content,
  Y63060_panel_2_page_2_section_content,
  Y63060_panel_2_page_3_section_content,
  Y63060_panel_2_page_4_section_content,
  Y63060_panel_2_page_5_section_content,
  Y63060_panel_3_page_1_section_content,
  Y63060_panel_3_page_2_section_content,
  Y63060_panel_3_page_3_section_content,
  Y63060_panel_3_page_4_section_content,
  Y63060_panel_4_page_1_section_content,
  Y63060_panel_5_page_1_section_content,

  Y63061_panel_2_page_1_section_content,
  Y63061_panel_2_page_2_section_content,
  Y63061_panel_2_page_3_section_content,
  Y63061_panel_2_page_4_section_content,
  Y63061_panel_3_page_1_section_content,
  Y63061_panel_3_page_2_section_content,
  Y63061_panel_3_page_3_section_content,
  Y63061_panel_3_page_4_section_content,
  Y63061_panel_4_page_1_section_content,
  Y63061_panel_5_page_1_section_content,

  Y63062_panel_2_page_1_section_content,
  Y63062_panel_2_page_2_section_content,
  Y63062_panel_2_page_3_section_content,
  Y63062_panel_2_page_4_section_content,
  Y63062_panel_3_page_1_section_content,
  Y63062_panel_3_page_2_section_content,
  Y63062_panel_3_page_3_section_content,
  Y63062_panel_3_page_4_section_content,
  Y63062_panel_4_page_1_section_content,
  Y63062_panel_5_page_1_section_content,

  Y63063_panel_2_page_1_section_content,
  Y63063_panel_2_page_2_section_content,
  Y63063_panel_2_page_3_section_content,
  Y63063_panel_2_page_4_section_content,
  Y63063_panel_3_page_1_section_content,
  Y63063_panel_3_page_2_section_content,
  Y63063_panel_3_page_3_section_content,
  Y63063_panel_3_page_4_section_content,
  Y63063_panel_4_page_1_section_content,
  Y63063_panel_5_page_1_section_content,

  Y63064_panel_2_page_1_section_content,
  Y63064_panel_2_page_2_section_content,
  Y63064_panel_2_page_3_section_content,
  Y63064_panel_2_page_4_section_content,
  Y63064_panel_3_page_1_section_content,
  Y63064_panel_3_page_2_section_content,
  Y63064_panel_3_page_3_section_content,
  Y63064_panel_3_page_4_section_content,
  Y63064_panel_4_page_1_section_content,
  Y63064_panel_5_page_1_section_content,

  Y63065_panel_2_page_1_section_content,
  Y63065_panel_2_page_2_section_content,
  Y63065_panel_2_page_3_section_content,
  Y63065_panel_2_page_4_section_content,
  Y63065_panel_3_page_1_section_content,
  Y63065_panel_3_page_2_section_content,
  Y63065_panel_3_page_3_section_content,
  Y63065_panel_3_page_4_section_content,
  Y63065_panel_4_page_1_section_content,
  Y63065_panel_5_page_1_section_content,

  Y63066_panel_2_page_1_section_content,
  Y63066_panel_2_page_2_section_content,
  Y63066_panel_2_page_3_section_content,
  Y63066_panel_2_page_4_section_content,
  Y63066_panel_3_page_1_section_content,
  Y63066_panel_3_page_2_section_content,
  Y63066_panel_3_page_3_section_content,
  Y63066_panel_3_page_4_section_content,
  Y63066_panel_4_page_1_section_content,
  Y63066_panel_5_page_1_section_content,

  Y63067_panel_2_page_1_section_content,
  Y63067_panel_2_page_2_section_content,
  Y63067_panel_2_page_3_section_content,
  Y63067_panel_2_page_4_section_content,
  Y63067_panel_3_page_1_section_content,
  Y63067_panel_3_page_2_section_content,
  Y63067_panel_3_page_3_section_content,
  Y63067_panel_3_page_4_section_content,
  Y63067_panel_4_page_1_section_content,
  Y63067_panel_5_page_1_section_content,

  Y63068_panel_2_page_1_section_content,
  Y63068_panel_2_page_2_section_content,
  Y63068_panel_2_page_3_section_content,
  Y63068_panel_2_page_4_section_content,
  Y63068_panel_2_page_5_section_content,
  Y63068_panel_3_page_1_section_content,
  Y63068_panel_3_page_2_section_content,
  Y63068_panel_3_page_3_section_content,
  Y63068_panel_3_page_4_section_content,
  Y63068_panel_4_page_1_section_content,
  Y63068_panel_5_page_1_section_content,

  Y63069_panel_2_page_1_section_content,
  Y63069_panel_2_page_2_section_content,
  Y63069_panel_2_page_3_section_content,
  Y63069_panel_2_page_4_section_content,
  Y63069_panel_2_page_5_section_content,
  Y63069_panel_3_page_1_section_content,
  Y63069_panel_3_page_2_section_content,
  Y63069_panel_3_page_3_section_content,
  Y63069_panel_3_page_4_section_content,
  Y63069_panel_4_page_1_section_content,
  Y63069_panel_5_page_1_section_content,

  Y63070_panel_2_page_1_section_content,
  Y63070_panel_2_page_2_section_content,
  Y63070_panel_2_page_3_section_content,
  Y63070_panel_2_page_4_section_content,
  Y63070_panel_2_page_5_section_content,
  Y63070_panel_3_page_1_section_content,
  Y63070_panel_3_page_2_section_content,
  Y63070_panel_3_page_3_section_content,
  Y63070_panel_3_page_4_section_content,
  Y63070_panel_4_page_1_section_content,
  Y63070_panel_5_page_1_section_content,

  Y63071_panel_2_page_1_section_content,
  Y63071_panel_2_page_2_section_content,
  Y63071_panel_2_page_3_section_content,
  Y63071_panel_2_page_4_section_content,
  Y63071_panel_3_page_1_section_content,
  Y63071_panel_3_page_2_section_content,
  Y63071_panel_3_page_3_section_content,
  Y63071_panel_3_page_4_section_content,
  Y63071_panel_4_page_1_section_content,
  Y63071_panel_5_page_1_section_content,

  Y63072_panel_2_page_1_section_content,
  Y63072_panel_2_page_2_section_content,
  Y63072_panel_2_page_3_section_content,
  Y63072_panel_2_page_4_section_content,
  Y63072_panel_3_page_1_section_content,
  Y63072_panel_3_page_2_section_content,
  Y63072_panel_3_page_3_section_content,
  Y63072_panel_3_page_4_section_content,
  Y63072_panel_4_page_1_section_content,
  Y63072_panel_5_page_1_section_content,
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

// const panel_1_section_data = processHtmlArray(panel_1_section_table_data);

const Y63055_panel_2_page_1_section_tags = processHtmlArray(
  Y63055_panel_2_page_1_section_content
);
const Y63055_panel_2_page_2_section_tags = processHtmlArray(
  Y63055_panel_2_page_2_section_content
);
const Y63055_panel_2_page_3_section_tags = processHtmlArray(
  Y63055_panel_2_page_3_section_content
);
const Y63055_panel_2_page_4_section_tags = processHtmlArray(
  Y63055_panel_2_page_4_section_content
);
const Y63055_panel_2_page_5_section_tags = processHtmlArray(
  Y63055_panel_2_page_5_section_content
);

const Y63055_panel_3_page_1_section_tags = processHtmlArray(
  Y63055_panel_3_page_1_section_content
);
const Y63055_panel_3_page_2_section_tags = processHtmlArray(
  Y63055_panel_3_page_2_section_content
);
const Y63055_panel_3_page_3_section_tags = processHtmlArray(
  Y63055_panel_3_page_3_section_content
);
const Y63055_panel_3_page_4_section_tags = processHtmlArray(
  Y63055_panel_3_page_4_section_content
);
const Y63055_panel_4_page_1_section_tags = processHtmlArray(
  Y63055_panel_4_page_1_section_content
);
const Y63055_panel_5_page_1_section_tags = processHtmlArray(
  Y63055_panel_5_page_1_section_content
);

const Y63056_panel_2_page_1_section_tags = processHtmlArray(
  Y63056_panel_2_page_1_section_content
);
const Y63056_panel_2_page_2_section_tags = processHtmlArray(
  Y63056_panel_2_page_2_section_content
);
const Y63056_panel_2_page_3_section_tags = processHtmlArray(
  Y63056_panel_2_page_3_section_content
);
const Y63056_panel_2_page_4_section_tags = processHtmlArray(
  Y63056_panel_2_page_4_section_content
);
const Y63056_panel_2_page_5_section_tags = processHtmlArray(
  Y63056_panel_2_page_5_section_content
);

const Y63056_panel_3_page_1_section_tags = processHtmlArray(
  Y63056_panel_3_page_1_section_content
);
const Y63056_panel_3_page_2_section_tags = processHtmlArray(
  Y63056_panel_3_page_2_section_content
);
const Y63056_panel_3_page_3_section_tags = processHtmlArray(
  Y63056_panel_3_page_3_section_content
);
const Y63056_panel_3_page_4_section_tags = processHtmlArray(
  Y63056_panel_3_page_4_section_content
);
const Y63056_panel_4_page_1_section_tags = processHtmlArray(
  Y63056_panel_4_page_1_section_content
);
const Y63056_panel_5_page_1_section_tags = processHtmlArray(
  Y63056_panel_5_page_1_section_content
);

const Y63057_panel_2_page_1_section_tags = processHtmlArray(
  Y63057_panel_2_page_1_section_content
);
const Y63057_panel_2_page_2_section_tags = processHtmlArray(
  Y63057_panel_2_page_2_section_content
);
const Y63057_panel_2_page_3_section_tags = processHtmlArray(
  Y63057_panel_2_page_3_section_content
);
const Y63057_panel_2_page_4_section_tags = processHtmlArray(
  Y63057_panel_2_page_4_section_content
);
const Y63057_panel_2_page_5_section_tags = processHtmlArray(
  Y63057_panel_2_page_5_section_content
);

const Y63057_panel_3_page_1_section_tags = processHtmlArray(
  Y63057_panel_3_page_1_section_content
);
const Y63057_panel_3_page_2_section_tags = processHtmlArray(
  Y63057_panel_3_page_2_section_content
);
const Y63057_panel_3_page_3_section_tags = processHtmlArray(
  Y63057_panel_3_page_3_section_content
);
const Y63057_panel_3_page_4_section_tags = processHtmlArray(
  Y63057_panel_3_page_4_section_content
);
const Y63057_panel_4_page_1_section_tags = processHtmlArray(
  Y63057_panel_4_page_1_section_content
);
const Y63057_panel_5_page_1_section_tags = processHtmlArray(
  Y63057_panel_5_page_1_section_content
);

const Y63058_panel_2_page_1_section_tags = processHtmlArray(
  Y63058_panel_2_page_1_section_content
);
const Y63058_panel_2_page_2_section_tags = processHtmlArray(
  Y63058_panel_2_page_2_section_content
);
const Y63058_panel_2_page_3_section_tags = processHtmlArray(
  Y63058_panel_2_page_3_section_content
);
const Y63058_panel_2_page_4_section_tags = processHtmlArray(
  Y63058_panel_2_page_4_section_content
);
const Y63058_panel_2_page_5_section_tags = processHtmlArray(
  Y63058_panel_2_page_5_section_content
);

const Y63058_panel_3_page_1_section_tags = processHtmlArray(
  Y63058_panel_3_page_1_section_content
);
const Y63058_panel_3_page_2_section_tags = processHtmlArray(
  Y63058_panel_3_page_2_section_content
);
const Y63058_panel_3_page_3_section_tags = processHtmlArray(
  Y63058_panel_3_page_3_section_content
);
const Y63058_panel_3_page_4_section_tags = processHtmlArray(
  Y63058_panel_3_page_4_section_content
);
const Y63058_panel_4_page_1_section_tags = processHtmlArray(
  Y63058_panel_4_page_1_section_content
);
const Y63058_panel_5_page_1_section_tags = processHtmlArray(
  Y63058_panel_5_page_1_section_content
);

const Y63059_panel_2_page_1_section_tags = processHtmlArray(
  Y63059_panel_2_page_1_section_content
);
const Y63059_panel_2_page_2_section_tags = processHtmlArray(
  Y63059_panel_2_page_2_section_content
);
const Y63059_panel_2_page_3_section_tags = processHtmlArray(
  Y63059_panel_2_page_3_section_content
);
const Y63059_panel_2_page_4_section_tags = processHtmlArray(
  Y63059_panel_2_page_4_section_content
);
const Y63059_panel_2_page_5_section_tags = processHtmlArray(
  Y63059_panel_2_page_5_section_content
);

const Y63059_panel_3_page_1_section_tags = processHtmlArray(
  Y63059_panel_3_page_1_section_content
);
const Y63059_panel_3_page_2_section_tags = processHtmlArray(
  Y63059_panel_3_page_2_section_content
);
const Y63059_panel_3_page_3_section_tags = processHtmlArray(
  Y63059_panel_3_page_3_section_content
);
const Y63059_panel_3_page_4_section_tags = processHtmlArray(
  Y63059_panel_3_page_4_section_content
);
const Y63059_panel_4_page_1_section_tags = processHtmlArray(
  Y63059_panel_4_page_1_section_content
);
const Y63059_panel_5_page_1_section_tags = processHtmlArray(
  Y63059_panel_5_page_1_section_content
);

const Y63060_panel_2_page_1_section_tags = processHtmlArray(
  Y63060_panel_2_page_1_section_content
);
const Y63060_panel_2_page_2_section_tags = processHtmlArray(
  Y63060_panel_2_page_2_section_content
);
const Y63060_panel_2_page_3_section_tags = processHtmlArray(
  Y63060_panel_2_page_3_section_content
);
const Y63060_panel_2_page_4_section_tags = processHtmlArray(
  Y63060_panel_2_page_4_section_content
);
const Y63060_panel_2_page_5_section_tags = processHtmlArray(
  Y63060_panel_2_page_5_section_content
);

const Y63060_panel_3_page_1_section_tags = processHtmlArray(
  Y63060_panel_3_page_1_section_content
);
const Y63060_panel_3_page_2_section_tags = processHtmlArray(
  Y63060_panel_3_page_2_section_content
);
const Y63060_panel_3_page_3_section_tags = processHtmlArray(
  Y63060_panel_3_page_3_section_content
);
const Y63060_panel_3_page_4_section_tags = processHtmlArray(
  Y63060_panel_3_page_4_section_content
);
const Y63060_panel_4_page_1_section_tags = processHtmlArray(
  Y63060_panel_4_page_1_section_content
);
const Y63060_panel_5_page_1_section_tags = processHtmlArray(
  Y63060_panel_5_page_1_section_content
);

const Y63061_panel_2_page_1_section_tags = processHtmlArray(
  Y63061_panel_2_page_1_section_content
);
const Y63061_panel_2_page_2_section_tags = processHtmlArray(
  Y63061_panel_2_page_2_section_content
);
const Y63061_panel_2_page_3_section_tags = processHtmlArray(
  Y63061_panel_2_page_3_section_content
);
const Y63061_panel_2_page_4_section_tags = processHtmlArray(
  Y63061_panel_2_page_4_section_content
);
const Y63061_panel_3_page_1_section_tags = processHtmlArray(
  Y63061_panel_3_page_1_section_content
);
const Y63061_panel_3_page_2_section_tags = processHtmlArray(
  Y63061_panel_3_page_2_section_content
);
const Y63061_panel_3_page_3_section_tags = processHtmlArray(
  Y63061_panel_3_page_3_section_content
);
const Y63061_panel_3_page_4_section_tags = processHtmlArray(
  Y63061_panel_3_page_4_section_content
);
const Y63061_panel_4_page_1_section_tags = processHtmlArray(
  Y63061_panel_4_page_1_section_content
);
const Y63061_panel_5_page_1_section_tags = processHtmlArray(
  Y63061_panel_5_page_1_section_content
);

const Y63062_panel_2_page_1_section_tags = processHtmlArray(
  Y63062_panel_2_page_1_section_content
);
const Y63062_panel_2_page_2_section_tags = processHtmlArray(
  Y63062_panel_2_page_2_section_content
);
const Y63062_panel_2_page_3_section_tags = processHtmlArray(
  Y63062_panel_2_page_3_section_content
);
const Y63062_panel_2_page_4_section_tags = processHtmlArray(
  Y63062_panel_2_page_4_section_content
);
const Y63062_panel_3_page_1_section_tags = processHtmlArray(
  Y63062_panel_3_page_1_section_content
);
const Y63062_panel_3_page_2_section_tags = processHtmlArray(
  Y63062_panel_3_page_2_section_content
);
const Y63062_panel_3_page_3_section_tags = processHtmlArray(
  Y63062_panel_3_page_3_section_content
);
const Y63062_panel_3_page_4_section_tags = processHtmlArray(
  Y63062_panel_3_page_4_section_content
);
const Y63062_panel_4_page_1_section_tags = processHtmlArray(
  Y63062_panel_4_page_1_section_content
);
const Y63062_panel_5_page_1_section_tags = processHtmlArray(
  Y63062_panel_5_page_1_section_content
);

const Y63063_panel_2_page_1_section_tags = processHtmlArray(
  Y63063_panel_2_page_1_section_content
);
const Y63063_panel_2_page_2_section_tags = processHtmlArray(
  Y63063_panel_2_page_2_section_content
);
const Y63063_panel_2_page_3_section_tags = processHtmlArray(
  Y63063_panel_2_page_3_section_content
);
const Y63063_panel_2_page_4_section_tags = processHtmlArray(
  Y63063_panel_2_page_4_section_content
);
const Y63063_panel_3_page_1_section_tags = processHtmlArray(
  Y63063_panel_3_page_1_section_content
);
const Y63063_panel_3_page_2_section_tags = processHtmlArray(
  Y63063_panel_3_page_2_section_content
);
const Y63063_panel_3_page_3_section_tags = processHtmlArray(
  Y63063_panel_3_page_3_section_content
);
const Y63063_panel_3_page_4_section_tags = processHtmlArray(
  Y63063_panel_3_page_4_section_content
);
const Y63063_panel_4_page_1_section_tags = processHtmlArray(
  Y63063_panel_4_page_1_section_content
);
const Y63063_panel_5_page_1_section_tags = processHtmlArray(
  Y63063_panel_5_page_1_section_content
);

const Y63064_panel_2_page_1_section_tags = processHtmlArray(
  Y63064_panel_2_page_1_section_content
);
const Y63064_panel_2_page_2_section_tags = processHtmlArray(
  Y63064_panel_2_page_2_section_content
);
const Y63064_panel_2_page_3_section_tags = processHtmlArray(
  Y63064_panel_2_page_3_section_content
);
const Y63064_panel_2_page_4_section_tags = processHtmlArray(
  Y63064_panel_2_page_4_section_content
);
const Y63064_panel_3_page_1_section_tags = processHtmlArray(
  Y63064_panel_3_page_1_section_content
);
const Y63064_panel_3_page_2_section_tags = processHtmlArray(
  Y63064_panel_3_page_2_section_content
);
const Y63064_panel_3_page_3_section_tags = processHtmlArray(
  Y63064_panel_3_page_3_section_content
);
const Y63064_panel_3_page_4_section_tags = processHtmlArray(
  Y63064_panel_3_page_4_section_content
);
const Y63064_panel_4_page_1_section_tags = processHtmlArray(
  Y63064_panel_4_page_1_section_content
);
const Y63064_panel_5_page_1_section_tags = processHtmlArray(
  Y63064_panel_5_page_1_section_content
);

const Y63065_panel_2_page_1_section_tags = processHtmlArray(
  Y63065_panel_2_page_1_section_content
);
const Y63065_panel_2_page_2_section_tags = processHtmlArray(
  Y63065_panel_2_page_2_section_content
);
const Y63065_panel_2_page_3_section_tags = processHtmlArray(
  Y63065_panel_2_page_3_section_content
);
const Y63065_panel_2_page_4_section_tags = processHtmlArray(
  Y63065_panel_2_page_4_section_content
);
const Y63065_panel_3_page_1_section_tags = processHtmlArray(
  Y63065_panel_3_page_1_section_content
);
const Y63065_panel_3_page_2_section_tags = processHtmlArray(
  Y63065_panel_3_page_2_section_content
);
const Y63065_panel_3_page_3_section_tags = processHtmlArray(
  Y63065_panel_3_page_3_section_content
);
const Y63065_panel_3_page_4_section_tags = processHtmlArray(
  Y63065_panel_3_page_4_section_content
);
const Y63065_panel_4_page_1_section_tags = processHtmlArray(
  Y63065_panel_4_page_1_section_content
);
const Y63065_panel_5_page_1_section_tags = processHtmlArray(
  Y63065_panel_5_page_1_section_content
);

const Y63066_panel_2_page_1_section_tags = processHtmlArray(
  Y63066_panel_2_page_1_section_content
);
const Y63066_panel_2_page_2_section_tags = processHtmlArray(
  Y63066_panel_2_page_2_section_content
);
const Y63066_panel_2_page_3_section_tags = processHtmlArray(
  Y63066_panel_2_page_3_section_content
);
const Y63066_panel_2_page_4_section_tags = processHtmlArray(
  Y63066_panel_2_page_4_section_content
);
const Y63066_panel_3_page_1_section_tags = processHtmlArray(
  Y63066_panel_3_page_1_section_content
);
const Y63066_panel_3_page_2_section_tags = processHtmlArray(
  Y63066_panel_3_page_2_section_content
);
const Y63066_panel_3_page_3_section_tags = processHtmlArray(
  Y63066_panel_3_page_3_section_content
);
const Y63066_panel_3_page_4_section_tags = processHtmlArray(
  Y63066_panel_3_page_4_section_content
);
const Y63066_panel_4_page_1_section_tags = processHtmlArray(
  Y63066_panel_4_page_1_section_content
);
const Y63066_panel_5_page_1_section_tags = processHtmlArray(
  Y63066_panel_5_page_1_section_content
);

const Y63067_panel_2_page_1_section_tags = processHtmlArray(
  Y63067_panel_2_page_1_section_content
);
const Y63067_panel_2_page_2_section_tags = processHtmlArray(
  Y63067_panel_2_page_2_section_content
);
const Y63067_panel_2_page_3_section_tags = processHtmlArray(
  Y63067_panel_2_page_3_section_content
);
const Y63067_panel_2_page_4_section_tags = processHtmlArray(
  Y63067_panel_2_page_4_section_content
);
const Y63067_panel_3_page_1_section_tags = processHtmlArray(
  Y63067_panel_3_page_1_section_content
);
const Y63067_panel_3_page_2_section_tags = processHtmlArray(
  Y63067_panel_3_page_2_section_content
);
const Y63067_panel_3_page_3_section_tags = processHtmlArray(
  Y63067_panel_3_page_3_section_content
);
const Y63067_panel_3_page_4_section_tags = processHtmlArray(
  Y63067_panel_3_page_4_section_content
);
const Y63067_panel_4_page_1_section_tags = processHtmlArray(
  Y63067_panel_4_page_1_section_content
);
const Y63067_panel_5_page_1_section_tags = processHtmlArray(
  Y63067_panel_5_page_1_section_content
);

const Y63068_panel_2_page_1_section_tags = processHtmlArray(
  Y63068_panel_2_page_1_section_content
);
const Y63068_panel_2_page_2_section_tags = processHtmlArray(
  Y63068_panel_2_page_2_section_content
);
const Y63068_panel_2_page_3_section_tags = processHtmlArray(
  Y63068_panel_2_page_3_section_content
);
const Y63068_panel_2_page_4_section_tags = processHtmlArray(
  Y63068_panel_2_page_4_section_content
);
const Y63068_panel_2_page_5_section_tags = processHtmlArray(
  Y63068_panel_2_page_5_section_content
);
const Y63068_panel_3_page_1_section_tags = processHtmlArray(
  Y63068_panel_3_page_1_section_content
);
const Y63068_panel_3_page_2_section_tags = processHtmlArray(
  Y63068_panel_3_page_2_section_content
);
const Y63068_panel_3_page_3_section_tags = processHtmlArray(
  Y63068_panel_3_page_3_section_content
);
const Y63068_panel_3_page_4_section_tags = processHtmlArray(
  Y63068_panel_3_page_4_section_content
);
const Y63068_panel_4_page_1_section_tags = processHtmlArray(
  Y63068_panel_4_page_1_section_content
);
const Y63068_panel_5_page_1_section_tags = processHtmlArray(
  Y63068_panel_5_page_1_section_content
);

const Y63069_panel_2_page_1_section_tags = processHtmlArray(
  Y63069_panel_2_page_1_section_content
);
const Y63069_panel_2_page_2_section_tags = processHtmlArray(
  Y63069_panel_2_page_2_section_content
);
const Y63069_panel_2_page_3_section_tags = processHtmlArray(
  Y63069_panel_2_page_3_section_content
);
const Y63069_panel_2_page_4_section_tags = processHtmlArray(
  Y63069_panel_2_page_4_section_content
);
const Y63069_panel_2_page_5_section_tags = processHtmlArray(
  Y63069_panel_2_page_5_section_content
);
const Y63069_panel_3_page_1_section_tags = processHtmlArray(
  Y63069_panel_3_page_1_section_content
);
const Y63069_panel_3_page_2_section_tags = processHtmlArray(
  Y63069_panel_3_page_2_section_content
);
const Y63069_panel_3_page_3_section_tags = processHtmlArray(
  Y63069_panel_3_page_3_section_content
);
const Y63069_panel_3_page_4_section_tags = processHtmlArray(
  Y63069_panel_3_page_4_section_content
);
const Y63069_panel_4_page_1_section_tags = processHtmlArray(
  Y63069_panel_4_page_1_section_content
);
const Y63069_panel_5_page_1_section_tags = processHtmlArray(
  Y63069_panel_5_page_1_section_content
);

const Y63070_panel_2_page_1_section_tags = processHtmlArray(
  Y63070_panel_2_page_1_section_content
);
const Y63070_panel_2_page_2_section_tags = processHtmlArray(
  Y63070_panel_2_page_2_section_content
);
const Y63070_panel_2_page_3_section_tags = processHtmlArray(
  Y63070_panel_2_page_3_section_content
);
const Y63070_panel_2_page_4_section_tags = processHtmlArray(
  Y63070_panel_2_page_4_section_content
);
const Y63070_panel_2_page_5_section_tags = processHtmlArray(
  Y63070_panel_2_page_5_section_content
);
const Y63070_panel_3_page_1_section_tags = processHtmlArray(
  Y63070_panel_3_page_1_section_content
);
const Y63070_panel_3_page_2_section_tags = processHtmlArray(
  Y63070_panel_3_page_2_section_content
);
const Y63070_panel_3_page_3_section_tags = processHtmlArray(
  Y63070_panel_3_page_3_section_content
);
const Y63070_panel_3_page_4_section_tags = processHtmlArray(
  Y63070_panel_3_page_4_section_content
);
const Y63070_panel_4_page_1_section_tags = processHtmlArray(
  Y63070_panel_4_page_1_section_content
);
const Y63070_panel_5_page_1_section_tags = processHtmlArray(
  Y63070_panel_5_page_1_section_content
);

const Y63071_panel_2_page_1_section_tags = processHtmlArray(
  Y63071_panel_2_page_1_section_content
);
const Y63071_panel_2_page_2_section_tags = processHtmlArray(
  Y63071_panel_2_page_2_section_content
);
const Y63071_panel_2_page_3_section_tags = processHtmlArray(
  Y63071_panel_2_page_3_section_content
);
const Y63071_panel_2_page_4_section_tags = processHtmlArray(
  Y63071_panel_2_page_4_section_content
);
const Y63071_panel_3_page_1_section_tags = processHtmlArray(
  Y63071_panel_3_page_1_section_content
);
const Y63071_panel_3_page_2_section_tags = processHtmlArray(
  Y63071_panel_3_page_2_section_content
);
const Y63071_panel_3_page_3_section_tags = processHtmlArray(
  Y63071_panel_3_page_3_section_content
);
const Y63071_panel_3_page_4_section_tags = processHtmlArray(
  Y63071_panel_3_page_4_section_content
);
const Y63071_panel_4_page_1_section_tags = processHtmlArray(
  Y63071_panel_4_page_1_section_content
);
const Y63071_panel_5_page_1_section_tags = processHtmlArray(
  Y63071_panel_5_page_1_section_content
);

const Y63072_panel_2_page_1_section_tags = processHtmlArray(
  Y63072_panel_2_page_1_section_content
);
const Y63072_panel_2_page_2_section_tags = processHtmlArray(
  Y63072_panel_2_page_2_section_content
);
const Y63072_panel_2_page_3_section_tags = processHtmlArray(
  Y63072_panel_2_page_3_section_content
);
const Y63072_panel_2_page_4_section_tags = processHtmlArray(
  Y63072_panel_2_page_4_section_content
);
const Y63072_panel_3_page_1_section_tags = processHtmlArray(
  Y63072_panel_3_page_1_section_content
);
const Y63072_panel_3_page_2_section_tags = processHtmlArray(
  Y63072_panel_3_page_2_section_content
);
const Y63072_panel_3_page_3_section_tags = processHtmlArray(
  Y63072_panel_3_page_3_section_content
);
const Y63072_panel_3_page_4_section_tags = processHtmlArray(
  Y63072_panel_3_page_4_section_content
);
const Y63072_panel_4_page_1_section_tags = processHtmlArray(
  Y63072_panel_4_page_1_section_content
);
const Y63072_panel_5_page_1_section_tags = processHtmlArray(
  Y63072_panel_5_page_1_section_content
);
// console.log(Y63055_panel_2_page_1_section_tags);
// console.log(Y63055_panel_2_page_2_section_tags);
// console.log(Y63055_panel_2_page_3_section_tags);
// console.log(Y63055_panel_2_page_4_section_tags);
// console.log(Y63055_panel_2_page_5_section_tags);

// console.log(Y63055_panel_3_page_1_section_tags);
// console.log(Y63055_panel_3_page_2_section_tags);
// console.log(Y63055_panel_3_page_3_section_tags);
// console.log(Y63055_panel_3_page_4_section_tags);
// console.log(Y63055_panel_4_page_1_section_tags);
// console.log(Y63055_panel_5_page_1_section_tags);

// const panel_1_section_table_data_array = splitHtmlStringIntoArray(
//   panel_1_section_data.taggedContent
// );

// console.log(panel_1_section_table_data_array);
module.exports = {
  Y63055_panel_2_page_1_section_tags,
  Y63055_panel_2_page_2_section_tags,
  Y63055_panel_2_page_3_section_tags,
  Y63055_panel_2_page_4_section_tags,
  Y63055_panel_2_page_5_section_tags,
  Y63055_panel_3_page_1_section_tags,
  Y63055_panel_3_page_2_section_tags,
  Y63055_panel_3_page_3_section_tags,
  Y63055_panel_3_page_4_section_tags,
  Y63055_panel_4_page_1_section_tags,
  Y63055_panel_5_page_1_section_tags,

  Y63056_panel_2_page_1_section_tags,
  Y63056_panel_2_page_2_section_tags,
  Y63056_panel_2_page_3_section_tags,
  Y63056_panel_2_page_4_section_tags,
  Y63056_panel_2_page_5_section_tags,
  Y63056_panel_3_page_1_section_tags,
  Y63056_panel_3_page_2_section_tags,
  Y63056_panel_3_page_3_section_tags,
  Y63056_panel_3_page_4_section_tags,
  Y63056_panel_4_page_1_section_tags,
  Y63056_panel_5_page_1_section_tags,

  Y63057_panel_2_page_1_section_tags,
  Y63057_panel_2_page_2_section_tags,
  Y63057_panel_2_page_3_section_tags,
  Y63057_panel_2_page_4_section_tags,
  Y63057_panel_2_page_5_section_tags,
  Y63057_panel_3_page_1_section_tags,
  Y63057_panel_3_page_2_section_tags,
  Y63057_panel_3_page_3_section_tags,
  Y63057_panel_3_page_4_section_tags,
  Y63057_panel_4_page_1_section_tags,
  Y63057_panel_5_page_1_section_tags,

  Y63058_panel_2_page_1_section_tags,
  Y63058_panel_2_page_2_section_tags,
  Y63058_panel_2_page_3_section_tags,
  Y63058_panel_2_page_4_section_tags,
  Y63058_panel_2_page_5_section_tags,
  Y63058_panel_3_page_1_section_tags,
  Y63058_panel_3_page_2_section_tags,
  Y63058_panel_3_page_3_section_tags,
  Y63058_panel_3_page_4_section_tags,
  Y63058_panel_4_page_1_section_tags,
  Y63058_panel_5_page_1_section_tags,

  Y63059_panel_2_page_1_section_tags,
  Y63059_panel_2_page_2_section_tags,
  Y63059_panel_2_page_3_section_tags,
  Y63059_panel_2_page_4_section_tags,
  Y63059_panel_2_page_5_section_tags,
  Y63059_panel_3_page_1_section_tags,
  Y63059_panel_3_page_2_section_tags,
  Y63059_panel_3_page_3_section_tags,
  Y63059_panel_3_page_4_section_tags,
  Y63059_panel_4_page_1_section_tags,
  Y63059_panel_5_page_1_section_tags,

  Y63060_panel_2_page_1_section_tags,
  Y63060_panel_2_page_2_section_tags,
  Y63060_panel_2_page_3_section_tags,
  Y63060_panel_2_page_4_section_tags,
  Y63060_panel_2_page_5_section_tags,
  Y63060_panel_3_page_1_section_tags,
  Y63060_panel_3_page_2_section_tags,
  Y63060_panel_3_page_3_section_tags,
  Y63060_panel_3_page_4_section_tags,
  Y63060_panel_4_page_1_section_tags,
  Y63060_panel_5_page_1_section_tags,

  Y63061_panel_2_page_1_section_tags,
  Y63061_panel_2_page_2_section_tags,
  Y63061_panel_2_page_3_section_tags,
  Y63061_panel_2_page_4_section_tags,
  Y63061_panel_3_page_1_section_tags,
  Y63061_panel_3_page_2_section_tags,
  Y63061_panel_3_page_3_section_tags,
  Y63061_panel_3_page_4_section_tags,
  Y63061_panel_4_page_1_section_tags,
  Y63061_panel_5_page_1_section_tags,

  Y63062_panel_2_page_1_section_tags,
  Y63062_panel_2_page_2_section_tags,
  Y63062_panel_2_page_3_section_tags,
  Y63062_panel_2_page_4_section_tags,
  Y63062_panel_3_page_1_section_tags,
  Y63062_panel_3_page_2_section_tags,
  Y63062_panel_3_page_3_section_tags,
  Y63062_panel_3_page_4_section_tags,
  Y63062_panel_4_page_1_section_tags,
  Y63062_panel_5_page_1_section_tags,

  Y63063_panel_2_page_1_section_tags,
  Y63063_panel_2_page_2_section_tags,
  Y63063_panel_2_page_3_section_tags,
  Y63063_panel_2_page_4_section_tags,
  Y63063_panel_3_page_1_section_tags,
  Y63063_panel_3_page_2_section_tags,
  Y63063_panel_3_page_3_section_tags,
  Y63063_panel_3_page_4_section_tags,
  Y63063_panel_4_page_1_section_tags,
  Y63063_panel_5_page_1_section_tags,

  Y63064_panel_2_page_1_section_tags,
  Y63064_panel_2_page_2_section_tags,
  Y63064_panel_2_page_3_section_tags,
  Y63064_panel_2_page_4_section_tags,
  Y63064_panel_3_page_1_section_tags,
  Y63064_panel_3_page_2_section_tags,
  Y63064_panel_3_page_3_section_tags,
  Y63064_panel_3_page_4_section_tags,
  Y63064_panel_4_page_1_section_tags,
  Y63064_panel_5_page_1_section_tags,

  Y63065_panel_2_page_1_section_tags,
  Y63065_panel_2_page_2_section_tags,
  Y63065_panel_2_page_3_section_tags,
  Y63065_panel_2_page_4_section_tags,
  Y63065_panel_3_page_1_section_tags,
  Y63065_panel_3_page_2_section_tags,
  Y63065_panel_3_page_3_section_tags,
  Y63065_panel_3_page_4_section_tags,
  Y63065_panel_4_page_1_section_tags,
  Y63065_panel_5_page_1_section_tags,

  Y63066_panel_2_page_1_section_tags,
  Y63066_panel_2_page_2_section_tags,
  Y63066_panel_2_page_3_section_tags,
  Y63066_panel_2_page_4_section_tags,
  Y63066_panel_3_page_1_section_tags,
  Y63066_panel_3_page_2_section_tags,
  Y63066_panel_3_page_3_section_tags,
  Y63066_panel_3_page_4_section_tags,
  Y63066_panel_4_page_1_section_tags,
  Y63066_panel_5_page_1_section_tags,

  Y63067_panel_2_page_1_section_tags,
  Y63067_panel_2_page_2_section_tags,
  Y63067_panel_2_page_3_section_tags,
  Y63067_panel_2_page_4_section_tags,
  Y63067_panel_3_page_1_section_tags,
  Y63067_panel_3_page_2_section_tags,
  Y63067_panel_3_page_3_section_tags,
  Y63067_panel_3_page_4_section_tags,
  Y63067_panel_4_page_1_section_tags,
  Y63067_panel_5_page_1_section_tags,

  Y63068_panel_2_page_1_section_tags,
  Y63068_panel_2_page_2_section_tags,
  Y63068_panel_2_page_3_section_tags,
  Y63068_panel_2_page_4_section_tags,
  Y63068_panel_2_page_5_section_tags,
  Y63068_panel_3_page_1_section_tags,
  Y63068_panel_3_page_2_section_tags,
  Y63068_panel_3_page_3_section_tags,
  Y63068_panel_3_page_4_section_tags,
  Y63068_panel_4_page_1_section_tags,
  Y63068_panel_5_page_1_section_tags,

  Y63069_panel_2_page_1_section_tags,
  Y63069_panel_2_page_2_section_tags,
  Y63069_panel_2_page_3_section_tags,
  Y63069_panel_2_page_4_section_tags,
  Y63069_panel_2_page_5_section_tags,
  Y63069_panel_3_page_1_section_tags,
  Y63069_panel_3_page_2_section_tags,
  Y63069_panel_3_page_3_section_tags,
  Y63069_panel_3_page_4_section_tags,
  Y63069_panel_4_page_1_section_tags,
  Y63069_panel_5_page_1_section_tags,

  Y63070_panel_2_page_1_section_tags,
  Y63070_panel_2_page_2_section_tags,
  Y63070_panel_2_page_3_section_tags,
  Y63070_panel_2_page_4_section_tags,
  Y63070_panel_2_page_5_section_tags,
  Y63070_panel_3_page_1_section_tags,
  Y63070_panel_3_page_2_section_tags,
  Y63070_panel_3_page_3_section_tags,
  Y63070_panel_3_page_4_section_tags,
  Y63070_panel_4_page_1_section_tags,
  Y63070_panel_5_page_1_section_tags,

  Y63071_panel_2_page_1_section_tags,
  Y63071_panel_2_page_2_section_tags,
  Y63071_panel_2_page_3_section_tags,
  Y63071_panel_2_page_4_section_tags,
  Y63071_panel_3_page_1_section_tags,
  Y63071_panel_3_page_2_section_tags,
  Y63071_panel_3_page_3_section_tags,
  Y63071_panel_3_page_4_section_tags,
  Y63071_panel_4_page_1_section_tags,
  Y63071_panel_5_page_1_section_tags,

  Y63072_panel_2_page_1_section_tags,
  Y63072_panel_2_page_2_section_tags,
  Y63072_panel_2_page_3_section_tags,
  Y63072_panel_2_page_4_section_tags,
  Y63072_panel_3_page_1_section_tags,
  Y63072_panel_3_page_2_section_tags,
  Y63072_panel_3_page_3_section_tags,
  Y63072_panel_3_page_4_section_tags,
  Y63072_panel_4_page_1_section_tags,
  Y63072_panel_5_page_1_section_tags,
};

console.log(module.exports);
