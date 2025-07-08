
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Users, Award, Target } from "lucide-react";

export const SchoolHistory = () => {
  return (
    <section className="mb-16">
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-slate-900 mb-4">Our Story</CardTitle>
          <CardDescription className="text-lg max-w-3xl mx-auto">
            Manba'ul Hikma was founded with a vision to provide quality Islamic education that combines academic excellence with strong moral values.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Beginning</h3>
              <p className="text-slate-600 mb-4">
                Established in 2010, Manba'ul Hikma began as a small nursery school with just 20 students. 
                Our founders recognized the need for an educational institution that would nurture both the 
                intellectual and spiritual development of children in our community.
              </p>
              <p className="text-slate-600">
                Over the years, we have grown to accommodate over 500 students across our Nursery, Primary, 
                and Secondary divisions, while maintaining our commitment to personalized attention and 
                holistic education.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <School className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">14</div>
                <div className="text-sm text-slate-600">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-slate-600">Students</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-slate-600">Awards Won</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
