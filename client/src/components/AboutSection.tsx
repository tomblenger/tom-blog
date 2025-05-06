import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const educationExperience = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      title: "BSc in Computer Science",
      organization: "Stanford University (2014-2018)",
    },
    {
      id: 2,
      icon: <FaBriefcase />,
      title: "Senior Frontend Developer",
      organization: "TechInnovate Inc. (2021-Present)",
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: "UI Developer",
      organization: "WebSolutions Co. (2018-2021)",
    },
  ];

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
    <section id="about" className="py-20 bg-dark-200" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary-400/20 to-purple-500/20 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWluaW1hbCB0ZWNoIHdvcmtzcGFjZXx8fHx8fDE2OTM1MDY3MjU&ixlib=rb-4.0.3&q=80&w=800"
                alt="My workspace"
                className="relative rounded-lg w-full h-auto shadow-xl"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 font-outfit" variants={itemVariants}>
              <span className="text-primary-400">&lt;</span>
              About Me
              <span className="text-primary-400">/&gt;</span>
            </motion.h2>
            <motion.div className="space-y-4 text-gray-300" variants={itemVariants}>
              <p>
                I'm a <strong className="text-white">Frontend Developer</strong> with 5+ years of experience creating modern web applications. 
                My journey in web development started during college where I built my first React project.
              </p>
              <p>
                Currently, I'm focused on building accessible, human-centered products at <strong className="text-white">TechInnovate Inc</strong>, 
                where I work on enterprise SaaS solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring hiking trails, experimenting with new recipes, or contributing to open-source projects.
                I'm passionate about creating elegant solutions to complex problems.
              </p>
              
              <motion.div className="pt-4" variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-3 text-white">Education & Experience</h3>
                <ul className="space-y-4">
                  {educationExperience.map((item) => (
                    <motion.li key={item.id} className="flex gap-4" variants={itemVariants}>
                      <div className="text-primary-400 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.organization}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
