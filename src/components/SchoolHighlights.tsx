
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Users, GraduationCap, ArrowRight } from "lucide-react";

export const SchoolHighlights = () => {
  const schools = [
    {
      icon: Baby,
      title: "Nursery School",
      ageRange: "Ages 2-5",
      description: "Foundation learning through play-based activities and creative exploration in a nurturing environment.",
      features: ["Play-based learning", "Creative arts", "Basic skills development", "Social interaction"]
    },
    {
      icon: Users,
      title: "Primary School",
      ageRange: "Ages 6-11",
      description: "Building strong academic foundations with comprehensive curriculum and character development.",
      features: ["Core subjects mastery", "Character building", "Extracurricular activities", "Individual attention"]
    },
    {
      icon: GraduationCap,
      title: "Secondary School",  
      ageRange: "Ages 12-18",
      description: "Preparing students for higher education and future careers through rigorous academics and leadership development.",
      features: ["Exam preparation", "Leadership training", "Career guidance", "University preparation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Schools</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From early childhood to secondary education, we provide comprehensive learning experiences 
            tailored to each developmental stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {schools.map((school, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-green-200 transition-colors">
                  <school.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">{school.title}</CardTitle>
                <CardDescription className="text-green-600 font-medium">{school.ageRange}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 mb-4">{school.description}</p>
                <ul className="space-y-2">
                  {school.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
            <Link to="/schools">
              Learn More About Our Schools <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
