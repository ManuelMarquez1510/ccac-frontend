import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/arquitectura" className="block">Arquitectura</Link>
                <Link href="/categories/contabilidad" className="block">Contabilidad</Link>
                <Link href="/categories/control-obra" className="block">Control de obra</Link>
                <Link href="/categories/seguridad-salud" className="block">Seguridad y salud</Link>
                <Link href="/categories/servicio-cliente" className="block">Servicio al cliente</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;