const fs = require("fs");
const path = require("path");
//  ####################################################################################################################
//  ##########################################      UNIT 1      ########################################################
//  ####################################################################################################################
const Y63055_page_1_section_data = require("./indd_data/Y63055_TG_G6_U1/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63056_page_1_section_data = require("./indd_data/Y63056_TG_G6_U1/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63057_page_1_ela_section_data = require("./indd_data/Y63057_TG_G6_U1/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63057_page_1_content_section_data = require("./indd_data/Y63057_TG_G6_U1/Content_focus_1/Content_focus_1_1.js");
const Y63057_page_1_aside_data = require("./indd_data/Y63057_TG_G6_U1/Related_resources_1/Related_resources_1_1.js");
const Y63058_page_1_ela_section_data = require("./indd_data/Y63058_TG_G6_U1/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63058_page_1_content_section_data = require("./indd_data/Y63058_TG_G6_U1/Content_focus_1/Content_focus_1_1.js");
const Y63058_page_1_aside_data = require("./indd_data/Y63058_TG_G6_U1/Related_resources_1/Related_resources_1_1.js");
const Y63060_page_1_aside_data = require("./indd_data/Y63060_TG_G6_U1/Related_resources_1/Related_resources_1_1.js");
//  ####################################################################################################################
//  ##########################################      UNIT 2      ########################################################
//  ####################################################################################################################
const Y63061_page_1_section_data = require("./indd_data/Y63061_TG_G6_U2/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63061_page_1_aside_data = require("./indd_data/Y63061_TG_G6_U2/Related_resources_1/Related_resources_1_1.js");
const Y63062_page_1_section_data = require("./indd_data/Y63062_TG_G6_U2/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63062_page_1_aside_data = require("./indd_data/Y63062_TG_G6_U2/Related_resources_1/Related_resources_1_1.js");
const Y63063_page_1_section_data = require("./indd_data/Y63063_TG_G6_U2/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63063_page_1_aside_data = require("./indd_data/Y63063_TG_G6_U2/Related_resources_1/Related_resources_1_1.js");
const Y63064_page_1_section_data = require("./indd_data/Y63064_TG_G6_U2/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63064_page_1_aside_data = require("./indd_data/Y63064_TG_G6_U2/Related_resources_1/Related_resources_1_1.js");
const Y63065_page_1_section_data = require("./indd_data/Y63065_TG_G6_U2/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63065_page_1_aside_data = require("./indd_data/Y63065_TG_G6_U2/Related_resources_1/Related_resources_1_1.js");
const Y63066_page_1_section_data = require("./indd_data/Y63066_TG_G6_U2/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63066_page_1_aside_data = require("./indd_data/Y63066_TG_G6_U2/Related_resources_1/Related_resources_1_1.js");
//  ####################################################################################################################
//  ##########################################      UNIT 3      ########################################################
//  ####################################################################################################################
const Y63067_page_1_section_data = require("./indd_data/Y63067_TG_G6_U3/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63067_page_1_aside_data = require("./indd_data/Y63067_TG_G6_U3/Related_resources_1/Related_resources_1_1.js");
const Y63068_page_1_section_data = require("./indd_data/Y63068_TG_G6_U3/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63068_page_1_aside_data = require("./indd_data/Y63068_TG_G6_U3/Related_resources_1/Related_resources_1_1.js");
const Y63069_page_1_section_data = require("./indd_data/Y63069_TG_G6_U3/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63069_page_1_aside_data = require("./indd_data/Y63069_TG_G6_U3/Related_resources_1/Related_resources_1_1.js");
const Y63070_page_1_section_data = require("./indd_data/Y63070_TG_G6_U3/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63070_page_1_aside_data = require("./indd_data/Y63070_TG_G6_U3/Related_resources_1/Related_resources_1_1.js");
const Y63071_page_1_section_data = require("./indd_data/Y63071_TG_G6_U3/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63071_page_1_aside_data = require("./indd_data/Y63071_TG_G6_U3/Related_resources_1/Related_resources_1_1.js");
const Y63072_page_1_section_data = require("./indd_data/Y63072_TG_G6_U3/ELA_Strategies_1/ELA_Strategies_1_1.js");
const Y63072_page_1_aside_data = require("./indd_data/Y63072_TG_G6_U3/Related_resources_1/Related_resources_1_1.js");

function createDynamicLists(paragraphData, styleToTagMapping, wrapped) {
  const replacements = {
    SINGLE_RIGHT_QUOTE: "’",
    SINGLE_LEFT_QUOTE: "‘",
    DOUBLE_LEFT_QUOTE: "“",
    DOUBLE_RIGHT_QUOTE: "”",
    EN_DASH: "–",
    EM_DASH: "—",
    FORCED_LINE_BREAK: "<br>",
    NONBREAKING_SPACE: "&nbsp;",
    ELLIPSIS: "…",
    INDENT_HERE_TAB: "   ",
    REGISTERED_TRADEMARK: "&reg;",
  };

  function applyCharacterStyles(content, characterStyles) {
    if (!characterStyles || characterStyles.length === 0) {
      return content;
    }

    let styledContent = "";
    let currentStyle = characterStyles[0].style;
    let currentClassName =
      currentStyle === "i"
        ? "italic"
        : currentStyle === "b"
        ? "bold"
        : currentStyle;
    let currentSpan = currentClassName
      ? `<span class="${currentClassName}">`
      : "";

    for (let i = 0; i < characterStyles.length; i++) {
      let { character, style } = characterStyles[i];
      let className = style === "i" ? "italic" : style === "b" ? "bold" : style;

      character = replacements[character] || character;

      if (style !== currentStyle) {
        if (currentClassName) {
          currentSpan += `</span>`;
        }
        styledContent += currentSpan;
        currentStyle = style;
        currentClassName = className;
        currentSpan = currentClassName
          ? `<span class="${currentClassName}">${character}`
          : character;
      } else {
        currentSpan += character;
      }
    }
    if (currentClassName) {
      currentSpan += `</span>`;
    }

    styledContent += currentSpan;
    styledContent = styledContent.replace(/<span[^>]*>\s*<\/span>/g, "");
    return styledContent;
  }

  let listHTML = "";
  let currentListTag = "";
  let currentListOpen = false;

  const styleMap = Object.fromEntries(
    styleToTagMapping.map(([style, tag, heading]) => [style, { tag, heading }])
  );

  for (let paragraph of paragraphData) {
    let tagInfo = styleMap[paragraph.styleName];
    if (!tagInfo) continue;

    let { tag, heading } = tagInfo;
    let content = paragraph.content.replace(/\r/g, ""); // Remove all \r characters
    content = content.replace(/[\x00-\x1F\x7F]/g, ""); // Remove non-printable control characters

    if (paragraph.characterStyles && paragraph.characterStyles.length > 0) {
      content = applyCharacterStyles(content, paragraph.characterStyles);
    }

    if (tag === "ol" || tag === "ul") {
      if (currentListOpen) {
        listHTML += `</${currentListTag}>`;
      }
      listHTML += heading
        ? `<${heading}>${content}</${heading}><${tag}>`
        : `<${tag}>${content}</${tag}>`;
      currentListTag = tag;
      currentListOpen = true;
    } else if (tag === "li" && currentListOpen) {
      listHTML += `<li>${content}</li>`;
    }
  }

  if (currentListOpen) {
    listHTML += `</${currentListTag}>`;
  }

  // Filter out empty <ul> and <ol> elements
  listHTML = listHTML.replace(/<h2>[\s\S]*?<\/h2><(ul|ol)><\/(ul|ol)>/g, "");
  listHTML = listHTML.replace(/<h3>[\s\S]*?<\/h3><(ul|ol)><\/(ul|ol)>/g, "");
  listHTML = listHTML.replace(/<h4>[\s\S]*?<\/h4><(ul|ol)><\/(ul|ol)>/g, "");

  if (wrapped) {
    return `<table border="1"><td>${listHTML}</td></table>`;
  }

  return listHTML;
}

// Style to tag mapping
const Y63055_page_1_aside_styleTagMapping = [
  ["Resources-subhd", "ul", "h4"],
  ["Resources-list", "li"],
];
const Y63055_page_1_section_styleTagMapping = [
  ["Skill-hd", "ul", "h2"],
  ["Skill-list", "li"],
];

const Y63055_page_1_aside = createDynamicLists(
  Y63055_page_1_section_data,
  Y63055_page_1_aside_styleTagMapping,
  false
);

const Y63055_page_1_section = createDynamicLists(
  Y63055_page_1_section_data,
  Y63055_page_1_section_styleTagMapping,
  false
);

const Y63056_page_1_aside_styleTagMapping = [
  ["Resources-subhd", "ul", "h4"],
  ["Resources-list", "li"],
];
const Y63056_page_1_section_styleTagMapping = [
  ["Skill-hd", "ul", "h2"],
  ["Skill-list", "li"],
];

// Execute the function with the sample data and style-to-tag mapping
const Y63056_page_1_aside = createDynamicLists(
  Y63056_page_1_section_data,
  Y63056_page_1_aside_styleTagMapping,
  false
);

const Y63056_page_1_section = createDynamicLists(
  Y63056_page_1_section_data,
  Y63056_page_1_section_styleTagMapping,
  false
);

const Y63057_page_1_ela_section_styleTagMapping = [
  ["ELA_Strategies_B-hd", "ul", "h2"],
  ["ELA_Strategies_Bullets", "li"],
];

const Y63057_page_1_ela_section = createDynamicLists(
  Y63057_page_1_ela_section_data,
  Y63057_page_1_ela_section_styleTagMapping,
  false
);

const Y63057_page_1_content_section_styleTagMapping = [
  ["Content_focus_A-hd", "ul", "h2"],
  ["Content_focus_Bullets", "li"],
];

// Execute the function with the sample data and style-to-tag mapping
const Y63057_page_1_content_section = createDynamicLists(
  Y63057_page_1_content_section_data,
  Y63057_page_1_content_section_styleTagMapping,
  false
);

const Y63057_page_1_aside_styleTagMapping = [
  ["Related_resources_B-hd", "ul", "h2"],
  ["Related_resources_Bullets", "li"],
];

// Execute the function with the sample data and style-to-tag mapping
const Y63057_page_1_aside = createDynamicLists(
  Y63057_page_1_aside_data,
  Y63057_page_1_aside_styleTagMapping,
  false
);

const Y63058_page_1_ela_section_styleTagMapping = [
  ["ELA_Strategies_B-hd", "ul", "h2"],
  ["ELA_Strategies_Bullets", "li"],
];

const Y63058_page_1_ela_section = createDynamicLists(
  Y63058_page_1_ela_section_data,
  Y63058_page_1_ela_section_styleTagMapping,
  false
);

const Y63058_page_1_content_section_styleTagMapping = [
  ["Content_focus_A-hd", "ul", "h2"],
  ["Content_focus_Bullets", "li"],
];

// Execute the function with the sample data and style-to-tag mapping
const Y63058_page_1_content_section = createDynamicLists(
  Y63058_page_1_content_section_data,
  Y63058_page_1_content_section_styleTagMapping,
  false
);

const Y63058_page_1_aside_styleTagMapping = [
  ["Related_resources_B-hd", "ul", "h2"],
  ["Related_resources_Bullets", "li"],
];

// Execute the function with the sample data and style-to-tag mapping
const Y63058_page_1_aside = createDynamicLists(
  Y63058_page_1_aside_data,
  Y63058_page_1_aside_styleTagMapping,
  false
);
const Y63060_page_1_aside_styleTagMapping = [
  ["Related_resources_B-hd", "ul", "h2"],
  ["Related_resources_Bullets", "li"],
];

// Execute the function with the sample data and style-to-tag mapping
const Y63060_page_1_aside = createDynamicLists(
  Y63060_page_1_aside_data,
  Y63060_page_1_aside_styleTagMapping,
  false
);

const related_resource_aside_styleTagMapping = [
  ["Related_resources_B-hd", "ul", "h4"],
  ["Related_resources_Bullets", "li"],
];

const ELA_Strategies_section_styleTagMapping = [
  ["ELA_Strategies_B-hd", "ul", "h4"],
  ["ELA_Strategies_Bullets", "li"],
];

const Y63061_page_1_aside = createDynamicLists(
  Y63061_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63061_page_1_ela_section = createDynamicLists(
  Y63061_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63062_page_1_aside = createDynamicLists(
  Y63062_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63062_page_1_ela_section = createDynamicLists(
  Y63062_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63063_page_1_aside = createDynamicLists(
  Y63063_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63063_page_1_ela_section = createDynamicLists(
  Y63063_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63064_page_1_aside = createDynamicLists(
  Y63064_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63064_page_1_ela_section = createDynamicLists(
  Y63064_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63065_page_1_aside = createDynamicLists(
  Y63065_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63065_page_1_ela_section = createDynamicLists(
  Y63065_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63066_page_1_aside = createDynamicLists(
  Y63066_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63066_page_1_ela_section = createDynamicLists(
  Y63066_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63067_page_1_aside = createDynamicLists(
  Y63067_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63067_page_1_ela_section = createDynamicLists(
  Y63067_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63068_page_1_aside = createDynamicLists(
  Y63068_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63068_page_1_ela_section = createDynamicLists(
  Y63068_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63069_page_1_aside = createDynamicLists(
  Y63069_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63069_page_1_ela_section = createDynamicLists(
  Y63069_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63070_page_1_aside = createDynamicLists(
  Y63070_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63070_page_1_ela_section = createDynamicLists(
  Y63070_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63071_page_1_aside = createDynamicLists(
  Y63071_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63071_page_1_ela_section = createDynamicLists(
  Y63071_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

const Y63072_page_1_aside = createDynamicLists(
  Y63072_page_1_aside_data,
  related_resource_aside_styleTagMapping,
  false
);
const Y63072_page_1_ela_section = createDynamicLists(
  Y63072_page_1_section_data,
  ELA_Strategies_section_styleTagMapping,
  false
);

console.log(Y63067_page_1_aside);
console.log(Y63067_page_1_ela_section);
console.log(Y63068_page_1_aside);
console.log(Y63068_page_1_ela_section);
console.log(Y63069_page_1_aside);
console.log(Y63069_page_1_ela_section);
console.log(Y63070_page_1_aside);
console.log(Y63070_page_1_ela_section);
console.log(Y63071_page_1_aside);
console.log(Y63071_page_1_ela_section);
console.log(Y63072_page_1_aside);
console.log(Y63072_page_1_ela_section);

module.exports = {
  createDynamicLists,
  Y63055_page_1_aside,
  Y63055_page_1_section,
  Y63056_page_1_aside,
  Y63056_page_1_section,
  Y63057_page_1_ela_section_data,
  Y63057_page_1_content_section,
  Y63057_page_1_aside,
  Y63058_page_1_ela_section,
  Y63058_page_1_content_section,
  Y63058_page_1_aside,
  Y63060_page_1_aside,
  Y63061_page_1_aside,
  Y63061_page_1_ela_section,
  Y63062_page_1_aside,
  Y63062_page_1_ela_section,
  Y63063_page_1_aside,
  Y63063_page_1_ela_section,
  Y63064_page_1_aside,
  Y63064_page_1_ela_section,
  Y63065_page_1_aside,
  Y63065_page_1_ela_section,
  Y63066_page_1_aside,
  Y63066_page_1_ela_section,
  Y63067_page_1_aside,
  Y63067_page_1_ela_section,
  Y63068_page_1_aside,
  Y63068_page_1_ela_section,
  Y63069_page_1_aside,
  Y63069_page_1_ela_section,
  Y63070_page_1_aside,
  Y63070_page_1_ela_section,
  Y63071_page_1_aside,
  Y63071_page_1_ela_section,
  Y63072_page_1_aside,
  Y63072_page_1_ela_section,
};

// console.log(module.exports);
