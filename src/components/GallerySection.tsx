
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface GallerySectionProps {
  title: string;
  images: string[];
}

export const GallerySection = ({ title, images }: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{title}</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card 
            key={index} 
            className="border-0 shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image} 
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
