
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const LocationMap = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-slate-900 flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          <span>Find Us Here</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 mb-2">Interactive Map Coming Soon</p>
            <p className="text-sm text-slate-500">
              123 Education Street, Academic District<br />
              Lagos State, Nigeria
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-slate-900 mb-2">Directions</h4>
          <p className="text-sm text-slate-600">
            Our school is conveniently located in the heart of the Academic District, 
            easily accessible by public transport. The nearest bus stop is "Education Junction" 
            and we're just 2 minutes walk from there.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
