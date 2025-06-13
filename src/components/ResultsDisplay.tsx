import React, { useState } from "react";
import { motion } from "motion/react";
import { Copy, Download, Eye, Code, FileText, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

interface ResultsDisplayProps {
  results: any;
  fileName: string;
  onReset?: () => void;
  filename?: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, fileName, onReset, filename }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = results.text || results.extractedText || JSON.stringify(results, null, 2);
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      toast({
        title: "Copied!",
        description: "Text copied to clipboard"
      });
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  const handleDownloadText = () => {
    try {
      const textToDownload = results.text || results.extractedText || "No text found";
      const blob = new Blob([textToDownload], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const baseFileName = (filename || fileName || "extracted_text").split('.')[0];
      link.download = `${baseFileName}_extracted.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Downloaded!",
        description: "Text file saved to your device"
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download failed",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  const handleDownloadJSON = () => {
    try {
      const dataStr = JSON.stringify(results, null, 2);
      const blob = new Blob([dataStr], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const baseFileName = (filename || fileName || "extracted_data").split('.')[0];
      link.download = `${baseFileName}_extracted.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Downloaded!",
        description: "JSON file saved to your device"
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download failed",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  const formatText = (text: string) => {
    if (!text) return "No text found";
    return text.split('\n').map((line, index) =>
    <span key={index} data-id="g3lnxxpow" data-path="src/components/ResultsDisplay.tsx">
        {line}
        {index < text.split('\n').length - 1 && <br data-id="sxym0thy6" data-path="src/components/ResultsDisplay.tsx" />}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto" data-id="8gqbjbwfj" data-path="src/components/ResultsDisplay.tsx">

      <Card className="bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl" data-id="e9w1a785m" data-path="src/components/ResultsDisplay.tsx">
        <div className="p-6" data-id="2teeohn99" data-path="src/components/ResultsDisplay.tsx">
          <div className="flex items-center justify-between mb-6" data-id="bdmhdw550" data-path="src/components/ResultsDisplay.tsx">
            <motion.h2
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }} data-id="amfmtrvvh" data-path="src/components/ResultsDisplay.tsx">
              Extraction Results
            </motion.h2>
            
            <motion.div
              className="flex space-x-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }} data-id="mnu02lrue" data-path="src/components/ResultsDisplay.tsx">

              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200" data-id="s3p5v4ksa" data-path="src/components/ResultsDisplay.tsx">
                <Copy className={`w-4 h-4 mr-2 ${copySuccess ? 'text-green-400' : ''}`} data-id="7vohjcq68" data-path="src/components/ResultsDisplay.tsx" />
                {copySuccess ? 'Copied!' : 'Copy'}
              </Button>
              
              <Button
                onClick={handleDownloadText}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200" data-id="8h5dljfhn" data-path="src/components/ResultsDisplay.tsx">
                <FileText className="w-4 h-4 mr-2" data-id="vdcul1gwz" data-path="src/components/ResultsDisplay.tsx" />
                Text
              </Button>

              <Button
                onClick={handleDownloadJSON}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200" data-id="jwc0dd5ua" data-path="src/components/ResultsDisplay.tsx">
                <File className="w-4 h-4 mr-2" data-id="uoutpfbl8" data-path="src/components/ResultsDisplay.tsx" />
                JSON
              </Button>

              {onReset &&
              <Button
                onClick={onReset}
                variant="outline"
                size="sm"
                className="bg-red-500/20 border-red-400/30 text-red-200 hover:bg-red-500/30 hover:border-red-400/40 transition-all duration-200" data-id="3p1zjtsbw" data-path="src/components/ResultsDisplay.tsx">
                  Reset
                </Button>
              }
            </motion.div>
          </div>

          <Tabs defaultValue="formatted" className="w-full" data-id="0vieeynqc" data-path="src/components/ResultsDisplay.tsx">
            <TabsList className="grid w-full grid-cols-2 bg-white/10 border border-white/10" data-id="8hxj0hnen" data-path="src/components/ResultsDisplay.tsx">
              <TabsTrigger
                value="formatted"
                className="text-white data-[state=active]:bg-purple-500/50 data-[state=active]:text-white" data-id="0qew9c195" data-path="src/components/ResultsDisplay.tsx">
                <Eye className="w-4 h-4 mr-2" data-id="w1jjxr0om" data-path="src/components/ResultsDisplay.tsx" />
                Formatted View
              </TabsTrigger>
              <TabsTrigger
                value="json"
                className="text-white data-[state=active]:bg-purple-500/50 data-[state=active]:text-white" data-id="q0xhm1umn" data-path="src/components/ResultsDisplay.tsx">
                <Code className="w-4 h-4 mr-2" data-id="129y80g1g" data-path="src/components/ResultsDisplay.tsx" />
                JSON View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="formatted" className="mt-4" data-id="u8cr5r9t8" data-path="src/components/ResultsDisplay.tsx">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-4" data-id="0ivrd5j72" data-path="src/components/ResultsDisplay.tsx">

                <div className="bg-white/5 rounded-lg p-4 border border-white/10" data-id="no2oss45y" data-path="src/components/ResultsDisplay.tsx">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2" data-id="7brl2v59m" data-path="src/components/ResultsDisplay.tsx">
                    File Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" data-id="u6k13x5qz" data-path="src/components/ResultsDisplay.tsx">
                    <div data-id="p1zujaeow" data-path="src/components/ResultsDisplay.tsx">
                      <span className="text-gray-400" data-id="k7p3a1oq9" data-path="src/components/ResultsDisplay.tsx">File Name:</span>
                      <p className="text-white font-medium" data-id="27u44zooz" data-path="src/components/ResultsDisplay.tsx">{results.fileName || filename || fileName}</p>
                    </div>
                    <div data-id="a7lthwe7l" data-path="src/components/ResultsDisplay.tsx">
                      <span className="text-gray-400" data-id="vn0f98ucv" data-path="src/components/ResultsDisplay.tsx">Processing Date:</span>
                      <p className="text-white font-medium" data-id="flgeun2p8" data-path="src/components/ResultsDisplay.tsx">{results.processedAt || new Date().toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10" data-id="ikr4cdafo" data-path="src/components/ResultsDisplay.tsx">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2" data-id="fgzmo6d0x" data-path="src/components/ResultsDisplay.tsx">
                    Extracted Text
                  </h3>
                  <div className="bg-black/30 rounded p-4 text-white max-h-96 overflow-y-auto border border-white/10" data-id="8c5d3lepx" data-path="src/components/ResultsDisplay.tsx">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed" data-id="fe4w8ncc7" data-path="src/components/ResultsDisplay.tsx">
                      {formatText(results.text || results.extractedText || "No text found")}
                    </pre>
                  </div>
                </div>

                {results.confidence &&
                <div className="bg-white/5 rounded-lg p-4 border border-white/10" data-id="syd5rz4vg" data-path="src/components/ResultsDisplay.tsx">
                    <h3 className="text-lg font-semibold text-purple-300 mb-2" data-id="j56bf08pb" data-path="src/components/ResultsDisplay.tsx">
                      OCR Confidence
                    </h3>
                    <div className="flex items-center space-x-4" data-id="96q64chc7" data-path="src/components/ResultsDisplay.tsx">
                      <div className="flex-1 bg-gray-700/50 rounded-full h-3 border border-white/10" data-id="a65e41p5g" data-path="src/components/ResultsDisplay.tsx">
                        <motion.div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${results.confidence}%` }}
                        transition={{ duration: 1, delay: 0.5 }} data-id="ytzpe76s1" data-path="src/components/ResultsDisplay.tsx" />

                      </div>
                      <span className="text-white font-semibold text-lg" data-id="20tzef4fm" data-path="src/components/ResultsDisplay.tsx">
                        {Math.round(results.confidence)}%
                      </span>
                    </div>
                  </div>
                }
              </motion.div>
            </TabsContent>

            <TabsContent value="json" className="mt-4" data-id="16cyb26wm" data-path="src/components/ResultsDisplay.tsx">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-black/30 rounded-lg p-4 max-h-96 overflow-auto border border-white/10" data-id="0p1xmgm9k" data-path="src/components/ResultsDisplay.tsx">
                <pre className="text-green-300 text-sm leading-relaxed" data-id="ah280maip" data-path="src/components/ResultsDisplay.tsx">
                  {JSON.stringify(results, null, 2)}
                </pre>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </motion.div>);

};

export default ResultsDisplay;