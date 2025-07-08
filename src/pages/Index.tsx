
import { Hero } from "@/components/Hero";
import { MissionOverview } from "@/components/MissionOverview";
import { SchoolHighlights } from "@/components/SchoolHighlights";
import { QuickLinks } from "@/components/QuickLinks";
import { NewsPreview } from "@/components/NewsPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MissionOverview />
      <SchoolHighlights />
      <QuickLinks />
      <NewsPreview />
    </div>
  );
};

export default Index;
