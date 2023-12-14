"use client";

import { ToastError } from "@/components/common/Toast";
import { ROUTERS } from "@/const/router";
import authService from "@/core/services/AuthService";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputCustom from "../../common/InputCustom";
import { steps } from "../../constants";
import { schemaRegister } from "../../schema";
import {
  changeEmail,
  changePassword,
  changePhoneNumber,
  changeStep,
} from "../../store/slice";

interface IFormInput {
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  email: string;
}

const schemaValidation = () => Yup.object().shape(schemaRegister);

const FormRegister = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await authService.register({
        username: data.username,
        phone: data.phone,
        email: data.email,
        password_confirmation: data.confirmPassword,
        password: data.password,
      });
      await authService.generateOtp({
        phone: data.phone,
        email: data.email,
      });

      dispatch(changePhoneNumber(data.phone));
      dispatch(changeEmail(data.email));
      dispatch(changePassword(data.password));
      dispatch(changeStep(steps.VERIFY));
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      ToastError(error?.response?.data?.message || "Lỗi tạo tài khoản !");
    }
  });

  return (
    <div className="flex min-h-full flex-col justify-center px-2 sm:px-6 py-12 lg:px-8 bg-[#F2F2F2]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-2xl">
        <div className="flex justify-center mb-11 mt-6">
          <Image src="/logo.svg" alt="logo" />
        </div>
        <div className="font-medium text-2xl text-green-common1 mb-4">
          Đăng ký tài khoản
        </div>
        <form onSubmit={onSubmit}>
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
            keyInput="phone"
            type="text"
          />
          <InputCustom
            label=""
            register={register}
            errors={errors}
            placeholder="Nhập địa chỉ email"
            keyInput="email"
            type="email"
            required
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
            isLoading={loading}
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
          <Button
            className="border border-stone-300 bg-gray-50 w-full"
            onClick={() => signIn("google", { callbackUrl: ROUTERS.HOME })}
          >
            <Image src="/icon-gg.png" alt="icon social" className="h-5" />
            Đăng nhập bằng Google
          </Button>
          <Button
            className="border border-stone-300 bg-gray-50 w-full"
            onClick={() => signIn("facebook", { callbackUrl: ROUTERS.HOME })}
          >
            <Image src="/icon-fb.png" alt="icon social" className="h-5" />
            Đăng nhập bằng Facebook
          </Button>
          <Button className="border border-stone-300 bg-gray-50 w-full">
            <Image src="/icon-apple.png" alt="icon social" className="h-5" />
            Đăng nhập bằng Apple
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

export default FormRegister;
