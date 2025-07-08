
import { MessageFromPrincipal } from "@/components/MessageFromPrincipal";
import { MissionVision } from "@/components/MissionVision";
import { SchoolHistory } from "@/components/SchoolHistory";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">About Manba'ul Hikma</h1>
        <SchoolHistory />
        <MissionVision />
        <MessageFromPrincipal />
      </div>
    </div>
  );
};

export default About;
