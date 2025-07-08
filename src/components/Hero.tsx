
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Manba'ul Hikma
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 animate-fade-in">
            Where Excellence Begins
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Nurturing young minds through quality education, character development, and academic excellence 
            from Nursery to Secondary level in a supportive Islamic environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <Link to="/schools">
                Explore Our Schools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link to="/admissions">
                Enroll Now
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center animate-fade-in">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span className="text-slate-600">Quality Education</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-600" />
              <span className="text-slate-600">Experienced Teachers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="text-slate-600">Academic Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
