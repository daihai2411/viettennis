import InputCustom from "../../common/InputCustom";
import InputDate from "../../common/InputDate";

const IdentifyCard = ({ register, errors, setValue, clearErrors }) => {
  return (
    <>
      <InputCustom
        label="CMT/CCCD"
        register={register}
        errors={errors}
        placeholder="Nhập CMT/CCCD"
        keyInput="identifyId"
        required
        type="number"
      />
      <InputDate
        label={
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            Ngày cấp
            <div className="text-red-600">*</div>
          </div>
        }
        register={register}
        errors={errors}
        placeholder="DD/MM/YYYY"
        keyInput="identifyDate"
        setValue={setValue}
        clearErrors={clearErrors}
      />
      <InputCustom
        label="Nơi cấp"
        register={register}
        errors={errors}
        placeholder="Nơi cấp"
        keyInput="identifyAddress"
        required
      />
    </>
  );
};

export default IdentifyCard;
