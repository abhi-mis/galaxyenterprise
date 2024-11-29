import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Ship, Package, Compass, Wind, Navigation } from 'lucide-react';

// Import local image files
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

// Create an array of images
const images = [image1, image2, image3, image4];

const Home = () => {
  useEffect(() => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showNextSlide = () => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalSlides;
      slides[currentIndex].classList.add('active');
    };

    const intervalId = setInterval(showNextSlide, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="ship-container">
          <div className="ship"></div>
        </div>
        <div className="waves"></div>
        <div className="containers">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`floating-container container-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Hero Section with Slider */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 to-navy-800/80 flex items-center justify-center z-10">
          <div className="text-white text-center px-4">
            <div className="flex justify-center mb-6">
              <Anchor className="w-16 h-16 text-cyan-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Maritime Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black-500">
              Navigating the Future of Global Shipping
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold transition-transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Ship className="w-5 h-5 mr-2" />
              Start Your Journey
            </Link>
          </div>
        </div>
        <div className="slider h-screen">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide absolute inset-0 ${index === 0 ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-navy-800/95 to-navy-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-400">Our Services</h2>
            <p className="mt-4 text-xl text-black-100">
              Setting the Standard in Maritime Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Navigation,
                title: 'Global Navigation',
                desc: 'Advanced routing and navigation systems for optimal maritime operations',
              },
              {
                icon: Wind,
                title: 'Weather Monitoring',
                desc: 'Real-time weather tracking and route optimization services',
              },
              {
                icon: Compass,
                title: 'Port Services',
                desc: 'Comprehensive port management and logistics solutions',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 hover:from-cyan-900 hover:to-navy-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border-black-400">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  {feature.title}
                </h3>
                <p className="text-black-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-cyan-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Set Sail?
          </h2>
          <p className="text-xl text-cyan-100 mb-10">
            Join us in shaping the future of maritime logistics
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 rounded-full bg-white text-blue-600 text-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Package className="w-5 h-5 mr-2" />
            Get Started
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes sail {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        .waves {
          position: absolute;
          bottom: 0;
          width: 200%;
          height: 100px;
          background: linear-gradient(transparent, rgba(0, 178, 255, 0.1));
          animation: wave 10s linear infinite;
        }

        .ship-container {
          position: absolute;
          width: 100px;
          height: 60px;
          animation: sail 20s linear infinite;
        }

        .ship {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #0284c7, #0ea5e9);
          clip-path: polygon(0 50%, 20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%);
          position: relative;
        }

        .floating-container {
          position: absolute;
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #0369a1, #0284c7);
          animation: float 3s ease-in-out infinite;
          opacity: 0.6;
        }

        .container-1 { left: 10%; animation-delay: 0s; }
        .container-2 { left: 30%; animation-delay: 0.5s; }
        .container-3 { left: 50%; animation-delay: 1s; }
        .container-4 { left: 70%; animation-delay: 1.5s; }
        .container-5 { left: 90%; animation-delay: 2s; }

        .slide {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        
        .slide.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Home;