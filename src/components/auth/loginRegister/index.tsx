"use client";

import Link from "next/link";

const LoginRegister = () => {
  return (
    <>
      <Link href={"/auth/login"} className="cursor-pointer">
        Đăng nhập/đăng ký
      </Link>
    </>
  );
};

export default LoginRegister;
