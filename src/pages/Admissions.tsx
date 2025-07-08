
import { AdmissionProcess } from "@/components/AdmissionProcess";
import { RequiredDocuments } from "@/components/RequiredDocuments";
import { AdmissionContact } from "@/components/AdmissionContact";

const Admissions = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Admissions</h1>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Join the Manba'ul Hikma family! We welcome students who are eager to learn and grow in our 
          nurturing educational environment. Follow our simple admission process to secure your child's place.
        </p>
        
        <AdmissionProcess />
        <RequiredDocuments />
        <AdmissionContact />
      </div>
    </div>
  );
};

export default Admissions;
