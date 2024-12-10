// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Anchor, Ship, Package, Compass, Wind, Navigation } from 'lucide-react';

// // Import local image files
// import image1 from './1.jpg';
// import image2 from './2.jpg';
// import image3 from './3.jpg';
// import image4 from './4.jpg';

// // Create an array of images
// const images = [image1, image2, image3, image4];

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Ship, Package, Wrench, Shield,  Anchor as AnchorIcon } from 'lucide-react';

import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

const HERO_IMAGES = [
  image1, image2, image3, image4
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Wrench,
      title: 'Maintenance Services',
      desc: 'Professional maintenance and repair services for all types of vessels.',
      color: 'from-emerald-400 to-cyan-500'
    },
    {
      icon: Package,
      title: 'Ship Parts Supply',
      desc: 'High-quality marine equipment and spare parts from certified manufacturers.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Crane Maintenance',
      desc: 'Expert maintenance and repair services for maritime cranes and equipment.',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-[#020817]/40 to-[#020817] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#020817] to-transparent" />
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale, y }}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{ backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/80 via-[#020817]/50 to-[#020817]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <AnchorIcon className="w-20 h-20 text-cyan-400 animate-float" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Maritime Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 text-cyan-100"
          >
            Navigating the Future of Global Shipping
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-12 py-4 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(6,182,212,0.3)]"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
              <Ship className="w-6 h-6 mr-2" />
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">
              Our Services
            </h2>
            <p className="text-xl text-cyan-100">
              Setting the Standard in Maritime Solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.color} p-3 ring-2 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-cyan-100 group-hover:text-white transition-colors duration-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            
            <div className="relative px-8 py-20 text-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Ready to Set Sail?
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-cyan-100 mb-12"
              >
                Join us in shaping the future of maritime logistics
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center px-12 py-4 overflow-hidden rounded-full bg-white text-blue-600 text-lg font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.3)]"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-blue-600 opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
                  <Package className="w-6 h-6 mr-2" />
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.6; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;