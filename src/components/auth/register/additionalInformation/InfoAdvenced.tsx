import InputCustom from "../../common/InputCustom";
import RadioCustom from "../../common/RadioCustom";

const InfoAdvenced = ({ register, errors }) => {
  return (
    <>
      <InputCustom
        label="Chiều cao"
        register={register}
        errors={errors}
        placeholder="Điền số. Ví dụ: 165, 170, ..."
        keyInput="height"
        type="number"
        required
      />
      <InputCustom
        label="Cân nặng"
        register={register}
        errors={errors}
        placeholder="Điền số. Ví dụ: 45, 50, 60, ..."
        keyInput="weight"
        type="number"
        required
      />

      <RadioCustom
        className="mb-5"
        labelRadio={
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            Bạn thích đánh đơn hay đôi?
            <div className="text-red-600">*</div>
          </div>
        }
        list={[
          { label: "Đánh đơn", value: "1" },
          { label: "Đánh đôi", value: "2" },
        ]}
        register={register}
        keyInput="backHand"
        errors={errors}
      />
      <InputCustom
        label="Bắt đầu chơi tennis từ năm nào?"
        register={register}
        errors={errors}
        placeholder="Điền chính xác số năm. Vd: 2000, 2012, 2011"
        keyInput="playSince"
        required
      />
      <InputCustom
        label="Thông số kỹ thuật của vợt"
        register={register}
        errors={errors}
        placeholder="Nhập độ nặng, mặt vợt, độ rung đầu vợt"
        keyInput="racketSpecs"
        required
      />
      <InputCustom
        label="Giày tennis đang đi của hãng nào?"
        register={register}
        errors={errors}
        placeholder="Giày tennis đang đi của hãng nào?"
        keyInput="shoesBrand"
        required
      />
    </>
  );
};

export default InfoAdvenced;
