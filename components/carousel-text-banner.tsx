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

export const dataCarouselTop = [
  {
    id: 1,
    title: "EJECUCIÓN DE OBRA PÚBLICA",
    image: "/carousel_01.jpg", // Ruta de la imagen
    list: [
      "Ley de Obra Pública y Servicios relacionados con las mismas y su Reglamento",
      "Introducción a la Auditoria de Obra Pública",
      "Ejecución de Obra pública",
      "Elaboración de propuestas para cursos de Obra Pública",
      "Evaluación de Propuestas para Concursos de obra Pública (para funcionarios públicos)",
      "Suspensión, Terminación Anticipada y Rescisión de Contratos",
      "Estimaciones de Obra, Cuantificación de Obra y Números Generadores",
      "Manejo de la Bitácora de Obra y su Marco Normativo",
      "Manejo de la Bitácora Electrónica y Seguimiento a la Obra Pública",
      "Análisis, Cálculo e Integración de Precios Unitarios",
      "Actualización del Presupuesto; Ajuste de Costos",
      "El RESIDENTE DE OBRA en la Ejecución de la Obra",
      "El SUPERVISOR en la Ejecución de la Obra Pública",
      "Alcances y Responsabilidades del SUPERINTENDENTE en la Ejecución de la Obra Pública",
    ],
  },
  {
    id: 2,
    title: "",
    image: "/carousel_01.jpg",
    list: [
      {
        subtitle: "Administración de Obra",
        items: [
          "Planeación, Programación y Control de Obra",
          "Métodos de Programación de Obra",
          "Supervisión de Obra Privada",
          "Residencia de Obra Privada",
        ],
      },
      {
        subtitle: "EMPRESAS CONSTRUCTORAS",
        items: [
          "Responsabilidades Fiscales Básicas de toda empresa",
          "Declaración de la Prima de Riesgo de Trabajo",
          "Aplicación del SIROC",
        ],
      },
      {
        subtitle: "DESARROLLO HUMANO",
        items: [
          "Liderazgo Efectivo",
          "Dirección a Equipos de Alto Desempeño",
          "Colaboración en Equipo de Alto Desempeño",
          "Administración Efectiva del Tiempo",
          "Calidad en la Atención y el Servicio a Clientes",
          "Formación de Instructores",
          "Oratoria; como hablar en Público",
          "Reformas Fiscales",
          "Contabilidad para No Contadores",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "SEGURIDAD Y SALUD",
    image: "/carousel_01.jpg", // Ruta de la imagen
    list: [
      "Seguridad e Higiene en la Obra (Norma 031 STPS);",
      "Reglamento del IMSS;",
      "Primeros auxilios en las Obras;",
      "Seguridad en Trabajos Confinados.",
      "Formación de Comisiones Mixtas",
      "Formación de Supervisores de Seguridad",
      "Formación de la comisión de Seguridad e Higiene",
      "Factores de Riesgo Psicosociales en el trabajo (NOM-35 STPS)",
      "NOM-030-STPS-2009 Servicios preventivos de seguridad y salud en el trabajo funciones y actividades",
      "Condiciones de Seguridad y Salud en el centro de trabajo",
      "Uso de EPP",
      "Seguridad en trabajos de altura",
      "Primeros Auxilios",
      "Combate contra incendios",
      "Conformación de brigadas",
    ],
  },
  {
    id: 4,
    title: "INFORMATICA CON ESPECIALIDAD EN ARQUITECTURA",
    image: "/carousel_01.jpg", // Ruta de la imagen
    list: [
      "AutoCAD (3D, básico, intermedio y avanzado)",
      "Revit Architecture (básico, intermedio y avanzado, strutcure, MEP)",
      "3D Studio Max",
      "Civil Cad",
      "BIM        ",
    ],
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();

  return (
    <div className="bg-blue-50 dark:bg-primary py-6 relative">
    {/* Título específico para este carrusel */}
    <h2 className="text-2xl font-semibold text-center mb-6 dark:text-secondary">
      IMPORTACIÓN DE CURSOS
    </h2>
    
    <Carousel className="w-full max-w-5xl mx-auto relative">
      <CarouselContent>
        {dataCarouselTop.map(({ id, title, image, list }) => (
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
                  {/* Lista */}
                  <div className="w-full md:w-2/3">
                    <h2 className="text-xl font-bold text-center md:text-left dark:text-secondary">
                      {title}
                    </h2>
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

export default CarouselTextBanner;
