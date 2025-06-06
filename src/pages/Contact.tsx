import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Code } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Sending form data:', formData);
      const response = await fetch('https://srimun-portfolio-2024.web.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at itsmesrimun@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'itsmesrimun@gmail.com',
      href: 'mailto:itsmesrimun@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8667709294',
      href: 'tel:+918667709294',
      color: 'text-teal-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/srimun',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/srimun',
      color: 'text-gray-400'
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: 'Check my solutions',
      href: 'https://leetcode.com/srimun',
      color: 'text-teal-400'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
            Let's collaborate and build something amazing together. I'm always open to discussing new opportunities and exciting projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-enhanced p-8 rounded-2xl border border-gray-700/30"
          >
            <h2 className="text-3xl font-bold text-blue-400 mb-6 font-orbitron">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-200 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-teal-400 mb-6 font-orbitron">
              Let's Connect
            </h2>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 8 }}
                className="block glass-enhanced p-6 rounded-xl border border-gray-700/30 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gray-800/50 text-gray-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-200 font-semibold mb-1">{item.label}</h3>
                    <p className={`${item.color} text-sm`}>{item.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Quick Response Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="glass-enhanced p-6 rounded-xl mt-8 border border-gray-700/30"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4 font-orbitron">
                Quick Response
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn for faster communication.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 text-center glass-enhanced p-8 rounded-2xl border border-gray-700/30"
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-4 font-orbitron">
            Ready to start your next project?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you need a full-stack web application, AI integration, or technical consultation, 
            I'm here to help bring your ideas to life.
          </p>
          <motion.a
            href="mailto:itsmesrimun@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
          >
            Start the Conversation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
