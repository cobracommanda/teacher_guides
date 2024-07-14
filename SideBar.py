class GenericSidebarTable:
    def __init__(self, data, story_index, table_header, table_header_style='Generic_sidebar_A-hd'):
        self.data = data
        self.story_index = story_index
        self.table_header_paragraph_style = table_header_style
        self.table_header = table_header

    def collect_generic_sidebar_paragraphs(self):
        paragraphs = []
        for style, items in self.data["paragraph"].items():
            if style.startswith("Generic_sidebar_"):
                for item in items:
                    paragraphs.append({
                        "style": style,
                        "storyIndex": item["storyIndex"],
                        "paragraphIndex": item["paragraphIndex"],
                        "pageNumber": item["pageNumber"],
                        "contents": item["contents"]
                    })
        return sorted(paragraphs, key=lambda x: (x["storyIndex"], x["paragraphIndex"]))

    def format_content_as_table(self, paragraphs):
        output = f"<table>\n<thead><th>{self.table_header}</th></thead><tr><td>\n"
        for paragraph in paragraphs:
            if paragraph['storyIndex'] == self.story_index:  # Filter by specific Story Index
                if paragraph['style'] == self.table_header_paragraph_style:
                    if paragraph['contents'] != self.table_header:  # Avoid duplicate header
                        output += f"<p><em>{paragraph['contents']}</em></p>\n"
                elif paragraph['style'].endswith('-hd'):
                    output += f"<p><strong>{paragraph['contents']}</strong></p>\n"
                else:
                    output += f"<p>{paragraph['contents']}</p>\n"
        output += "</td></tr>\n</table>"
        return output

    def generate_table(self):
        paragraphs = self.collect_generic_sidebar_paragraphs()
        return self.format_content_as_table(paragraphs)

    def write_table_to_file(self, formatted_table, file_path):
        with open(file_path, 'w') as file:
            file.write(formatted_table)


