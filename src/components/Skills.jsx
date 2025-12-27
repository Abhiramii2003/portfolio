import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-purple-600"
        >
          Skills
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <SkillCard
            title="Frontend"
            skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]}
          />

          <SkillCard
            title="Backend"
            skills={["Node.js", "Express.js", "MongoDB", "Python"]}
          />

          <SkillCard
            title="Tools"
            skills={["Git & GitHub", "VS Code", "Postman", "Docker (Basics)"]}
          />

        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="bg-gray-100 dark:bg-gray-800
               p-7 rounded-2xl
               shadow-md hover:shadow-xl
               transition-all duration-300"
  >
    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
      {title}
    </h3>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.06 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 text-sm font-medium
                     rounded-full
                     bg-purple-100 text-purple-700
                     dark:bg-purple-900/40 dark:text-purple-300"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default Skills;
