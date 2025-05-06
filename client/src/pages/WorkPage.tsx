import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import ScrollToTop from "../components/ScrollToTop";
import { Toaster } from "../components/ui/toaster";
import { useRef, useState } from "react";

const selectedProjects = [
  {
    title: "Yeti Cycles",
    description: "A modern e-commerce site for mountain bikes.",
    image: "https://vasyl-duhovych.vercel.app/assets/Cycle-qKZQiflg.png",
    tags: ["PHP", "Wordpress", "GraphQL & REST API", "WP-Optimize", "CRM Integration", "Vue.js", "jQuery"],
  },
  {
    title: "Jira Clone",
    description: "A modern e-commerce site for mountain bikes.",
    image: "https://vasyl-duhovych.vercel.app/assets/image1-D3EGypa4.webp",
    tags: ["PHP", "Laravel", "Laravel Nova", "Laravel Action", "Vue.js", "TypeScript", "Vite", "MySQL", "RESTful API", "Jira", "AWS", "Time Tracking", "Booking feature"],
  },
  {
    title: "Sparkle In Pink",
    description: "A project management tool inspired by Jira.",
    image: "https://vasyl-duhovych.vercel.app/assets/codeEditor-C3CGLrEQ.png",
    tags: ["Shopify", "Liquid", "Storefront API", "Theme Customization", "Customer Support", "Customer Serveice", "Email Support", "Customer Satisfaction", "Data Entry", "Order Tracking"],
  },
  {
    title: "Needed",
    description: "A project management tool inspired by Jira.",
    image: "https://vasyl-duhovych.vercel.app/assets/needed-B6OlwV-N.png",
    tags: ["Shopify", "Shopify APIs & Webhooks", "GraphQL & REST API", "Theme Development", "Node.js", "React", "Ruby on Rails"],
  },
  {
    title: "Verified First",
    description: "A project management tool inspired by Jira.",
    image: "https://vasyl-duhovych.vercel.app/assets/Verified-CZ18GQw_.png",
    tags: ["WordPress Theme", "Plugin Development", "PHP", "CRM", "SEO & Conversion Rate Optimization", "WP Hooks", "Wordfence"],
  },
  {
    title: "GoodHire",
    description: "A project management tool inspired by Jira.",
    image: "https://vasyl-duhovych.vercel.app/assets/Hired-DDD9-CES.png",
    tags: ["WordPress", "WordPress Core & Hooks", "Shopify(Theme and Plugin)", "Shopify APIs & Webhooks", "GraphQL & REST API", "WooCommerce Development", "PHP", "React", "Vue", "MySQL", "WP-CLI"],
  },
  {
    title: "SnapGram",
    description: "A project management tool inspired by Jira.",
    image: "https://vasyl-duhovych.vercel.app/assets/SnapGram-YaVLcjUc.png",
    tags: ["React.js", "Node.js", "PostgreSQL", "Tailwind.css", "Typescript", "Shadcn/ui", "TanStack", "Appwrite"],
  },

  {
    title: "A Music App Design",
    description: "A modern e-commerce site for mountain bikes.",
    image: "https://vasyl-duhovych.vercel.app/assets/Cover-CcRUl5AU.webp",
    tags: ["Figma"],
  },
  // {
  //   title: "Jira Clone",
  //   description: "A project management tool inspired by Jira.",
  //   image: "https://vasyl-duhovych.vercel.app/assets/Verified-CZ18GQw_.png",
  //   tags: ["React.js", "Tailwind.css", "RapidAPI", "MaterialUI"],
  // }
];

// Filter otherProjects to exclude any project with a title that exists in selectedProjects
const otherProjectsRaw = [
  {
    title: "Gym App",
    description: "A fitness app for tracking workouts.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tags: ["React.js", "Tailwind.css", "RapidAPI", "MaterialUI"],
  },
  {
    title: "Space Tourism website",
    description: "A website for space tourism.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    tags: ["React.js", "Tailwind.css", "Framer Motion"],
  },
  {
    title: "Music Player",
    description: "A web-based music player.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    description: "A weather forecast app.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tags: ["HTML", "CSS", "Laravel", "JavaScript", "API"],
  },
  // {
  //   title: "Jira Clone",
  //   description: "A project management tool inspired by Jira.",
  //   image: "https://vasyl-duhovych.vercel.app/assets/Verified-CZ18GQw_.png",
  //   tags: ["React.js", "Tailwind.css", "RapidAPI", "MaterialUI"],
  // },
  // {
  //   title: "Jira Clone",
  //   description: "A project management tool inspired by Jira.",
  //   image: "https://vasyl-duhovych.vercel.app/assets/Verified-CZ18GQw_.png",
  //   tags: ["React.js", "Tailwind.css", "RapidAPI", "MaterialUI"],
  // },
];

const selectedTitles = new Set(selectedProjects.map(p => p.title));
const otherProjects = otherProjectsRaw.filter(p => !selectedTitles.has(p.title));

function SelectedProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0, 0, 0, 0] }}
      whileHover="hover"
      className="w-full text-gray-100 font-sans relative flex flex-col md:flex-row gap-8 p-8"
      style={{
        border: "10px solid rgba(199, 80, 80, 0.18)",
        borderRadius: '1.1rem',
        boxShadow: "0 8px 32px 0 rgba(51, 52, 73, 0.7)",
        background: "rgb(24, 26, 38)",
        transition: "background 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.7s cubic-bezier(0.4,0,0.2,1)",
        marginBottom: "70px",
        paddingBottom: "0px",
      }}
      variants={{
        hover: {
          background: "radial-gradient(ellipse at top, rgb(42, 96, 196) 0%, rgb(24, 26, 38) 80%)",
          boxShadow: "0 12px 40px 0 rgba(51, 52, 73, 0.9)"
        },
        initial: {}
      }}
    >
      <div className="flex-1 p-6 flex flex-col justify-center relative" style={{paddingBottom: '0px'}}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-extrabold text-white drop-shadow-lg">{project.title}</h2>
          <div className="flex gap-2">
            <button className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-2xl flex items-center transition-colors duration-200" title="Project Link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3.535 3.535a4 4 0 01-5.657-5.657l1.414-1.414" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 010-5.656l3.535-3.535a4 4 0 015.657 5.657l-1.414 1.414" />
              </svg>
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-2xl flex items-center transition-colors duration-200" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-2xl flex items-center font-semibold transition-colors duration-200" title="Highlights">
              Highlights <span className="ml-1">✨</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4" style={{paddingBottom: '30px'}}>
          {project.tags && project.tags.map((tag: string) => (
            <span key={tag} className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full opacity-60">{tag}</span>
          ))}
        </div>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full object-cover rounded-[1.1rem] mt-4 h-[28rem]"
          variants={{
            hover: { y: -40 },
            initial: { y: 0 }
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

function OtherProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0, 0, 0, 0] }}
      whileHover="hover"
      className="w-full text-gray-100 font-sans"
      style={{
        border: "10px solid rgba(199, 80, 80, 0.18)",
        borderRadius: '1.1rem',
        boxShadow: "0 8px 32px 0 rgba(51, 52, 73, 0.7)",
        background: "rgb(24, 26, 38)",
        transition: "background 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.7s cubic-bezier(0.4,0,0.2,1)",
        marginBottom: "50px",
        paddingBottom: "0px",
      }}
      variants={{
        hover: {
          background: "radial-gradient(ellipse at top, rgb(42, 96, 196) 0%, rgb(24, 26, 38) 80%)",
          boxShadow: "0 12px 40px 0 rgba(51, 52, 73, 0.9)"
        },
        initial: {}
      }}
    >
      <div className="flex-1 p-6 flex flex-col relative" style={{paddingBottom: '0px'}}>
        <div className="flex flex-col h-full">
          <div className="flex-none">
            <h2 className="text-2xl font-extrabold text-white drop-shadow-lg mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags && project.tags.map((tag: string) => (
                <span key={tag} className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full opacity-60">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="flex-none mb-4">
            <div className="flex gap-2" style={{paddingBottom: '30px'}}>
              <button className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-2xl flex items-center transition-colors duration-200" title="Project Link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3.535 3.535a4 4 0 01-5.657-5.657l1.414-1.414" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 010-5.656l3.535-3.535a4 4 0 015.657 5.657l-1.414 1.414" />
                </svg>
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-2xl flex items-center transition-colors duration-200" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-2xl flex items-center font-semibold transition-colors duration-200" title="Highlights">
                Highlights <span className="ml-1">✨</span>
              </button>
            </div>
          </div>
        </div>
        
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full object-cover rounded-[1.1rem] mt-4 h-[15rem]"
          variants={{
            hover: { y: -40 },
            initial: { y: 0 }
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<'selected' | 'other'>('selected');

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-gray-100 font-sans min-h-screen"
      style={{
        background: "radial-gradient(ellipse at top, rgb(43, 43, 117) 0%, rgb(9, 9, 39) 70%)"
      }}
    >
      <Header />
      <main className="max-w-5xl w-full mx-auto flex flex-col justify-center mt-10">
        <section className="flex flex-col justify-center items-center min-h-[60vh] mt-10 mx-4">
          <div className="relative max-w-5xl w-full mx-4 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Window frame with gradient */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none z-10" style={{
                background: "linear-gradient(135deg, rgb(36, 49, 73) 0%, rgb(14, 16, 19) 30%)",
                opacity: 0.35
              }} />
              {/* Main window */}
              <div className="relative rounded-2xl border-2 border-white/20 shadow-2xl p-0 overflow-hidden" style={{
                background: "rgba(60, 65, 83, 0.5)",
                boxShadow: "0 8px 32px 0 rgba(71, 73, 104, 0.33)",
                border: "2.5px solid rgba(199, 80, 80, 0.1)",
                boxSizing: "border-box",
                padding: "10px"
              }}>
                {/* Top bar for window controls */}
                <div
                  className="relative w-full h-10 flex items-center pl-6 pr-2"
                  style={{
                    borderTopLeftRadius: '1.1rem',
                    borderTopRightRadius: '1.1rem',
                    background: 'linear-gradient(to right,rgb(83, 86, 95) 0%, #ffffff 50%,rgb(99, 103, 116) 100%)',
                    boxShadow: 'inset 0 -8px 18px 0 rgba(0,0,0,0.28)',
                    borderBottom: '2px solid rgba(255,255,255,0.10)'
                  }}
                >
                  <div className="flex gap-2 mt-1 ml-1">
                    <span className="w-3 h-3 rounded-full bg-red-400 border border-red-300 shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-300 border border-yellow-200 shadow-sm"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400 border border-green-300 shadow-sm"></span>
                  </div>
                </div>
                {/* Body section with different background */}
                <div className="relative z-10 pt-16 pb-10 pl-14 pr-8 md:pl-20 md:pr-16" style={{
                  background: 'linear-gradient(to top right, #1e3a8a 0%,rgb(13, 14, 15) 60%, #dc2626 100%)',
                  borderBottomLeftRadius: '1rem',
                  borderBottomRightRadius: '1rem',
                  paddingLeft: '30px',
                  boxShadow: '0 2px 24px 0 rgba(0,0,0,0.10)'
                }}>
                  <h1 className="text-white text-[2.3rem] md:text-[3.5rem] lg:text-[4rem] leading-tight mb-0" style={{
                    textShadow: '0 4px 32px #fff, 0 1px 0 #fff2, 0 0 4px #fff8',
                    lineHeight: 1.1,
                    marginTop: '70px',
                    marginBottom: '150px',  
                    color: 'white',
                    textAlign: 'left',
                    opacity: 1
                  }}>
                    I like Building E-commerce &<br />
                    Management Web Apps &<br />
                    <span className="italic" style={{fontSize: '1.15em', color: 'white', opacity: 1}}>Products.</span>
                  </h1>
                  <div className="absolute right-12 bottom-10 md:right-16 md:bottom-12 text-lg md:text-xl text-white font-normal select-none z-10" style={{letterSpacing: '0.01em'}}>
                    Elegant Developer
                  </div>
                </div>
                {/* Gradient overlays for color */}
                <div className="pointer-events-none absolute inset-0 z-0">
                  <div className="absolute right-0 top-0 w-2/3 h-2/3 bg-gradient-to-br from-red-500/40 to-transparent rounded-2xl blur-2xl" />
                  <div className="absolute left-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-700/30 to-transparent rounded-2xl blur-2xl" />
                </div>
                {/* Subtle inner border for glass effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-white border-opacity-10" />
                {/* Inner shadow for depth */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: 'inset 0 0 40px 0 rgba(0,0,0,0.22)'}} />
              </div>
            </motion.div>
          </div>
          {/* Down arrow navigation button */}
          <button
            onClick={handleScrollToProjects}
            className="mt-6 mb-2 flex flex-col items-center group focus:outline-none mx-8 md:mx-24 lg:mx-48"
            aria-label="Scroll to projects" style={{marginBottom: '100px'}}
          >
            <span className="animate-bounce rounded-full bg-white/10 border border-blue-400/40 shadow-lg p-3">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-400 group-hover:text-blue-500 transition-colors duration-200">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </section>
        {/* Tab navigation and animated project intro cards */}
        <div className="ml-5 mr-5">
          <div className="flex justify-start mb-8 mx-1">
            <div className="flex rounded-full justify-start bg-[#2E2E45] bg-opacity-50 overflow-hidden" style={{ opacity: 1 }}>
              <button
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 text-white ${
                  tab === 'selected'
                    ? 'bg-white/20'
                    : 'bg-transparent'
                }`}
                onClick={() => setTab('selected')}
              >
                Selected Work
              </button>
              <button
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 text-white ${
                  tab === 'other'
                    ? 'bg-white/20'
                    : 'bg-transparent'
                }`}
                onClick={() => setTab('other')}
              >
                Other Work
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-md border-2 ${tab === 'selected' ? 'bg-blue-600 border-blue-700 shadow-blue-400/40 shadow' : 'bg-gray-800 border-gray-700'} transition-all duration-200`}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg" style={{textShadow: '0 2px 12px #fff8'}}>
              {tab === 'selected' ? 'Selected Work' : 'Other Work'}
            </h2>
          </div>
          {tab === 'selected' ? (
            <div className="w-full">
              {selectedProjects.map((project, idx) => (
                <SelectedProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project, idx) => (
                <OtherProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </motion.div>
  );
}