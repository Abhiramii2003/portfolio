import { motion } from "framer-motion";

const projects = [
  {
    title: "TheraBot – AI Emotional Support App",
    description:
      "An AI-powered emotional support companion that provides empathetic conversations, mood tracking, diary writing, stress-relief games, and daily streak tracking.",
    tech: "React, Node.js, MongoDB, Gemini API",
  },
  {
    title: "Canteen Automation System",
    description:
      "A full-stack web application for managing digital food orders, seat availability, real-time notifications, admin analytics, and digital receipts.",
    tech: "React, Node.js, Express, MongoDB, Bootstrap",
  },
  {
    title: "MediTrack – Hospital Management System",
    description:
      "Role-based healthcare system with admin, doctor, patient, and pharmacist modules. Supports appointment booking, prescriptions, reminders, and billing.",
    tech: "React, Node.js, MongoDB",
  },
  {
    title: "AI Skin Disease Detection",
    description:
      "A deep learning-based system that detects skin diseases from uploaded images using a trained CNN model.",
    tech: "Python, TensorFlow, Flask",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-purple-600"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white dark:bg-gray-800
                         p-7 rounded-2xl
                         shadow-md hover:shadow-2xl
                         border border-transparent hover:border-purple-500/40
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-purple-600 font-medium">
                Tech Stack: {project.tech}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Projects;
