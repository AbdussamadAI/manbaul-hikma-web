
import { Target, Heart, Star, Users } from "lucide-react";

export const MissionOverview = () => {
  const values = [
    {
      icon: Target,
      title: "Academic Excellence",
      description: "We strive for the highest standards in education, preparing students for success in their academic journey."
    },
    {
      icon: Heart,
      title: "Character Development",
      description: "Building strong moral character and Islamic values that guide students throughout their lives."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Embracing modern teaching methods and technology to enhance the learning experience."
    },
    {
      icon: Users,
      title: "Community",
      description: "Fostering a supportive community where students, parents, and teachers work together."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission & Values</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            At Manba'ul Hikma, we are committed to providing holistic education that combines academic excellence 
            with character development, preparing students to become responsible leaders and contributors to society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-green-200 transition-colors">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
