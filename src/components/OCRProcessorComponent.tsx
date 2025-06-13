import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, FileText, AlertCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ocrProcessor, OCRResult } from '@/components/OCRProcessor';

interface OCRProcessorComponentProps {
  file: File;
  onProcessStart: () => void;
  onProcessComplete: (results: OCRResult) => void;
  onProcessError: (error: string) => void;
  onReset: () => void;
}

const OCRProcessorComponent: React.FC<OCRProcessorComponentProps> = ({
  file,
  onProcessStart,
  onProcessComplete,
  onProcessError,
  onReset
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = async () => {
    try {
      console.log('Starting OCR processing for file:', file.name);
      setIsProcessing(true);
      onProcessStart();

      let result: OCRResult;

      if (file.type.includes('pdf')) {
        result = await ocrProcessor.processPDF(file);
      } else if (file.type.includes('image')) {
        result = await ocrProcessor.processImage(file);
      } else {
        throw new Error('Unsupported file type. Please upload an image or PDF file.');
      }

      console.log('OCR processing completed successfully:', result);
      onProcessComplete(result);
    } catch (error) {
      console.error('OCR processing failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Processing failed. Please try again.';
      onProcessError(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto" data-id="nh3i68s33" data-path="src/components/OCRProcessorComponent.tsx">

      <Card className="border-2 border-dashed border-gray-300 bg-white shadow-lg" data-id="0acimd2k9" data-path="src/components/OCRProcessorComponent.tsx">
        <CardHeader className="text-center" data-id="nlza1ip1u" data-path="src/components/OCRProcessorComponent.tsx">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl" data-id="oyogn34q9" data-path="src/components/OCRProcessorComponent.tsx">
            <FileText className="w-6 h-6 text-blue-600" data-id="qohmwquvi" data-path="src/components/OCRProcessorComponent.tsx" />
            Ready to Process
          </CardTitle>
          <CardDescription data-id="31zle6325" data-path="src/components/OCRProcessorComponent.tsx">
            Review your file details and start the OCR conversion
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6" data-id="sbv01atc3" data-path="src/components/OCRProcessorComponent.tsx">
          {/* File Information */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3" data-id="i98k6byaz" data-path="src/components/OCRProcessorComponent.tsx">
            <h3 className="font-semibold text-gray-900" data-id="ve4f91hmg" data-path="src/components/OCRProcessorComponent.tsx">File Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm" data-id="f8vajc8ka" data-path="src/components/OCRProcessorComponent.tsx">
              <div data-id="k35n3udy4" data-path="src/components/OCRProcessorComponent.tsx">
                <span className="text-gray-500" data-id="iudvhs30j" data-path="src/components/OCRProcessorComponent.tsx">Name:</span>
                <p className="font-medium truncate" title={file.name} data-id="g4etweuae" data-path="src/components/OCRProcessorComponent.tsx">
                  {file.name}
                </p>
              </div>
              <div data-id="8bag1jzoe" data-path="src/components/OCRProcessorComponent.tsx">
                <span className="text-gray-500" data-id="t9apcrpzd" data-path="src/components/OCRProcessorComponent.tsx">Size:</span>
                <p className="font-medium" data-id="b9xf3pstl" data-path="src/components/OCRProcessorComponent.tsx">{formatFileSize(file.size)}</p>
              </div>
              <div data-id="z0scmg5mq" data-path="src/components/OCRProcessorComponent.tsx">
                <span className="text-gray-500" data-id="adbk2hzvp" data-path="src/components/OCRProcessorComponent.tsx">Type:</span>
                <p className="font-medium" data-id="okjjl22nj" data-path="src/components/OCRProcessorComponent.tsx">{file.type || 'Unknown'}</p>
              </div>
            </div>
          </div>

          {/* File Type Support Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4" data-id="3iwp3qo4j" data-path="src/components/OCRProcessorComponent.tsx">
            <div className="flex items-start gap-3" data-id="8oci9werc" data-path="src/components/OCRProcessorComponent.tsx">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-id="xcx3rxcnm" data-path="src/components/OCRProcessorComponent.tsx" />
              <div data-id="ue085a883" data-path="src/components/OCRProcessorComponent.tsx">
                <h4 className="font-medium text-blue-900 mb-1" data-id="iti92i1pe" data-path="src/components/OCRProcessorComponent.tsx">Processing Information</h4>
                <p className="text-blue-800 text-sm" data-id="jk8mdhltc" data-path="src/components/OCRProcessorComponent.tsx">
                  {file.type.includes('pdf') ?
                  'PDF files will be processed for text extraction with high accuracy.' :
                  file.type.includes('image') ?
                  'Image files will be analyzed using advanced OCR technology.' :
                  'This file type will be processed using our best-fit OCR method.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3" data-id="b9sc0vw4j" data-path="src/components/OCRProcessorComponent.tsx">
            <Button
              onClick={handleProcess}
              disabled={isProcessing}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105" data-id="i4bhl2eac" data-path="src/components/OCRProcessorComponent.tsx">

              <Upload className="w-5 h-5 mr-2" data-id="e6qzx290i" data-path="src/components/OCRProcessorComponent.tsx" />
              {isProcessing ? 'Processing...' : 'Start OCR Processing'}
            </Button>
            
            <Button
              variant="outline"
              onClick={onReset}
              disabled={isProcessing}
              className="flex items-center gap-2 py-3 px-6" data-id="3aqtrh858" data-path="src/components/OCRProcessorComponent.tsx">

              <RotateCcw className="w-4 h-4" data-id="bm9ft7rgj" data-path="src/components/OCRProcessorComponent.tsx" />
              Choose Different File
            </Button>
          </div>

          {/* Processing Status */}
          {isProcessing &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4" data-id="lrlkdssbc" data-path="src/components/OCRProcessorComponent.tsx">

              <div className="flex items-center gap-3" data-id="nnrvxrz13" data-path="src/components/OCRProcessorComponent.tsx">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-600" data-id="l0a4t4vai" data-path="src/components/OCRProcessorComponent.tsx"></div>
                <div data-id="wpfrglv1n" data-path="src/components/OCRProcessorComponent.tsx">
                  <h4 className="font-medium text-yellow-900" data-id="tr6fwpxzj" data-path="src/components/OCRProcessorComponent.tsx">Processing in Progress</h4>
                  <p className="text-yellow-800 text-sm" data-id="fo2gdp1ub" data-path="src/components/OCRProcessorComponent.tsx">
                    Please wait while we extract text from your document...
                  </p>
                </div>
              </div>
            </motion.div>
          }
        </CardContent>
      </Card>
    </motion.div>);

};

export default OCRProcessorComponent;