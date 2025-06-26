import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-purple-50 border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-3 space-y-3 sm:space-y-0">
          {/* Contact Info */}
          <div className="w-full flex justify-between text-sm text-purple-700">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-purple-600" />
              <span className="font-medium">+91 96327 48927</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-purple-600" />
              <span className="font-medium">gharkul@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-purple-400 hover:text-purple-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-purple-400 hover:text-purple-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-purple-400 hover:text-purple-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-purple-400 hover:text-purple-600 transition-colors"
              aria-label="Linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
