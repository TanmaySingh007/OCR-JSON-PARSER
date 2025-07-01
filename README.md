# 📄 OCR‑JSON‑PARSER

A lightweight web application designed to convert scanned images or PDFs into clean, structured JSON using Optical Character Recognition (OCR). Fast, secure, and 100% browser-based.

---

## 🔗 Live Demo  
👉 [Live Site](https://ocr-json-parser7.netlify.app/)  
👉 [GitHub Repository](https://github.com/TanmaySingh007/OCR-JSON-PARSER)

---

## 🛠️ Features

- 📁 **Batch Upload** — Drag and drop multiple PDFs or images.
- 🧠 **OCR Engine (Tesseract.js)** — Performs high-accuracy text extraction.
- 💾 **Download JSON** — Extracted text is structured and downloadable as JSON.
- 🧩 **Clean UI** — Minimalist, intuitive front-end design.
- 🔐 **Client-Side Only** — No server interaction; privacy-first design.

---

## ⚙️ Tech Stack & Purpose

| Technology        | Purpose & Usefulness |
|------------------|----------------------|
| **HTML5/CSS3**     | Structure and styling of the front-end; ensures responsive layout and cross-browser support. |
| **JavaScript**     | Manages DOM operations and integrates OCR logic. |
| **TypeScript**     | Adds static typing to JavaScript for better maintainability and developer tooling support. |
| **Tesseract.js**   | WebAssembly-based OCR engine used directly in the browser for text extraction. |
| **FileReader API** | Reads and processes uploaded image or PDF files on the client-side. |
| **JSON.stringify()** | Serializes the recognized text into downloadable JSON format. |
| **Parcel.js / Vite** *(optional setup)* | Used for fast bundling and module resolution in local development. |
| **Netlify**         | Serverless deployment platform for hosting static websites with HTTPS and CDN delivery. |
| **ESLint / Prettier** *(recommended)* | Code quality tools to ensure clean, consistent TypeScript/JavaScript formatting. |

This stack offers a **zero-backend**, **high-performance**, and **secure OCR workflow**, especially suitable for developers and data engineers needing clean structured text without sending data to third-party servers.

---

## 🧱 Directory Structure

```
/
├── index.html        # Single-page UI layout
├── styles.css        # Custom CSS styles
├── app.ts            # Core logic with TypeScript (OCR + JSON)
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

---

## 🚀 Getting Started Locally

### 🖥️ Clone & Setup

```bash
git clone https://github.com/TanmaySingh007/OCR-JSON-PARSER.git
cd OCR-JSON-PARSER
npm install
```

### ▶️ Run Development Server

```bash
npm run dev
```

Then open your browser at:
```
http://localhost:3000
```

Upload any image or PDF file and instantly get the JSON output.

---

## 💼 Use Cases

- 📊 Convert scanned business reports to structured data
- 🧾 Extract content from receipts or invoices
- 🏛 Digitize historical or legal documents
- ⚙️ Prototype or integrate OCR as part of a frontend-only app

---

No installations. No data leaks. Just upload, extract, and go.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

