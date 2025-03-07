"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
const Navbar = () => {
  const item = [];
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <img
        onClick={() => router.push("/")}
        src="/LogoMain.png"
        alt="Logo"
        className="h-12 w-auto sm:h-20"
      />
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden  justify-between items-center">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {item.length === 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
          onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1">
            <BaggageClaim strokeWidth="1" className="cursor-pointer" />
            <span>1</span>
          </div>
        )}
        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          // onClick={() => router.push("/cart")}
        />
        {/* <User strokeWidth="1" className="cursor-pointer" /> */}
      </div>
    </div>
  );
};

export default Navbar;
