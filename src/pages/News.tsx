
import { NewsCard } from "@/components/NewsCard";

const News = () => {
  const newsItems = [
    {
      title: "Term Resumption - January 2025",
      date: "December 15, 2024",
      content: "Dear parents and students, we are excited to announce that the new term will begin on January 8, 2025. All students are expected to report with their complete school materials and uniform.",
      type: "announcement" as const
    },
    {
      title: "Inter-School Mathematics Competition",
      date: "December 10, 2024",
      content: "Congratulations to our Primary 6 students who emerged as winners in the regional mathematics competition. Their dedication and hard work have made us proud!",
      type: "achievement" as const
    },
    {
      title: "Parent-Teacher Association Meeting",
      date: "December 5, 2024",
      content: "The PTA meeting scheduled for December 20, 2024, will discuss the upcoming school development projects and academic calendar for 2025. All parents are invited to attend.",
      type: "event" as const
    },
    {
      title: "Cultural Day Celebration",
      date: "November 28, 2024",
      content: "Our annual Cultural Day was a huge success! Students showcased the rich heritage of our community through traditional dances, songs, and poetry. Thank you to all participants and families.",
      type: "event" as const
    },
    {
      title: "New Computer Laboratory Opening",
      date: "November 20, 2024",
      content: "We are pleased to announce the opening of our new state-of-the-art computer laboratory, equipped with modern computers and high-speed internet to enhance digital learning.",
      type: "announcement" as const
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">News & Events</h1>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Stay updated with the latest news, events, and announcements from Manba'ul Hikma. 
          We keep our community informed about important dates, achievements, and school activities.
        </p>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
