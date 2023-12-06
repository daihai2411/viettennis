import { ToastError, ToastSuccess } from "@/components/common/Toast";
import authService from "@/core/services/AuthService";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "@nextui-org/spinner";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import * as Yup from "yup";
import { CountDown } from "./CountDown";
import { InputOpt } from "./InputOpt";
import { TextPhoneNumber } from "./TextPhoneNumber";

const schemaValidation = Yup.object().shape({});

type IProps = {
  phoneNumber: string;
  onBack?: () => void;
  onNext?: () => void;
  onSkip?: () => void;
  email: string;
};

export const FormVerify: React.FC<IProps> = ({
  phoneNumber,
  onBack = () => {},
  onNext = () => {},
  onSkip = () => {},
  email,
}) => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const otp = Object.values(data).join("");
      await authService.verifyOtp({
        phone: phoneNumber,
        otp,
      });
      ToastSuccess("Tài khoản đã xác minh.");
      onNext();
    } catch (error: any) {
      setLoading(false);
      ToastError(error?.response?.data?.data?.error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F2F2F2]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-2xl">
          <div className="flex items-center mb-4 gap-3">
            <FaArrowLeft onClick={onBack} className="cursor-pointer" />
            <div className="font-medium text-2xl text-green-common1">
              Nhập mã xác minh
            </div>
          </div>
          <div className="mt-5 mb-3">
            Chúng tôi đã gửi mã xác minh gồm 6 chữ số tới số điện thoại
          </div>
          <div className="flex justify-center">
            <TextPhoneNumber phoneNumber={phoneNumber} />
          </div>
          {email ? (
            <>
              <div className="mt-5 mb-3">và địa chỉ email</div>
              <div className="flex justify-center">{email}</div>
            </>
          ) : null}
          <div className="flex flex-col items-center justify-center">
            <InputOpt errors={errors} register={register} setValue={setValue} />
            <div className="flex justify-center">
              <div className="text-xs mt-5">Mã có hiệu lực trong 5 phút</div>
            </div>
            {!loading ? (
              <CountDown
                phoneNumber={phoneNumber}
                onSkip={onSkip}
                email={email}
              />
            ) : (
              <CountDown
                disable={true}
                classNames="opacity-70 cursor-not-allowed"
                spinner={<Spinner />}
                phoneNumber={phoneNumber}
                onSkip={onSkip}
                email={email}
              />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
