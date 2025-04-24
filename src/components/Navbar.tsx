
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-white">
            Cachaça do Padre
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-primary transition-colors">
              Início
            </a>
            <a href="#produtos" className="text-white hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#historia" className="text-white hover:text-primary transition-colors">
              História
            </a>
            <a href="#contato" className="text-white hover:text-primary transition-colors">
              Contato
            </a>
            <Button variant="ghost" className="text-white">
              <ShoppingCart />
            </Button>
          </div>

          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-black/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-white hover:text-primary transition-colors text-center">
                Início
              </a>
              <a href="#produtos" className="text-white hover:text-primary transition-colors text-center">
                Produtos
              </a>
              <a href="#historia" className="text-white hover:text-primary transition-colors text-center">
                História
              </a>
              <a href="#contato" className="text-white hover:text-primary transition-colors text-center">
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
