"use client";

import { ToastError, ToastSuccess } from "@/components/common/Toast";
import { ROUTERS } from "@/const/router";
import { saveSession } from "@/helpers/session";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { SignInResponse, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputCustom from "../common/InputCustom";
import { steps } from "../constants";
import { schemaLogin } from "../schema";
import { changeEmail, changePhoneNumber, changeStep } from "../store/slice";

interface IFormInput {
  username: string;
  password: string;
}

const LoginModule = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const schemaValidation = () =>
    Yup.object().shape({
      username: schemaLogin.username,
      password: schemaLogin.password,
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

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const result: SignInResponse | undefined = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (result && result?.status === 200) {
      const user = (await saveSession()) as any;
      if (!user?.is_verify_phone) {
        dispatch(changeStep(steps.VERIFY));
        dispatch(changePhoneNumber(user?.phone));
        dispatch(changeEmail(user.email));
        router.push("/auth/register");
      } else if (!user?.personal_info_updated) {
        dispatch(changeStep(steps.ADDITIONAL_INFO));
        dispatch(changePhoneNumber(user?.phone));
        dispatch(changeEmail(user.email));
        router.push("/auth/register");
      } else if (!user?.personal_point_updated) {
        dispatch(changeStep(steps.ADDITIONAL_POINTS));
        router.push("/auth/register");
      } else {
        router.push("/");
      }

      ToastSuccess("Đăng nhập thành công !");
      setLoading(false);
    } else if (result?.status === 401) {
      ToastError(result.error);
      setLoading(false);
    }
  });

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F2F2F2]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-2xl">
        <div className="flex justify-center mb-11 mt-6">
          <Image src="/logo.svg" alt="logo" />
        </div>
        <div className="font-medium text-2xl text-green-common1 mb-4">
          Đăng nhập để tiếp tục
        </div>

        <form onSubmit={onSubmit}>
          <InputCustom
            label=""
            register={register}
            errors={errors}
            placeholder="Tên tài khoản hoặc Email"
            keyInput="username"
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
          <div className="flex py-2 px-1 justify-end text-[15px]">
            <Link
              className="w-fit cursor-pointer hover:underline"
              href={"/auth/forgot-password"}
            >
              Quên mật khẩu?
            </Link>
          </div>
          <Button
            isLoading={loading}
            type="submit"
            className="bg-green-common text-white mb-6 w-full"
          >
            Đăng nhập
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
          <div>Chưa có tài khoản?</div>
          <Link
            href={"/auth/register"}
            className="text-cyan-700 hover:underline cursor-pointer"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModule;
