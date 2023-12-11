"use client";

import { NavbarContent, NavbarItem, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { headers } from "../constants";

const MenuDesktop = () => {
  const pathName = usePathname();

  return (
    <NavbarContent
      className="hidden lg:flex gap-10 !text-[17px]"
      justify="center"
    >
      {headers.map((item) => (
        <React.Fragment key={item.key}>
          {item.children && item.disableClick ? (
            <Tooltip
              placement="bottom"
              className="min-w-[120px]"
              content={
                <>
                  {item.children.map((item1) => (
                    <div
                      key={item1.key}
                      className="px-1 py-2 cursor-pointer hover:underline hover:font-bold"
                    >
                      <Link
                        color="foreground"
                        className="font-semibold"
                        href={item1.route}
                      >
                        {item1.label}
                      </Link>
                    </div>
                  ))}
                </>
              }
            >
              <NavbarItem
                isActive={
                  pathName.includes(item.route) ||
                  (item.children || []).some((item1) =>
                    pathName.includes(item1.route)
                  )
                }
              >
                <div
                  className="flex items-center cursor-pointer font-semibold"
                  color="foreground"
                >
                  {item.label} <FaCaretDown />
                </div>
              </NavbarItem>
            </Tooltip>
          ) : (
            <NavbarItem
              isActive={
                pathName.includes(item.route) ||
                (item.children || []).some((item1) =>
                  pathName.includes(item1.route)
                )
              }
            >
              <Link
                color="foreground"
                className="font-semibold"
                href={item.route}
              >
                {item.label}
              </Link>
            </NavbarItem>
          )}
        </React.Fragment>
      ))}
    </NavbarContent>
  );
};

export default MenuDesktop;
