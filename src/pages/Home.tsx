import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypingAnimation from '../components/TypingAnimation';

const Home = () => {
  const roles = [
    "Software Developer",
    "MERN Stack Enthusiast", 
    "Java & React.js Developer",
    "Full Stack Engineer"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="container mx-auto px-6 min-h-screen flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl z-10 relative">
          {/* Left Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                z: 50
              }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Profile photo with enhanced styling */}
              <div className="w-[300px] h-[460px] p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg">
                <div 
                  className="w-full h-full rounded-2xl relative overflow-hidden"
                  style={{ backgroundColor: '#0F0F0F' }}
                >
                  <img 
                    src="/lovable-uploads/1554db8e-64dd-450e-b7c6-02ebcc74e321.png"
                    alt="Srimun S S"
                    className="w-full h-full object-cover object-center rounded-2xl"
                  />
                  {/* Parallax glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-purple-400/10 rounded-2xl"
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, rgba(0, 206, 209, 0.1), rgba(138, 43, 226, 0.1))',
                        'linear-gradient(225deg, rgba(138, 43, 226, 0.1), rgba(0, 206, 209, 0.1))',
                        'linear-gradient(45deg, rgba(0, 206, 209, 0.1), rgba(138, 43, 226, 0.1))'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 font-orbitron"
              style={{ color: '#E0E0E0' }}
            >
              <span className="bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent opacity-75">
                Srimun S S
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center lg:justify-start"
            >
              <TypingAnimation 
                texts={roles}
                className="text-gray-400 font-inter"
                speed={80}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-inter"
              style={{ color: '#A0A0A0' }}
            >
              Passionate about building scalable, interactive, and impactful digital products. 
              With a strong command of Node.js, Java, and web technologies, I strive to develop 
              efficient solutions that blend creativity with technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <Link
                to="/about"
                className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 opacity-90"
                style={{ 
                  boxShadow: '0 0 15px rgba(0, 206, 209, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 206, 209, 0.3)';
                }}
              >
                Explore My Journey
                <ArrowDown className="inline ml-2 group-hover:animate-bounce" size={20} />
              </Link>

              <a
                href="/certificates/Srimun_S_S_resume.pdf"
                download
                className="group px-8 py-4 border-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                style={{ 
                  borderColor: '#00CED1',
                  color: '#00CED1',
                  boxShadow: '0 0 8px rgba(0, 206, 209, 0.3)',
                  opacity: '0.85'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00CED1';
                  e.currentTarget.style.color = '#0F0F0F';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#00CED1';
                  e.currentTarget.style.opacity = '0.85';
                }}
              >
                <Download className="inline mr-2" size={20} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowDown style={{ color: '#00CED1', opacity: '0.7' }} size={32} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