# Loop through each item in "Generic_sidebar_A-hd" and create a table for each
json_data = {
    "paragraph": {
  "Generic_sidebar_A-hd": [
    {
      "contents": "Scaffolded Preview for ELs and Struggling Readers",
      "storyIndex": 0,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Scaffolded Preview for ELs and Struggling Readers",
      "storyIndex": 2,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Scaffolded Preview for ELs and Struggling Readers",
      "storyIndex": 3,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Generic_sidebar_Body-txt": [
    {
      "contents": "Support students to access the text by orally introducing academic vocabulary, language structures, and concepts.",
      "storyIndex": 0,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Support students to access the text by orally introducing academic vocabulary, language structures, and concepts.",
      "storyIndex": 2,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Support students to access the text by orally introducing academic vocabulary, language structures, and concepts.",
      "storyIndex": 3,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Support students to dig deeper into the text. Choose one or more of these close reading options, or choose an alternate focus that addresses your students needs.",
      "storyIndex": 6,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 7,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 78,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Use these questions to extend close reading or challenge students who do not need modeling or differentiated practice.",
      "storyIndex": 79,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Question: What makes Robert Marshall Allans and Anna Eisenmengers experiences similar and different?",
      "storyIndex": 79,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Answer: They were similar because they both cared for others during the war. They were different because Eisenmenger was at home while Allan was on the battlefield.",
      "storyIndex": 79,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Text Evidence: My job was to go out at night to the regimental aid post and remove the wounded. (p. 9) During the first years this struggle was waged mainly against the want and misery of others. (p. 13)",
      "storyIndex": 79,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Question: What was a drawback of fighting in the trenches during the war?",
      "storyIndex": 79,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Answer: The trenches filled with water and made it hard for soldiers to use them.",
      "storyIndex": 79,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Text Evidence: In my line of trenches the water was three feet deep. (p. 9)",
      "storyIndex": 79,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "Question: On June 28, 1919, the Treaty of Versailles was signed. What does the word treaty mean?",
      "storyIndex": 79,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "Answer: A treaty is an agreement made by two or more nations, often after a war has ended. ",
      "storyIndex": 79,
      "paragraphIndex": 12,
      "pageNumber": "N/A"
    },
    {
      "contents": "Text Evidence: The Treaty of Versailles was the treaty between the Allies and Germany. It mandated that Germany take full responsibility for starting the war in 1914 (p. 30)",
      "storyIndex": 79,
      "paragraphIndex": 13,
      "pageNumber": "N/A"
    },
    {
      "contents": "Visit benchmarkuniverse.com for additional interactive learning activities.",
      "storyIndex": 85,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    }
  ],
  "Generic_sidebar_C-hd": [
    {
      "contents": "Pages 23. These pages introduce the book and its purpose. The text describes the reasons World War I began.",
      "storyIndex": 0,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Pages 47. How can you tell when one letter begins and ends? What are most of Allans letters about, and when were they written?",
      "storyIndex": 0,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Pages 1011. The letters give the reader a sense of what the war was like. What are the most memorable parts of his letters?",
      "storyIndex": 0,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Pages 1213. These pages introduce Anna Eisenmenger. Which of Eisenmengers relatives fought during the war?",
      "storyIndex": 2,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Pages 1417. On these pages, Eisenmengers diary entries tell the story of what happened to her family and the challenges they faced toward the end of the war. What are some details that made their experiences difficult to bear?",
      "storyIndex": 2,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Pages 1821. These pages ­describe the extreme hunger and desperation the family feels. What are some details of their experiences?",
      "storyIndex": 2,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Pages 2326. These pages ­explain that the troops were not yet in terrible danger. What was the food situation like for the troops?",
      "storyIndex": 3,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Pages 2729. These diary entries show how the fighting intensified and the troops were in worse danger than before. What were some of Friemans experiences ­during this time?",
      "storyIndex": 3,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Page 30. The Conclusion informs the reader about how the war ended and what happened after the war. How did the Treaty of Versailles weaken Germany for decades to come?",
      "storyIndex": 3,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    }
  ],
  "Lesson_A-hd": [
    {
      "contents": "Read Part 1 (pp. 211) RI.6.1, RI.6.2, RI.6.3, W.6.10, SL.6.1a, SL.6.1b, SL.6.1c, SL.6.1d, SL.6.2",
      "storyIndex": 1,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Read Part 3 (pp. 2230) RI.6.1, RI.6.2, RI.6.3, W.6.2c, W.6.8, W.6.10, SL.6.1a, SL.6.1b, SL.6.1c, SL.6.1d, SL.6.2",
      "storyIndex": 4,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Read Part 2 (pp. 1221) RI.6.1, RI.6.2, RI.6.3, W.6.2c, W.6.8, W.6.10, SL.6.1a, SL.6.1b, SL.6.1c, SL.6.1d, SL.6.2",
      "storyIndex": 5,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading Option 2: Draw Inferences RI.6.1, RI.6.2, RI.6.3, W.6.2c, W.6.8, W.6.10, SL.6.1a, SL.6.1b, SL.6.1c, SL.6.1d",
      "storyIndex": 8,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading Option 1: Main Idea and Supporting Details RI.6.1, RI.6.2, RI.6.3, W.6.2c, W.6.8, W.6.10, SL.6.1a, SL.6.1b, SL.6.1c, SL.6.1d",
      "storyIndex": 9,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading Option 4: Make Inferences RI.6.1, RI.6.2, RI.6.3, W.6.2c, W.6.8, W.6.10, SL.6.1a, SL.6.1b, SL.6.1c, SL.6.1d",
      "storyIndex": 10,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading Option 3: Draw Conclusions RI.6.1, RI.6.2, RI.6.3, W.6.2c, W.6.8, W.6.10, SL.6.1a, SL.6.1b, SL.6.1c, SL.6.1d",
      "storyIndex": 11,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Reading, Writing, Speaking and Listening RI.6.4, RI.6.9, W.6.3a, W.6.3b, W.6.3c, W.6.3d, W.6.3e, W.6.7, W.6.8, W.6.9, W.6.10, SL.6.6, L.6.6",
      "storyIndex": 12,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Build Language, Vocabulary, and Comprehension RI.6.9, L.6.1c, L.6.5a",
      "storyIndex": 13,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading Option 5: Answering Text Evidence Questions RI.6.1, RI.6.2, RI.6.4",
      "storyIndex": 79,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Lesson_B-hd": [
    {
      "contents": "Preview and Make Predictions",
      "storyIndex": 1,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Set a Purpose",
      "storyIndex": 1,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Summarize the Main Idea and Key Details: Think and Write Together",
      "storyIndex": 1,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 1,
      "paragraphIndex": 12,
      "pageNumber": "N/A"
    },
    {
      "contents": "Lesson: Determine Text Importance to Summarize",
      "storyIndex": 1,
      "paragraphIndex": 13,
      "pageNumber": "N/A"
    },
    {
      "contents": "Summarize the Main Idea and Key Details: Think/Pair/Write/Share",
      "storyIndex": 1,
      "paragraphIndex": 17,
      "pageNumber": "N/A"
    },
    {
      "contents": "Set a Purpose",
      "storyIndex": 4,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Summarize the Main Idea and Key Details: Think and Write Independently",
      "storyIndex": 4,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Set a Purpose",
      "storyIndex": 5,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Summarize the Main Idea and Key Details: Think/Pair/Write/Share",
      "storyIndex": 5,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Draw Inferences",
      "storyIndex": 8,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Support Practice",
      "storyIndex": 8,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Find Text Evidence Independently",
      "storyIndex": 8,
      "paragraphIndex": 12,
      "pageNumber": "N/A"
    },
    {
      "contents": "Model Finding Text Evidence",
      "storyIndex": 9,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Support Practice",
      "storyIndex": 9,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Find Text Evidence Independently",
      "storyIndex": 9,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "Model Finding Text Evidence",
      "storyIndex": 10,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Support Practice",
      "storyIndex": 10,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Find Text Evidence Independently",
      "storyIndex": 10,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "Model Finding Text Evidence",
      "storyIndex": 11,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Support Practice",
      "storyIndex": 11,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Find Text Evidence Independently",
      "storyIndex": 11,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "Practice Finding Text Evidence",
      "storyIndex": 12,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Write to Sources: Narrative Fiction",
      "storyIndex": 12,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Practice Domain-Specific Vocabulary",
      "storyIndex": 12,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Collaborative Research",
      "storyIndex": 12,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Use Appropriate Verb Tenses",
      "storyIndex": 13,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Vocabulary Skill: Idioms",
      "storyIndex": 13,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "Comprehension Across Texts",
      "storyIndex": 13,
      "paragraphIndex": 15,
      "pageNumber": "N/A"
    }
  ],
  "Lesson_Body-txt": [
    {
      "contents": "Invite students to flip through the book and view the illustrations, or display the e-book and preview the pages together.",
      "storyIndex": 1,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Read aloud the features of narrative nonfiction texts and diaries on the inside front cover. Invite students to read the book description on the back cover.",
      "storyIndex": 1,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "If your students need more support, use the Scaffolded Preview provided.",
      "storyIndex": 1,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Choose the reading option that best meets your students needs.",
      "storyIndex": 1,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Invite students to first summarize pages 23, and then summarize the main ideas in the rest of Part 1. As a group, create a Main Idea and Key Details Chart. Then, as a group, construct a summary of the key details in Part 1. If students need more support to summarize the text, use the lesson on page 3 of this guide.",
      "storyIndex": 1,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "Explain to students the highlighted words and the definitions at the bottom of the page can help readers to understand the details that Robert Marshall Allan explains. Knowing the meaning of the words can help determine which details should be included in a summary.",
      "storyIndex": 1,
      "paragraphIndex": 14,
      "pageNumber": "N/A"
    },
    {
      "contents": "Pair students and have them identify additional, highlighted text. They should determine if there are important details that need to be included in their summaries.",
      "storyIndex": 1,
      "paragraphIndex": 16,
      "pageNumber": "N/A"
    },
    {
      "contents": "Bring students together and ask several pairs of students to read their summaries aloud. As a whole group, evaluate the summaries and identify the key details. Point out that students can use some of this information to help them write their summaries of Part 1. Then write a group summary of the key ideas in Part 1.",
      "storyIndex": 1,
      "paragraphIndex": 18,
      "pageNumber": "N/A"
    },
    {
      "contents": "Choose the reading option that best meets the needs of your students. If students need more support to access the text, use the Scaffolded Preview provided.",
      "storyIndex": 4,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to review the key details they flagged in Part 3. Have them independently create a chart like the ones completed for Parts 1 and 2. Then have them write their own summary of the key information in Part 3.",
      "storyIndex": 4,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Bring students together and ask volunteers to read their summaries aloud. As a whole group, evaluate the summaries.",
      "storyIndex": 4,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Choose the reading option that best meets the needs of your students. If students need more support to access the text, use the Scaffolded Preview provided.",
      "storyIndex": 5,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Invite students to share with a partner what they noted in the text. Have them collaborate to create a new Main Idea and Key Details Chart for Part 2 that lists the most important details of Part 2.",
      "storyIndex": 5,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Then have pairs collaborate to write their own summary of the key ideas in Part 2. If students need more support in deciding what to include in a summary, refer back to the lesson strategy taught in Part 1.",
      "storyIndex": 5,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Bring students together and ask several pairs of students to read their summaries aloud. As a whole group, evaluate the summaries and identify any key details that were omitted. As a group, construct a written summary of the key ideas in Part 2.",
      "storyIndex": 5,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Display and read aloud the close reading question.",
      "storyIndex": 8,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Explain that the diary of Robert Marshall Allan provides the most evidence to support the idea that the question presents.",
      "storyIndex": 8,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Have students turn to page 7 and read the details about the way the Germans shelled every main road.",
      "storyIndex": 8,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Record the evidence on a blank Text Evidence Chart.",
      "storyIndex": 8,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to turn to pages 89.",
      "storyIndex": 8,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "Collaborative conversation (turn and talk). Ask students to turn to a partner. Ask them to reread pages 8 and 9 about Robert Marshall Allans experiences in war. Remind students to stay on topic, build on each others ideas, and ask questions to clarify each others thoughts.",
      "storyIndex": 8,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "Bring students together and invite pairs to share the text evidence they found. Students should be able to explain that the trenches ruined the landscape, and the shelling destroyed property.",
      "storyIndex": 8,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to reread page 11 independently. Tell them to look for additional text evidence that shows how the war destroyed more than just lives. They should be able to see that entire villages were destroyed, leaving people nothing to return to after the war.",
      "storyIndex": 8,
      "paragraphIndex": 13,
      "pageNumber": "N/A"
    },
    {
      "contents": "Discuss how this close reading has helped students draw an inference about the far-reaching negative effects of the war.",
      "storyIndex": 8,
      "paragraphIndex": 14,
      "pageNumber": "N/A"
    },
    {
      "contents": "Display and read aloud the close reading question.",
      "storyIndex": 9,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Explain that this question asks readers to look for text evidence that describes the situation of food shortages during World War I.",
      "storyIndex": 9,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Reread page 14.",
      "storyIndex": 9,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Display a blank Text Evidence Chart and model how you record the text evidence you found.",
      "storyIndex": 9,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to turn to page 15.",
      "storyIndex": 9,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Collaborative conversation (turn and talk). Ask students to turn to a partner, and reread page 15. Ask students to find text evidence that shows how the food shortages affected Anna Eisenmenger and her family. Remind students to stay on topic, build on each others ideas, and ask questions to clarify each others thoughts.",
      "storyIndex": 9,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "Bring students together and ask several pairs to share the text evidence they found and to explain how their evidence supports the concept. Students should be able to explain that the shortage of food was affecting peoples health rapidly.",
      "storyIndex": 9,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to reread page 20 independently to identify more evidence that shows the effects of food rationing during World War I. Students should conclude that the rationing was a difficult part of living through the war because the problem affected their health and threatened their lives.",
      "storyIndex": 9,
      "paragraphIndex": 12,
      "pageNumber": "N/A"
    },
    {
      "contents": "Discuss how this close reading has helped students understand the hardships that people experienced during the war.",
      "storyIndex": 9,
      "paragraphIndex": 13,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to turn to the graphic organizer on page 32.",
      "storyIndex": 10,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Distribute the graphic organizer BLM on the back cover of this guide.",
      "storyIndex": 10,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Collaborative conversation (turn and talk). As a group, identify text evidence they can use to support the inference you put into the graphic organizer. Remind students to stay on topic, build on each others ideas, and ask questions to clarify each others thoughts.",
      "storyIndex": 10,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Bring students together and ask several pairs to share the text evidence they found to show that people all over the world were affected by World War I.",
      "storyIndex": 10,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Direct students to complete the graphic organizer by filling in additional inferences and text evidence in the other boxes. Remind them to include page numbers to help them remember where they found the text evidence. They should look for examples that express how the authors felt during World War I.",
      "storyIndex": 10,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "Discuss how this close reading has helped students make inferences about the text.",
      "storyIndex": 10,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "Display and read aloud the close reading question.",
      "storyIndex": 11,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Explain that this question asks readers to look for ways the struggles and hardships of the war continued even after the war was over.",
      "storyIndex": 11,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Reread page 21.",
      "storyIndex": 11,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Model writing your evidence on a blank Text Evidence Chart.",
      "storyIndex": 11,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to continue rereading page 21.",
      "storyIndex": 11,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Collaborative conversation (turn and talk). Ask students to turn to a partner, reread page 21, and find additional text evidence that shows how the end of the war continued to affect people negatively.",
      "storyIndex": 11,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "Bring students together and ask several pairs to share the text evidence they found and to explain how their evidence supports their conclusion. Students should be able to explain that the extreme poverty and change of money system affected people and made the middle class a new, poorer class.",
      "storyIndex": 11,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to reread page 21 independently. Tell them to find additional text evidence to show the hardships that people continued to face after the war. They should be able to find examples of ways people had to adapt their lives to survive in this new peacetime.",
      "storyIndex": 11,
      "paragraphIndex": 12,
      "pageNumber": "N/A"
    },
    {
      "contents": "Discuss how this close reading has helped students use text evidence to draw a conclusion about the struggles and hardships of World War I.",
      "storyIndex": 11,
      "paragraphIndex": 13,
      "pageNumber": "N/A"
    },
    {
      "contents": "Have students reread the text to find evidence to answer the questions on the Text Evidence Question Card.",
      "storyIndex": 12,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Have students demonstrate their understanding of War Diaries by responding to the text-dependent writing prompt on the inside back cover. Rubrics to help you evaluate students writing are available in the online teachers guide.",
      "storyIndex": 12,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Narrative Fiction. In each of the diaries, dates have been skipped between entries. Find a section in which the author has not written on consecutive dates. Use evidence from one of the diaries to write a fictional entry describing what might have happened on those dates.",
      "storyIndex": 12,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask partners to review the words in the glossary. Have students use the glossary words to write a letter from the perspective of someone living or fighting in Europe during World War I. In their letters, remind them to include such words as armistice, besieged, or casualties. Have students share their letters with the class.",
      "storyIndex": 12,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Have partners conduct collaborative research about World War I. Have them use print and digital resources to explore the war and narrow down their topic further. They should take notes on their findings and then write and publish their reports. As an additional challenge, have students present their reports to the class.",
      "storyIndex": 12,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "Remind students that when they read informational texts, they can find clues about when something is happening by looking closely at verb tenses.",
      "storyIndex": 13,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Display the following sentences and identify the verb tense:",
      "storyIndex": 13,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Monday, November 11: About 9 a.m. we were caught in Huns shell fire.",
      "storyIndex": 13,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "The use of were caught shows this was an event in the past.",
      "storyIndex": 13,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Nov. 16, 1917: Draft and send to Camp Meade, Md.",
      "storyIndex": 13,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Explain that all of the verb tenses in this sentence are incorrect. Point out the date in the diary entry, 1917, shows that the event already took place. The past tense verbs drafted and sent should be used.",
      "storyIndex": 13,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Continue this lesson by having students identify and correct the tenses that are used inappropriately in these sentences:",
      "storyIndex": 13,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Explain to students that an idiom is a phrase that has a different meaning than the individual words within it. Explain that idioms help make text more interesting.",
      "storyIndex": 13,
      "paragraphIndex": 12,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask students to complete the rest of the chart independently and to provide the meaning and text evidence for each idiom.",
      "storyIndex": 13,
      "paragraphIndex": 14,
      "pageNumber": "N/A"
    },
    {
      "contents": "If students have read all four texts in the topic set, use the questions on the Cross-Text Analysis Card for additional close readings that require students to find and analyze evidence in more than one text.",
      "storyIndex": 13,
      "paragraphIndex": 16,
      "pageNumber": "N/A"
    }
  ],
  "Lesson_Tchr-tlk": [
    {
      "contents": "Ask: Think about what is important for a reader to experience when reading diaries. How do you think the diary entries of the other people in the book will differ from Robert Marshall Allans experiences?",
      "storyIndex": 1,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: Lets read pages 23, which provide background information about World War I. Then, as you read the rest of Part 1 (pp. 411), use self-stick notes to identify the main idea and key details about what it was like to fight in World War I.",
      "storyIndex": 1,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: Look at the highlighted word battalion on page 5. This word is important because it explains that Allan served within a military regiment. Look at the highlighted word bunkum on page 7. If I look at the bottom of the page, I can see that the word is defined as nonsense. Knowing that Allan thought something was nonsense, is not a detail that supports the main idea.",
      "storyIndex": 1,
      "paragraphIndex": 15,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: As you read Part 3 (pp. 2230) continue to use self-stick notes to flag important information about the main idea and key details in Part 3.",
      "storyIndex": 4,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: As you read Part 2 (pp. 1221), use self-stick notes to flag important details about the main idea and key details about Anna Eisenmengers experiences supporting and caring for her family. Compare and contrast the experiences of Eisenmenger and Allan, and discuss how the war affected people in all situations and in different places around the world.",
      "storyIndex": 5,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: During wartime, peoples homes were destroyed.",
      "storyIndex": 8,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: This kind of destruction ruined the property of the townspeople, who were not involved in the fighting.",
      "storyIndex": 8,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: The last paragraph on this page discusses the way people received their allowance of food during the war so the supplies did not run out. Food was sent to troops fighting, and there were many shortages because the war caused the food production to fall. Eisenmenger lived on less and hoarded the food she was given so she could offer her family more. This evidence shows that rationing greatly impacted peoples lives.",
      "storyIndex": 9,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: A graphic organizer can help me keep track of information that I read about. The graphic organizer on this page helps me keep track of inferences I make about the text and to find the text evidence that supports these inferences.",
      "storyIndex": 10,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: There are a few things the author does not directly state about the war because the text is made of three different diary entries. I have to make the inferences myself. For example, I can infer that everyone suffered during the war, no matter which side they fought on, or whether they fought in battles at all. Add this evidence to the chart.",
      "storyIndex": 10,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: On page 21, Eisenmenger describes the negative effects experienced after the end of World War I. There was peace from the fighting but not from the everyday struggles. Housewives endured as they tried to feed and care for their families.",
      "storyIndex": 11,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Say: On page 6, Robert Marshall Allan says that the officers were poking fun at each other. He does not literally mean they were poking each other. He means that they were making jokes about each other in good fun. There are other examples of idioms throughout the text.",
      "storyIndex": 13,
      "paragraphIndex": 13,
      "pageNumber": "N/A"
    }
  ],
  "table_footer": [
    {
      "contents": "Sample Part 1 Main Idea and Key Details Chart",
      "storyIndex": 1,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "Sample Part 1 Group Summary",
      "storyIndex": 1,
      "paragraphIndex": 19,
      "pageNumber": "N/A"
    },
    {
      "contents": "Sample Part 3 Main Idea and Key Details Chart",
      "storyIndex": 4,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Sample Part 3 Summary",
      "storyIndex": 4,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Sample Part 2 Main Idea and Key Details Chart",
      "storyIndex": 5,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Sample Part 2 Group Summary",
      "storyIndex": 5,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "Sample Main Idea Graphic Organizer",
      "storyIndex": 6,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "Sample Inference Graphic Organizer",
      "storyIndex": 7,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Sample Conclusion Graphic Organizer",
      "storyIndex": 78,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    }
  ],
  "Non-Generic_sidebar_A-hd": [
    {
      "contents": "Close Reading Options",
      "storyIndex": 6,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Routine for Finding Text Evidence",
      "storyIndex": 6,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Interactive Activities",
      "storyIndex": 85,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Generic_sidebar_Numbers": [
    {
      "contents": "Read the question carefully.",
      "storyIndex": 6,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask yourself: What words in the question help me know what evidence to look for?",
      "storyIndex": 6,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Reread the text to find the evidence.",
      "storyIndex": 6,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Evaluate the evidence. Ask yourself: Does the evidence I found help me answer the question? Do I need more evidence?",
      "storyIndex": 6,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Use the evidence to answer the question.",
      "storyIndex": 6,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask yourself: Does my evidence support my answer?",
      "storyIndex": 6,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 6,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    }
  ],
  "ELA_Strategies_Bullets": [
    {
      "contents": "Hungry and underfeed as we were, a well-heated room will become more than ever a necessity.",
      "storyIndex": 13,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "One of the boys and I start through an open field all torn up by shells and there were many dead which we will have to cross over.",
      "storyIndex": 13,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "Summarize key events.",
      "storyIndex": 83,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Ask questions to summarize.",
      "storyIndex": 83,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Draw inferences.",
      "storyIndex": 83,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Draw conclusions.",
      "storyIndex": 83,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "Analyze main idea.",
      "storyIndex": 83,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Use appropriate verb tenses.",
      "storyIndex": 83,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    },
    {
      "contents": "Use idioms.",
      "storyIndex": 83,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "Practice domain-specific vocabulary.",
      "storyIndex": 83,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "ammunition**",
      "storyIndex": 83,
      "paragraphIndex": 13,
      "pageNumber": "N/A"
    },
    {
      "contents": "annexing**",
      "storyIndex": 83,
      "paragraphIndex": 14,
      "pageNumber": "N/A"
    },
    {
      "contents": "armistice**",
      "storyIndex": 83,
      "paragraphIndex": 15,
      "pageNumber": "N/A"
    },
    {
      "contents": "artillery**",
      "storyIndex": 83,
      "paragraphIndex": 16,
      "pageNumber": "N/A"
    },
    {
      "contents": "barrage**",
      "storyIndex": 83,
      "paragraphIndex": 17,
      "pageNumber": "N/A"
    },
    {
      "contents": "besieged**",
      "storyIndex": 83,
      "paragraphIndex": 18,
      "pageNumber": "N/A"
    },
    {
      "contents": "casualties**",
      "storyIndex": 83,
      "paragraphIndex": 19,
      "pageNumber": "N/A"
    },
    {
      "contents": "demoralized**",
      "storyIndex": 83,
      "paragraphIndex": 20,
      "pageNumber": "N/A"
    },
    {
      "contents": "despondent**",
      "storyIndex": 83,
      "paragraphIndex": 21,
      "pageNumber": "N/A"
    },
    {
      "contents": "dismal*",
      "storyIndex": 83,
      "paragraphIndex": 22,
      "pageNumber": "N/A"
    },
    {
      "contents": "incessantly*",
      "storyIndex": 83,
      "paragraphIndex": 23,
      "pageNumber": "N/A"
    },
    {
      "contents": "latter*",
      "storyIndex": 83,
      "paragraphIndex": 24,
      "pageNumber": "N/A"
    },
    {
      "contents": "meager*",
      "storyIndex": 83,
      "paragraphIndex": 25,
      "pageNumber": "N/A"
    },
    {
      "contents": "motley*",
      "storyIndex": 83,
      "paragraphIndex": 26,
      "pageNumber": "N/A"
    },
    {
      "contents": "regiment**",
      "storyIndex": 83,
      "paragraphIndex": 27,
      "pageNumber": "N/A"
    },
    {
      "contents": "sanction**",
      "storyIndex": 83,
      "paragraphIndex": 28,
      "pageNumber": "N/A"
    },
    {
      "contents": "threadbare*",
      "storyIndex": 83,
      "paragraphIndex": 29,
      "pageNumber": "N/A"
    },
    {
      "contents": "trenches**",
      "storyIndex": 83,
      "paragraphIndex": 30,
      "pageNumber": "N/A"
    },
    {
      "contents": "unpalatable*",
      "storyIndex": 83,
      "paragraphIndex": 31,
      "pageNumber": "N/A"
    },
    {
      "contents": "Analytic writing to sources: Narrative Nonfiction",
      "storyIndex": 83,
      "paragraphIndex": 35,
      "pageNumber": "N/A"
    },
    {
      "contents": "Research and writing",
      "storyIndex": 83,
      "paragraphIndex": 36,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 83,
      "paragraphIndex": 37,
      "pageNumber": "N/A"
    }
  ],
  "BLM_A-hd": [
    {
      "contents": "Comprehension: Make Inferences",
      "storyIndex": 14,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "BLM_Body-txt": [
    {
      "contents": "Directions: Use what you have learned in the book to complete the chart. Refer back to the text as needed. Good readers use evidence from the text to make inferences about things that are not directly stated. For each of the authors in the text, find a sentence from one of their diary entries that alludes to the authors feelings towards the war. Then explain an inference you can make from that statement.",
      "storyIndex": 14,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 14,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    }
  ],
  "[Basic Paragraph]": [
    {
      "contents": "",
      "storyIndex": 15,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 16,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 17,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 32,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 35,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 44,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 47,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 50,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 53,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 56,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 58,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 61,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 62,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 66,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 68,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 73,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 75,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Related_resources_A-hd": [
    {
      "contents": "Related Resources",
      "storyIndex": 18,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Related_resources_B-hd": [
    {
      "contents": "Text-Dependent Comprehension",
      "storyIndex": 18,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Other Titles in This Topic Set",
      "storyIndex": 18,
      "paragraphIndex": 4,
      "pageNumber": "N/A"
    },
    {
      "contents": "Online Resources",
      "storyIndex": 18,
      "paragraphIndex": 8,
      "pageNumber": "N/A"
    }
  ],
  "Related_resources_Bullets": [
    {
      "contents": "War Diaries Text Evidence Question Card",
      "storyIndex": 18,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Growing Up in Tough Times Cross-Text Analysis Card",
      "storyIndex": 18,
      "paragraphIndex": 3,
      "pageNumber": "N/A"
    },
    {
      "contents": "Rising Above: Profiles in Greatness (Informational)",
      "storyIndex": 18,
      "paragraphIndex": 5,
      "pageNumber": "N/A"
    },
    {
      "contents": "The Wall (Narrative Fiction)",
      "storyIndex": 18,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Opinions About Difficult Times Portrayed in Literature (Opinion/Argument)",
      "storyIndex": 18,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Teachers Guide",
      "storyIndex": 18,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "E-Reader",
      "storyIndex": 18,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    },
    {
      "contents": "E-Presenter",
      "storyIndex": 18,
      "paragraphIndex": 11,
      "pageNumber": "N/A"
    },
    {
      "contents": "Comprehension Project Organizers",
      "storyIndex": 18,
      "paragraphIndex": 12,
      "pageNumber": "N/A"
    }
  ],
  "Normal": [
    {
      "contents": "Name  _______________________________________________________Date  ______________",
      "storyIndex": 19,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Name  _______________________________________________________Date  ______________",
      "storyIndex": 20,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "BLM",
      "storyIndex": 21,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "BLM",
      "storyIndex": 22,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "[No Paragraph Style]": [
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 23,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 24,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries",
      "storyIndex": 25,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries",
      "storyIndex": 26,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 29,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "LEXILE® is a trademark of MetaMetrics, Inc., and is registered in the United States and abroad.",
      "storyIndex": 84,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Common Core Standards © Copyright 2010. National Governors Association Center for Best Practices and Council of Chief State School Officers. All rights reserved.",
      "storyIndex": 84,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC. All rights reserved. Teachers may photocopy the reproducible pages for classroom use. No other part of the guide may be reproduced or transmitted in whole or in part in any form or by any means, electronic or mechanical, including photocopy, recording, or any information storage or retrieval system, without permission in writing from the publisher. ISBN: 978-1-4900-0146-3",
      "storyIndex": 84,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "LEXILE® is a trademark of MetaMetrics, Inc., and is registered in the United States and abroad.",
      "storyIndex": 102,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Common Core Standards © Copyright 2010. National Governors Association Center for Best Practices and Council of Chief State School Officers. All rights reserved.",
      "storyIndex": 102,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC. All rights reserved. Teachers may photocopy the reproducible pages for classroom use. No other part of the guide may be reproduced or transmitted in whole or in part in any form or by any means, electronic or mechanical, including photocopy, recording, or any information storage or retrieval system, without permission in writing from the publisher. ",
      "storyIndex": 102,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 105,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Footnote": [
    {
      "contents": "These interactive resources are available through a subscription to BenchmarkUniverse.com.",
      "storyIndex": 30,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "These interactive resources are available through a subscription to benchmarkuniverse.com.",
      "storyIndex": 106,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Copyright-body-txt": [
    {
      "contents": "© Benchmark Education Company",
      "storyIndex": 33,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company",
      "storyIndex": 36,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Footer-A": [
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 34,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 45,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 51,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 57,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 63,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 67,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 74,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 91,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 93,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 95,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 97,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 99,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 101,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Footer-B": [
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 37,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 46,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 52,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 59,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 60,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 69,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "© Benchmark Education Company, LLC",
      "storyIndex": 76,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 90,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Careers on the Cutting Edge Teachers Guide",
      "storyIndex": 92,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 94,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 96,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 98,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "War Diaries Teachers Guide",
      "storyIndex": 100,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Running-hd-A": [
    {
      "contents": "Close Reading and Analysis",
      "storyIndex": 48,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading and Analysis",
      "storyIndex": 55,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "First Read",
      "storyIndex": 71,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Chapter-title": [
    {
      "contents": "Extend Meaning",
      "storyIndex": 49,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading and Analysis",
      "storyIndex": 72,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading and Analysis",
      "storyIndex": 77,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Extend Meaning",
      "storyIndex": 81,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Independent Learning",
      "storyIndex": 82,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading and Analysis",
      "storyIndex": 104,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Extend Meaning",
      "storyIndex": 113,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Independent Learning",
      "storyIndex": 114,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Running-hd-B": [
    {
      "contents": "Close Reading and Analysis",
      "storyIndex": 54,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "First Read",
      "storyIndex": 64,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "First Read",
      "storyIndex": 70,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Close Reading and Analysis",
      "storyIndex": 103,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Genre": [
    {
      "contents": "First Read",
      "storyIndex": 65,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "First Read",
      "storyIndex": 112,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Generic_sidebar_B-hd": [
    {
      "contents": "Draw Inferences",
      "storyIndex": 79,
      "paragraphIndex": 2,
      "pageNumber": "N/A"
    },
    {
      "contents": "Determine Key Details",
      "storyIndex": 79,
      "paragraphIndex": 6,
      "pageNumber": "N/A"
    },
    {
      "contents": "Use Context Clues",
      "storyIndex": 79,
      "paragraphIndex": 10,
      "pageNumber": "N/A"
    }
  ],
  "Teacher's Guide": [
    {
      "contents": "Teachers Guide",
      "storyIndex": 80,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Teachers Guide",
      "storyIndex": 110,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "ELA_Strategies_A-hd": [
    {
      "contents": "ELA Strategies and Skills",
      "storyIndex": 83,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "ELA_Strategies_B-hd": [
    {
      "contents": "Text-Dependent Comprehension Strategies",
      "storyIndex": 83,
      "paragraphIndex": 1,
      "pageNumber": "N/A"
    },
    {
      "contents": "Extend Language Knowledge",
      "storyIndex": 83,
      "paragraphIndex": 7,
      "pageNumber": "N/A"
    },
    {
      "contents": "Vocabulary Strategies",
      "storyIndex": 83,
      "paragraphIndex": 9,
      "pageNumber": "N/A"
    },
    {
      "contents": "Vocabulary List",
      "storyIndex": 83,
      "paragraphIndex": 12,
      "pageNumber": "N/A"
    },
    {
      "contents": "Writing",
      "storyIndex": 83,
      "paragraphIndex": 34,
      "pageNumber": "N/A"
    }
  ],
  "ELA_Strategies_Body-txt": [
    {
      "contents": "*General academic word",
      "storyIndex": 83,
      "paragraphIndex": 32,
      "pageNumber": "N/A"
    },
    {
      "contents": "**Domain-specific word",
      "storyIndex": 83,
      "paragraphIndex": 33,
      "pageNumber": "N/A"
    },
    {
      "contents": "Qualitative text complexity dimensions from the CCSS are scored on the following scale: 1Low; 2Middle Low; 3Middle High; 4High.",
      "storyIndex": 83,
      "paragraphIndex": 38,
      "pageNumber": "N/A"
    },
    {
      "contents": "Citations refer to pages within this teachers guide that address the specific text complexity.",
      "storyIndex": 83,
      "paragraphIndex": 39,
      "pageNumber": "N/A"
    }
  ],
  "Label": [
    {
      "contents": "Cross-Text Analysis Card",
      "storyIndex": 86,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "Text Evidence Question Card",
      "storyIndex": 111,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "Mainbooktitle": [
    {
      "contents": "War Diaries",
      "storyIndex": 87,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "metadata_Body-txt": [
    {
      "contents": "Narrative Nonfiction: Diary Topic Set: Growing Up in Tough Times",
      "storyIndex": 88,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "level": [
    {
      "contents": "Lexile® 980L",
      "storyIndex": 89,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ],
  "table arrows": [
    {
      "contents": "",
      "storyIndex": 107,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 108,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    },
    {
      "contents": "",
      "storyIndex": 109,
      "paragraphIndex": 0,
      "pageNumber": "N/A"
    }
  ]
}
}
import os
# Create a directory for HTML files
output_directory = "unit3_tables"
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Loop through each item in "Generic_sidebar_A-hd" and create a table for each
for item in json_data["paragraph"]["Generic_sidebar_A-hd"]:
    storyIndex = item["storyIndex"]
    contents = item["contents"]
    table_generator = GenericSidebarTable(json_data, storyIndex, contents)
    formatted_table = table_generator.generate_table()
    sanitized_header = contents.replace(" ", "_").replace("/", "_")
    file_name = f"{sanitized_header}_{storyIndex}.html"
    file_path = os.path.join(output_directory, file_name)
    table_generator.write_table_to_file(formatted_table, file_path)
    print(f"Table written to {file_path}")