
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-slate-600 text-center">
              To provide comprehensive Islamic education that develops intellectual, spiritual, 
              and moral excellence in our students, preparing them to be responsible leaders 
              and contributors to society.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Eye className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-slate-600 text-center">
              To be a leading Islamic educational institution recognized for academic excellence, 
              character development, and producing graduates who positively impact their communities 
              and the world.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="text-slate-600 text-sm space-y-2">
              <li>• Excellence in all endeavors</li>
              <li>• Islamic principles and values</li>
              <li>• Respect and tolerance</li>
              <li>• Innovation and creativity</li>
              <li>• Community service</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
