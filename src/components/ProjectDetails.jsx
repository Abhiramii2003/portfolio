import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { ArrowLeft, ExternalLink, Github, Youtube } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Portfolio`;
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", project.description);
      }
    }
  }, [id, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h2>
          <button 
            onClick={() => navigate("/")}
            className="text-purple-600 hover:text-purple-500 font-medium flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {project.title}
          </motion.h1>
          {project.category && (
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wide">
              {project.category}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mb-6">
            {(project.techStack || project.tech.split(', ')).map((tech, idx) => (
              <span key={idx} className="text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-md font-medium border border-purple-200 dark:border-purple-800">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex gap-4">
            {project.githubLink !== "#" && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            )}
            {project.liveLink !== "#" && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
            {project.videoLink && (
              <a 
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Youtube size={20} />
                <span>Demo Video</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {project.fullDescription || project.description}
            </p>
          </section>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-lg">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>
          )}


          {/* Video Demo Embed */}
          {project.videoLink && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Video Demo</h2>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={project.videoLink.replace("youtu.be/", "www.youtube.com/embed/").replace("watch?v=", "embed/")}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetails;
