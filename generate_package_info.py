from bs4 import BeautifulSoup
import re

class HTMLExtractor:
    def __init__(self, html_content):
        self.soup = BeautifulSoup(html_content, 'html.parser')
        self.data = self.extract_data()

    def extract_data(self):
        data = {}
        rows = self.soup.find_all('tr')
        for row in rows:
            cols = row.find_all('td')
            if len(cols) == 2:
                key_text = self.clean_text(cols[0].get_text())
                value_texts = self.extract_paragraph_texts(cols[1])
                key, number = self.extract_number_from_key(key_text)
                data[key] = {"texts": value_texts, "number": number}
        return data

    def clean_text(self, text):
        return ' '.join(text.split())

    def extract_paragraph_texts(self, col):
        paragraphs = col.find_all('p')
        texts = [self.clean_text(p.get_text()) for p in paragraphs]
        return texts

    def extract_number_from_key(self, key):
        match = re.search(r'(\d+)$', key)
        if match:
            number = match.group(1)
            key = key[:match.start()].strip()
            return key, number
        return key, None

    def get_data(self):
        return self.data


html_content = '''
       <table>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td colspan="2">
                <p><span>What Makes This Text Complex?</span></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Purpose and Levels <br />of Meaning</p>
                <p><span>➌</span></p>
              </td>
              <td>
                <p>
                  <span
                    >The purpose of this text is to describe the governments of
                    the medieval periods and how they developed.</span
                  ><span> </span><span>(pp. 3–6)</span><span>*</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Structure</p>
                <p><span>➌</span></p>
              </td>
              <td>
                <p>
                  <span
                    >This text uses multiple text structures including compare
                    and contrast.</span
                  ><span> </span><span>(p. 7</span><span>)*</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Language Conventionality <br />and Clarity</p>
                <p><span>➌</span></p>
              </td>
              <td>
                <p>
                  <span
                    >The text includes both simple and complex sentences.</span
                  >
                </p>
                <p>
                  <span
                    >Content-specific vocabulary is supported in the running
                    text and glossary.</span
                  ><span> </span><span>(p. 8</span><span>)*</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Knowledge Demands</p>
                <p><span>➌</span></p>
              </td>
              <td>
                <p>
                  <span
                    >Requires basic knowledge of social studies, world history,
                    and geography.</span
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
'''

extractor = HTMLExtractor(html_content)
data = extractor.get_data()
print(data)


{'Purpose and Levels of Meaning': {'texts': ['The text has one main purpose: to provide biographies of Native American leaders. (pp. 6–27)'], 'number': '2'}, 'Structure': {'texts': ['The text has a consistent structure (descriptive and sequential) and includes information about Native American leaders and how they helped preserve their culture and identity. (pp. 6–27)'], 'number': '2'}, 'Language Conventionality and Clarity': {'texts': ['Vocabulary includes topic-specific vocabulary essential to students’ understanding of the text (e.g., reservation, confederacy). (p. 11)★'], 'number': '2'}, 'Knowledge Demands': {'texts': ['Students may not be familiar with some historical contexts and content related to Native American leaders. (pp. 2–5)★'], 'number': '2'}}