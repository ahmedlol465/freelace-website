import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { BsGlobe } from 'react-icons/bs';
import logo from '../assets/worklink_logo_1-removebg-preview 1.png'
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo} // Replace with your actual logo URL
            alt="Logo"
            className="h-8 w-auto mr-2"
          />
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center">
        <button className="flex items-center text-gray-300 hover:text-white">
            <BsGlobe className="h-4 w-4 mr-1" />
            العربية
          </button>
          <a href="#" className="text-gray-300 hover:text-white">
            Freelancers
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Projects
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <button className="bg-transparent border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition-colors duration-200">
            Sign in
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200">
            Join
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:text-white"
          aria-label="Toggle navigation"
        >
          <HiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 py-2">
          <div className="container mx-auto flex flex-col space-y-2">
          <button className="flex items-center text-gray-300 hover:text-white px-4 py-2">
              <BsGlobe className="h-4 w-4 mr-1" />
              العربية
            </button>
            <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">
              Freelancers
            </a>
            <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">
              Projects
            </a>
            <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">
              Services
            </a>
            <button className="bg-transparent border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition-colors duration-200">
              Sign in
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200">
              Join
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;