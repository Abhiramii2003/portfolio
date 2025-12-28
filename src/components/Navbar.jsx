import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors">
      <div className="flex justify-center items-center gap-8 py-4 font-medium relative">

        {/* Nav Links (UNCHANGED CONTENT) */}
        <a href="#home" className="hover:text-purple-600 dark:text-white">Home</a>
        <a href="#about" className="hover:text-purple-600 dark:text-white">About</a>
        <a href="#skills" className="hover:text-purple-600 dark:text-white">Skills</a>
        <a href="#projects" className="hover:text-purple-600 dark:text-white">Projects</a>
        <a href="#contact" className="hover:text-purple-600 dark:text-white">Contact</a>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute right-6 p-2 rounded-full 
                     bg-gray-200 dark:bg-gray-700 
                     hover:scale-110 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-800" />
          )}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
