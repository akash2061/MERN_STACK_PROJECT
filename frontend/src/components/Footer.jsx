import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { ImSoundcloud2 } from "react-icons/im";
import { SiChessdotcom } from "react-icons/si";
import logo from '../assets/logo/nextgen_hub.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8">
          {/* Product Categories */}
          <div className="flex flex-col items-center mt-5 md:items-start">
            <h2 className="text-lg font-bold">Product Categories</h2>
            <ul className="mt-2 space-y-1 text-center md:text-left">
              <li><a href="#laptops" className="hover:text-white">Tech-Items</a></li>
              <li><a href="#desktops" className="hover:text-white">Desktops</a></li>
              <li><a href="#accessories" className="hover:text-white">Accessories</a></li>
              <li><a href="#software" className="hover:text-white">Software</a></li>
            </ul>
          </div>

          {/* Company Information */}
          <div className="flex flex-col items-center mt-5 md:items-start">
            <h2 className="text-lg font-bold">Company Information</h2>
            <ul className="mt-2 space-y-1 text-center md:text-left">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#news" className="hover:text-white">News</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="flex flex-col items-center mt-5 md:items-start">
            <h2 className="text-lg font-bold">Customer Support</h2>
            <ul className="mt-2 space-y-1 text-center md:text-left">
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#returns" className="hover:text-white">Returns</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#shipping" className="hover:text-white">Shipping Information</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center mt-7 md:items-start">
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex space-x-4 mt-2 justify-center md:justify-start">
              <a href="#" className="hover:text-white text-3xl"><FaXTwitter /></a>
              <a href="#" className="hover:text-white text-3xl"><FaGithub /></a>
              <a href="#" className="hover:text-white text-3xl"><FaLinkedin /></a>
              <a href="#" className="hover:text-white text-3xl"><SiChessdotcom /></a>
              <a href="#" className="hover:text-white text-3xl"><ImSoundcloud2 /></a>
            </div>
            <div className='mt-5'>
              <Link to="/">
                <img src={logo} alt="Profile" className='h-12 w-auto' />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-white">© {new Date().getFullYear()} NextGen-Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
