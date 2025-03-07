import CalendarioCard from "@/components/calendario-card";
import CarouselTextBanner from "@/components/carousel-text-banner";
import CarouselTextBanner_2 from "@/components/carousel-text-banner_2";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <h3 className="px-6 text-3xl sm:pb-8 text-stone-500">
          Servicios que ofrecemos
        </h3>
      </div>

      <CarouselTextBanner />
      <CarouselTextBanner_2 />

      <div className="max-w-6xl mx-auto flex justify-center">
        <h3 className="px-6 text-3xl sm:pb-8 text-blue-400">
          Calendario de Cursos y Capacitaciones 2024
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-6 px-4">
        {/* Usar ImageCard para las imágenes */}
        <CalendarioCard
          imageSrc="/CALENDARIO_FEB.jpg"
          imageAlt="Calendario 1"
          linkHref="https://forms.gle/j8YBckAikeEo7K3s8" // Enlace al calendario 1
          // className="w-full sm:w-1/2 lg:w-2/5 xl:w-1/3" // Ajusta el tamaño del contenedor
        />
        <CalendarioCard
          imageSrc="/CALENDARIO_MARCH.jpg"
          imageAlt="Calendario 2"
          linkHref="https://forms.gle/sQ8qWJgkk2jiZxSq9" // Enlace al calendario 2
          // className="w-full sm:w-1/2 xl:w-1/5" // Ajusta el tamaño del contenedor
        />
      </div>
      <div className="max-w-6xl mx-auto mt-3 flex justify-center">
        <h4 className="px-6 text-3xl sm:pb-8 text-gray-400">
          Videoconferencia completamente en línea
        </h4>
      </div>
    </main>
  );
}
