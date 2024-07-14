# from bs4 import BeautifulSoup

# def extract_tables(html_string):
#     soup = BeautifulSoup(html_string, 'html.parser')
#     tables = soup.find_all('table')
#     table_strings = [str(table) for table in tables]
#     return table_strings

# def format_table_with_thead(html_string, thead_rows=1):
#     """
#     Parses the given HTML string, formats the first N rows as <thead>, removes <colgroup>, 
#     and returns the modified HTML.

#     Args:
#         html_string (str): The HTML content as a string.
#         thead_rows (int): The number of rows to convert to <thead>.

#     Returns:
#         str: The modified HTML string with the first N rows as <thead> and <colgroup> removed.
#     """
#     soup = BeautifulSoup(html_string, 'html.parser')
    
#     # Find the first table
#     table = soup.find('table')
#     if not table:
#         return html_string  # Return original if no table is found

#     # Remove <colgroup> if present
#     colgroup = table.find('colgroup')
#     if colgroup:
#         colgroup.decompose()

#     # Create a new <thead> element
#     thead = soup.new_tag('thead')

#     # Move the first N rows to <thead> and convert <td> to <th>
#     for _ in range(thead_rows):
#         first_tr = table.find('tr')
#         if first_tr:
#             tr = soup.new_tag('tr')
#             for td in first_tr.find_all('td'):
#                 th = soup.new_tag('th')
#                 th.string = td.get_text(strip=True)
#                 tr.append(th)
#             thead.append(tr)
#             first_tr.decompose()
    
#     # Insert the <thead> into the table
#     table.insert(0, thead)
    
#     return str(soup)

# def process_html_files(file_paths, thead_rows=1, output_file="reformatted_tables.html"):
#     # Initialize a list to store reformatted tables
#     reformatted_tables = []

#     # Process each file
#     for file_path in file_paths:
#         with open(file_path, 'r', encoding='utf-8') as file:
#             html_string = file.read()
        
#         # Extract all tables from the HTML string
#         tables = extract_tables(html_string)

#         # Format each table with the desired <thead> rows
#         reformatted = [format_table_with_thead(table, thead_rows) for table in tables]
#         reformatted_tables.extend(reformatted)
    
#     # Write the reformatted tables to an HTML file with proper formatting
#     with open(output_file, "w", encoding="utf-8") as file:
#         # Write the HTML header
#         file.write("<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8'>\n<title>Reformatted Tables</title>\n</head>\n<body>\n")
        
#         # Write each reformatted table
#         for table in reformatted_tables:
#             file.write(table + "\n")
#             file.write("<!-- ############################################ -->\n")
        
#         # Write the closing HTML tags
#         file.write("</body>\n</html>")

# # List of HTML file paths to process
# file_paths = ["/Users/DRobinson/Desktop/chat_assistant/Y63059_TG_G6_U1.html"]

# # Process the files and save the output
# process_html_files(file_paths, thead_rows=1, output_file="reformatted_tables.html")


import os
from bs4 import BeautifulSoup

def extract_tables(html_string):
    soup = BeautifulSoup(html_string, 'html.parser')
    tables = soup.find_all('table')
    table_strings = [str(table) for table in tables]
    return table_strings

def format_table_with_thead(html_string, thead_rows=1):
    """
    Parses the given HTML string, formats the first N rows as <thead>, removes <colgroup>, 
    and returns the modified HTML.

    Args:
        html_string (str): The HTML content as a string.
        thead_rows (int): The number of rows to convert to <thead>.

    Returns:
        str: The modified HTML string with the first N rows as <thead> and <colgroup> removed.
    """
    soup = BeautifulSoup(html_string, 'html.parser')
    
    # Find the first table
    table = soup.find('table')
    if not table:
        return html_string  # Return original if no table is found

    # Remove <colgroup> if present
    colgroup = table.find('colgroup')
    if colgroup:
        colgroup.decompose()

    # Create a new <thead> element
    thead = soup.new_tag('thead')

    # Move the first N rows to <thead> and convert <td> to <th>
    for _ in range(thead_rows):
        first_tr = table.find('tr')
        if first_tr:
            tr = soup.new_tag('tr')
            for td in first_tr.find_all('td'):
                th = soup.new_tag('th')
                th.string = td.get_text(strip=True)
                tr.append(th)
            thead.append(tr)
            first_tr.decompose()
    
    # Insert the <thead> into the table
    table.insert(0, thead)
    
    return str(soup)

def process_html_files(file_paths, thead_rows=1, output_dir="formatted_data"):
    # Ensure the output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Process each file
    for file_path in file_paths:
        with open(file_path, 'r', encoding='utf-8') as file:
            html_string = file.read()
        
        # Extract all tables from the HTML string
        tables = extract_tables(html_string)

        # Format each table with the desired <thead> rows
        reformatted_tables = [format_table_with_thead(table, thead_rows) for table in tables]

        # Construct the output file name
        base_name = os.path.basename(file_path)
        name, ext = os.path.splitext(base_name)
        output_file = os.path.join(output_dir, f"reformatted_{name}.html")

        # Write the reformatted tables to an HTML file with proper formatting
        with open(output_file, "w", encoding="utf-8") as output:
            # Write the HTML header
            output.write("<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8'>\n<title>Reformatted Tables</title>\n</head>\n<body>\n")
            
            # Write each reformatted table
            for table in reformatted_tables:
                output.write(table + "\n")
                output.write("<!-- ############################################ -->\n")
            
            # Write the closing HTML tags
            output.write("</body>\n</html>")

# List of HTML file paths to process
file_paths = [
'./raw_table_data/Y63069_TG_G6_U3.html',
# './raw_table_data/Y63061_TG_G6_U2.html', './raw_table_data/Y63065_TG_G6_U2.html',
# './raw_table_data/Y63059_TG_G6_U1.html', './raw_table_data/Y63060_TG_G6_U1.html',
# './raw_table_data/Y63062_TG_G6_U2.html', './raw_table_data/Y63066_TG_G6_U2.html',
# './raw_table_data/Y63057_TG_G6_U1.html', './raw_table_data/Y63056_TG_G6_U1.html',
# './raw_table_data/Y63055_TG_G6_U1.html', './raw_table_data/Y63063_TG_G6_U2.html',
# './raw_table_data/Y63064_TG_G6_U2.html', './raw_table_data/Y63058_TG_G6_U1.html'
 ]

# Process the files and save the output with composite names
process_html_files(file_paths)
