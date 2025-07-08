
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Bell, Trophy, Users } from "lucide-react";

interface NewsCardProps {
  title: string;
  date: string;
  content: string;
  type: "announcement" | "achievement" | "event";
}

export const NewsCard = ({ title, date, content, type }: NewsCardProps) => {
  const getTypeInfo = (type: string) => {
    switch (type) {
      case "announcement":
        return { color: "bg-blue-100 text-blue-800", icon: Bell };
      case "achievement":
        return { color: "bg-green-100 text-green-800", icon: Trophy };
      case "event":
        return { color: "bg-purple-100 text-purple-800", icon: Users };
      default:
        return { color: "bg-gray-100 text-gray-800", icon: Bell };
    }
  };

  const typeInfo = getTypeInfo(type);
  const Icon = typeInfo.icon;

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge className={`${typeInfo.color} border-0`}>
            <Icon className="h-3 w-3 mr-1" />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
          <div className="flex items-center space-x-1 text-slate-500">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <CardTitle className="text-xl text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-slate-600 leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
};
