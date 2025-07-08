
import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-green-400" />
              <span className="text-lg font-bold">Manba'ul Hikma</span>
            </div>
            <p className="text-slate-300 text-sm">
              Where Excellence Begins - Providing quality education from Nursery to Secondary level 
              with emphasis on knowledge, discipline, and character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-green-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/schools" className="text-slate-300 hover:text-green-400 transition-colors text-sm">Our Schools</Link></li>
              <li><Link to="/admissions" className="text-slate-300 hover:text-green-400 transition-colors text-sm">Admissions</Link></li>
              <li><Link to="/news" className="text-slate-300 hover:text-green-400 transition-colors text-sm">News & Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-slate-300 text-sm">+234 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-slate-300 text-sm">info@manbaulhikma.edu.ng</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5" />
                <span className="text-slate-300 text-sm">123 Education Street, Academic District, Lagos State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Manba'ul Hikma School. All rights reserved. | Designed with excellence in education.
          </p>
        </div>
      </div>
    </footer>
  );
};
