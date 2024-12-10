import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Award, Building2, History, Ship} from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const stats = [
    {
      icon: History,
      value: '7+',
      label: 'Years Experience',
      color: 'from-blue-600 to-indigo-800',
    },
    {
      icon: Building2,
      value: 'Global',
      label: 'Presence',
      color: 'from-cyan-600 to-blue-800',
    },
    {
      icon: Users,
      value: '30+',
      label: 'Team Members',
      color: 'from-indigo-600 to-purple-800',
    },
    {
      icon: Award,
      value: 'ISO 9001',
      label: 'Certified',
      color: 'from-purple-600 to-pink-800',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest quality in everything we do',
      color: 'from-blue-600 to-indigo-800',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together to achieve common goals',
      color: 'from-cyan-600 to-blue-800',
    },
    {
      icon: Building2,
      title: 'Innovation',
      description: 'Embracing new technologies and solutions',
      color: 'from-indigo-600 to-purple-800',
    },
  ];

  const team = [
    {
      name: 'Arpit Mishra',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      description: 'Visionary leader with over 7 years of maritime industry experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Hero Section */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1471958680802-1345a694ba6d')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/80 via-[#020817]/50 to-[#020817]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Ship className="w-20 h-20 text-cyan-400 animate-float" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              About Galaxy Enterprise
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto"
          >
            Leading the maritime industry with innovation and excellence since 2015
          </motion.p>
        </div>

        {/* Animated Wave Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="wave-container">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`wave wave-${i + 1}`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.1 - i * 0.02,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className={`h-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${stat.color}`}>
                <div className="p-6">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-white/90">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-cyan-100">
              <p>
                Founded in 2015, Galaxy Enterprise has been at the forefront of maritime solutions for almost a decade. Our commitment to excellence and innovation has made us a trusted partner in the maritime industry.
              </p>
              <p>
                We specialize in providing high-quality ship supplies, logistics solutions, and technical support to vessels worldwide. Our government certifications and industry recognition speak to our dedication to maintaining the highest standards in maritime services.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
                alt="Maritime Operations"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className={`h-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${value.color}`}>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-white/90 group-hover:text-white transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg rounded-2xl overflow-hidden max-w-sm border border-blue-500/20"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.position}</p>
                  <p className="text-cyan-100">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-[#020817]/40 to-[#020817] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <style>{`
        .wave-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.1));
          animation: wave 8s linear infinite;
        }

        .wave-2 {
          animation-delay: -2s;
        }

        .wave-3 {
          animation-delay: -4s;
        }

        @keyframes wave {
          0% {
            transform: translateX(0) translateZ(0) scaleY(1);
          }
          50% {
            transform: translateX(-25%) translateZ(0) scaleY(0.8);
          }
          100% {
            transform: translateX(-50%) translateZ(0) scaleY(1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default About;