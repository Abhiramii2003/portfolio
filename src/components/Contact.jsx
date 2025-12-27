import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-purple-600"
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-10"
        >
          I’m actively looking for software development opportunities.
          Feel free to reach out if you’d like to collaborate or hire me.
        </motion.p>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg text-gray-800 dark:text-gray-300"
        >
          <p>
            📧 <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:abhiramiaji621@gmail.com"
              className="text-purple-600 hover:underline"
            >
              abhiramiaji621@gmail.com
            </a>
          </p>

          <p>
            📞 <span className="font-medium">Phone:</span>{" "}
            <a
              href="tel:+919074801318"
              className="text-purple-600 hover:underline"
            >
              90748 01318
            </a>
          </p>

          <p>
            💼 <span className="font-medium">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/abhirami-aji"
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 hover:underline"
            >
              linkedin.com/in/abhirami-aji
            </a>
          </p>

          <p>
            🧑‍💻 <span className="font-medium">GitHub:</span>{" "}
            <a
              href="https://github.com/Abhiramii2003"
              target="_blank"
              rel="noreferrer"
              className="text-purple-600 hover:underline"
            >
              github.com/Abhiramii2003
            </a>
          </p>

          <p>
            📍 <span className="font-medium">Location:</span> Kerala, India
          </p>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="/Abhirami_Aji_Resume.pdf"
            download
            className="inline-block bg-purple-600 text-white px-10 py-3 rounded-full text-lg
                       hover:bg-purple-700 hover:scale-105 shadow-lg transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;
