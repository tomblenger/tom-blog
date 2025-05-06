import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaCode, FaBriefcase, FaGitAlt, FaDocker, FaAws, FaFigma, FaCodeBranch, FaTerminal, FaVial, FaCheckCircle } from "react-icons/fa";
import { technicalSkills, professionalTools } from "../data/skills";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const skills: Record<string, boolean> = {};
        technicalSkills.forEach(skill => {
          skills[skill.name] = true;
        });
        setAnimatedSkills(skills);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

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

  const softSkills = [
    "Team Leadership & Collaboration",
    "Problem-solving & Critical Thinking",
    "Project Management & Agile Methodologies",
    "User Experience Design & Accessibility",
    "Communication & Documentation",
  ];

  return (
    <section id="skills" className="py-20 bg-dark-200" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-outfit">
            <span className="text-primary-400">&lt;</span>
            Skills
            <span className="text-primary-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The technologies, tools, and methodologies I specialize in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 className="text-xl font-semibold mb-6 flex items-center" variants={itemVariants}>
              <FaCode className="text-primary-400 mr-3" />
              Technical Skills
            </motion.h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <motion.div key={skill.name} className="skill-item" variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: animatedSkills[skill.name] ? `${skill.percentage}%` : "0%",
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 className="text-xl font-semibold mb-6 flex items-center" variants={itemVariants}>
              <FaBriefcase className="text-primary-400 mr-3" />
              Professional Skills
            </motion.h3>
            
            {/* Tools Section */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h4 className="text-lg font-medium mb-4">Tools & Frameworks</h4>
              <div className="flex flex-wrap gap-3">
                {professionalTools.map((tool, index) => {
                  const icons: Record<string, JSX.Element> = {
                    Git: <FaGitAlt />,
                    Docker: <FaDocker />,
                    AWS: <FaAws />,
                    Figma: <FaFigma />,
                    "CI/CD": <FaCodeBranch />,
                    Webpack: <FaTerminal />,
                    Jest: <FaVial />,
                  };

                  return (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-dark-100 rounded-full text-sm"
                      variants={itemVariants}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      {icons[tool] && <span className="text-primary-400 mr-1">{icons[tool]}</span>}
                      {tool}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
            
            {/* Soft Skills Section */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-medium mb-4">Soft Skills</h4>
              <ul className="space-y-3">
                {softSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <FaCheckCircle className="text-primary-400 mt-1 mr-3" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
