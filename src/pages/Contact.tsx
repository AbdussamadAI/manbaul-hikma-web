
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { LocationMap } from "@/components/LocationMap";

const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Contact Us</h1>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have questions about admissions, our programs, 
          or need more information about Manba'ul Hikma, don't hesitate to reach out.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>
        
        <LocationMap />
      </div>
    </div>
  );
};

export default Contact;
