
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AgeVerificationDialog() {
  const [open, setOpen] = useState(true);

  const handleNoClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Verificação de Idade</DialogTitle>
          <DialogDescription>
            O consumo de bebida alcoólica é proibido para menores de 18 anos.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center py-4">
          <p className="text-lg font-semibold">Você tem mais de 18 anos?</p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleNoClick}>
            Não
          </Button>
          <Button onClick={() => setOpen(false)}>
            Sim
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
