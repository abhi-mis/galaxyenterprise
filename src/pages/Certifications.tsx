import { Shield, Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      issuer: 'International Organization for Standardization',
      year: '2023',
      icon: <Shield className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Maritime Safety Certification',
      description: 'International Maritime Safety Standards Compliance',
      issuer: 'International Maritime Organization',
      year: '2023',
      icon: <Award className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Environmental Management',
      description: 'ISO 14001:2015 Environmental Management System',
      issuer: 'International Organization for Standardization',
      year: '2022',
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Certifications</h1>
          <p className="text-xl text-blue-100">
            Recognized excellence in maritime services and safety standards
          </p>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                {cert.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">Issued by: {cert.issuer}</p>
                <p className="text-sm text-gray-500">Valid until: December {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Commitment to Excellence
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Maintaining the highest standards in maritime services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Regular quality audits and inspections</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Continuous improvement processes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Staff training and development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>International maritime regulations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Environmental protection standards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Safety management protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;