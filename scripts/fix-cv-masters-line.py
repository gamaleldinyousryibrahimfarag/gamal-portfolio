from docx import Document
from docx2pdf import convert

path = r"c:\Users\gamal\OneDrive - Qatar University\CV\Gamal_Farag_Planning_CV_Portfolio_2026.docx"
pdf = r"d:\Applications Flutter\my_portifulue\gamal-portfolio\assets\Gamal_Farag_CV.pdf"
d = Document(path)
for p in d.paragraphs:
    if p.text.startswith("M.Sc. Engineering Management"):
        p.text = (
            "Master's Degree (M.Sc.), Engineering Management  |  Qatar University  |  "
            "Doha, Qatar  |  2024  ·  GPA 3.92/4.0"
        )
        break
d.save(path)
convert(path, pdf)
print("OK")
