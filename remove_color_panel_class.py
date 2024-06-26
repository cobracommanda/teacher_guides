import os
import re

def remove_color_panel(directory):
    # Regex pattern to match the <aside> tag and remove the 'color-panel' text
    pattern = r'(<aside\s+class="col-md-4)( color-panel)?(".*?>\s*<!--\s*xx\s*panel\d+\s*page\s*\d+\s*aside\s*content\s*xx\s*-->\s*<\/aside>)'
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file == 'index.html':
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                modified_content = re.sub(pattern, r'\1 \3', content)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(modified_content)

                print(f"Processed {file_path}")

# Example usage
remove_color_panel('.')
