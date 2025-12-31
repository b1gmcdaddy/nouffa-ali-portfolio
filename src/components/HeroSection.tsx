import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleResumeClick = () => {
    window.open("./Nouffa Ali - Resume.pdf");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            className="relative mx-auto w-48 h-48 mb-8">
            {/* Animated gradient rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 rotate-animation opacity-75"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 floating-animation"></div>

            {/* Profile image container with glass effect */}
            <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 backdrop-blur-sm">
              <motion.img
                src="./nouffa.jfif"
                alt="Nouffa Ali"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{
                  maskImage:
                    "radial-gradient(circle, black 70%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, black 70%, transparent 100%)",
                }}
              />
              {/* Subtle overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full"></div>
            </div>

            {/* Floating sparkle effects around the image */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-300 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-300 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute top-8 -left-4 w-2 h-2 bg-blue-300 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold font-playfair">
            <span className="gradient-text">Nouffa Ali</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detail-oriented professional with a background in customer
              service, virtual assistance, and content moderation
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg">
                Customer Service
              </span>
              <span className="px-6 py-3 glass-effect rounded-full font-medium">
                Email Management
              </span>
              <span className="px-6 py-3 glass-effect rounded-full font-medium">
                Content Moderation
              </span>
            </motion.div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="pt-6">
              <Button
                onClick={handleResumeClick}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-16">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full glass-effect cursor-pointer">
              <ArrowDown className="w-6 h-6 text-gray-600" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
};

export default HeroSection;
