import { ToastSuccess } from "@/components/common/Toast";
import authService from "@/core/services/AuthService";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const EXPIRE_TIME = 60; // seconds

type IProps = {
  classNames?: string;
  disable?: boolean;
  spinner?: React.ReactNode;
  phoneNumber: string;
  onSkip?: () => void;
  email: string;
};

export const CountDown: React.FC<IProps> = ({
  classNames,
  disable,
  spinner,
  phoneNumber,
  email,
}) => {
  const [second, setSecond] = useState<number>(EXPIRE_TIME);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }
      if (second === 0) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  const handleReSendOtp = async () => {
    try {
      await authService
        .generateOtp({
          phone: phoneNumber,
          email: email,
        })
        .then((data: any) => {
          ToastSuccess(data?.message);
        })
        .catch(() => {});
      setSecond(EXPIRE_TIME);
    } catch (error) {}
  };

  return (
    <>
      {second ? (
        <div className="flex justify-center text-xs">
          <div className="text-black/75">Gửi lại mã sau</div>
          <div className="text-[#1d4279] font-semibold underline mx-2">
            00:{second}
          </div>
          <div className="text-black/75">giây</div>
        </div>
      ) : (
        <button type="button" onClick={handleReSendOtp}>
          <div className="text-xs text-cyan-700 mt-1">Gửi lại mã xác minh</div>
        </button>
      )}

      <Button
        disabled={disable}
        type="submit"
        className="bg-green-common text-white mb-6 w-full mt-6"
      >
        {spinner} Xác minh
      </Button>
    </>
  );
};
