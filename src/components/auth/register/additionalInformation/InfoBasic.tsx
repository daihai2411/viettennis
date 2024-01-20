import { useSelector } from "react-redux";
import InputCustom from "../../common/InputCustom";
import InputSelectDate from "../../common/InputSelectDate";
import {
  selectEmail,
  selectPhoneNumber,
  selectUsername,
} from "../../store/slice";

const InfoBasic = ({ register, errors, setValue, clearErrors }) => {
  const phoneNumber = useSelector(selectPhoneNumber);
  const email = useSelector(selectEmail);
  const username = useSelector(selectUsername);

  return (
    <>
      <InputCustom
        label="Email"
        register={register}
        errors={errors}
        placeholder="Nhập địa chỉ email"
        keyInput="email"
        type="email"
        required
        defaultValue={email}
        disable={email}
      />
      <InputCustom
        label="Họ và tên"
        register={register}
        errors={errors}
        placeholder="Nhập họ và tên"
        keyInput="fullName"
        type="text"
        required
      />
      <InputCustom
        key={username}
        label="Username"
        register={register}
        errors={errors}
        placeholder="Nhập username"
        keyInput="username"
        type="text"
        required
        defaultValue={username}
        disable={username}
      />
      <InputSelectDate
        label={
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            Ngày sinh
            <div className="text-red-600">*</div>
          </div>
        }
        register={register}
        errors={errors}
        placeholder="DD/MM/YYYY"
        keyInput="dob"
        setValue={setValue}
        clearErrors={clearErrors}
      />
      <InputCustom
        label="Số điện thoại"
        register={register}
        errors={errors}
        placeholder="Nhập số điện thoại"
        keyInput="phone"
        defaultValue={phoneNumber}
        required
        disable={phoneNumber}
      />
    </>
  );
};

export default InfoBasic;
