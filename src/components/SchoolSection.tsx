
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target } from "lucide-react";

interface SchoolSectionProps {
  title: string;
  ageRange: string;
  description: string;
  curriculum: string[];
  approach: string;
}

export const SchoolSection = ({ title, ageRange, description, curriculum, approach }: SchoolSectionProps) => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className="text-2xl text-slate-900">{title}</CardTitle>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {ageRange}
          </Badge>
        </div>
        <p className="text-slate-600 text-lg">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-900">Curriculum</h3>
            </div>
            <ul className="space-y-2">
              {curriculum.map((subject, index) => (
                <li key={index} className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  {subject}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-slate-900">Teaching Approach</h3>
            </div>
            <p className="text-slate-600">{approach}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
