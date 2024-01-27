import { ToastError, ToastSuccess } from "@/components/common/Toast";
import authService from "@/core/services/AuthService";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { schemaSentInfo } from "../schema";

interface IFormInput {
  username: string;
}

const FormSentInfo = () => {
  const schemaValidation = () => Yup.object().shape(schemaSentInfo);

  const [sentEmail, setSentEmail] = useState(false);
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
      const res = (await authService.forgotPassword({
        email: data.username,
      })) as any;
      setSentEmail(true);
      setLoading(false);
      ToastSuccess(res.message);
    } catch (error: any) {
      setLoading(false);
      ToastError(
        error?.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại"
      );
    }
  };

  useEffect(() => {
    return () => {
      setSentEmail(false);
    };
  }, []);

  return (
    <>
      <div className="text-black text-opacity-90 text-base font-normal mb-1 leading-normal mt-4">
        Nếu bạn quên mật khẩu, bạn có thể dùng mẫu sau để thiết lập lại mật
        khẩu. Bạn sẽ nhận được một email với nội dung hướng dẫn đặt lại mật
        khẩu.
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username")}
          label=""
          placeholder="Nhập địa chỉ email"
          variant="bordered"
          labelPlacement="outside"
          className="py-2"
        />
        {errors["username"] && (
          <p className="text-red-500 text-xs" role="alert">
            {errors["username"]?.message as string}
          </p>
        )}
        <div style={{ opacity: sentEmail ? 1 : 0 }}>
          <div
            onClick={handleSubmit(onSubmit)}
            className="cursor-pointer text-green-common hover:underline"
          >
            Gửi lại, nếu chưa nhận được email
          </div>
          <div className="text-black text-sm font-normal mb-4">
            Yêu cầu thiết lập lại mật khẩu đã được gửi tới email của bạn. Vui
            lòng làm theo hướng dẫn trong email bạn nhận được. <br />
            Trân trọng!
          </div>
        </div>
        <Button
          isLoading={loading}
          type="submit"
          className="bg-green-common text-white mb-6 w-full"
        >
          Đặt lại mật khẩu
        </Button>
      </form>
    </>
  );
};

export default FormSentInfo;
