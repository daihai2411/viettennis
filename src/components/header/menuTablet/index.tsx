"use client";

import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headers } from "../constants";

const MenuTablet = () => {
  const pathName = usePathname();

  return (
    <NavbarMenu>
      {headers.map((item) => (
        <NavbarMenuItem key={item.key}>
          <Link
            style={{ color: pathName === item.route ? "#2DA46B" : "" }}
            color="foreground"
            className="w-full hover:text-green-common"
            href={item.route}
          >
            {item.label}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default MenuTablet;
