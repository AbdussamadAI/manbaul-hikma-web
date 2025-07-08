
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-slate-900">Phone</p>
              <p className="text-slate-600">+234 123 456 7890</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-slate-900">Email</p>
              <p className="text-slate-600">info@manbaulhikma.edu.ng</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
            <div>
              <p className="font-medium text-slate-900">Address</p>
              <p className="text-slate-600">123 Education Street</p>
              <p className="text-slate-600">Academic District</p>
              <p className="text-slate-600">Lagos State, Nigeria</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <p className="font-medium text-slate-900">Office Hours</p>
              <p className="text-slate-600">Mon-Thu: 8:00 AM - 4:00 PM</p>
              <p className="text-slate-600">Fri: 8:00 AM - 12:00 PM</p>
              <p className="text-slate-600">Sat: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900">Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
              <Facebook className="h-5 w-5 text-blue-600" />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
              <Twitter className="h-5 w-5 text-blue-600" />
            </a>
            <a href="#" className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors">
              <Instagram className="h-5 w-5 text-pink-600" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
