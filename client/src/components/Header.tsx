import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const headerClasses = `sticky top-0 z-50 bg-dark-300/90 transition-all duration-300 ${
    scrolled ? "py-3" : "py-4"
  }`;

  const scrollToSection = (id: string) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto max-w-full px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0" 
      // style={{
      //   marginLeft: "5vh",
      //   marginRight: "5vh",
      //   }}
        >
        <div className="mt-2 md:mt-0 min-w-[400px] md:min-w-[500px] max-w-full" style={{ paddingLeft: "5vh" }}>
          <div className="text-2xl md:text-3xl text-white leading-tight" >Vasyl Duhovych</div>
          <div className="text-base md:text-lg text-gray-400 font-normal">PHP-Laravel&Wordpress&Shopify Developer</div>
        </div>
        <div className="w-full flex justify-center mt-4 md:mt-8 flex-1">
          <nav className="flex items-center" style={{ paddingRight: "40vh" }}>
            <div className="flex rounded-full bg-[#ccebff] bg-opacity-30 overflow-hidden" style={{ opacity: 1}}>
              <a
                href="/"
                className={`px-6 py-2 text-lg md:text-xl text-white header-nav-btn block${location === "/" ? " header-nav-btn-active" : ""}`}
                // style={{ textShadow: "0 0 8px #fff, 0 0 16px #fff" }}
              >
                Work
              </a>
              <a
                href="/info"
                className={`px-6 py-2 text-lg md:text-xl text-white header-nav-btn block${location === "/info" ? " header-nav-btn-active" : ""}`}
                // style={{ textShadow: "0 0 8px #fff, 0 0 16px #fff" }}
              >
                Info
              </a>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0" style={{ paddingRight: "5vh" }}>
        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer" title="Email" className="text-white hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <rect width="20" height="16" x="2" y="4" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M22 6 12 13 2 6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
          {/* GitHub icon */}
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-white hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-200 border-t border-dark-100/20 absolute w-full overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col items-center space-y-4">
              <div className="flex rounded-full bg-[#2E2E45] overflow-hidden self-center">
                <a
                  href="/"
                  className={`px-8 py-3 text-lg text-gray-200 header-nav-btn block${location === "/" ? " header-nav-btn-active" : ""}`}
                  style={{ textShadow: "0 0 8px #fff, 0 0 16px #fff" }}
                >
                  Work
                </a>
                <a
                  href="/info"
                  className={`px-8 py-3 text-lg text-gray-200 header-nav-btn block${location === "/info" ? " header-nav-btn-active" : ""}`}
                  style={{ textShadow: "0 0 8px #fff, 0 0 16px #fff" }}
                >
                  Info
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
