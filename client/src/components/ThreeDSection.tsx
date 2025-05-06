import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Simple3DScene from "./Simple3DScene";

const ThreeDSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="3d" className="py-20 bg-dark-300" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-outfit">
            <span className="text-primary-400">&lt;</span>
            3D Experience
            <span className="text-primary-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Interactive 3D visuals created with React Three Fiber & Drei
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-16"
        >
          <motion.div variants={itemVariants} className="w-full">
            <Simple3DScene className="mb-8 rounded-lg overflow-hidden border border-dark-100/20" />
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Animated 3D text with dynamic lighting and interactive controls
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs">
                  React Three Fiber
                </span>
                <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs">
                  Three.js
                </span>
                <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs">
                  Drei
                </span>
                <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs">
                  OrbitControls
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-4">
            <a
              href="https://github.com/pmndrs/react-three-fiber"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white rounded-md transition-colors inline-flex items-center"
            >
              Learn More About React Three Fiber
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeDSection;