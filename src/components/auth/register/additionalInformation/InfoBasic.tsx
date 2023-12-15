import { useSelector } from "react-redux";
import InputCustom from "../../common/InputCustom";
import InputDate from "../../common/InputDate";
import { selectEmail, selectPhoneNumber } from "../../store/slice";

const InfoBasic = ({ register, errors, setValue, clearErrors }) => {
  const phoneNumber = useSelector(selectPhoneNumber);
  const email = useSelector(selectEmail);

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
      <InputDate
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
