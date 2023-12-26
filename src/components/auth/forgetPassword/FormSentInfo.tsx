import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { STATUS_FORGET_PASS } from "../constants";

type IProps = {
  status: string;
  setStatus: (val: string) => void;
};

interface IFormInput {
  username: string;
}

const FormSentInfo: React.FC<IProps> = ({ status, setStatus }) => {
  const schemaValidation = () => Yup.object().shape({});

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
    setStatus(STATUS_FORGET_PASS.SENT);
    console.log(data);
  };

  return (
    <>
      <div className="text-black text-opacity-90 text-base font-normal leading-normal mt-4">
        Nếu bạn quên mật khẩu, bạn có thể dùng mẫu sau để thiết lập lại mật
        khẩu. Bạn sẽ nhận được một email hoặc SMS với nội dung hướng dẫn đặt lại
        mật khẩu.
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label=""
          placeholder="Tên nick (ID) hoặc email hoặc số điện thoại"
          variant="bordered"
          labelPlacement="outside"
          className="py-2"
        />
        <div
          className={
            status === STATUS_FORGET_PASS.UNSENT ? "opacity-0" : "opacity-1"
          }
        >
          <div className="cursor-pointer text-green-common hover:underline">
            Gửi lại, nếu chưa nhận được email
          </div>
          <div className="text-black text-sm font-normal mb-2">
            Yêu cầu thiết lập lại mật khẩu đã được gửi tới email của bạn. Vui
            lòng làm theo hướng dẫn trong email bạn nhận được. <br />
            Trân trọng!
          </div>
        </div>
        <Button
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
