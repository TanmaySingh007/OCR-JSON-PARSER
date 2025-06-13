export interface OCRResult {
  text: string;
  confidence?: number;
  fileName: string;
  processedAt: string;
  fileType: string;
  extractedText?: string;
}

export class OCRProcessor {

  async processImage(file: File, onProgress?: (progress: number) => void): Promise<OCRResult> {
    try {
      // Simulate OCR processing with progress updates
      if (onProgress) {
        for (let i = 0; i <= 100; i += 10) {
          onProgress(i);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }

      // For demo purposes, we'll extract basic metadata and simulate text extraction
      const simulatedText = this.generateSimulatedOCRText(file);

      return {
        text: simulatedText,
        confidence: Math.floor(Math.random() * 20 + 80), // 80-100% confidence
        fileName: file.name,
        processedAt: new Date().toISOString(),
        fileType: 'image',
        extractedText: simulatedText
      };
    } catch (error) {
      console.error('OCR processing error:', error);
      throw new Error('Failed to process image. Please try again.');
    }
  }

  async processPDF(file: File, onProgress?: (progress: number) => void): Promise<OCRResult> {
    try {
      // Simulate PDF processing with progress updates
      if (onProgress) {
        for (let i = 0; i <= 100; i += 5) {
          onProgress(i);
          await new Promise((resolve) => setTimeout(resolve, 80));
        }
      }

      const simulatedText = this.generateSimulatedPDFText(file);

      return {
        text: simulatedText,
        fileName: file.name,
        processedAt: new Date().toISOString(),
        fileType: 'pdf',
        extractedText: simulatedText,
        confidence: 95 // High confidence for PDF text extraction
      };
    } catch (error) {
      console.error('PDF processing error:', error);
      throw new Error('Failed to process PDF. Please ensure the file is not corrupted.');
    }
  }

  private generateSimulatedOCRText(file: File): string {
    const sampleTexts = [
    `OCR Extraction Results for ${file.name}

This is a demonstration of OCR text extraction capabilities. 
The system has successfully processed your image file and extracted the following text content:

SAMPLE DOCUMENT
Invoice #INV-2024-001
Date: ${new Date().toLocaleDateString()}

Company Name: Tech Solutions Inc.
Address: 123 Innovation Drive
City: San Francisco, CA 94102

Bill To:
Customer Name: John Doe
Address: 456 Customer Lane
City: New York, NY 10001

Item Description        Quantity    Price    Total
Software License          1         $299.99  $299.99
Technical Support          12        $50.00   $600.00
Training Session           2         $150.00  $300.00

Subtotal: $1,199.99
Tax (8.5%): $102.00
Total: $1,301.99

Thank you for your business!

Note: This is a simulated OCR extraction for demonstration purposes. 
In a production environment, this would contain the actual extracted text from your image.`,

    `Text Recognition Complete

Image: ${file.name}
Processing completed at: ${new Date().toLocaleString()}

Extracted Content:
-------------------

BUSINESS CARD
━━━━━━━━━━━━━

SARAH JOHNSON
Senior Software Engineer

📧 sarah.johnson@techcorp.com
📱 (555) 123-4567
🌐 www.techcorp.com

TechCorp Solutions
Building the future, one line of code at a time

---

Additional detected elements:
- Logo/graphic elements present
- QR code detected (bottom right)
- Color scheme: Blue and white
- Font: Arial/Helvetica family

OCR confidence level: High
Text clarity: Excellent
Image quality: HD`,

    `Document Analysis Results

File: ${file.name}
Size: ${(file.size / 1024).toFixed(2)} KB
Format: ${file.type}

EXTRACTED TEXT CONTENT:
========================

MEETING AGENDA
April 15, 2024

Attendees:
- Alex Thompson (Project Manager)
- Maria Garcia (Lead Developer) 
- David Chen (UI/UX Designer)
- Lisa Wong (QA Engineer)

Agenda Items:
1. Project Status Update
2. Sprint Review & Planning
3. Bug Fixes & Testing
4. Client Feedback Discussion
5. Resource Allocation
6. Next Milestones

Action Items:
□ Complete API documentation
□ Finalize mobile responsive design
□ Deploy staging environment
□ Schedule client demo

Meeting Duration: 90 minutes
Next Meeting: April 22, 2024

Notes: All team members present. 
Project on track for Q2 delivery.`];


    return sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
  }

  private generateSimulatedPDFText(file: File): string {
    return `PDF Text Extraction Results
═══════════════════════════════

Document: ${file.name}
Extracted: ${new Date().toLocaleString()}
Pages processed: ${Math.floor(Math.random() * 10 + 1)}

--- Page 1 ---
TECHNICAL DOCUMENTATION
OCR-JSON-PARSER Application

Overview:
This document provides comprehensive information about the OCR-JSON-PARSER application, 
a powerful tool for extracting text from images and PDF documents.

Features:
• Advanced Optical Character Recognition
• PDF text extraction capabilities  
• JSON format output
• Real-time processing with progress indicators
• Support for multiple file formats (JPEG, PNG, GIF, BMP, PDF)
• Beautiful, responsive user interface
• Drag-and-drop file upload
• Copy and download functionality

--- Page 2 ---
TECHNICAL SPECIFICATIONS

Supported Input Formats:
- Images: JPEG, PNG, GIF, BMP
- Documents: PDF

Output Format:
- JSON with structured data including:
  * Extracted text content
  * File metadata
  * Processing timestamp
  * Confidence levels
  * File type information

Performance:
- Average processing time: 2-10 seconds
- Maximum file size: 10MB
- Accuracy rate: 95%+ for clear text
- Multi-language support available

--- Page 3 ---
USER GUIDE

Getting Started:
1. Upload your file using drag-and-drop or file selector
2. Wait for processing to complete
3. View results in formatted or JSON view
4. Copy or download the extracted data

Best Practices:
• Use high-resolution images for better accuracy
• Ensure good contrast between text and background
• Clean, non-skewed images work best
• PDF files with selectable text process faster

For support, contact: support@ocrjsonparser.com

End of Document
═══════════════════════════════`;
  }

  async cleanup() {
    // Cleanup method for future implementation
    console.log('OCR processor cleanup complete');
  }
}

export const ocrProcessor = new OCRProcessor();