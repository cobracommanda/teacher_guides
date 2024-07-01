const Y63055_page_1_section_data = require("./indd_data/Y63055_TG_G6_U1/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63056_page_1_section_data = require("./indd_data/Y63056_TG_G6_U1/ELA_Strategies_1/ELA_Strategies_1_1.js");

function findParagraphsByStyle(paragraphData, styleName) {
  return paragraphData.filter((paragraph) => paragraph.styleName === styleName);
}

const styleName = "Complex-chart-body";
const Y63055_lexile = findParagraphsByStyle(
  Y63055_page_1_section_data,
  styleName
);

const Y63056_lexile = findParagraphsByStyle(
  Y63056_page_1_section_data,
  styleName
);
console.log(Y63055_lexile[0].content);
console.log(Y63056_lexile[0].content);
