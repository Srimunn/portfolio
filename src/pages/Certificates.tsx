import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Award, Calendar, Building, FileText, ExternalLink, Trophy } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: 'Hackathon' | 'Internship' | 'Course' | 'Certification' | 'Competition';
  filename?: string;
  imageUrl?: string;
  description?: string;
  award?: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Google Cloud Career Launchpad – Cloud Engineer Track",
    issuer: "Google Cloud",
    date: "February 27, 2025",
    type: "Certification",
    filename: "cloud.pdf",
    description: "Comprehensive cloud engineering training program"
  },
  {
    id: 2,
    title: "Data Structures and Algorithms Using Java – An Interactive Way",
    issuer: "Wingspan",
    date: "December 30, 2024",
    type: "Course",
    filename: "Data Structures and Algorithms Using Java.pdf",
    description: "Advanced programming concepts and algorithmic thinking"
  },
  {
    id: 3,
    title: "NextGen Nexus-24 Hackathon Participation",
    issuer: "NASSCOM & IBM",
    date: "November 14, 2024",
    type: "Hackathon",
    filename: "Hackathon by Nasscom.Sri.pdf",
    description: "Innovation challenge in emerging technologies"
  },
  {
    id: 4,
    title: "Introduction to Artificial Intelligence",
    issuer: "Wingspan",
    date: "October 28, 2024",
    type: "Course",
    filename: "Introduction to Arti cial Intelligence.pdf",
    description: "Fundamentals of AI and machine learning"
  },
  {
    id: 5,
    title: "Java Developer Certification",
    issuer: "Wingspan",
    date: "November 16, 2024",
    type: "Certification",
    filename: "java _certification.pdf",
    description: "Professional Java development skills validation"
  },
  {
    id: 6,
    title: "AI Transformative Learning (TechSaksham) Internship",
    issuer: "Microsoft & SAP through Edunet Foundation",
    date: "2024",
    type: "Internship",
    filename: "SRIMUN  S S_certificate 1.pdf",
    description: "Practical AI implementation and learning experience"
  },
  {
    id: 7,
    title: "Technical Achievement Certificate",
    issuer: "Educational Institution",
    date: "June 6, 2025",
    type: "Certification",
    filename: "WhatsApp Image 2025-06-06 at 09.41.44_b88135b9.pdf",
    description: "Recognition of technical excellence and achievement"
  },
  {
    id: 8,
    title: "Professional Development Certificate",
    issuer: "Training Institute",
    date: "June 6, 2025",
    type: "Course",
    filename: "WhatsApp Image 2025-06-06 at 09.42.00_170bd2d2.pdf",
    description: "Advanced professional development training completion"
  },
  {
    id: 9,
    title: "Technical Skills Certificate",
    issuer: "Technology Institute",
    date: "June 6, 2025",
    type: "Certification",
    filename: "IMG-20250606-WA0003.pdf",
    description: "Certification of technical skills and competencies"
  },
  {
    id: 10,
    title: "Achievement Recognition",
    issuer: "Educational Organization",
    date: "June 6, 2025",
    type: "Competition",
    filename: "WhatsApp Image 2025-06-06 at 09.42.34_bcdcdbc7.pdf",
    description: "Recognition of outstanding achievements"
  },
  {
    id: 11,
    title: "Technical Excellence Certificate",
    issuer: "Technology Academy",
    date: "June 6, 2025",
    type: "Certification",
    filename: "WhatsApp Image 2025-06-06 at 09.41.25_566ec26d.pdf",
    description: "Recognition of technical excellence"
  },
  {
    id: 12,
    title: "Professional Certification",
    issuer: "Professional Institute",
    date: "June 6, 2025",
    type: "Certification",
    filename: "WhatsApp Image 2025-06-06 at 09.42.17_cab1348f.pdf",
    description: "Professional certification in technology"
  },
  {
    id: 13,
    title: "Advanced Technical Certification",
    issuer: "Technology Institute",
    date: "June 6, 2025",
    type: "Certification",
    filename: "WhatsApp Image 2025-06-06 at 09.36.17_f5f64f99.pdf",
    description: "Advanced certification in technical skills and methodologies"
  },
  {
    id: 14,
    title: "Professional Excellence Award",
    issuer: "Professional Academy",
    date: "June 6, 2025",
    type: "Competition",
    filename: "WhatsApp Image 2025-06-06 at 09.36.17_326e58ca.pdf",
    description: "Recognition of outstanding professional achievements and excellence"
  }
];

const Certificates = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  
  const filterTypes = ['All', 'Certification', 'Course', 'Hackathon', 'Internship', 'Competition'];
  
  const filteredCertificates = selectedFilter === 'All' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.type === selectedFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return <Award className="w-4 h-4" />;
      case 'Internship':
        return <Building className="w-4 h-4" />;
      case 'Course':
        return <Calendar className="w-4 h-4" />;
      case 'Certification':
        return <FileText className="w-4 h-4" />;
      case 'Competition':
        return <Trophy className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Internship':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Course':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Certification':
        return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'Competition':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleViewCertificate = (certificate: Certificate) => {
    if (certificate.filename) {
      window.open(`/certificates/${certificate.filename}`, '_blank');
    } else if (certificate.imageUrl) {
      window.open(certificate.imageUrl, '_blank');
    }
  };

  const handleDownloadCertificate = (certificate: Certificate) => {
    if (!certificate.filename && !certificate.imageUrl) return;

    const link = document.createElement('a');
    if (certificate.filename) {
      link.href = `/certificates/${certificate.filename}`;
      link.download = certificate.filename;
    } else if (certificate.imageUrl) {
      link.href = certificate.imageUrl;
      const extension = certificate.imageUrl.split('.').pop() || 'jpg';
      link.download = `${certificate.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${extension}`;
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
              My Certificates
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-purple-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A showcase of my professional achievements, certifications, and learning milestones across various technologies and platforms.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
        >
          {filterTypes.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-teal-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-700/30"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(certificate.type)} mb-2`}>
                    {certificate.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{certificate.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{certificate.issuer}</p>
                  <p className="text-gray-500 text-xs flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {certificate.date}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {certificate.description}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleViewCertificate(certificate)}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  View Certificate
                </button>
                <button
                  onClick={() => handleDownloadCertificate(certificate)}
                  className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filterTypes.slice(1).map((type) => {
              const count = certificatesData.filter(cert => cert.type === type).length;
              return (
                <div key={type} className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-teal-400 mb-1">{count}</div>
                  <div className="text-gray-400 text-sm">{type}{count !== 1 ? 's' : ''}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
