import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { CountDown } from "./CountDown";
import { InputOpt } from "./InputOpt";
import { TextPhoneNumber } from "./TextPhoneNumber";

const schemaValidation = Yup.object().shape({});

type IProps = {
  isShowSkipStep?: boolean;
  phoneNumber: string;
  // onVerifyApi?: (params) => void;
  onBack?: () => void;
  onNext?: () => void;
  onSkip?: () => void;
};

export const FormVerify: React.FC<IProps> = ({
  isShowSkipStep,
  phoneNumber,
  // onVerifyApi = (params) => registerService.verifyOtp(params),
  onBack = () => {},
  onNext = () => {},
  onSkip = () => {},
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
      // const otp = Object.values(data).join('')
      // await onVerifyApi({
      //   phone_number: phoneNumber,
      //   otp,
      // })
      // ToastAntdSuccess('Xác minh số điện thoại thành công !')
      onNext();
    } catch (error: any) {
      setLoading(false);
      // ToastAntdError(
      //   error?.response?.data?.data?.error ||
      //     error?.response?.data?.data?.otp ||
      //     error?.response?.data?.message,
      // )
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F2F2F2]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-2xl">
          <div className="flex items-center">
            {/* <Icon
              icon="ic-back"
              className="cursor-pointer"
              color="#1D4279"
              size={18}
              onClick={onBack}
            /> */}
            <div className="font-medium text-2xl text-green-common1 mb-4">
              Nhập mã xác minh
            </div>
          </div>

          <div className="mt-5 mb-3">
            Chúng tôi đã gửi mã xác minh gồm 6 chữ số tới số điện thoại
          </div>
          <div className="flex flex-col items-center justify-center">
            <TextPhoneNumber phoneNumber={phoneNumber} />
            <InputOpt errors={errors} register={register} setValue={setValue} />
            <div className="flex justify-center">
              <div className="text-xs mt-5">Mã có hiệu lực trong 5 phút</div>
            </div>
            {!loading ? (
              <CountDown
                isShowSkipStep={isShowSkipStep}
                phoneNumber={phoneNumber}
                onSkip={onSkip}
              />
            ) : (
              <CountDown
                disable={true}
                classNames="opacity-70 cursor-not-allowed"
                // spinner={<Spinner />}
                isShowSkipStep={isShowSkipStep}
                phoneNumber={phoneNumber}
                onSkip={onSkip}
              />
            )}

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
      </div>
    </form>
  );
};
