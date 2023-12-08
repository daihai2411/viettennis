"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "./Logo";
import MenuDesktop from "./menuDesktop";
import MenuTablet from "./menuTablet";
import MenuTop from "./menuTop";

export default function AppHeader({ params }: any) {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <MenuTop />
      <Navbar
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[4px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-green-common",
          ],
        }}
        className="h-[78px] !text-[17px]"
        maxWidth="2xl"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <MenuDesktop />
        <NavbarContent justify="end">
          <NavbarItem>
            <AiOutlineSearch className="h-6 w-6" />
          </NavbarItem>
        </NavbarContent>
        <MenuTablet />
      </Navbar>
    </>
  );
}
