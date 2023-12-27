"use client";

import useUserProfile from "@/components/common/hooks/useUserProfile";
import { ROUTERS } from "@/const/router";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginRegister = () => {
  const router = useRouter();
  const { status, data: session }: any = useSession();
  const { dataProfile } = useUserProfile(true);

  const onClick = (r: string) => {
    router.push(r);
  };

  if (status === "authenticated") {
    if (dataProfile?.id) {
      return (
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: false,
                src: dataProfile?.avatar || "/player.png",
              }}
              className="transition-transform"
              description={
                dataProfile?.full_name ||
                session?.user?.username ||
                session?.user?.name
              }
              name={
                dataProfile?.username ||
                session?.user?.username ||
                session?.user?.name
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem
              key="settings"
              onClick={() => onClick(ROUTERS.PERSONAL_INFO)}
            >
              <div>Thông tin tài khoản</div>
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() =>
                signOut({
                  redirect: true,
                  callbackUrl: ROUTERS.AUTH.children.LOGIN,
                })
              }
            >
              Đăng xuất
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    } else {
      return (
        <div
          className="cursor-pointer font-semibold text-[#585858]"
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: ROUTERS.AUTH.children.LOGIN,
            })
          }
        >
          Đăng nhập/đăng ký
        </div>
      );
    }
  }

  return (
    <div
      className="cursor-pointer font-semibold text-[#585858]"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: ROUTERS.AUTH.children.LOGIN,
        })
      }
    >
      Đăng nhập/đăng ký
    </div>
  );
};

export default LoginRegister;
