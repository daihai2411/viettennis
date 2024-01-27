import { ToastError, ToastSuccess } from "@/components/common/Toast";
import authService from "@/core/services/AuthService";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { schemaRestorePass } from "../schema";
import { selectProfile } from "../store/slice";

interface IFormInput {
  password: string;
  confirmPassword: string;
}

const schemaValidation = () => Yup.object().shape(schemaRestorePass);

const FormChangPassword = () => {
  const dataProfile = useSelector(selectProfile);
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

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      const res = (await authService.changePassword(data)) as any;
      setLoading(false);
      ToastSuccess(res.message);
    } catch (error: any) {
      setLoading(false);
      ToastError(
        error?.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại"
      );
    }
  };

  return (
    <>
      <div className="text-black text-opacity-90 text-base font-normal mb-2 leading-normal mt-6">
        Xác thực mật khẩu mới của bạn
      </div>
      {/* <div className="text-black text-opacity-90 text-base font-normal mb-2 leading-normal mt-6">
        ID: {dataProfile?.user || dataProfile?.email}
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("password")}
          label=""
          placeholder="Mật khẩu mới"
          variant="bordered"
          labelPlacement="outside"
          className="py-2"
        />
        {errors["password"] && (
          <p className="text-red-500 text-xs" role="alert">
            {errors["password"]?.message as string}
          </p>
        )}
        <Input
          {...register("confirmPassword")}
          label=""
          placeholder="Xác nhận mật khẩu mới"
          variant="bordered"
          labelPlacement="outside"
          className="py-2"
        />
        {errors["confirmPassword"] && (
          <p className="text-red-500 text-xs" role="alert">
            {errors["confirmPassword"]?.message as string}
          </p>
        )}

        <Button
          isLoading={loading}
          type="submit"
          className="bg-green-common text-white mb-4 w-full mt-10"
        >
          Lưu thay đổi
        </Button>
      </form>
    </>
  );
};

export default FormChangPassword;
