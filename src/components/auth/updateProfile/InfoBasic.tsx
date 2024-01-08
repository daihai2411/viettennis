import InputCustom from "../common/InputCustom";
import InputDate from "../common/InputDate";

const InfoBasic = ({
  register,
  errors,
  setValue,
  clearErrors,
  dateProfileCamelCase,
}) => {
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
        disable={dateProfileCamelCase["email"]}
        defaultValue={dateProfileCamelCase["email"]}
      />
      <InputCustom
        label="Họ và tên"
        register={register}
        errors={errors}
        placeholder="Nhập họ và tên"
        keyInput="fullName"
        type="text"
        required
        defaultValue={dateProfileCamelCase["fullName"]}
      />
      <InputCustom
        label="Username"
        register={register}
        errors={errors}
        placeholder="Nhập username"
        keyInput="username"
        type="text"
        required
        disable={dateProfileCamelCase["username"]}
        defaultValue={dateProfileCamelCase["username"]}
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
        defaultValue={dateProfileCamelCase["dob"]}
      />
      <InputCustom
        label="Số điện thoại"
        register={register}
        errors={errors}
        placeholder="Nhập số điện thoại"
        keyInput="phone"
        required
        disable={dateProfileCamelCase["phone"]}
        defaultValue={dateProfileCamelCase["phone"]}
      />
    </>
  );
};

export default InfoBasic;
