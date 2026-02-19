import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-6 text-white tracking-tight">
              SHREE SWAMI SAMARTHA
            </h3>
            <p className="text-primary-200 mb-6 leading-relaxed font-medium">
              Pest Control Services - Your trusted partner for pest-free
              environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-900 hover:bg-white hover:text-primary-900 flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-900 hover:bg-white hover:text-primary-900 flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-900 hover:bg-white hover:text-primary-900 flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-900 hover:bg-white hover:text-primary-900 flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-primary-300 hover:text-white transition-colors flex items-center group font-medium"
                >
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">
                    ›
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-300 hover:text-white transition-colors flex items-center group font-medium"
                >
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">
                    ›
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-300 hover:text-white transition-colors flex items-center group font-medium"
                >
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">
                    ›
                  </span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-300 hover:text-white transition-colors flex items-center group font-medium"
                >
                  <span className="mr-2 transform group-hover:translate-x-1 transition-transform">
                    ›
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-primary-300 font-medium">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Pest Control
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Fogging Services
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Consultancy Services
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-primary-300 text-sm font-medium">
                  Shree Swami Samartha Pest Control & Cleaning Services Flat
                  No.106, S.No.126, Dwarka Residency, Near SNBP International
                  School, Z Corner, Manjari, Pune – 412307 Land Mark – Next to
                  Vedant Graphics
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" />
                <div className="text-primary-300 text-sm font-medium">
                  <a
                    href="tel:7620081685"
                    className="hover:text-white transition-colors"
                  >
                    7620081685
                  </a>
                  <span className="mx-1">/</span>
                  <a
                    href="tel:9529628158"
                    className="hover:text-white transition-colors"
                  >
                    9529628158
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <a
                  href="mailto:info@samartha7pestcontrol.co.in"
                  className="text-primary-300 hover:text-white transition-colors text-sm font-medium"
                >
                  info@samartha7pestcontrol.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-900 mt-12 pt-8 text-center">
          <p className="text-primary-400 text-sm font-medium">
            © 2023 by SHREE SWAMI SAMARTHA PEST CONTROL SERVICES. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
