"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Divider, Image } from "@nextui-org/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import InputCustom from "../common/InputCustom";
import { schemaRegister } from "../schema";

interface IFormInput {
  username: string;
  password: string;
  confirmPassword: string;
}

const RegisterModule = () => {
  const schemaValidation = () =>
    Yup.object().shape({
      username: schemaRegister.username,
      phoneNumber: schemaRegister.phoneNumber,
      password: schemaRegister.password,
      confirmPassword: schemaRegister.confirmPassword,
    });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "onBlur",
    shouldFocusError: false,
    reValidateMode: "onBlur",
    resolver: yupResolver(schemaValidation()) as any,
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F2F2F2]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-2xl">
        <div className="flex justify-center mb-11 mt-6">
          <Image src="/logo.svg" alt="logo" />
        </div>
        <div className="font-medium text-2xl text-green-common1 mb-4">
          Đăng ký tài khoản
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputCustom
            label=""
            register={register}
            errors={errors}
            placeholder="Tên đăng nhập"
            keyInput="username"
            type="text"
          />
          <InputCustom
            label=""
            register={register}
            errors={errors}
            placeholder="Số điện thoại"
            keyInput="phoneNumber"
            type="text"
          />
          <InputCustom
            label=""
            register={register}
            errors={errors}
            placeholder="Mật khẩu"
            keyInput="password"
            type="password"
          />
          <InputCustom
            label=""
            register={register}
            errors={errors}
            placeholder="Nhập lại mật khẩu"
            keyInput="confirmPassword"
            type="password"
          />
          <Button
            type="submit"
            className="bg-green-common text-white mb-6 w-full"
          >
            Đăng ký
          </Button>
        </form>
        <div className="relative h-6">
          <Divider />
          <div
            className="absolute px-4 bg-white"
            style={{ left: "50%", transform: "translate(-50%, -50%)" }}
          >
            Hoặc
          </div>
        </div>
        <div className="w-full grid gap-2">
          <Button className="border border-stone-300 bg-gray-50 w-full">
            <Image src="/icon-gg.png" alt="icon social" className="h-5" />
            Đăng ký bằng Google
          </Button>
          <Button className="border border-stone-300 bg-gray-50 w-full">
            <Image src="/icon-fb.png" alt="icon social" className="h-5" />
            Đăng ký bằng Facebook
          </Button>
          <Button className="border border-stone-300 bg-gray-50 w-full">
            <Image src="/icon-apple.png" alt="icon social" className="h-5" />
            Đăng ký bằng Apple
          </Button>
        </div>

        <div className="mt-6 text-sm flex justify-center gap-1 mb-4">
          <div>Bạn đã có tài khoản?</div>
          <Link
            href={"/auth/login"}
            className="text-cyan-700 hover:underline cursor-pointer"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterModule;
