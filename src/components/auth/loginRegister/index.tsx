"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const LoginRegister = () => {
  const { status, data: session }: any = useSession();

  if (status === "authenticated") {
    return (
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: false,
              src: session?.user?.image || "",
            }}
            className="transition-transform"
            description={session?.user?.email || session?.user?.phone}
            name={session?.user?.name || session?.user?.username}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Bạn đang đăng nhập bằng</p>
            <p className="font-bold">
              {session?.user?.email || "@" + session?.user?.username}
            </p>
          </DropdownItem>
          <DropdownItem key="settings">
            <Link href={"/setting"}>Thông tin tài khoản</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
            Đăng xuất
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <>
      <Link
        href={"/auth/login"}
        className="cursor-pointer font-semibold text-[#585858]"
      >
        Đăng nhập/đăng ký
      </Link>
    </>
  );
};

export default LoginRegister;
