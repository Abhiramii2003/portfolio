import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

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
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white dark:bg-gray-800
                         p-7 rounded-2xl
                         shadow-md hover:shadow-2xl
                         border border-transparent hover:border-purple-500/40
                         transition-all duration-300 block h-full flex flex-col"
            >
              <div className="relative h-full flex flex-col">
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-pulse">
                    Featured
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white pr-16">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.techStack || project.tech.split(', ')).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2.5 py-1 rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-block px-5 py-2.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Projects;
