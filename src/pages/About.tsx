import { Users, Award, Building2, History } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'John Smith',
      position: 'CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    {
      name: 'Michael Chen',
      position: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1471958680802-1345a694ba6d?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">About Galaxy Enterprise</h1>
              <p className="text-xl">
                Leading the maritime industry with innovation and excellence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1970, Galaxy Enterprise has been at the forefront of maritime solutions for over five decades. Our commitment to excellence and innovation has made us a trusted partner in the maritime industry.
              </p>
              <p className="text-gray-600">
                We specialize in providing high-quality ship supplies, logistics solutions, and technical support to vessels worldwide. Our government certifications and industry recognition speak to our dedication to maintaining the highest standards in maritime services.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <History className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold">50+ Years</h3>
                <p className="text-sm text-gray-600">of Experience</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold">Global</h3>
                <p className="text-sm text-gray-600">Presence</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold">500+</h3>
                <p className="text-sm text-gray-600">Employees</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Award className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold">ISO 9001</h3>
                <p className="text-sm text-gray-600">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the experts behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide our operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest quality in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together to achieve common goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;