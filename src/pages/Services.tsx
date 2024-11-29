import { Anchor, Package, Truck, Ship, Wrench, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: 'Ship Parts Supply',
      description: 'High-quality marine equipment and spare parts from certified manufacturers.',
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: 'Logistics Solutions',
      description: 'Efficient transportation and delivery services worldwide.',
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: 'Maintenance Services',
      description: 'Professional maintenance and repair services for all types of vessels.',
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support.',
    },
    {
      icon: <Ship className="h-8 w-8 text-blue-600" />,
      title: 'Fleet Management',
      description: 'Comprehensive fleet management and optimization services.',
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Compliance Services',
      description: 'Ensuring adherence to maritime regulations and standards.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive maritime solutions tailored to your needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Our Services Stand Out
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Delivering excellence through expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>ISO 9001:2015 certified processes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Rigorous quality control measures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Certified technicians and experts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Global Network</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Presence in major ports worldwide</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Strategic partnerships with suppliers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Efficient logistics network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;