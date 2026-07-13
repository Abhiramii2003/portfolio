import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10 text-purple-600"
        >
          About Me
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I am <span className="font-semibold text-gray-900 dark:text-white">Abhirami Aji</span>, a Computer Science Engineering graduate passionate about AI/ML, Python development, and DevOps practices. My primary focus is building intelligent applications using Machine Learning and Artificial Intelligence, while leveraging modern technologies such as FastAPI, React, Node.js, MongoDB, and Docker.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Through projects like TradeMind AI and DermaSense AI, I have gained practical experience in developing and deploying AI-driven solutions. I am also actively building expertise in DevOps and MLOps, including containerization, CI/CD, Linux, and cloud technologies, to create scalable and production-ready systems.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My goal is to grow as an AI/ML Engineer with strong DevOps expertise, contributing to innovative and impactful technology solutions.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;
