import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Premium buttery ease-out
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-50 pt-20 transition-colors duration-500"
    >
      {/* Sophisticated Ambient Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center gap-16 z-10">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="overflow-hidden mb-3">
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400"
            >
              Portfolio & Resume
            </motion.p>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
            >
              Abhirami <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Aji.</span>
            </motion.h1>
          </div>

          <motion.div variants={itemVariants} className="mb-10 max-w-xl">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              AI/ML Engineer & DevOps Enthusiast
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Passionate about building scalable, intelligent applications and robust infrastructure using machine learning and modern DevOps practices.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-transform active:scale-95 shadow-xl hover:shadow-2xl"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                View My Projects
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </a>
            
            <a
              href="/assets/Abhirami_Aji_Resume.pdf"
              download="Abhirami_Aji_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white px-8 py-4 rounded-full font-semibold text-lg transition-all active:scale-95"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image with subtle floating animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-[22rem] md:h-[22rem] lg:w-[28rem] lg:h-[28rem]"
          >
            {/* Elegant glassmorphic backdrop layers for the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-[2.5rem] rotate-6 backdrop-blur-xl scale-105 transition-transform duration-700 hover:rotate-12" />
            <div className="absolute inset-0 bg-white/40 dark:bg-white/5 rounded-[2.5rem] -rotate-3 backdrop-blur-md shadow-2xl scale-105 border border-white/50 dark:border-white/10" />
            
            <img
              src="/assets/profile.jpg"
              alt="Abhirami"
              className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl z-10 border border-white/20 dark:border-gray-800"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Abhirami&size=512&background=0D1117&color=fff';
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
