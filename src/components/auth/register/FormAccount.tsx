import { FieldErrors, FieldValues } from "react-hook-form";
import InputCustom from "../common/InputCustom";

const FormAccount = ({
  register,
  errors,
}: {
  register: any;
  errors: FieldErrors<FieldValues>;
}) => {
  return (
    <>
      <InputCustom
        label="username"
        register={register}
        errors={errors}
        placeholder="Họ và Tên"
      />
      <InputCustom
        label="nickname"
        register={register}
        errors={errors}
        placeholder="Tên nick (ID)"
      />
      <div className="text-black text-opacity-90 text-[15px] font-normal mb-4">
        Đây là tên sẽ xuất hiện trong các bài viết của bạn. Bạn không thể thay
        đổi tên này về sau.
      </div>
      <InputCustom
        label="mail"
        register={register}
        errors={errors}
        placeholder="Email"
      />
      <InputCustom
        label="birthday"
        register={register}
        errors={errors}
        placeholder="Sinh nhật"
      />
      <InputCustom
        label="password"
        register={register}
        errors={errors}
        placeholder="Mật khẩu"
      />
      <InputCustom
        label="confirmPassword"
        register={register}
        errors={errors}
        placeholder="Xác nhận mật khẩu"
      />
    </>
  );
};

export default FormAccount;
