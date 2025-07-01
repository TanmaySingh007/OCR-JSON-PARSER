import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import React from 'react';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }} data-id="ov2c3dxj7" data-path="src/components/ThemeToggle.tsx">

      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center" data-id="v4cscx1wh" data-path="src/components/ThemeToggle.tsx">

        <Moon className="w-6 h-6 text-purple-300" data-id="glmrzxpsn" data-path="src/components/ThemeToggle.tsx" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center" data-id="78cc9p382" data-path="src/components/ThemeToggle.tsx">

        <Sun className="w-6 h-6 text-yellow-400" data-id="unos7tk30" data-path="src/components/ThemeToggle.tsx" />
      </motion.div>
      
      {/* Placeholder for sizing */}
      <div className="w-6 h-6 opacity-0" data-id="m9iqwcufv" data-path="src/components/ThemeToggle.tsx">
        <Sun className="w-6 h-6" data-id="ov4omm1qy" data-path="src/components/ThemeToggle.tsx" />
      </div>
    </motion.button>);

};

export default ThemeToggle;
