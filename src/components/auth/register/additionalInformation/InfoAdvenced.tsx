import InputCustom from "../../common/InputCustom";
import RadioCustom from "../../common/RadioCustom";

const InfoAdvenced = ({ register, errors, setValue }) => {
  return (
    <>
      <InputCustom
        label="Chiều cao"
        register={register}
        errors={errors}
        placeholder="Điền số. Ví dụ: 165, 170, ..."
        keyInput="height"
        type="number"
      />
      <InputCustom
        label="Cân nặng"
        register={register}
        errors={errors}
        placeholder="Điền số. Ví dụ: 45, 50, 60, ..."
        keyInput="weight"
        type="number"
      />
      <RadioCustom
        className="mb-5"
        labelRadio={
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            Giới tính
            <div className="text-red-600">*</div>
          </div>
        }
        list={[
          { label: "Nam", value: "0" },
          { label: "Nữ", value: "1" },
        ]}
        keyInput="gender"
        errors={errors}
        setValue={setValue}
        defaultValue="1"
      />
      <RadioCustom
        className="mb-5"
        labelRadio={
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            Bạn thích đánh đơn hay đôi?
          </div>
        }
        list={[
          { label: "Đánh đơn", value: "1" },
          { label: "Đánh đôi", value: "2" },
          { label: "Cả hai", value: "3" },
        ]}
        keyInput="backHand"
        errors={errors}
        setValue={setValue}
      />
    </>
  );
};

export default InfoAdvenced;
