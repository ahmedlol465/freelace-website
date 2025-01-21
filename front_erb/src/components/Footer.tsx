import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
  } from 'react-icons/fa'; // Using Font Awesome for social icons
  import VisaIcon from '../assets/visa.png';
  import MastercardIcon from '../assets/mastercard.png';
  import PaypalIcon from '../assets/cib_cc-paypal.png';
  import logo from '../assets/worklink_logo_1-removebg-preview 1.png'
  import frame from '../assets/framer.png'
  
  const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Follow Us */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={logo} // Replace with your actual logo URL
                alt="Logo"
                className="h-10 w-auto mr-2"
              />
            </div>
            <p className="text-sm mb-2">Follow us</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm mb-2">Available payment methods</p>
            <div className="flex space-x-2">
              <img src={VisaIcon} alt="Visa" className="h-6 w-auto" />
              <img src={MastercardIcon} alt="Mastercard" className="h-6 w-auto" />
              <img src={PaypalIcon} alt="Paypal" className="h-6 w-auto" />
            </div>
          </div>
  
          {/* Projects */}
          <div>
            <h4 className="font-bold text-white mb-4">Projects</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Business projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Programming projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Engineering and architecture projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Design projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Marketing projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Writing and translation projects
                </a>
              </li>
            </ul>
          </div>
  
          {/* Work Link */}
          <div>
            <h4 className="font-bold text-white mb-4">Work Link</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Frequently asked questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Guarantee your rights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Freelancers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Business gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse the projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact us
                </a>
              </li>
            </ul>
            <img src={frame} alt="Frame" className="mt-4" />
          </div>
        </div>
  
        {/* Copyright */}
        <div className="container mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-xs">
          <p>© Mas elatak company 2024. All Rights Reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;