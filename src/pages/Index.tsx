
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingCart, MessageSquare } from "lucide-react";

const Index = () => {
  const products = [
    {
      name: "Cachaça do Padre Original",
      price: "R$ 89,90",
      image: "/lovable-uploads/9e6609bc-1c14-411b-aa4b-2d93fccc75c0.png",
    },
    {
      name: "Cachaça do Padre Premium",
      price: "R$ 129,90",
      image: "/lovable-uploads/9e6609bc-1c14-411b-aa4b-2d93fccc75c0.png",
    },
    {
      name: "Cachaça do Padre Reserva",
      price: "R$ 159,90",
      image: "/lovable-uploads/9e6609bc-1c14-411b-aa4b-2d93fccc75c0.png",
    },
  ];

  const galleryImages = [
    "/lovable-uploads/769bef46-6b6b-42dc-96fd-399145a088bf.png",
    "/lovable-uploads/1c809529-c2c7-4fc0-96d9-00a6d036f593.png",
    "/lovable-uploads/ca592e47-296d-4c7b-bbcb-7cb26fd4958e.png",
    "/lovable-uploads/b1cf681d-c6b9-469e-adc9-8d171160f8a7.png",
    "/lovable-uploads/8a348f18-74ca-4593-aeac-0483c3a0083b.png",
    "/lovable-uploads/0ea62e48-1379-4881-9094-5afb7fce55f9.png",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen">
        <img
          src="/lovable-uploads/9e6609bc-1c14-411b-aa4b-2d93fccc75c0.png"
          alt="Cachaça do Padre Hero"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-shadow">
            Cachaça do Padre
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">
            Uma bebida abençoada desde sempre
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            Conheça nossos produtos
          </Button>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto text-center">
          <p className="text-lg font-medium">
            FRETE GRÁTIS em compras acima de R$ 150,00
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            NOSSOS PRODUTOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="text-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="font-serif font-bold mb-2">{product.name}</h3>
                <p className="text-xl mb-4">{product.price}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <ShoppingCart className="mr-2" />
                  Adicionar ao carrinho
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            NOSSA HISTÓRIA
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Desde 1973, na cidade de Areia, Paraíba, a Destilaria Dom Marcos mantém viva a tradição da 
            produção artesanal da Cachaça do Padre. Nossa cachaça é produzida a partir da cana-de-açúcar 
            cultivada em solo paraibano, colhida manualmente e processada no mesmo dia, garantindo a 
            qualidade e o sabor único que conquistou apreciadores em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            GALERIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Galeria Cachaça do Padre ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif">
            Cachaça do Padre © {new Date().getFullYear()} - Destilaria Dom Marcos, Areia/PB
          </p>
          <p className="text-sm mt-2 text-white/70">
            Beba com moderação. Venda proibida para menores de 18 anos.
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5583999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
