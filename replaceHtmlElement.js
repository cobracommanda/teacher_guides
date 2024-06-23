const cheerio = require("cheerio");

function replaceLastHtmlElement(htmlString, newTag) {
  const regex = /(<[^>]+>[^<]*<\/[^>]+>)\s*$/;
  const match = htmlString.match(regex);

  if (match) {
    return htmlString.replace(regex, newTag);
  } else {
    return htmlString;
  }
}

const htmlString =
  '<h2 class="Lesson_A-hd">Read Introduction and Chapter 1 <br><span class="standards">RI.6.2, W.6.8, SL.6.1, SL.6.2, SL.6.4b</span></h2><h3 class="blue">Preview and Make Predictions</h3><p class="Lesson_Body-txt">Invite students to flip through the book and view the photographs and illustrations, or display the e-book and preview the pages together. Then have students read the title of the book and the Table of Contents. Invite a volunteer to read aloud the book description on the back cover.</p><p><span class="teacher-talk"><span class="bold">Ask:</span><span class="italic"> Who do you predict Isaac Newton was and why he’s important to science? What evidence help you make that prediction?</span></span></p><h3 class="blue">Set a Purpose</h3><p><span class="teacher-talk"><span class="bold">Say:</span><span class="italic"> We know that informational texts present information in an accurate and organized way. As you read the Introduction and Chapter 1, use self-stick notes to identify key details about Isaac Newton. Remember to use the text and graphic features to support and add to your understanding of  Isaac Newton’s life and work.</span></span></p><p class="Lesson_Body-txt">If students need more support to access the text, use the Scaffolded Preview provided.</p><h3 class="blue">Summarize Key Details: Think and Write Together</h3><p class="Lesson_Body-txt">Invite students to list the key details in the Introduction and Chapter 1. As a group, create a Key Details chart. Then work together to construct a summary. If students need more support to summarize the text, use the lesson on page 3 of this guide.</p><h4 class="table_label">Sample Key Details Chart</h4>';

const newTag = '<h4 class="table_label">Replaced Key Details Chart</h4>';
const result = replaceLastHtmlElement(htmlString, newTag);
console.log(wrappedContents);
