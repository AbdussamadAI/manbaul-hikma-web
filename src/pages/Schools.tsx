
import { SchoolSection } from "@/components/SchoolSection";

const Schools = () => {
  const nurseryData = {
    title: "Nursery School",
    ageRange: "Ages 2-5",
    description: "Our nursery program provides a nurturing environment where young minds begin their educational journey through play-based learning and foundational skills development.",
    curriculum: [
      "Early literacy and numeracy",
      "Creative arts and crafts",
      "Music and movement",
      "Social skills development",
      "Basic life skills"
    ],
    approach: "Child-centered learning approach with emphasis on exploration, creativity, and social interaction."
  };

  const primaryData = {
    title: "Primary School",
    ageRange: "Ages 6-11",
    description: "Our primary school builds strong academic foundations while fostering curiosity, critical thinking, and character development in a supportive environment.",
    curriculum: [
      "English Language and Literature",
      "Mathematics",
      "Science",
      "Social Studies",
      "Islamic Studies",
      "Computer Studies",
      "Physical Education",
      "Creative Arts"
    ],
    approach: "Interactive and engaging teaching methods that encourage active participation and collaborative learning."
  };

  const secondaryData = {
    title: "Secondary School",
    ageRange: "Ages 12-18",
    description: "Our secondary school prepares students for higher education and future careers through rigorous academics and comprehensive character development.",
    curriculum: [
      "Core subjects (English, Mathematics, Sciences)",
      "Humanities (History, Geography, Literature)",
      "Islamic Studies and Arabic",
      "Computer Science and ICT",
      "Business Studies",
      "Technical subjects",
      "Physical Education and Sports"
    ],
    approach: "Student-centered learning with focus on critical thinking, research skills, and preparation for national examinations."
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Schools</h1>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Manba'ul Hikma offers comprehensive education from early childhood through secondary level, 
          ensuring each student receives age-appropriate learning experiences that foster growth and excellence.
        </p>
        
        <div className="space-y-16">
          <SchoolSection {...nurseryData} />
          <SchoolSection {...primaryData} />
          <SchoolSection {...secondaryData} />
        </div>
      </div>
    </div>
  );
};

export default Schools;
