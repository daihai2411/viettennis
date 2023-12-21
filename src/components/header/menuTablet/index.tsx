"use client";

import LoginRegister from "@/components/auth/loginRegister";
import {
  Accordion,
  AccordionItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { headers } from "../constants";

const MenuTablet = () => {
  const pathName = usePathname();

  return (
    <NavbarMenu className="pt-8">
      {headers.map((item) => (
        <React.Fragment key={item.key}>
          {item.children && item.disableClick ? (
            <Accordion isCompact>
              <AccordionItem
                title={<div className="py-0 text-lg">{item.label}</div>}
              >
                {item.children.map((item1) => (
                  <div
                    key={item1.key}
                    className="px-4 py-1 block !text-lg cursor-pointer"
                  >
                    <Link
                      color="foreground"
                      className="w-full hover:text-green-common"
                      href={item1.route}
                    >
                      {item1.label}
                    </Link>
                  </div>
                ))}
              </AccordionItem>
            </Accordion>
          ) : (
            <NavbarMenuItem className="px-2 py-2 cursor-pointer">
              <Link
                style={{ color: pathName === item.route ? "#2DA46B" : "" }}
                color="foreground"
                className="w-full hover:text-green-common"
                href={item.route}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          )}
        </React.Fragment>
      ))}
      <NavbarMenuItem key={"login-register"} className="px-2 py-2">
        <LoginRegister />
      </NavbarMenuItem>
    </NavbarMenu>
  );
};

export default MenuTablet;
