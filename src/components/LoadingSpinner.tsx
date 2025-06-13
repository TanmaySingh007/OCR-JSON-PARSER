import { motion } from "motion/react";
import { Loader, Zap } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
  progress?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Processing...",
  progress
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="text-center py-12" data-id="bxvjwadgc" data-path="src/components/LoadingSpinner.tsx">

      <div className="relative" data-id="t21wh6a4p" data-path="src/components/LoadingSpinner.tsx">
        {/* Spinning loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mx-auto mb-6" data-id="jnv2x1dja" data-path="src/components/LoadingSpinner.tsx">

          <div className="w-full h-full border-4 border-purple-200 border-t-purple-500 rounded-full" data-id="rus0ox2yq" data-path="src/components/LoadingSpinner.tsx" />
        </motion.div>
        
        {/* Lightning bolts */}
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 1, repeat: Infinity }} data-id="xzllinc25" data-path="src/components/LoadingSpinner.tsx">

          <Zap className="w-6 h-6 text-yellow-400" data-id="gwyglbxxx" data-path="src/components/LoadingSpinner.tsx" />
        </motion.div>
        
        <motion.div
          className="absolute -bottom-2 -left-2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }} data-id="c8x12q6h2" data-path="src/components/LoadingSpinner.tsx">

          <Zap className="w-6 h-6 text-cyan-400" data-id="0qejmmqfx" data-path="src/components/LoadingSpinner.tsx" />
        </motion.div>
      </div>
      
      <motion.h3
        className="text-xl font-semibold text-white mb-2"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }} data-id="staek4a3o" data-path="src/components/LoadingSpinner.tsx">

        {message}
      </motion.h3>
      
      {progress !== undefined &&
      <div className="max-w-xs mx-auto" data-id="iwot1m1g4" data-path="src/components/LoadingSpinner.tsx">
          <div className="w-full bg-gray-700 rounded-full h-2 mb-2" data-id="g8i0tr0up" data-path="src/components/LoadingSpinner.tsx">
            <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }} data-id="kosokj4wd" data-path="src/components/LoadingSpinner.tsx" />

          </div>
          <p className="text-gray-300 text-sm" data-id="lwkk68rbc" data-path="src/components/LoadingSpinner.tsx">{Math.round(progress)}% complete</p>
        </div>
      }
      
      <motion.p
        className="text-gray-300 mt-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }} data-id="gk8z936qv" data-path="src/components/LoadingSpinner.tsx">

        Extracting text using advanced OCR technology...
      </motion.p>
    </motion.div>);

};

export default LoadingSpinner;