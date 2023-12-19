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
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginRegister = () => {
  const router = useRouter();
  const { status, data: session }: any = useSession();
  const { dataProfile } = useUserProfile();

  const onClick = (r: string) => {
    router.push(r);
  };

  if (status === "authenticated") {
    return (
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: false,
              src:
                dataProfile?.avatar ||
                session?.user?.avatar ||
                session?.user?.image ||
                "/player.png",
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
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Bạn đang đăng nhập bằng</p>
            <p className="font-bold">
              {dataProfile?.username ||
                session?.user?.username ||
                session?.user?.name}
            </p>
          </DropdownItem>
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
