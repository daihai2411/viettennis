import { ToastError, ToastSuccess } from "@/components/common/Toast";
import authService from "@/core/services/AuthService";
import { AppDispatch } from "@/redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { schemaRestorePass } from "../schema";
import { selectLoadingProfile, selectProfile } from "../store/slice";
import { getProfileCheck } from "../store/thunk";

interface IFormInput {
  password: string;
  password_confirmation: string;
}

const schemaValidation = () => Yup.object().shape(schemaRestorePass);

const FormChangPassword = () => {
  const dispatch = useDispatch<AppDispatch>();

  const dataProfile = useSelector(selectProfile);
  const isLoadingProfile = useSelector(selectLoadingProfile);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      router.push("/auth/register");
      dispatch(getProfileCheck({}));
    } catch (error: any) {
      setLoading(false);
      ToastError(
        error?.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại"
      );
    }
  };

  if (!isLoadingProfile && !dataProfile?.username && !dataProfile?.email) {
    return <>Vui lòng đăng nhập để thực hiện tính năng này</>;
  }

  return (
    <>
      <div className="text-black text-opacity-90 text-base font-normal mb-2 leading-normal mt-6">
        Xác thực mật khẩu mới của bạn
      </div>
      <div className="text-black text-opacity-90 text-base font-normal mb-2 leading-normal mt-6">
        {dataProfile?.username
          ? `Username: ${dataProfile?.username}`
          : `Email: ${dataProfile?.email}`}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputPassword
          register={register}
          errors={errors}
          inputKey="password"
          placeholder="Mật khẩu mới"
          onSubmit={handleSubmit(onSubmit)}
        />
        <InputPassword
          register={register}
          errors={errors}
          inputKey="password_confirmation"
          placeholder="Xác nhận mật khẩu mới"
          onSubmit={handleSubmit(onSubmit)}
        />
        <Button
          disabled={!(dataProfile?.username || dataProfile?.email)}
          isLoading={loading}
          type="submit"
          className="bg-green-common text-white mb-4 w-full mt-10"
          style={{
            opacity: dataProfile?.username || dataProfile?.email ? 1 : 0.5,
          }}
        >
          Lưu thay đổi
        </Button>
      </form>
    </>
  );
};

export default FormChangPassword;

const InputPassword = ({
  register,
  errors,
  inputKey,
  placeholder,
  onSubmit,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && onSubmit) {
      onSubmit();
    }
  };

  return (
    <>
      <Input
        {...register(inputKey)}
        label=""
        placeholder={placeholder}
        variant="bordered"
        labelPlacement="outside"
        className="py-2"
        type={isVisible ? "text" : "password"}
        onKeyDown={handleKeyDown}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <AiFillEye className="text-xl text-default-400 pointer-events-none" />
            ) : (
              <AiFillEyeInvisible className="text-xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />
      {errors[inputKey] && (
        <p className="text-red-500 text-xs" role="alert">
          {errors[inputKey]?.message as string}
        </p>
      )}
    </>
  );
};
