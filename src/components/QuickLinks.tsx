
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Phone, Camera, Users, BookOpen } from "lucide-react";

export const QuickLinks = () => {
  const quickLinks = [
    {
      icon: FileText,
      title: "Admissions",
      description: "Start your child's journey with us",
      link: "/admissions",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "News & Events",
      description: "Stay updated with school activities",
      link: "/news",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Camera,
      title: "Gallery",
      description: "Explore our school environment",
      link: "/gallery",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Get in touch with our team",
      link: "/contact",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Quick Access</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Find what you're looking for quickly with our convenient access to important information and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="outline" className="w-full group-hover:bg-slate-50">
                  <Link to={item.link}>
                    Access Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
