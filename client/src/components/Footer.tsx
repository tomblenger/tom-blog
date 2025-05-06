import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full" style={{ opacity: 0.5 }}>
      {/* Divider line */}
      <div className="w-full border-t border-gray-200/30 mb-2" />
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6">
        <div className="text-left">
          <div className="text-gray-200 text-sm mb-1">
            © {new Date().getFullYear()} Vasyl Duhovych. All Rights Reserved.
          </div>
          <div className="text-gray-300 text-sm">Made with passion and dedication.</div>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          {/* Email icon */}
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
    </footer>
  );
};

export default Footer;
