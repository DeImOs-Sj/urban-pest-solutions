import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Services By Ravindra", path: "/ravindra-services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Review", path: "/review" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white text-sm font-medium">
        <div className="container mx-auto px-4 py-2 md:h-12 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <a
            href="mailto:info@samartha7pestcontrol.co.in"
            className="flex items-center hover:text-primary-200 transition-colors font-bold text-sm md:text-2xl"
          >
            <FaEnvelope className="mr-2" />
            info@samartha7pestcontrol.co.in
          </a>
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="tel:7620081685"
              className="flex items-center hover:text-primary-200 transition-colors font-bold text-sm md:text-2xl"
            >
              <FaPhone className="mr-2" />
              7620081685
            </a>
            <span className="opacity-50">|</span>
            <a href="tel:9529628158" className="hover:text-primary-200 transition-colors font-bold text-sm md:text-2xl">
              9529628158
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-primary-100 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-[#FDFCF9] py-4"
          }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="/samartha.jpeg"
                alt="Samartha"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mr-4 shrink-0 border-2 border-transparent group-hover:border-primary-600 transition-all"
              />
              <span className="text-xl md:text-2xl font-extrabold leading-tight text-primary-900 tracking-tight group-hover:opacity-80 transition-opacity">
                SHREE SWAMI SAMARTHA
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-bold text-lg transition-colors ${location.pathname === link.path
                    ? "text-primary-800"
                    : "text-primary-600 hover:text-primary-800"
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-1 w-full bg-primary-600 transition-transform origin-left ${location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary-900 hover:bg-primary-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${isMobileMenuOpen ? "max-h-[500px] mt-4 shadow-xl rounded-xl" : "max-h-0"
              }`}
          >
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-bold text-lg ${location.pathname === link.path
                    ? "bg-primary-700 text-white"
                    : "text-primary-700 hover:bg-primary-50"
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="px-4 pt-4 border-t border-primary-100 space-y-3 mt-2">
                <div className="flex flex-col space-y-3">
                  <a
                    href="tel:7620081685"
                    className="flex items-center text-primary-800 font-medium"
                  >
                    <FaPhone className="mr-3" />
                    7620081685
                  </a>
                  <a
                    href="tel:9529628158"
                    className="flex items-center text-primary-800 font-medium"
                  >
                    <FaPhone className="mr-3" />
                    9529628158
                  </a>
                </div>
                <a
                  href="mailto:info@samartha7pestcontrol.co.in"
                  className="flex items-center text-primary-800 font-medium"
                >
                  <FaEnvelope className="mr-3" />
                  info@samartha7pestcontrol.co.in
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
