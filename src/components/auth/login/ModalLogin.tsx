"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Divider, Image, ModalBody } from "@nextui-org/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import InputCustom from "../common/InputCustom";
import { KIND_POPUP, schemaLogin } from "../constants";
import ModalForgetPassword from "../forgetPassword";

type IProps = {
  setKindPopup: (val: string) => void;
};

interface IFormInput {
  username: string;
  password: string;
}

const ModalLogin = ({ setKindPopup }: IProps) => {
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

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const [isForgetPass, setForgetPass] = useState<boolean>(false);

  return (
    <>
      <ModalBody>
        <div className="flex justify-center mb-11 mt-6">
          <Image src="/logo.svg" alt="logo" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputCustom
            label="username"
            register={register}
            errors={errors}
            placeholder="Tên tài khoản hoặc Email"
          />
          <InputCustom
            label="password"
            register={register}
            errors={errors}
            placeholder="Mật khẩu"
            type="password"
          />
          <div className="flex py-2 px-1 justify-end text-[15px]">
            <div
              className="w-fit cursor-pointer"
              onClick={() => setForgetPass(true)}
            >
              Forgot password?
            </div>
          </div>
          <Button
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
        <Button className="border border-stone-300 bg-gray-50">
          Đăng nhập bằng Google
        </Button>
        <Button className="border border-stone-300 bg-gray-50">
          Đăng nhập bằng Facebook
        </Button>
        <Button className="border border-stone-300 bg-gray-50">
          Log in with Apple
        </Button>
        <div className="mt-6 text-sm flex justify-center gap-1 mb-4">
          <div>Chưa có tài khoản?</div>
          <div
            className="text-cyan-700 hover:underline cursor-pointer"
            onClick={() => setKindPopup(KIND_POPUP.REGISTER)}
          >
            Đăng ký
          </div>
        </div>
      </ModalBody>
      <ModalForgetPassword
        isForgetPass={isForgetPass}
        setForgetPass={setForgetPass}
      />
    </>
  );
};

export default ModalLogin;
