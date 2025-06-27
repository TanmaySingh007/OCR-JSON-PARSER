# 🧾 OCR-JSON-PARSER

**OCR-JSON-PARSER** is a Python-based utility that extracts text from images using Optical Character Recognition (OCR) and converts the extracted data into structured **JSON format**. It is ideal for automating data extraction workflows where input is image-based (e.g., scanned documents, receipts, forms).

## 📌 Features

- 🔍 Image-to-text conversion using **Tesseract OCR**
- 🧠 Intelligent preprocessing for improved recognition accuracy
- 📤 Outputs extracted data as clean, structured **JSON**
- 🖼️ Supports JPEG, PNG, and other image formats
- 💡 Easily extendable for custom parsing rules

## 🛠️ Tech Stack

- **Python 3**
- **pytesseract** – Python wrapper for Tesseract OCR
- **OpenCV** – Image preprocessing and manipulation
- **Pillow** – Image loading and processing
- **JSON** – Data serialization format
## 📸 Homepage Screenshot

![Homepage](https://github.com/TanmaySingh007/OCR-JSON-PARSER/blob/3547759f0a5861ab3de311b2a5fb8dcf726a20e2/OCR.png)

## 📂 Project Structure

```
OCR-JSON-PARSER/
├── main.py              # Entry point for parsing and processing
├── ocr_utils.py         # OCR and image preprocessing functions
├── parser.py            # Logic to convert raw text into structured JSON
├── test_images/         # Sample input images for testing
├── output/              # Output directory for generated JSON files
├── requirements.txt     # Python dependencies
└── README.md            # Project documentation
```

## 🧑‍💻 Getting Started

### Prerequisites

- Python 3.7 or higher
- Tesseract OCR installed and added to system PATH  
  (Download from: https://github.com/tesseract-ocr/tesseract)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TanmaySingh007/OCR-JSON-PARSER.git
cd OCR-JSON-PARSER
```

2. Install Python dependencies:

```bash
pip install -r requirements.txt
```

3. Run the parser:

```bash
python main.py --input ./test_images/sample1.png --output ./output/result.json
```

> Make sure to update the input/output paths as needed.

## 📤 Output Format

The output JSON is structured with key-value pairs derived from the OCR results. Sample:

```json
{
  "Date": "2024-06-27",
  "Invoice Number": "INV123456",
  "Total": "$250.00",
  "Vendor": "Example Company Ltd."
}
```

> Output structure may vary based on the layout and content of the input image.

## 🧪 Sample Use Cases

- Automated invoice data extraction
- Document digitization for archival
- Form scanning and digitized storage
- Preprocessing for AI/ML workflows

## 🙌 Contribution

Feel free to fork the repo, raise issues, or submit pull requests for enhancements or bug fixes!

## 📄 License

This project is licensed under the MIT License. 

---

> Built with 🧠 by [Tanmay Singh](https://www.linkedin.com/in/tanmay-singh-228097272/)
