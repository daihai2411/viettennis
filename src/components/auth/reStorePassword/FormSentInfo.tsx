import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import InputCustom from "../common/InputCustom";
import { STATUS_RESTORE_PASS, schemaRestorePass } from "../constants";

type IProps = {
  status: string;
  setStatus: (val: string) => void;
};

interface IFormInput {
  password: string;
  confirmPassword: string;
}

const FormSentInfo: React.FC<IProps> = ({ status, setStatus }) => {
  const schemaValidation = () =>
    Yup.object().shape({
      password: schemaRestorePass.password,
      confirmPassword: schemaRestorePass.confirmPassword,
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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setStatus(STATUS_RESTORE_PASS.SUCCESS);
    console.log(data);
  };

  return (
    <>
      <div className="text-black text-opacity-90 text-base font-normal mb-3">
        Xác thực mật khẩu mới của bạn
      </div>
      <div className="text-black text-opacity-90 text-base font-normal mb-3">
        ID: duytamdo00
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom
          label="password"
          register={register}
          errors={errors}
          placeholder="Mật khẩu mới"
        />
        <InputCustom
          label="confirmPassword"
          register={register}
          errors={errors}
          placeholder="Xác nhận mật khẩu mới"
        />
        <Button
          type="submit"
          className="bg-green-common text-white mb-4 mt-16 w-full"
        >
          Lưu thay đổi
        </Button>
      </form>
    </>
  );
};

export default FormSentInfo;
