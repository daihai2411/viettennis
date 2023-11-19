import { ROUTERS } from "@/const/router";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={ROUTERS.HOME}>
      <Image src="/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
