import { motion } from "framer-motion";
import { Brain, Server, Layout, Terminal, Wrench } from "lucide-react";

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
            title="AI/ML"
            icon={Brain}
            skills={["Python", "Machine Learning", "Deep Learning", "TensorFlow", "Pandas", "NumPy", "Hugging Face"]}
          />

          <SkillCard
            title="DevOps"
            icon={Terminal}
            skills={["Docker", "Linux", "GitHub Actions", "CI/CD", "Cloud Fundamentals"]}
          />

          <SkillCard
            title="Backend"
            icon={Server}
            skills={["FastAPI", "Node.js", "Express.js", "MongoDB", "REST APIs"]}
          />

          <SkillCard
            title="Frontend"
            icon={Layout}
            skills={["HTML", "CSS", "JavaScript", "React", "Bootstrap"]}
          />

          <SkillCard
            title="Tools"
            icon={Wrench}
            skills={["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"]}
          />

        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, icon: Icon }) => (
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
    <div className="flex items-center gap-3 mb-6">
      {Icon && <Icon className="text-purple-600 dark:text-purple-400" size={28} />}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>

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
