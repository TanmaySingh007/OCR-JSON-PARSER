import React, { useState } from 'react';
import { motion } from 'motion/react';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ProcessSteps from '@/components/ProcessSteps';
import FileUploader from '@/components/FileUploader';
import LoadingSpinner from '@/components/LoadingSpinner';
import ResultsDisplay from '@/components/ResultsDisplay';
import OCRProcessorComponent from '@/components/OCRProcessorComponent';
import { useToast } from '@/hooks/use-toast';
import { OCRResult } from '@/components/OCRProcessor';

const HomePage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<OCRResult | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (file: File) => {
    console.log('File selected:', file.name, file.type, file.size);
    setSelectedFile(file);
    setResults(null);
    toast({
      title: "File Selected",
      description: `${file.name} is ready for processing`
    });
  };

  const handleProcessStart = () => {
    console.log('Starting OCR processing...');
    setIsProcessing(true);
    setResults(null);
  };

  const handleProcessComplete = (ocrResults: OCRResult) => {
    console.log('OCR processing completed:', ocrResults);
    setIsProcessing(false);
    setResults(ocrResults);
    toast({
      title: "Processing Complete",
      description: "Your document has been successfully converted to text"
    });
  };

  const handleProcessError = (error: string) => {
    console.error('OCR processing error:', error);
    setIsProcessing(false);
    toast({
      title: "Processing Error",
      description: error,
      variant: "destructive"
    });
  };

  const handleReset = () => {
    console.log('Resetting application state');
    setSelectedFile(null);
    setIsProcessing(false);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden" data-id="6wvi034az" data-path="src/pages/HomePage.tsx">
      <BackgroundAnimation data-id="7geu46hhr" data-path="src/pages/HomePage.tsx" />
      
      <div className="relative z-10" data-id="v2iojg8v4" data-path="src/pages/HomePage.tsx">
        <Header data-id="558ibq4c2" data-path="src/pages/HomePage.tsx" />
        
        {/* About Section */}
        <AboutSection data-id="bqn44dks1" data-path="src/pages/HomePage.tsx" />
        
        {/* Process Steps Section */}
        <ProcessSteps data-id="nsgfa3g70" data-path="src/pages/HomePage.tsx" />
        
        {/* Main Application Section */}
        <section className="py-20 px-4" data-id="u2pk2c8kz" data-path="src/pages/HomePage.tsx">
          <div className="max-w-4xl mx-auto" data-id="2wrhf0mgs" data-path="src/pages/HomePage.tsx">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12" data-id="q1ftkqc02" data-path="src/pages/HomePage.tsx">

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="ik74se8q5" data-path="src/pages/HomePage.tsx">
                Try It
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" data-id="qfinbbyry" data-path="src/pages/HomePage.tsx">
                  {" "}Now
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-id="o7prq6yqi" data-path="src/pages/HomePage.tsx">
                Upload your document and see our OCR technology in action. 
                Get accurate text extraction in just a few clicks.
              </p>
            </motion.div>

            {/* File Processing Flow */}
            <div className="space-y-8" data-id="8cbp882dr" data-path="src/pages/HomePage.tsx">
              {!selectedFile && !isProcessing && !results &&
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} data-id="b0jnt8yir" data-path="src/pages/HomePage.tsx">
                  <FileUploader onFileSelect={handleFileSelect} data-id="1bmzxk76a" data-path="src/pages/HomePage.tsx" />
                </motion.div>
              }

              {selectedFile && !isProcessing && !results &&
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} data-id="e5r4y6fjd" data-path="src/pages/HomePage.tsx">
                  <OCRProcessorComponent
                  file={selectedFile}
                  onProcessStart={handleProcessStart}
                  onProcessComplete={handleProcessComplete}
                  onProcessError={handleProcessError}
                  onReset={handleReset} data-id="eg76srxfw" data-path="src/pages/HomePage.tsx" />

                </motion.div>
              }

              {isProcessing &&
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} data-id="ai9cdayxe" data-path="src/pages/HomePage.tsx">
                  <LoadingSpinner data-id="ru3a616bk" data-path="src/pages/HomePage.tsx" />
                </motion.div>
              }

              {results &&
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} data-id="ws51ivdh9" data-path="src/pages/HomePage.tsx">
                  <ResultsDisplay
                  results={results}
                  fileName={selectedFile?.name || 'document'}
                  onReset={handleReset}
                  filename={selectedFile?.name} data-id="23i8sows0" data-path="src/pages/HomePage.tsx" />

                </motion.div>
              }
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-black/60 backdrop-blur-sm border-t border-white/10" data-id="adpleed4k" data-path="src/pages/HomePage.tsx">
          <div className="max-w-6xl mx-auto text-center" data-id="4hspz23qv" data-path="src/pages/HomePage.tsx">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} data-id="9gtp7kmlq" data-path="src/pages/HomePage.tsx">

              <h3 className="text-2xl font-bold mb-4 text-white" data-id="ok1dta29z" data-path="src/pages/HomePage.tsx">
                Ready to Transform Your Documents?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto" data-id="l67bfhv32" data-path="src/pages/HomePage.tsx">
                Join thousands of users who trust our OCR technology for accurate, 
                fast, and secure document conversion.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400" data-id="eom2juwh0" data-path="src/pages/HomePage.tsx">
                <div data-id="5ubrt4tgg" data-path="src/pages/HomePage.tsx">
                  <span className="font-semibold text-white" data-id="42e8nvl0n" data-path="src/pages/HomePage.tsx">99.9%</span> Accuracy Rate
                </div>
                <div data-id="sx450s4an" data-path="src/pages/HomePage.tsx">
                  <span className="font-semibold text-white" data-id="l7ftspagd" data-path="src/pages/HomePage.tsx">&lt;3s</span> Average Processing Time
                </div>
                <div data-id="u9agctqhf" data-path="src/pages/HomePage.tsx">
                  <span className="font-semibold text-white" data-id="jhbtpl1ot" data-path="src/pages/HomePage.tsx">50+</span> Supported Languages
                </div>
                <div data-id="0yg4fali1" data-path="src/pages/HomePage.tsx">
                  <span className="font-semibold text-white" data-id="5fmtaoqbe" data-path="src/pages/HomePage.tsx">100%</span> Secure &amp; Private
                </div>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>);

};

export default HomePage;