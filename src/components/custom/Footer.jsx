import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Developer Info */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold text-lg mb-4">Developer Info</h4>
          <p className="text-sm mb-2">
            Designed by <span className="font-semibold text-blue-400"> Harsh Bariya</span>.
            Developed by <span className="font-semibold text-blue-400">Tejas Zinjade</span>.<br/>
            Crafting user-friendly applications with passion. 🚀
          </p>
          <a 
            href="mailto:tejaszinjade2005@gmail.com" 
            className="text-blue-400 hover:text-blue-500 transition duration-300"
          >
            ✉️ tejaszinjade2005@gmail.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start">
            <h4 className="font-bold text-lg mb-4">Connect with Me</h4>
            <div className="flex space-x-6">
                {/* LinkedIn */}
                <a
                href="https://www.linkedin.com/in/tejas-zinjade-5111b0252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transform hover:scale-110 transition duration-300"
                >
                <FaLinkedin className="text-2xl" /> {/* Font Awesome icon */}
                </a>

                {/* GitHub */}
                <a
                href="https://github.com/tejaszinjade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transform hover:scale-110 transition duration-300"
                >
                <FaGithub className="text-2xl" /> {/* Font Awesome icon */}
                </a>

                {/* Twitter */}
                <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-400 transform hover:scale-110 transition duration-300"
                >
                <FaTwitter className="text-2xl" /> {/* Font Awesome icon */}
                </a>

                {/* Instagram */}
                <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 transform hover:scale-110 transition duration-300"
                >
                <FaInstagram className="text-2xl" /> {/* Font Awesome icon */}
                </a>
            </div>
        </div>


        {/* Stay Connected */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="font-semibold">Smart Travel Planner</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* Fancy Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        <p>Made with 💖 and React.</p>
      </div>
    </footer>
  );
}

export default Footer;
