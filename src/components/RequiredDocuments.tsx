
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Baby, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RequiredDocuments = () => {
  const documentsByLevel = [
    {
      icon: Baby,
      level: "Nursery (Ages 2-5)",
      documents: [
        "Birth Certificate (Original and Photocopy)",
        "Passport Photographs (4 copies)",
        "Immunization Records",
        "Completed Application Form",
        "Parent/Guardian ID Card"
      ]
    },
    {
      icon: Users,
      level: "Primary (Ages 6-11)",
      documents: [
        "Birth Certificate (Original and Photocopy)",
        "Previous School Report Cards",
        "Transfer Certificate (if applicable)",
        "Passport Photographs (4 copies)",
        "Medical Report",
        "Completed Application Form",
        "Parent/Guardian ID Card"
      ]
    },
    {
      icon: GraduationCap,
      level: "Secondary (Ages 12-18)",
      documents: [
        "Birth Certificate (Original and Photocopy)",
        "Previous School Report Cards",
        "WAEC/NECO Results (if applicable)",
        "Transfer Certificate",
        "Passport Photographs (4 copies)",
        "Medical Report",
        "Completed Application Form",
        "Parent/Guardian ID Card"
      ]
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Required Documents</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Please prepare the following documents based on your child's enrollment level. 
          All documents should be original with photocopies attached.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {documentsByLevel.map((section, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-slate-900">{section.level}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {section.documents.map((doc, docIndex) => (
                  <li key={docIndex} className="flex items-start space-x-2">
                    <FileText className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <Download className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Download Application Forms</h3>
            <p className="text-slate-600 mb-6">
              Get started by downloading our official application forms and information brochure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Download Application Form
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Download Information Brochure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
