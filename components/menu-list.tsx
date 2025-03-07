"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Capacitación Certificación Y Asesorías en la Construcción
                    </div>
                    <p className="text-justify text-sm leading-tight text-muted-foreground">
                      Somos un equipo de gente apasionada cuya meta es mejorar
                      la productividad de cada uno a través de la capacitación y
                      servicios disruptivos en una renovación radical.
                      <br />
                      <br />
                      Construimos y diseñamos nuestros Cursos, Diplomados,
                      Asesorías y Talleres dirigidos para los diferentes
                      perfiles de puesto en su empresa tanto Pública como
                      Privada.
                      <br />
                      <br />
                      Formando así parte de la solución a sus retos.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Productos">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/offers" title="Certificaciones">
                Sección dedicada a promociones y descuentos especiales
              </ListItem>
              {/* <ListItem href="/" title="Accesorios">
                Productos complementarios como tazas, molinillos, prensas, etc.
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cátalogo Cursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contactanos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuList;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Arquitectura",
    href: "/category/arquitectura",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus, facilis aut magni nesciunt amet cumque voluptas vitae explicabo! Nulla eaque deleniti explicabo, itaque quibusdam voluptatibus omnis iste sint inventore!,",
  },
  {
    title: "Contabilidad",
    href: "/category/contabilidad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus, facilis aut magni nesciunt amet cumque voluptas vitae explicabo! Nulla eaque deleniti explicabo, itaque quibusdam voluptatibus omnis iste sint inventore!,",
  },
  {
    title: "Control de obra",
    href: "/category/control-obra",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus, facilis aut magni nesciunt amet cumque voluptas vitae explicabo! Nulla eaque deleniti explicabo, itaque quibusdam voluptatibus omnis iste sint inventore!,",
  },
  {
    title: "Seguridad y salud",
    href: "/category/seguridad-salud",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus, facilis aut magni nesciunt amet cumque voluptas vitae explicabo! Nulla eaque deleniti explicabo, itaque quibusdam voluptatibus omnis iste sint inventore!,",
  },
  {
    title: "Servicio al cliente",
    href: "/category/servicio-cliente",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis natus, facilis aut magni nesciunt amet cumque voluptas vitae explicabo! Nulla eaque deleniti explicabo, itaque quibusdam voluptatibus omnis iste sint inventore!,",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
