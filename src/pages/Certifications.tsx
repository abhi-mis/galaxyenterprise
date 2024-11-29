import { Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      issuer: 'International Organization for Standardization',
      year: '2023',
      icon: <Shield className="h-10 w-10" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Maritime Safety Certification',
      description: 'International Maritime Safety Standards Compliance',
      issuer: 'International Maritime Organization',
      year: '2023',
      icon: <Award className="h-10 w-10" />,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Environmental Management',
      description: 'ISO 14001:2015 Environmental Management System',
      issuer: 'International Organization for Standardization',
      year: '2022',
      icon: <CheckCircle className="h-10 w-10" />,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const standards = [
    'Regular quality audits and inspections',
    'Continuous improvement processes',
    'Staff training and development',
    'International maritime regulations',
    'Environmental protection standards',
    'Safety management protocols',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517232115160-ff93364542dd')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Certifications
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light">
            Recognized excellence in maritime services and safety standards
          </p>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className={`p-6 bg-gradient-to-r ${cert.color}`}>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white mb-4">
                    {cert.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-white/90 mb-4">{cert.description}</p>
                  <div className="text-white/80 text-sm">
                    <p>Issued by: {cert.issuer}</p>
                    <p>Valid until: December {cert.year}</p>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <button className="group flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    View Certificate
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standards Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Commitment to Excellence
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintaining the highest standards in maritime services through rigorous quality control and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-blue-100 transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{standard}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Our Quality Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our certifications and how we can help you maintain the highest standards in maritime operations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;