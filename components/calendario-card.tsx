// CalendarioCard.tsx
"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import Image from "next/image";

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  className?: string;  // Se agrega className como opcional
}

const CalendarioCard: React.FC<ImageCardProps> = ({
  imageSrc,
  imageAlt,
  linkHref,
  className,  // Recibe la clase
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      <Dialog>
        {/* Trigger del Dialog está en la imagen */}
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </DialogTrigger>

        {/* Contenido del Dialog con la imagen expandida */}
        <DialogContent className="max-w-4xl max-h-[80vh] p-0 flex flex-col justify-between items-center overflow-auto">
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              className="object-contain w-auto h-auto max-w-full max-h-[80vh]"
            />
          </div>

          {/* Footer del Dialog, ahora estará al fondo */}
          {/* <DialogFooter className="w-full flex items-center justify-center mt-4">
            <DialogClose className="bg-blue-500 text-white py-2 px-4 rounded-full w-full sm:w-auto">
              Cerrar
            </DialogClose>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>

      {/* Botón debajo de la imagen para el enlace */}
      <div className="p-4">
        <a
          href={linkHref}
          target="_blank"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full w-full text-center"
        >
          REGISTRATE
        </a>
      </div>
    </div>
  );
};

export default CalendarioCard;