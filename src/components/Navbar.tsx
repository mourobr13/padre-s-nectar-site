
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFCC2A] py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/a018daca-d6e2-4baa-a473-3684a4986ef6.png"
              alt="Logo Cachaça do Padre"
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-black hover:text-black/80 transition-colors">
              Início
            </a>
            <a href="#produtos" className="text-black hover:text-black/80 transition-colors">
              Produtos
            </a>
            <a href="#historia" className="text-black hover:text-black/80 transition-colors">
              História
            </a>
            <a href="#galeria" className="text-black hover:text-black/80 transition-colors">
              Galeria
            </a>
            <Button variant="ghost" className="text-black">
              <ShoppingCart />
            </Button>
          </div>

          <Button
            variant="ghost"
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-[#FFCC2A] py-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-black hover:text-black/80 transition-colors text-center">
                Início
              </a>
              <a href="#produtos" className="text-black hover:text-black/80 transition-colors text-center">
                Produtos
              </a>
              <a href="#historia" className="text-black hover:text-black/80 transition-colors text-center">
                História
              </a>
              <a href="#galeria" className="text-black hover:text-black/80 transition-colors text-center">
                Galeria
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
