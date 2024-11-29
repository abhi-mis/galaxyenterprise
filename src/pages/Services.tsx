import { Package, Truck, Wrench, Clock, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Wrench className="h-10 w-10" />,
      title: 'Maintenance Services',
      description: 'Professional maintenance and repair services for all types of vessels.',
      bgColor: 'from-purple-700 to-purple-500',
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: 'Ship Parts Supply',
      description: 'High-quality marine equipment and spare parts from certified manufacturers.',
      bgColor: 'from-purple-500 to-purple-800',
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: 'Crane Maintainance & Services',
      description: 'Round-the-clock customer service and technical support.',
      bgColor: 'from-cyan-700 to-cyan-500',
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: 'Logistics Solutions',
      description: 'Efficient transportation and delivery services worldwide.',
      bgColor: 'from-purple-400 to-indigo-700',
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Dockworkers Suppliers',
      description: 'Round-the-clock customer service and technical support.',
      bgColor: 'from-cyan-700 to-cyan-500',
    },
  
    {
      icon: <Clock className="h-10 w-10" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support.',
      bgColor: 'from-cyan-500 to-cyan-600',
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566013656433-e818796d04f7')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light">
            Delivering excellence in maritime solutions with innovation and reliability
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className={`p-6 bg-gradient-to-r ${service.bgColor}`}>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
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

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
              <ul className="space-y-4">
                {[
                  'ISO 9001:2015 certified processes',
                  'Rigorous quality control measures',
                  'Certified technicians and experts',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Network</h3>
              <ul className="space-y-4">
                {[
                  'Presence in major ports',
                  'Strategic partnerships with suppliers',
                  'Efficient logistics network',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;