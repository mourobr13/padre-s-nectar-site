
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Package, Star, Wine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-24 lg:pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <img
              src="/lovable-uploads/a018daca-d6e2-4baa-a473-3684a4986ef6.png"
              alt="Logo Cachaça do Padre"
              className="w-48 h-48 mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-black mb-4">
              Cachaça do Padre
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-8 font-serif">
              Uma bebida abençoada
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Conheça nossa história
            </Button>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section id="historia" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Nossa História
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                Tradição e qualidade são as marcas da Cachaça do Padre, produzida artesanalmente
                na Destilaria Dom Marcos, em Areia, Paraíba.
              </p>
              <p className="text-lg">
                Nossa cachaça é fruto de um processo cuidadoso que preserva a essência
                e o sabor único da verdadeira cachaça artesanal paraibana.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-secondary/20">
                <CardContent className="p-6 flex flex-col items-center">
                  <Star className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-serif font-bold">Qualidade</h3>
                </CardContent>
              </Card>
              <Card className="bg-secondary/20">
                <CardContent className="p-6 flex flex-col items-center">
                  <Package className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-serif font-bold">Artesanal</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Produto Section */}
      <section id="produto" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Nosso Produto
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/lovable-uploads/a018daca-d6e2-4baa-a473-3684a4986ef6.png"
                alt="Garrafa Cachaça do Padre"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center space-x-4">
                <Wine className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-serif font-bold text-xl">Sabor Único</h3>
                  <p>Produzida com cana-de-açúcar selecionada</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Star className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-serif font-bold text-xl">Qualidade Premium</h3>
                  <p>Processo artesanal que preserva o sabor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Entre em Contato
          </h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg mb-8">
              Para mais informações sobre nossos produtos, entre em contato através do nosso Instagram
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.open('https://www.instagram.com/cachacadopadre', '_blank')}
            >
              Siga-nos no Instagram
            </Button>
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
    </div>
  );
};

export default Index;
