# 🧾 OCR-JSON-PARSER (Web App)

**OCR-JSON-PARSER** is a web-based tool that allows users to upload images (like receipts, forms, invoices), extract text using Optical Character Recognition (OCR), and instantly convert that text into structured **JSON format** — all through a clean and responsive UI.

🌐 **Live Demo**: [https://ocr-json-parser007.netlify.app/](https://ocr-json-parser007.netlify.app/)

---

## 📸 Homepage Screenshot

![Homepage](https://github.com/TanmaySingh007/OCR-JSON-PARSER/blob/main/assets/homepage.png)
<!-- Make sure to upload the screenshot to your repo and update the path if necessary -->

---

## 🚀 Features

- 🖼️ Upload images (JPG, PNG, etc.) via drag-and-drop or file selector
- 🔍 Extracts text using built-in OCR (via backend or frontend OCR engine)
- 📤 Converts and displays output in structured **JSON**
- 💾 Download the JSON output as a file
- ⚡ Fast, responsive UI built with modern frontend technologies

---

## 🛠️ Tech Stack

- **React.js** (Frontend)
- **TailwindCSS** (UI styling)
- **Tesseract.js** or API-driven OCR backend
- **Netlify** (Deployment)

---

## 📂 Project Structure

```
OCR-JSON-PARSER/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── pages/            # Page views
│   ├── utils/            # Helper functions
│   └── App.tsx           # Main app wrapper
├── tailwind.config.js    # Tailwind configuration
├── vite.config.ts        # Vite config (if using Vite)
├── package.json          # Project metadata & scripts
└── README.md             # Project documentation
```

---

## 🧑‍💻 Getting Started Locally

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
git clone https://github.com/TanmaySingh007/OCR-JSON-PARSER.git
cd OCR-JSON-PARSER
npm install
```

### Run the development server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to view it locally.

---

## 🌐 Live Demo

Try the hosted version here:  
🔗 [https://ocr-json-parser007.netlify.app/](https://ocr-json-parser007.netlify.app/)

---

## 📤 Sample Output Format

```json
{
  "Name": "John Doe",
  "Date": "2025-06-27",
  "Total Amount": "$245.00",
  "Invoice Number": "INV-8891"
}
```

> Note: The structure of the JSON depends on the layout and content of the uploaded image.

---

## 🧪 Use Cases

- Scanned invoice or bill parser
- Form digitization for structured storage
- Automating data entry from physical documents
- Preprocessing for database uploads or analytics pipelines

---

## 🙌 Contribution

Contributions are welcome!  
If you have ideas for improvements or find bugs, feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the MIT License. 

---

> Built with 🧠 by [Tanmay Singh](https://www.linkedin.com/in/tanmay-singh-228097272/)
