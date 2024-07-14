# from bs4 import BeautifulSoup

# def extract_scaffolded_previews(html_content):
#     soup = BeautifulSoup(html_content, 'html.parser')

#     scaffolded_previews = []
#     previews = soup.find_all('p')

#     for preview in previews:
#         if 'Scaffolded Preview for' in preview.get_text() and 'ELs and Struggling Readers' in preview.get_text():
#             result = {'header': preview.get_text(separator=' '), 'content': []}
#             next_element = preview.find_next_sibling()
#             include_support_students = False

#             while next_element and next_element.name == 'p':
#                 paragraph_text = next_element.get_text()
#                 if 'Support students to access the text by orally introducing academic' in paragraph_text and not include_support_students:
#                     result['content'].append(next_element)
#                     include_support_students = True
#                 if 'Page' in paragraph_text or 'Pages' in paragraph_text:
#                     result['content'].append(next_element)
#                 next_element = next_element.find_next_sibling()

#             scaffolded_previews.append(result)

#     # Generate individual HTML tables
#     tables_html = ''
#     for preview in scaffolded_previews:
#         table_html = '<table border="1">'
#         table_html += '<thead>{}</thead>'.format(preview['header'])
#         table_html += '<td>'
#         for paragraph in preview['content']:
#             if 'Page' in paragraph.get_text() or 'Pages' in paragraph.get_text():
#                 spans = paragraph.find_all('span')
#                 page_info = '<span>{}</span>'.format(spans[0].get_text())
#                 content_info = '<span>{}</span>'.format(spans[1].get_text()) if len(spans) > 1 else ''
#                 table_html += '<p>{}</p><p>{}</p>'.format(page_info, content_info)
#             else:
#                 table_html += '<p>{}</p>'.format(paragraph.get_text())
#         table_html += '</td></table>'
#         tables_html += table_html

#     return tables_html

# if __name__ == "__main__":
#     with open('raw_table_data/Y63067_TG_G6_U3.html', 'r', encoding='utf-8') as file:
#         html_content = file.read()

#     tables_html = extract_scaffolded_previews(html_content)
#     print(tables_html)
# from bs4 import BeautifulSoup

# def extract_scaffolded_previews(html_content):
#     soup = BeautifulSoup(html_content, 'html.parser')

#     scaffolded_previews = []
#     previews = soup.find_all('p')

#     for preview in previews:
#         if 'Scaffolded Preview for' in preview.get_text() and 'ELs and Struggling Readers' in preview.get_text():
#             result = {'header': preview.get_text(separator=' '), 'content': []}
#             next_element = preview.find_next_sibling()
#             include_support_students = False

#             while next_element and next_element.name == 'p':
#                 paragraph_text = next_element.get_text()
#                 if 'Support students to access the text by orally introducing academic' in paragraph_text and not include_support_students:
#                     result['content'].append(next_element)
#                     include_support_students = True
#                 if 'Page' in paragraph_text or 'Pages' in paragraph_text:
#                     result['content'].append(next_element)
#                 next_element = next_element.find_next_sibling()

#             scaffolded_previews.append(result)

#     # Generate individual HTML tables
#     tables_html = ''
#     for preview in scaffolded_previews:
#         table_html = '<table border="1">'
#         table_html += '<thead>{}</thead>'.format(preview['header'])
#         table_html += '<td>'
#         for paragraph in preview['content']:
#             if 'Page' in paragraph.get_text() or 'Pages' in paragraph.get_text():
#                 spans = paragraph.find_all('span')
#                 page_info = '<span>{}</span>'.format(spans[0].get_text())
#                 content_info = '<span>{}</span>'.format(spans[1].get_text()) if len(spans) > 1 else ''
#                 table_html += '<p>{}</p><p>{}</p>'.format(page_info, content_info)
#             else:
#                 table_html += '<p>{}</p>'.format(paragraph.get_text())
#         table_html += '</td></table>'
#         tables_html += table_html

#     return tables_html

# def extract_support_for_english_learners(html_content):
#     soup = BeautifulSoup(html_content, 'html.parser')

#     support_previews = []
#     previews = soup.find_all('p')

