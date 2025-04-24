
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = [
  "/lovable-uploads/3895e54a-18c3-4b6d-975b-7a31e025565b.png",
  "/lovable-uploads/9eb573c6-b328-4a75-8c7e-a2f0b2a9d826.png",
  "/lovable-uploads/03cb5f2f-a8fd-4dc1-9a86-66838e6e05ae.png",
  "/lovable-uploads/49e25c82-9d3f-4ad2-888d-e902fb1848eb.png",
  "/lovable-uploads/afaa124a-5fcf-424f-b71b-b741a4a2fbe7.png",
  "/lovable-uploads/26aa9a6c-5fa6-471a-b049-64a3e1f2d2f1.png",
  "/lovable-uploads/b18a03d9-1fdc-40da-a1d4-1db441b4f9bf.png",
  "/lovable-uploads/20b9aa60-01e0-47ae-a9e7-6c546e0c193b.png",
];

export default function DomMarcosCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                  <img 
                    src={image}
                    alt={`Dom Marcos ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
