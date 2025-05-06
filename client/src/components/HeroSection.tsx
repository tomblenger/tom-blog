import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 space-y-6 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-gray-400 text-lg md:text-xl mb-2" variants={itemVariants}>
            Welcome to my portfolio
          </motion.h2>
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit" variants={itemVariants}>
            Let's Create Something Together!
            <span className="block text-primary-400 mt-2">
              <TypingEffect texts={["Frontend Developer", "UI/UX Designer", "React Specialist"]} />
            </span>
          </motion.h1>
          <motion.p className="text-gray-300 text-lg max-w-xl" variants={itemVariants}>
            I build exceptional digital experiences with React and Tailwind CSS. 
            Focused on creating responsive, accessible, and performant web applications.
          </motion.p>
          <motion.div className="flex gap-4" variants={itemVariants}>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors"
            >
              View my work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 border border-gray-600 hover:border-primary-400 text-gray-300 hover:text-white rounded-md transition-colors"
            >
              Contact me
            </button>
          </motion.div>
          <motion.div className="flex gap-6 pt-4" variants={itemVariants}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-400 to-purple-500 opacity-75 blur"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmVzc2lvbmFsIGhlYWRzaG90fHx8fHx8MTY5MzUwNjYwMA&ixlib=rb-4.0.3&q=80&w=600"
              alt="Alex Thompson"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-dark-300"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span className="text-gray-400 mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
