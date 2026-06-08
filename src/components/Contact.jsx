import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Download } from "lucide-react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "abhiramiaji621@gmail.com",
      href: "mailto:abhiramiaji621@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 90748 01318",
      href: "tel:+919074801318",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Abhirami Aji",
      href: "https://www.linkedin.com/in/abhirami-aji-0761a9255/",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "Abhiramii2003",
      href: "https://github.com/Abhiramii2003",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kerala, India",
      href: null,
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="overflow-hidden mb-3">
            <motion.p variants={itemVariants} className="text-sm md:text-base font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              Let's Connect
            </motion.p>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Touch.</span>
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            I’m actively seeking software development opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-center"
        >
          {contactMethods.map((method, index) => (
            <motion.div key={index} variants={itemVariants} className={index === 3 ? "lg:col-start-2" : ""}>
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-8 bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{method.value}</p>
                </a>
              ) : (
                <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center font-medium">{method.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            variants={itemVariants}
            href="/assets/Abhirami_Aji_Resume.pdf"
            download="Abhirami_Aji_Resume.pdf"
            className="group relative inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-transform active:scale-95 shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              <Download className="w-5 h-5" />
              Download Resume
            </span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
