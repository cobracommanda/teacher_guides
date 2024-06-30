import os
from bs4 import BeautifulSoup
import bs4

def remove_empty_elements(html_string):
    """
    Removes empty HTML elements from the given HTML string.

    Args:
        html_string (str): The HTML content as a string.

    Returns:
        str: The modified HTML string with empty elements removed.
    """
    soup = BeautifulSoup(html_string, 'html.parser')

    # Define a function to check if an element is empty
    def is_empty_element(element):
        # If the element has no children and no text, it's empty
        if not element.contents and not element.string:
            return True
        # If the element has only whitespace text, it's empty
        if element.string and element.string.strip() == "":
            return True
        # If the element has children but all are empty or whitespace text
        if all(is_empty_element(child) for child in element.contents if isinstance(child, bs4.element.Tag)):
            return True
        return False

    # Find and remove all empty elements
    for element in soup.find_all():
        if is_empty_element(element):
            element.decompose()

    return str(soup)

# Read the HTML from a file
with open('./formatted_data/reformatted_Y63059_TG_G6_U1.html', 'r', encoding='utf-8') as file:
    html_string = file.read()

# Remove empty elements from the HTML
cleaned_html = remove_empty_elements(html_string)

# Write the cleaned HTML to a new file
with open('output.html', 'w', encoding='utf-8') as file:
    file.write(cleaned_html)
