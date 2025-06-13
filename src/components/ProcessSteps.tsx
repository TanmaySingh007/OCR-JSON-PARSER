import { motion } from "motion/react";
import { Upload, ScanLine, Cpu, Download, CheckCircle } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
  {
    icon: <Upload className="w-8 h-8" data-id="863wdvpjx" data-path="src/components/ProcessSteps.tsx" />,
    title: "Upload Your File",
    description: "Drag and drop or click to upload your PDF, image, or document file",
    details: "Supported formats: PDF, JPG, PNG, TIFF, BMP, GIF"
  },
  {
    icon: <ScanLine className="w-8 h-8" data-id="f25v5wklo" data-path="src/components/ProcessSteps.tsx" />,
    title: "Document Analysis",
    description: "Our AI analyzes the document structure and identifies text regions",
    details: "Advanced algorithms detect text blocks, tables, and formatting"
  },
  {
    icon: <Cpu className="w-8 h-8" data-id="y2ew0eeda" data-path="src/components/ProcessSteps.tsx" />,
    title: "OCR Processing",
    description: "State-of-the-art OCR engine extracts text with high accuracy",
    details: "Machine learning models trained on millions of documents"
  },
  {
    icon: <CheckCircle className="w-8 h-8" data-id="amuzeifcw" data-path="src/components/ProcessSteps.tsx" />,
    title: "Quality Assurance",
    description: "Text is validated and errors are automatically corrected",
    details: "Built-in spell checking and formatting preservation"
  },
  {
    icon: <Download className="w-8 h-8" data-id="g3up59dja" data-path="src/components/ProcessSteps.tsx" />,
    title: "Get Your Results",
    description: "Download or copy your extracted text in your preferred format",
    details: "Multiple export options with formatting intact"
  }];


  return (
    <section className="py-20 px-4 bg-white" data-id="dfvdrp1ie" data-path="src/components/ProcessSteps.tsx">
      <div className="max-w-6xl mx-auto" data-id="diag31ddq" data-path="src/components/ProcessSteps.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16" data-id="wfbd9nlwi" data-path="src/components/ProcessSteps.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-id="titufon82" data-path="src/components/ProcessSteps.tsx">
            How It
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent" data-id="v3s702im8" data-path="src/components/ProcessSteps.tsx">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="qsh654ujy" data-path="src/components/ProcessSteps.tsx">
            Our OCR process is designed to be simple for you while being sophisticated under the hood. 
            Here's exactly what happens when you upload your document:
          </p>
        </motion.div>

        <div className="relative" data-id="ooq317epf" data-path="src/components/ProcessSteps.tsx">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 transform -translate-x-1/2" data-id="md3e51jlu" data-path="src/components/ProcessSteps.tsx" />
          
          {steps.map((step, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`
            } data-id="mfadkngcw" data-path="src/components/ProcessSteps.tsx">

              {/* Step Number */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2" data-id="7eleqai3t" data-path="src/components/ProcessSteps.tsx">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg" data-id="puhtcp3ua" data-path="src/components/ProcessSteps.tsx">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`} data-id="0g5o493ot" data-path="src/components/ProcessSteps.tsx">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300" data-id="3jp7zz6zb" data-path="src/components/ProcessSteps.tsx">
                  <div className="flex items-start gap-4" data-id="6p37g5f13" data-path="src/components/ProcessSteps.tsx">
                    {/* Mobile Step Number */}
                    <div className="lg:hidden w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0" data-id="gqnnrt5rg" data-path="src/components/ProcessSteps.tsx">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1" data-id="tswtm4f6h" data-path="src/components/ProcessSteps.tsx">
                      <div className="flex items-center gap-3 mb-4" data-id="svgf328oa" data-path="src/components/ProcessSteps.tsx">
                        <div className="text-blue-600" data-id="u1hvm2fth" data-path="src/components/ProcessSteps.tsx">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900" data-id="m1x6efo44" data-path="src/components/ProcessSteps.tsx">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-lg" data-id="y553tgczd" data-path="src/components/ProcessSteps.tsx">
                        {step.description}
                      </p>
                      
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600" data-id="eoohlb723" data-path="src/components/ProcessSteps.tsx">
                        <p className="text-blue-800 text-sm font-medium" data-id="ywtw7zohj" data-path="src/components/ProcessSteps.tsx">
                          💡 {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden lg:block lg:w-1/2" data-id="e5c3whq0k" data-path="src/components/ProcessSteps.tsx" />
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center" data-id="fz80ynuqa" data-path="src/components/ProcessSteps.tsx">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white" data-id="gagepg4q0" data-path="src/components/ProcessSteps.tsx">
            <h3 className="text-2xl font-bold mb-4" data-id="1387cfcu0" data-path="src/components/ProcessSteps.tsx">
              Ready to Convert Your Documents?
            </h3>
            <p className="text-lg mb-6 opacity-90" data-id="kn8isgdrl" data-path="src/components/ProcessSteps.tsx">
              The entire process takes just seconds. Upload your file below to get started!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm" data-id="2efcmvfww" data-path="src/components/ProcessSteps.tsx">
              <span className="bg-white/20 px-4 py-2 rounded-full" data-id="13vs78swf" data-path="src/components/ProcessSteps.tsx">✓ No Registration Required</span>
              <span className="bg-white/20 px-4 py-2 rounded-full" data-id="4siy87lfp" data-path="src/components/ProcessSteps.tsx">✓ Free to Use</span>
              <span className="bg-white/20 px-4 py-2 rounded-full" data-id="varbm140i" data-path="src/components/ProcessSteps.tsx">✓ Instant Results</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default ProcessSteps;