import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, FileText, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  isProcessing: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect, isProcessing }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (isValidFile(file)) {
        setSelectedFile(file);
        onFileSelect(file);
      }
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (isValidFile(file)) {
        setSelectedFile(file);
        onFileSelect(file);
      }
    }
  }, [onFileSelect]);

  const isValidFile = (file: File) => {
    const validTypes = [
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp',
    'application/pdf'];

    return validTypes.includes(file.type);
  };

  const getFileIcon = (file: File) => {
    if (file.type === 'application/pdf') {
      return <FileText className="w-8 h-8 text-red-400" data-id="7wq9j1mg3" data-path="src/components/FileUploader.tsx" />;
    }
    return <Image className="w-8 h-8 text-blue-400" data-id="pdpo4exzp" data-path="src/components/FileUploader.tsx" />;
  };

  const clearFile = () => {
    setSelectedFile(null);
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="w-full max-w-2xl mx-auto" data-id="3v4vhv8p5" data-path="src/components/FileUploader.tsx">

      <Card className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20" data-id="09b4qsdst" data-path="src/components/FileUploader.tsx">
        <motion.div
          className={`p-8 text-center transition-all duration-300 ${
          dragActive ? "bg-purple-500/20 border-purple-400/50" : ""}`
          }
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }} data-id="3xz44ujxe" data-path="src/components/FileUploader.tsx">

          <AnimatePresence mode="wait" data-id="g4vbymcda" data-path="src/components/FileUploader.tsx">
            {!selectedFile ?
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6" data-id="acjfze028" data-path="src/components/FileUploader.tsx">

                <motion.div
                animate={{
                  rotate: isProcessing ? 360 : 0,
                  scale: dragActive ? 1.1 : 1
                }}
                transition={{
                  rotate: { duration: 2, repeat: isProcessing ? Infinity : 0 },
                  scale: { type: "spring", stiffness: 300 }
                }} data-id="5pii0r37j" data-path="src/components/FileUploader.tsx">

                  <Upload className="w-16 h-16 text-purple-300 mx-auto" data-id="er44jwrta" data-path="src/components/FileUploader.tsx" />
                </motion.div>
                
                <div data-id="kdkgvyaup" data-path="src/components/FileUploader.tsx">
                  <h3 className="text-2xl font-bold text-white mb-2" data-id="c9tdqqm9v" data-path="src/components/FileUploader.tsx">
                    Drop your files here
                  </h3>
                  <p className="text-gray-300 mb-4" data-id="d9s1i43nl" data-path="src/components/FileUploader.tsx">
                    Supports images (JPG, PNG, GIF, BMP) and PDF files
                  </p>
                  
                  <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf,application/pdf"
                  onChange={handleFileInput}
                  disabled={isProcessing} data-id="knogkuh8v" data-path="src/components/FileUploader.tsx" />

                  
                  <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  disabled={isProcessing} data-id="a8020s0vt" data-path="src/components/FileUploader.tsx">

                    <label htmlFor="file-upload" className="cursor-pointer" data-id="ttfzw8cpd" data-path="src/components/FileUploader.tsx">
                      Choose File
                    </label>
                  </Button>
                </div>
              </motion.div> :

            <motion.div
              key="selected"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="space-y-4" data-id="wuvnc7zoa" data-path="src/components/FileUploader.tsx">

                <div className="flex items-center justify-center space-x-4 p-4 bg-white/10 rounded-lg" data-id="dw3avf5jy" data-path="src/components/FileUploader.tsx">
                  {getFileIcon(selectedFile)}
                  <div className="flex-1 text-left" data-id="z75kxan8j" data-path="src/components/FileUploader.tsx">
                    <p className="text-white font-medium truncate" data-id="mzuh4s9hf" data-path="src/components/FileUploader.tsx">
                      {selectedFile.name}
                    </p>
                    <p className="text-gray-300 text-sm" data-id="kgt9krlh6" data-path="src/components/FileUploader.tsx">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFile}
                  disabled={isProcessing}
                  className="text-gray-300 hover:text-white" data-id="awvg69pv9" data-path="src/components/FileUploader.tsx">

                    <X className="w-4 h-4" data-id="p4gvdgpyl" data-path="src/components/FileUploader.tsx" />
                  </Button>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </motion.div>
      </Card>
    </motion.div>);

};

export default FileUploader;