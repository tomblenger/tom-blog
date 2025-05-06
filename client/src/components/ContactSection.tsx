import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // Here you would normally send the form data to a server
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast({
        title: "Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
    }
  };

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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "alex@example.com",
      link: "mailto:alex@example.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "San Francisco, California",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-300" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-outfit">
            <span className="text-primary-400">&lt;</span>
            Get In Touch
            <span className="text-primary-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out to me.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 className="text-xl font-semibold mb-6" variants={itemVariants}>
              Contact Information
            </motion.h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li key={index} className="flex items-start text-gray-300" variants={itemVariants}>
                  <div className="text-primary-400 mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="hover:text-primary-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <motion.div className="mt-8" variants={itemVariants}>
              <h4 className="text-lg font-medium mb-4">Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-100 flex items-center justify-center hover:bg-primary-500 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 bg-dark-100 border border-dark-100 focus:border-primary-400 rounded-md text-white focus:outline-none ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className={`w-full px-4 py-3 bg-dark-100 border border-dark-100 focus:border-primary-400 rounded-md text-white focus:outline-none ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-dark-100 border border-dark-100 focus:border-primary-400 rounded-md text-white focus:outline-none"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message"
                  className={`w-full px-4 py-3 bg-dark-100 border border-dark-100 focus:border-primary-400 rounded-md text-white focus:outline-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </motion.div>
              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors w-full md:w-auto"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
