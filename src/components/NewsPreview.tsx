
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Bell, Trophy } from "lucide-react";

export const NewsPreview = () => {
  const newsItems = [
    {
      title: "Term Resumption - January 2025",
      date: "December 15, 2024",
      type: "announcement",
      preview: "New term begins January 8, 2025. All students should report with complete materials and uniform.",
      icon: Bell
    },
    {
      title: "Mathematics Competition Winners",
      date: "December 10, 2024",
      type: "achievement",
      preview: "Our Primary 6 students emerged winners in the regional mathematics competition. Congratulations!",
      icon: Trophy
    },
    {
      title: "Parent-Teacher Meeting",
      date: "December 5, 2024",
      type: "event",
      preview: "PTA meeting on December 20, 2024 to discuss school development projects and 2025 calendar.",
      icon: Calendar
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "announcement": return "bg-blue-100 text-blue-800";
      case "achievement": return "bg-green-100 text-green-800";
      case "event": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Latest News & Updates</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Stay informed about important announcements, upcoming events, and school achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`${getTypeColor(item.type)} border-0`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </Badge>
                  <item.icon className="h-4 w-4 text-slate-400" />
                </div>
                <CardTitle className="text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-xs text-slate-500">
                  {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-600">{item.preview}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link to="/news">
              View All News & Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
