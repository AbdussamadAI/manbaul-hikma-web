
import { GallerySection } from "@/components/GallerySection";

const Gallery = () => {
  const classroomImages = [
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  ];

  const eventImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544718187-0e97ad7b999c?w=400&h=300&fit=crop"
  ];

  const facilityImages = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Gallery</h1>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Take a visual journey through Manba'ul Hikma. Explore our classrooms, events, and 
          facilities that make our school a special place for learning and growth.
        </p>
        
        <div className="space-y-16">
          <GallerySection title="Classrooms" images={classroomImages} />
          <GallerySection title="Events & Activities" images={eventImages} />
          <GallerySection title="School Facilities" images={facilityImages} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
