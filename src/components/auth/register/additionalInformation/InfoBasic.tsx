import InputCustom from "../../common/InputCustom";
import InputDate from "../../common/InputDate";

const InfoBasic = ({ register, errors }) => {
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
            Sinh ngày
            <div className="text-red-600">*</div>
          </div>
        }
        register={register}
        errors={errors}
        placeholder="DD/MM/YYYY"
        keyInput="dob"
      />
      <InputCustom
        label="Số điện thoại"
        register={register}
        errors={errors}
        placeholder="Nhập số điện thoại"
        keyInput="phone"
        required
      />
    </>
  );
};

export default InfoBasic;
