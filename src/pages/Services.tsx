import { motion, useScroll, useTransform } from 'framer-motion';
import { Package, Truck, Wrench, Clock, Users, Shield, ArrowRight, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import local images
import kolkataPort from './port1.jpeg';
import haldiaPort from './port2.jpeg';
import paradeepPort from './port3.jpeg';
import mumbaiPort from './port4.jpeg';
import chennaiPort from './port5.jpeg';
import mundraPort from './port6.jpeg';
import kandlaPort from './port7.jpeg';
import visakhapatnamPort from './port8.jpeg';

const Services = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const services = [
    {
      icon: Wrench,
      title: 'Maintenance Services',
      description: 'Professional maintenance and repair services for all types of vessels.',
      bgColor: 'from-purple-600 to-indigo-800',
    },
    {
      icon: Package,
      title: 'Ship Parts Supply',
      description: 'High-quality marine equipment and spare parts from certified manufacturers.',
      bgColor: 'from-cyan-600 to-blue-800',
    },
    {
      icon: Shield,
      title: 'Crane Maintenance',
      description: 'Expert maintenance and repair services for maritime cranes and equipment.',
      bgColor: 'from-blue-600 to-indigo-800',
    },
    {
      icon: Truck,
      title: 'Logistics Solutions',
      description: 'Efficient transportation and delivery services worldwide.',
      bgColor: 'from-indigo-600 to-purple-800',
    },
    {
      icon: Users,
      title: 'Dockworkers Supply',
      description: 'Professional maritime workforce solutions and management.',
      bgColor: 'from-cyan-600 to-blue-800',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support.',
      bgColor: 'from-blue-600 to-indigo-800',
    },
  ];

  const features = [
    {
      title: "Quality Assurance",
      items: [
        'ISO 9001:2015 certified processes',
        'Rigorous quality control measures',
        'Certified technicians and experts',
      ],
    },
    {
      title: "Global Network",
      items: [
        'Presence in major ports',
        'Strategic partnerships with suppliers',
        'Efficient logistics network',
      ],
    },
  ];

  const sliderImages = [
    {
      url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf',
      caption: 'Fresh Fruits & Vegetables',
      description: 'Premium quality fresh produce for maritime vessels'
    },
    {
      url: 'https://images.unsplash.com/photo-1581147036324-c1c88bb6eb4e',
      caption: 'Professional Tools',
      description: 'High-grade repair and maintenance equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1558424871-c0cc31dea15d',
      caption: 'Electrical Supplies',
      description: 'Essential electrical components and equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a',
      caption: 'General Store Items',
      description: 'Complete range of daily essentials and supplies'
    },
    {
      url: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8',
      caption: 'Safety Equipment',
      description: 'Maritime safety gear and emergency supplies'
    }
  ];

  const ports = [
    {
      name: 'Kolkata Port',
      description: 'Major riverine port in Eastern India',
      image : kolkataPort,
    },
    {
      name: 'Haldia Port',
      description: 'Major seaport in West Bengal',
      image: haldiaPort,
    },
    {
      name: 'Paradeep Port',
      description: 'Major seaport in Odisha',
      image: paradeepPort,
    },
    {
      name: 'Mumbai Port',
      description: 'Premier port on the west coast',
      image: mumbaiPort,
    },
    {
      name: 'Chennai Port',
      description: 'Major port in South India',
      image: chennaiPort,
    },
    {
      name: 'Mundra Port',
      description: 'Largest private port in India',
      image: mundraPort,
    },
    {
      name: 'Kandla Port',
      description: 'Major port in Gujarat',
      image: kandlaPort,
    },
    {
      name: 'Visakhapatnam Port',
      description: 'Natural harbor on the east coast',
      image: visakhapatnamPort,
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566013656433-e818796d04f7')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/80 via-[#020817]/50 to-[#020817]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Our Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto"
          >
            Delivering excellence in maritime solutions with innovation and reliability
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

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`h-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${service.bgColor}`}>
                <div className="p-8">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb- 4 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/90 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </div>
                <div className="p-6 bg-black/10 backdrop-blur-sm">
                  <Link
                    to="#"
                    className="group/link flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-[#020817] via-blue-900/20 to-[#020817]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">
          Our Maritime Supplies
        </h2>
        <p className="text-cyan-100 max-w-3xl mx-auto">
          Comprehensive range of quality supplies for all maritime needs
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mt-4" />
      </motion.div>

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded-2xl overflow-hidden shadow-2xl"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[60vh]">
              <img
                src={image.url}
                alt={image.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{image.caption}</h3>
                  <p className="text-cyan-100 text-lg">{image.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
     {/* Port Services */}
     <div className="relative z-10 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">
          Port Network Excellence
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-8" />
        <p className="text-cyan-100 max-w-3xl mx-auto">
          Strategic presence across major Indian ports, delivering comprehensive maritime solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ports.map((port, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative h-[200px] rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/20 to-cyan-900/20 backdrop-blur-lg border border-blue-500/20">
              <div className="absolute inset-0">
                <img
                  src={port.image}
                  alt={port.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 backdrop-blur-lg flex items-center justify-center border border-cyan-500/30">
                      <Anchor className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {port.name}
                    </h3>
                  </div>
                  
                  <p className="text-cyan-100 text-sm leading-relaxed">
                    {port.description}
                  </p>
                  
                  {/* <div className="pt-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      to="#"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div> */}
                </div>
              </div>
              
              {/* <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 backdrop-blur-lg flex items-center justify-center border border-cyan-500/30 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>


      {/* Features Section */}
      <div className="relative z-10 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-4">
              Why Choose Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg p-8 rounded-2xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                <ul className="space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + itemIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-cyan-100">{item}</span>
                    </motion.li>
                  ))}
                </ul>
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
            transform: translateX (0) translateZ(0) scaleY(1);
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

        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(6, 182, 212, 0.3);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #06b6d4 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Services;