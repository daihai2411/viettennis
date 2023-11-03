import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Divider, ModalBody } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { schemaRegister } from "../constants";
import FormAccount from "./FormAccount";
import FormLicense from "./FormLicense";

type IProps = {
  isOpen?: boolean;
  onOpenChange?: (val: boolean) => void;
  setKindPopup: (val: string) => void;
};

interface IFormInput {
  username: string;
  nickname: string;
  mail: string;
  birthday: any;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  address: string;
  provideAddress: string;
  identification: string;
  issueDate: string;
  issueAddress: string;
}

const ModalRegister = ({ isOpen, onOpenChange, setKindPopup }: IProps) => {
  const schemaValidation = () =>
    Yup.object().shape({
      username: schemaRegister.username,
      password: schemaRegister.password,
      nickname: schemaRegister.nickname,
      mail: schemaRegister.mail,
      birthday: schemaRegister.birthday,
      confirmPassword: schemaRegister.confirmPassword,
      phoneNumber: schemaRegister.phoneNumber,
      identification: schemaRegister.identification,
      issueDate: schemaRegister.issueDate,
      issueAddress: schemaRegister.issueAddress,
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

  return (
    <ModalBody>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormAccount register={register} errors={errors} />
        <Divider className="mb-2" />
        <FormLicense register={register} errors={errors} />
        <div className="text-black text-opacity-90 text-[13px] font-light mb-3">
          *Lưu ý: mọi thông tin của bạn sẽ được dùng để xác thực định danh trong
          mọi giải đấu của Viettennis
        </div>
        <Button
          type="submit"
          className="bg-green-common text-white mb-6 w-full"
        >
          Tiếp tục
        </Button>
      </form>
    </ModalBody>
  );
};

export default ModalRegister;
