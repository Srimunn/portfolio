import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AYUSH Virtual Herbal Garden',
      description: 'A comprehensive digital platform showcasing medicinal plants and herbs with detailed information about their properties and uses. Built using modern web technologies with 3D plant models and an interactive UI for educational purposes.',
      technologies: ['React.js', 'Node.js', 'MongoDB Atlas', 'Three.js', 'HTML/CSS', 'JavaScript', 'Blender'],
      highlights: [
        '3D Models created in Blender (.glb format)',
        'Frontend: React.js, Backend: Node.js',
        '3D Rendering: Three.js',
        'Database: MongoDB Atlas'
      ],
      color: 'from-emerald-400 to-emerald-600',
      category: 'Full Stack',
      githubUrl: 'https://github.com/Srimunn/Ayush-hackathon',
     
    },
    {
      title: 'Attendance Management System',
      description: 'An automated system for tracking and managing student attendance using facial recognition technology. This project uses AI to automate the traditional attendance marking process.',
      technologies: ['Python', 'OpenCV', 'Pandas', 'FaceNet', 'Tkinter', 'SQLite'],
      highlights: [
        'Face recognition using FaceNet',
        'GUI using Tkinter',
        'Local server deployment or Streamlit cloud option',
        'Dataset of 60+ student images in JPEG/PNG'
      ],
      color: 'from-blue-400 to-blue-600',
      category: 'AI/ML',
      githubUrl: 'https://github.com/Srimunn/Attedence_management',
      liveUrl: null
    },
    {
      title: 'Mental Health Counseling App',
      description: 'A comprehensive MERN stack application with AI integration for mental health support. Features real-time chat, mood tracking, and personalized recommendations.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AI/ML'],
      highlights: ['98% detection accuracy', 'Real-time chat support', 'AI-powered recommendations'],
      color: 'from-cyan-400 to-cyan-600',
      category: 'Full Stack',
      githubUrl: 'https://github.com/Srimunn/counselling_datafication',
      liveUrl: 'https://mindfree-70f04.web.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React, Vite, and TailwindCSS. Features a modern UI with kinetic glow effects and smooth animations.',
      technologies: ['React.js', 'Vite', 'TailwindCSS', 'Framer Motion'],
      highlights: ['Modern UI/UX', 'Responsive Design', 'Performance Optimized'],
      color: 'from-purple-400 to-purple-600',
      category: 'Frontend',
      githubUrl: 'https://github.com/Srimunn/portfolio_website',
      liveUrl: 'https://srimun.vercel.app'
    },
    {
      title: 'QR Code ID Generator',
      description: 'A smart web application for generating customized QR codes linked to unique user IDs. Designed for event check-ins, digital business cards, and secure identity sharing.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: ['Unique user ID integration', 'Instant QR code generation', 'Easy third-party system integration'],
      color: 'from-teal-400 to-teal-600',
      category: 'Web App',
      githubUrl: 'https://github.com/Srimunn/QR-Code-generator',
      liveUrl: 'https://qr-code-generator-srimun.web.app/'
    },
    {
      title: 'AI Offline Help System',
      description: 'An intelligent offline help system using Python, FAISS vector database, and advanced NLP techniques for efficient information retrieval.',
      technologies: ['Python', 'FAISS', 'NLP', 'Machine Learning'],
      highlights: ['Offline functionality', 'Vector search', 'Natural language processing'],
      color: 'from-emerald-400 to-emerald-600',
      category: 'AI/ML',
      githubUrl: 'https://github.com/Srimun/ai-offline-help',
      liveUrl: null
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent opacity-80">
              Featured Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded opacity-70"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto font-inter">
            A showcase of my technical skills and creative problem-solving through various projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white mb-3 opacity-80`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">{project.title}</h3>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="p-2 rounded-full bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    <Github size={18} />
                  </button>
                  {project.liveUrl && (
                    <button 
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="p-2 rounded-full bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                    </button>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed font-inter">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 font-inter">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 font-inter">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 font-inter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
