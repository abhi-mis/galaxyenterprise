import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <motion.img
                src={logo}
                alt="Galaxy Enterprise Logo"
                className="h-8 w-8"
                whileHover={{ rotate: 15 }}
              />
              <span className="text-xl font-bold">Galaxy Enterprise</span>
            </div>
            <p className="text-black">
              Your trusted partner in maritime solutions and ship supplies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-black hover:text-blue-400">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-black hover:text-blue-400">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className = "text-black">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 ">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-black">123 Harbor Street, Port City</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-black">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-black">info@galaxyenterprise.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Galaxy Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;