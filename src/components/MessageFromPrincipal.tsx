
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, User } from "lucide-react";

export const MessageFromPrincipal = () => {
  return (
    <section className="mb-16">
      <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-blue-50">
        <CardHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-slate-900">Message from the Principal</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="max-w-4xl mx-auto">
            <Quote className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
            <blockquote className="text-lg text-slate-700 italic text-center mb-6">
              "Welcome to Manba'ul Hikma, where we believe that education is not just about academic achievement, 
              but about nurturing the whole child. Our dedicated team of educators works tirelessly to create 
              an environment where students can discover their potential, develop their character, and prepare 
              for a successful future guided by Islamic values and principles.
            </blockquote>
            <blockquote className="text-lg text-slate-700 italic text-center mb-6">
              We are committed to providing each student with personalized attention, innovative teaching methods, 
              and opportunities to excel both academically and spiritually. Together, we build a foundation 
              for lifelong learning and positive contribution to society."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-slate-900">Dr. Amina Hassan</p>
              <p className="text-slate-600">Principal, Manba'ul Hikma School</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
