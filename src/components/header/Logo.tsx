import { ROUTERS } from "@/const/router";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={ROUTERS.HOME}
      className="flex justify-center lg:justify-start w-full md:mr-0 mr-6"
    >
      <Image src="/logo.svg" alt="logo" width={200} />
    </Link>
  );
};

export default Logo;
