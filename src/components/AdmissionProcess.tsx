
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, CreditCard, Calendar } from "lucide-react";

export const AdmissionProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete and submit the admission form with required documents",
      details: "Fill out our comprehensive application form and attach all necessary documents including birth certificate, previous school records, and passport photographs."
    },
    {
      icon: Users,
      title: "School Visit",
      description: "Schedule a visit to tour our facilities and meet our team",
      details: "Book an appointment to visit our campus, meet with our administrators, and see our classrooms, library, and other facilities firsthand."
    },
    {
      icon: CheckCircle,
      title: "Assessment",
      description: "Student assessment and parent interview (if required)",
      details: "For Primary and Secondary applicants, we conduct age-appropriate assessments to understand the student's academic level and learning needs."
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Pay admission fees and complete enrollment",
      details: "Upon acceptance, complete the enrollment process by paying the required fees and submitting any additional documents requested."
    },
    {
      icon: Calendar,
      title: "Orientation",
      description: "Attend orientation session before term begins",
      details: "Join our orientation program to familiarize yourself with school policies, procedures, and expectations before the academic session begins."
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Admission Process</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Follow these simple steps to secure your child's place at Manba'ul Hikma. 
          Our admission team is here to guide you through every step of the process.
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-white bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                      {index + 1}
                    </span>
                    <CardTitle className="text-xl text-slate-900">{step.title}</CardTitle>
                  </div>
                  <p className="text-slate-600 font-medium">{step.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pl-16">
              <p className="text-slate-600">{step.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
