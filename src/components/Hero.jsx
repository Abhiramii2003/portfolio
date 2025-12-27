import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center
                 bg-gradient-to-r from-purple-600 to-pink-500
                 dark:from-gray-900 dark:to-gray-800
                 text-white pt-20 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center px-6 max-w-3xl"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Hi, I’m Abhirami 👋
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-xl md:text-2xl mb-10 text-gray-100 dark:text-gray-300"
        >
          Final Year B.Tech CS Student | Aspiring Software Developer
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center
                     bg-white text-purple-600
                     px-8 py-3 rounded-full font-semibold text-lg
                     shadow-xl hover:shadow-2xl
                     transition-all duration-300"
        >
          View My Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
