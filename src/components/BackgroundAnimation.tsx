import { motion } from "motion/react";

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" data-id="bgq19omf0" data-path="src/components/BackgroundAnimation.tsx">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900" data-id="v4c3rluv3" data-path="src/components/BackgroundAnimation.tsx" />
      
      {/* Additional Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" data-id="n5ojuj90r" data-path="src/components/BackgroundAnimation.tsx" />
      
      {/* Large Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.3, 0.8, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="4pu2x7o1m" data-path="src/components/BackgroundAnimation.tsx" />


      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -80, 0],
          scale: [1.2, 0.8, 1.1, 1.2]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="yxn68bw06" data-path="src/components/BackgroundAnimation.tsx" />


      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, -180, 120, 0],
          y: [0, 160, -120, 0],
          scale: [1, 0.7, 1.2, 1]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="kpyuglcc2" data-path="src/components/BackgroundAnimation.tsx" />


      {/* Additional Orbs for More Depth */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full mix-blend-screen filter blur-2xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [0.8, 1.1, 0.9, 0.8],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="97jlv07ah" data-path="src/components/BackgroundAnimation.tsx" />


      <motion.div
        className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full mix-blend-screen filter blur-2xl"
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 90, -70, 0],
          scale: [0.9, 1.2, 0.8, 0.9],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="yi41gm7g1" data-path="src/components/BackgroundAnimation.tsx" />


      {/* Geometric Patterns */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-40 h-40 border border-purple-400/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }} data-id="0l58n9zup" data-path="src/components/BackgroundAnimation.tsx" />


      <motion.div
        className="absolute bottom-1/3 left-1/3 w-32 h-32 border-2 border-cyan-400/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="dcw6o909h" data-path="src/components/BackgroundAnimation.tsx" />


      {/* Floating Particles */}
      {Array.from({ length: 80 }).map((_, i) =>
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{
          y: [0, -40, 0],
          opacity: [0.1, 0.6, 0.1],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut"
        }} data-id="zpa3276g0" data-path="src/components/BackgroundAnimation.tsx" />

      )}

      {/* Larger Floating Elements */}
      {Array.from({ length: 15 }).map((_, i) =>
      <motion.div
        key={`large-${i}`}
        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-sm"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{
          y: [0, -60, 0],
          x: [0, Math.random() * 40 - 20, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [0.8, 1.3, 0.8]
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: "easeInOut"
        }} data-id="mzx977dif" data-path="src/components/BackgroundAnimation.tsx" />

      )}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} data-id="1s6gvltds" data-path="src/components/BackgroundAnimation.tsx" />

    </div>);

};

export default BackgroundAnimation;