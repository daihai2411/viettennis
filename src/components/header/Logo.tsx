import { Image } from "@nextui-org/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
