import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Toaster } from "../components/ui/toaster";
import { FaCheckCircle } from "react-icons/fa";
import {
  SiShopify, SiLaravel, SiPhp, SiWordpress, SiDocker, SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiAppwrite, SiMysql, SiTailwindcss, SiFramer, SiGithub, SiGit, SiFigma, SiNodedotjs, SiNpm, SiBootstrap, SiPython, SiCplusplus, SiLinux
} from "react-icons/si";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const boxGradient = {
  background: "radial-gradient( circle at 50% 10%, rgba(90, 7, 7, 0.85) 0%, rgba(29, 2, 2, 0.93) 40%, rgba(31, 3, 3, 0.95) 100%)",
  boxShadow: "0 4px 32px 0 rgba(0,0,0,0.33)",
  position: "relative" as const
};
const boxBorder = "border-2 border-[#4b5563]";

// Animated glow style
const glowStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "1.1rem",
  pointerEvents: "none" as React.CSSProperties["pointerEvents"],
  zIndex: 0,
  background: "radial-gradient(circle at 60% 0%, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.10) 60%, transparent 100%)",
  animation: "glowPulse 3s ease-in-out infinite"
};

// Add keyframes for the glow animation
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes glowPulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}`;
document.head.appendChild(styleSheet);

const skills = [
  { icon: <SiReact className="text-sky-400 text-3xl" />, label: "React.js", desc: "Javascript Library" },
  { icon: <SiShopify className="text-green-400 text-3xl" />, label: "Shopify", desc: "eCommerce platform" },
  { icon: <SiLaravel className="text-yellow-400 text-3xl" />, label: "Laravel", desc: "PHP framework" },
  { icon: <SiPhp className="text-purple-400 text-3xl" />, label: "PHP", desc: "programming language" },
  { icon: <SiWordpress className="text-green-300 text-3xl" />, label: "Wordpress", desc: "PHP framework" },
  { icon: <SiDocker className="text-blue-400 text-3xl" />, label: "Docker", desc: "DevOps workflows" },
  { icon: <SiNextdotjs className="text-white text-3xl" />, label: "Next.js", desc: "React Framework" },
  { icon: <SiAppwrite className="text-pink-500 text-3xl" />, label: "Appwrite", desc: "Backend Service" },
  { icon: <SiJavascript className="text-yellow-300 text-3xl" />, label: "JavaScript", desc: "Programming Language" },
  { icon: <SiMysql className="text-yellow-400 text-3xl" />, label: "MySQL", desc: "Programming Language" },
  { icon: <SiTypescript className="text-blue-400 text-3xl" />, label: "TypeScript", desc: "Programming Language" },
  { icon: <SiTailwindcss className="text-blue-300 text-3xl" />, label: "Tailwind CSS", desc: "Css Library" },
  { icon: <SiFramer className="text-purple-500 text-3xl" />, label: "Framer Motion", desc: "Animations Library" },
  { icon: <SiGithub className="text-white text-3xl" />, label: "GitHub", desc: "CI/CD Tool" },
  { icon: <SiGit className="text-orange-400 text-3xl" />, label: "Git", desc: "CI/CD Tool" },
  { icon: <SiFigma className="text-orange-400 text-3xl" />, label: "Figma", desc: "Designing Tool" },
  { icon: <SiNodedotjs className="text-green-400 text-3xl" />, label: "Node.js", desc: "Javascript Runtime" },
  { icon: <SiNpm className="text-red-500 text-3xl" />, label: "Npm", desc: "Package Manager" },
  { icon: <SiBootstrap className="text-purple-600 text-3xl" />, label: "Bootstrap", desc: "Css Library" },
  { icon: <SiPython className="text-yellow-400 text-3xl" />, label: "Python", desc: "Programming Language" },
  { icon: <SiCplusplus className="text-blue-400 text-3xl" />, label: "C++", desc: "Programming Language" },
  { icon: <SiMysql className="text-blue-400 text-3xl" />, label: "MySql", desc: "Database Tool" },
  { icon: <SiLinux className="text-orange-200 text-3xl" />, label: "Linux", desc: "Operating System" },
];

export default function InfoPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-gray-100 font-sans min-h-screen bg-gradient-to-b from-[#0a1124] via-[#10182e] to-[#181f36]"
      style = {{
        background: "radial-gradient(ellipse at top, rgb(43, 43, 117) 0%, rgb(9, 9, 39) 70%)"
      }}
    >
      <Header />
      <main>
        <section className="flex flex-col items-center justify-center min-h-[60vh] pt-12 pb-4">
          {/* About Me Box */}
          <motion.div
            className={`w-full max-w-5xl mb-8 p-8 rounded-2xl shadow-2xl text-left ${boxBorder}`}
            style={boxGradient}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 40px 0 rgba(255,255,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.33)",
              filter: "brightness(1.08)"
            }}
          >
            <div style={glowStyle}></div>
            <h1 className="w-full text-white text-5xl mb-2 relative z-10" style={{textShadow: '0 2px 16px #fff8', textAlign: 'center'}}>About Me</h1>
            <div className="text-4xl font-semibold text-white mb-1 relative z-10">Vasyl Duhovych</div>
            <div className="text-lg font-bold text-white mb-3 relative z-10">Senior PHP-Laravel&Wordpress&Shopify Developer.</div>
            <div className="text-base text-gray-200 max-w-3xl relative z-10">
              A Senior PHP Developer specializing in Laravel, WordPress, and Shopify, with 7+ years of experience delivering scalable and high-performance solutions for enterprise and SMB clients. Passionate about crafting efficient, secure, and user-friendly web applications, I thrive on solving complex challenges and continuously expanding my skill set. With a problem-solving mindset and a commitment to excellence, I ensure seamless development, customization, and optimization to drive business success.
            </div>
          </motion.div>

          {/* Skills and Employment Row */}
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
            {/* Additional Skills Box */}
            <motion.div
              className={`flex-1 p-8 rounded-2xl shadow-xl text-left ${boxBorder}`}
              style={boxGradient}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 40px 0 rgba(255,255,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.33)",
                filter: "brightness(1.08)"
              }}
            >
              <div style={glowStyle}></div>
              <h2 className="text-4xl font-bold text-green-300 mb-3 relative z-10" style={{textShadow: '0 1px 8px #00ffb3'}}>Additional Skills:</h2>
              <ul className="list-disc list-inside text-gray-100 text-base space-y-1 relative z-10">
                <li>Frontend Development – HTML5, CSS3, JavaScript (ES6+), jQuery, Tailwind CSS, Bootstrap</li>
                <li>Backend & API Development – PHP, Laravel, RESTful APIs, GraphQL, MySQL, PostgreSQL</li>
                <li>CMS Expertise – WordPress (Custom Themes & Plugins), Shopify (Liquid, Storefront API, App Development)</li>
                <li>E-commerce Solutions – WooCommerce, Shopify Plus, Payment Gateway Integration (Stripe, PayPal)</li>
                <li>Performance Optimization – Page Speed Optimization, Caching, Database Indexing</li>
                <li>Security Best Practices – XSS & SQL Injection Prevention, Authentication & Authorization</li>
                <li>Version Control & DevOps – Git, GitHub, Bitbucket, CI/CD, Docker, AWS, DigitalOcean</li>
                <li>SEO & Accessibility – Technical SEO, Schema Markup, ADA Compliance</li>
                <li>Third-Party Integrations – CRM, ERP, Payment APIs, Marketing Automation</li>
                <li>Project Management – Agile/Scrum, Jira, Trello, Client Communication</li>
              </ul>
            </motion.div>
            {/* Employment History Box */}
            <motion.div
              className={`flex-1 p-8 rounded-2xl shadow-xl text-left ${boxBorder}`}
              style={boxGradient}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 40px 0 rgba(255,255,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.33)",
                filter: "brightness(1.08)"
              }}
            >
              <div style={glowStyle}></div>
              <h2 className="text-4xl font-bold text-blue-300 mb-3 relative z-10" style={{textShadow: '0 1px 8px #60a5fa'}}>Employment history:</h2>
              <ul className="list-disc list-inside text-gray-100 text-base mb-2 relative z-10">
                <li><span className="font-bold">Wordpress Developer</span> | Svitla Systems, Inc. (April 2021 - November 2024)</li>
                <li><span className="font-bold">Mobile App Developer</span> | Cleveroad (July 2019 - February 2021)</li>
                <li><span className="font-bold">PHP Developer</span> | Inoxoft (June 2017 - February 2019)</li>
              </ul>
              <ul className="list-disc list-inside text-gray-300 text-base space-y-1 ml-4 relative z-10">
                <li>Developed and maintained high-performance WordPress and Shopify websites, ensuring seamless functionality and optimal user experience.</li>
                <li>Customized themes and plugins to meet client-specific requirements, enhancing design and functionality.</li>
                <li>Optimized website speed, security, and SEO to improve search rankings and performance.</li>
                <li>Integrated third-party APIs, payment gateways, and custom features to enhance eCommerce functionality.</li>
                <li>Collaborated with designers, marketers, and stakeholders to deliver user-friendly and conversion-driven websites.</li>
                <li>Troubleshot and resolved technical issues, ensuring seamless site performance and uptime.</li>
                <li>Led migration and upgrade projects, ensuring minimal downtime and data integrity.</li>
              </ul>
            </motion.div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="mt-16 flex flex-col items-center mb-16">
          {(() => {
            const skillsRef = useRef(null);
            const isInView = useInView(skillsRef, { once: true, amount: 0.2 });
            return (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="italic text-xl text-right w-full max-w-5xl mb-2 pr-2 text-gray-200"
                   style={{textShadow: '0 2px 12px #fff8'}}
                >
                  Lets Create Something Together!
                </motion.div>
                <h2 className="text-5xl font-bold mb-8 text-center" style={{textShadow: '0 2px 12px #fff8'}}>Skills</h2>
                <motion.div
                  ref={skillsRef}
                  className="flex flex-row flex-wrap gap-6 max-w-5xl mx-auto w-full justify-center"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    visible: { transition: { staggerChildren: 0.5 } },
                    hidden: {}
                  }}
                >
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={skill.label}
                      className="flex flex-row items-center bg-[#181c24]/80 rounded-xl p-4 w-auto max-w-full border border-[#23243a] shadow-md transition-all cursor-pointer group gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.5, ease: 'linear' }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 32px 0 rgba(255,255,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.33)",
                        borderColor: "#60a5fa",
                        backgroundColor: "#23243a"
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-[#23243a] mr-4">
                        {skill.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-semibold text-lg">{skill.label}</span>
                        <span className="text-xs text-gray-400">{skill.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            );
          })()}
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </motion.div>
  );
}