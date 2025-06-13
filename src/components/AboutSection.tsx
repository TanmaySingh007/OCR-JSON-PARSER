import { motion } from "motion/react";
import { FileText, Zap, Shield, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
  {
    icon: <FileText className="w-8 h-8" data-id="oxhrahf90" data-path="src/components/AboutSection.tsx" />,
    title: "Multiple Formats",
    description: "Support for PDF, images, and various document formats"
  },
  {
    icon: <Zap className="w-8 h-8" data-id="gvf16tm6m" data-path="src/components/AboutSection.tsx" />,
    title: "Lightning Fast",
    description: "Advanced OCR technology for quick and accurate text extraction"
  },
  {
    icon: <Shield className="w-8 h-8" data-id="z86xstaef" data-path="src/components/AboutSection.tsx" />,
    title: "Secure & Private",
    description: "Your files are processed securely and never stored permanently"
  },
  {
    icon: <Globe className="w-8 h-8" data-id="pubfpu3ir" data-path="src/components/AboutSection.tsx" />,
    title: "Universal Access",
    description: "Works on any device with a web browser - no downloads required"
  }];


  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50" data-id="1p6xwc862" data-path="src/components/AboutSection.tsx">
      <div className="max-w-6xl mx-auto" data-id="1ykvplm09" data-path="src/components/AboutSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16" data-id="52viqsc17" data-path="src/components/AboutSection.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-id="b7jlyaqjl" data-path="src/components/AboutSection.tsx">
            Transform Documents with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="fd90woajb" data-path="src/components/AboutSection.tsx">
              {" "}Advanced OCR
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="tyai5tug3" data-path="src/components/AboutSection.tsx">
            Our cutting-edge Optical Character Recognition technology converts your scanned documents, 
            images, and PDFs into editable, searchable text with remarkable accuracy and speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="hgdrvndi6" data-path="src/components/AboutSection.tsx">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-id="1ymydr2yn" data-path="src/components/AboutSection.tsx">

              <div className="text-blue-600 mb-4" data-id="zsuaujsmt" data-path="src/components/AboutSection.tsx">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" data-id="at9zd7zvs" data-path="src/components/AboutSection.tsx">
                {feature.title}
              </h3>
              <p className="text-gray-600" data-id="bwif5bv58" data-path="src/components/AboutSection.tsx">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center" data-id="a0p4x11bb" data-path="src/components/AboutSection.tsx">

          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto" data-id="xz9i98jkh" data-path="src/components/AboutSection.tsx">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="hisblhbvi" data-path="src/components/AboutSection.tsx">
              Why Choose Our OCR Solution?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left" data-id="27tjdm6z0" data-path="src/components/AboutSection.tsx">
              <div data-id="wgp6mz20u" data-path="src/components/AboutSection.tsx">
                <h4 className="font-semibold text-gray-900 mb-2" data-id="pqy3m9nco" data-path="src/components/AboutSection.tsx">High Accuracy</h4>
                <p className="text-gray-600 text-sm" data-id="vv0qkm00f" data-path="src/components/AboutSection.tsx">
                  Industry-leading recognition rates with support for multiple languages and fonts.
                </p>
              </div>
              <div data-id="isdq8xx7y" data-path="src/components/AboutSection.tsx">
                <h4 className="font-semibold text-gray-900 mb-2" data-id="3q35p4fa9" data-path="src/components/AboutSection.tsx">Easy to Use</h4>
                <p className="text-gray-600 text-sm" data-id="8ijkm07jt" data-path="src/components/AboutSection.tsx">
                  Simply upload your file and get results in seconds - no technical expertise required.
                </p>
              </div>
              <div data-id="bfsff1wli" data-path="src/components/AboutSection.tsx">
                <h4 className="font-semibold text-gray-900 mb-2" data-id="c4onreszi" data-path="src/components/AboutSection.tsx">Versatile Output</h4>
                <p className="text-gray-600 text-sm" data-id="1blxei49y" data-path="src/components/AboutSection.tsx">
                  Export results in various formats including plain text, formatted text, and more.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;