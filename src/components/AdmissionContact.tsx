
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, User } from "lucide-react";

export const AdmissionContact = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Admission Contacts</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Our admission team is ready to assist you with any questions about the enrollment process. 
          Don't hesitate to reach out for personalized guidance.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-slate-900 flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-600" />
              <span>Admissions Officer</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-slate-900">Mrs. Fatima Ahmed</p>
                <p className="text-slate-600">+234 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-slate-600">admissions@manbaulhikma.edu.ng</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
              <div>
                <p className="text-slate-600">Admission Office</p>
                <p className="text-slate-600">123 Education Street, Academic District</p>
                <p className="text-slate-600">Lagos State, Nigeria</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-slate-900 flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-600" />
              <span>Office Hours</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Monday - Thursday</span>
                <span className="font-medium text-slate-900">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Friday</span>
                <span className="font-medium text-slate-900">8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Saturday</span>
                <span className="font-medium text-slate-900">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Sunday</span>
                <span className="font-medium text-slate-900">Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> School visits and assessments are by appointment only. 
                Please call ahead to schedule your visit.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
