import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-purple-600">
          Abhirami
        </h1>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>

      </div>
    </nav>
  );
};

export default Navbar;