#     for preview in previews:
#         if 'Support for English Learners' in preview.get_text():
#             result = {'header': preview.get_text(separator=' '), 'content': []}
#             next_element = preview.find_next_sibling()
#             while next_element and (next_element.name == 'p' or next_element.name == 'ul'):
#                 paragraph_text = next_element.get_text()
#                 if next_element.name == 'p' and ('Page' in paragraph_text or 'Pages' in paragraph_text or paragraph_text.endswith('.')):
#                     result['content'].append(next_element)
#                 elif next_element.name == 'ul':
#                     result['content'].append(next_element)
#                 next_element = next_element.find_next_sibling()

#             support_previews.append(result)

#     # Generate individual HTML tables
#     tables_html = ''
#     for preview in support_previews:
#         table_html = '<table border="1">'
#         table_html += '<thead>{}</thead>'.format(preview['header'])
#         table_html += '<td>'
#         for content in preview['content']:
#             if content.name == 'ul':
#                 list_items = content.find_all('li')
#                 for li in list_items:
#                     table_html += '<p>{}</p>'.format(li.get_text())
#             else:
#                 table_html += '<p>{}</p>'.format(content.get_text())
#         table_html += '</td></table>'
#         tables_html += table_html

#     return tables_html

# if __name__ == "__main__":
#     with open('raw_table_data/Y63069_TG_G6_U3.html', 'r', encoding='utf-8') as file:
#         html_content = file.read()

#     tables_html = extract_scaffolded_previews(html_content)
#     print("Scaffolded Previews HTML:")
#     print(tables_html)
    
#     support_tables_html = extract_support_for_english_learners(html_content)
#     print("Support for English Learners HTML:")
#     print(support_tables_html)



from bs4 import BeautifulSoup

def extract_scaffolded_previews(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')

    scaffolded_previews = []
    previews = soup.find_all('p')

    for preview in previews:
        if 'Scaffolded Preview' in preview.get_text() and 'Support for English Learners' in preview.find_previous_sibling('p').get_text():
            header_text = preview.find_previous_sibling('p').get_text(separator=' ')
            result = {'header': header_text, 'content': []}
            next_element = preview
            while next_element and next_element.name in ['p', 'ul', 'li', 'span']:
                result['content'].append(next_element)
                next_element = next_element.find_next_sibling()
            scaffolded_previews.append(result)

    # Generate individual HTML tables
    tables_html = ''
    for preview in scaffolded_previews:
        table_html = '<table border="1">'
        table_html += '<thead><tr><th>{}</th></tr></thead>'.format(preview['header'])
        table_html += '<tbody><tr><td>'
        for paragraph in preview['content']:
            table_html += '<p>{}</p>'.format(paragraph.get_text())
        table_html += '</td></tr></tbody></table>'
        tables_html += table_html

    return tables_html

def extract_support_for_english_learners(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')

    support_previews = []
    previews = soup.find_all('p')

    for preview in previews:
        if 'Support for English Learners' in preview.get_text() and not preview.find_previous_sibling('p').get_text().startswith('Scaffolded Preview'):
            header_text = preview.get_text(separator=' ')
            result = {'header': header_text, 'content': []}
            next_element = preview
            while next_element and next_element.name in ['p', 'ul', 'li', 'span']:
                result['content'].append(next_element)
                next_element = next_element.find_next_sibling()
            support_previews.append(result)

    # Generate individual HTML tables
    tables_html = ''
    for preview in support_previews:
        table_html = '<table border="1">'
        table_html += '<thead><tr><th>{}</th></tr></thead>'.format(preview['header'])
        table_html += '<tbody><tr><td>'
        for content in preview['content']:
            if content.name == 'ul':
                list_items = content.find_all('li')
                for li in list_items:
                    table_html += '<p>{}</p>'.format(li.get_text())
            else:
                table_html += '<p>{}</p>'.format(content.get_text())
        table_html += '</td></tr></tbody></table>'
        tables_html += table_html

    return tables_html

if __name__ == "__main__":
    with open('raw_table_data/Y63070_TG_G6_U3.html', 'r', encoding='utf-8') as file:
        html_content = file.read()

    tables_html = extract_scaffolded_previews(html_content)
    print("Scaffolded Previews HTML:")
    print(tables_html)
    
    support_tables_html = extract_support_for_english_learners(html_content)
    print("Support for English Learners HTML:")
    print(support_tables_html)
