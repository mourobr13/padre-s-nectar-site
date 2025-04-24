
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-black">
            Cachaça do Padre
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-black hover:text-primary transition-colors">
              Início
            </a>
            <a href="#historia" className="text-black hover:text-primary transition-colors">
              História
            </a>
            <a href="#produto" className="text-black hover:text-primary transition-colors">
              Produto
            </a>
            <a href="#contato" className="text-black hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-secondary/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-black hover:text-primary transition-colors text-center">
                Início
              </a>
              <a href="#historia" className="text-black hover:text-primary transition-colors text-center">
                História
              </a>
              <a href="#produto" className="text-black hover:text-primary transition-colors text-center">
                Produto
              </a>
              <a href="#contato" className="text-black hover:text-primary transition-colors text-center">
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
