"use client";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const text = `Platicanos el reto que tienes y asignamos al especialista para conocer tu caso, hacer un análisis 
y crear una propuesta de solución de acuerdo a cada reto.



Diseñamos a tu medida las estrategias necesarias basadas en el marco 
normativo, entre otras y la información que nos proporciones para ayudarte`;

export const dataCarouselTop = [
  {
    id: 1,
    title: "EJECUCIÓN DE OBRA / ASESORÍAS",
    description:
      "Somos especialistas en Asesorías Empresariales en la Industria de la Construcción:",
    image: "/carousel_2.jpg", // Ruta de la imagen
    list: [
      "Administración del Contrato de obra;",
      "Reconocimiento de conceptos adicionales y en los conceptos no previstos (extraordinarios);",
      "Suspensión de obra, terminación anticipada y rescisión de contrato;",
      "Fiscales;",
      "Laborales (IMSS)",
      "Supervisión de Seguridad",
      "Protocolos de Salud",
      "Administración en Seguridad y Salud",
      "Normatividad Pública LOPYSRM;AP",
      "ISO/ Nom’s y aplicables a la construcción",
      "Administración de Proyectos /Obra;",
      "Administración de contratos.",
      "Créditos INFONAVIT",
    ],
  },
  {
    id: 2,
    title: "SECTOR PÚBLICO Y PRIVADO",
    image: "/carousel_2.jpg",
    description: text,
    list: [
      "Proyecto arquitectonico",
      "Construción",
      "Supervisión",
      "Auditoria",
    ],
  },
];

const CarouselTextBanner_2 = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-50 dark:bg-primary py-6 relative">
      {/* Título específico para este carrusel */}
      <h2 className="text-3xl font-semibold text-center mb-6 dark:text-secondary">
        ASESORÍAS
      </h2>
      <Carousel className="w-full max-w-5xl mx-auto relative">
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, image, list, description }) => (
            <CarouselItem key={id} className="cursor-pointer">
              <Card className="shadow-none border-none bg-transparent">
                <CardContent className="p-4">
                  <div
                    className={`flex flex-col md:flex-row ${
                      id % 2 === 0 ? "md:flex-row-reverse" : ""
                    } items-center gap-4`}
                  >
                    {/* Imagen */}
                    <div className="w-full md:w-1/3">
                      <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                      />
                    </div>
                    {/* Contenido */}
                    <div className="w-full md:w-2/3">
                      <h2 className="text-xl font-bold text-center md:text-left dark:text-secondary">
                        {title}
                      </h2>
                      {/* Descripción dividida en dos párrafos */}
                      <div
                        className="text-sm mt-2 dark:text-secondary"
                        dangerouslySetInnerHTML={{
                          __html: description.replace("\n", "<br />"), // Reemplazamos el salto de línea por <br />
                        }}
                      ></div>
                      {Array.isArray(list) && list.length > 0 ? (
                        typeof list[0] === "string" ? (
                          <ul className="list-disc list-inside text-sm mt-2 dark:text-secondary">
                            {list.map((item: any, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          list.map((section: any, index) => (
                            <div key={index} className="mt-4">
                              <h3 className="text-lg font-semibold dark:text-secondary">
                                {section.subtitle}
                              </h3>
                              <ul className="list-disc list-inside text-sm mt-1 dark:text-secondary">
                                {section.items.map((item: any, i: any) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))
                        )
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Flechas de navegación */}
        <CarouselPrevious className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/60 p-2 rounded-full shadow-md hover:scale-110 transition" />
        <CarouselNext className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/60 p-2 rounded-full shadow-md hover:scale-110 transition" />
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner_2;
