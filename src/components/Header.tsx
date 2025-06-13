import { motion } from "motion/react";
import { FileText, Zap } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 p-6" data-id="y7a5o6xdw" data-path="src/components/Header.tsx">

      <div className="max-w-6xl mx-auto" data-id="lart3f5wa" data-path="src/components/Header.tsx">
        <motion.div
          className="flex items-center justify-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }} data-id="pfmpkea4f" data-path="src/components/Header.tsx">

          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }} data-id="ei3x195hb" data-path="src/components/Header.tsx">

            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" data-id="j2so6bqzr" data-path="src/components/Header.tsx">
              <FileText className="w-8 h-8 text-white" data-id="tudeojp4y" data-path="src/components/Header.tsx" />
            </div>
          </motion.div>
          
          <div className="text-center" data-id="9rzvjgn8w" data-path="src/components/Header.tsx">
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }} data-id="mb3bwxsce" data-path="src/components/Header.tsx">

              OCR-JSON-PARSER
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mt-2 flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }} data-id="h77vutll8" data-path="src/components/Header.tsx">

              <Zap className="w-5 h-5 text-yellow-400" data-id="j4wrhfy65" data-path="src/components/Header.tsx" />
              <span data-id="i2bg2sd5y" data-path="src/components/Header.tsx">Extract Text from Images & PDFs to JSON</span>
              <Zap className="w-5 h-5 text-yellow-400" data-id="2d4jumwmj" data-path="src/components/Header.tsx" />
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.header>);

};

export default Header;