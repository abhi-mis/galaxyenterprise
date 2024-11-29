import { Users, Award, Building2, History, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      name: 'Arpit Mishra',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      description: 'Visionary leader with over 7 years of maritime industry experience.',
    },
  ];

  const stats = [
    {
      icon: <History className="h-8 w-8" />,
      value: '7+',
      label: 'Years Experience',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      value: 'Global',
      label: 'Presence',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: '30+',
      label: 'Team Members',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 'ISO 9001',
      label: 'Certified',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const values = [
    {
      icon: <Award className="h-10 w-10" />,
      title: 'Excellence',
      description: 'Striving for the highest quality in everything we do',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Collaboration',
      description: 'Working together to achieve common goals',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: 'Innovation',
      description: 'Embracing new technologies and solutions',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1471958680802-1345a694ba6d')] bg-cover bg-center opacity-20"
            style={{ transform: 'scale(1.1)' }}
          ></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              About Galaxy Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Leading the maritime industry with innovation and excellence since 1970
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`p-6 bg-gradient-to-r ${stat.color}`}>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-white/90">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1970, Galaxy Enterprise has been at the forefront of maritime solutions for over five decades. Our commitment to excellence and innovation has made us a trusted partner in the maritime industry.
            </p>
            <p className="text-lg text-gray-600">
              We specialize in providing high-quality ship supplies, logistics solutions, and technical support to vessels worldwide. Our government certifications and industry recognition speak to our dedication to maintaining the highest standards in maritime services.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
              alt="Maritime Operations"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm transform transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                  <div className={`p-6 bg-gradient-to-r ${value.color}`}>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-white/90">{value.description}</p>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                    <button className="group flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;