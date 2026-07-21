import subprocess
import sys
import os

try:
    import pypdf
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

pdf_path = r"C:\Users\sasik\Desktop\my_portfolio\Sasikumar_Resume.pdf"

if not os.path.exists(pdf_path):
    print("PDF not found at", pdf_path)
    sys.exit(1)

text = ""
with open(pdf_path, "rb") as f:
    reader = pypdf.PdfReader(f)
    for page in reader.pages:
        text += page.extract_text() + "\n"
        
with open("extract_utf8.txt", "w", encoding="utf-8") as out:
    out.write(text.strip())

print("Done")
