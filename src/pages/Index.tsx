
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingCart } from "lucide-react";

const Index = () => {
  const products = [
    {
      name: "Cachaça do Padre Original",
      price: "R$ 89,90",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    },
    {
      name: "Cachaça do Padre Premium",
      price: "R$ 129,90",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    },
    {
      name: "Cachaça do Padre Reserva",
      price: "R$ 159,90",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
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

      {/* Best Sellers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            MAIS VENDIDOS
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="text-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="font-serif font-bold mb-2">{product.name}</h3>
                    <p className="text-xl mb-4">{product.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <ShoppingCart className="mr-2" />
                      Adicionar ao carrinho
                    </Button>
                  </div>
                </CarouvelItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/lovable-uploads/a018daca-d6e2-4baa-a473-3684a4986ef6.png"
            alt="Logo Cachaça do Padre"
            className="w-32 h-32 mx-auto mb-8"
          />
          <h2 className="text-3xl font-serif font-bold mb-6">
            HÁ MAIS DE 50 ANOS
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Levando a Cachaça do Padre aos apreciadores em toda Paraíba e Brasil.
          </p>
          <Button variant="outline" size="lg">
            Todos os Produtos
          </Button>
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
    </div>
  );
};

export default Index;
