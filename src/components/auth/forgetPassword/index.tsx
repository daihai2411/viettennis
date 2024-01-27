"use client";

import { Divider } from "@nextui-org/react";
import FormSentInfo from "./FormSentInfo";

const ForgetPasswordModule = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-4 sm:px-6 py-12 lg:px-8 bg-[#F2F2F2]">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg bg-white p-8 rounded-2xl">
        <div className="font-medium text-lg mb-2">Quên mật khẩu</div>
        <Divider />
        <FormSentInfo />
      </div>
    </div>
  );
};

export default ForgetPasswordModule;
