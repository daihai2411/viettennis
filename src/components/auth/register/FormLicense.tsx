import { Checkbox } from "@nextui-org/react";
import { FieldErrors, FieldValues } from "react-hook-form";
import InputCustom from "../common/InputCustom";

const FormLicense = ({
  register,
  errors,
}: {
  register: any;
  errors: FieldErrors<FieldValues>;
}) => {
  return (
    <>
      <div>
        <div className="text-neutral-900 text-sm font-normal">
          Số điện thoại:
        </div>
        <InputCustom label="phoneNumber" register={register} errors={errors} />
      </div>
      {/* <div>
          <div className="text-neutral-900 text-sm font-normal">
            Khu vực sinh sống:
          </div>
          <div className="flex gap-2">
          <InputCustom label="phoneNumber" register={register} errors={errors} />
          <InputCustom label="phoneNumber" register={register} errors={errors} />
          </div>
        </div> */}
      <div>
        <div className="text-neutral-900 text-sm font-normal">
          Số CMND/Hộ chiếu:
        </div>
        <div className="text-neutral-400 text-[10px] font-normal pl-8">
          Bắt buộc
        </div>
        <InputCustom
          label="identification"
          register={register}
          errors={errors}
        />
      </div>
      <div>
        <div className="text-neutral-900 text-sm font-normal">Ngày cấp:</div>
        <InputCustom label="issueDate" register={register} errors={errors} />
      </div>
      <div>
        <div className="text-neutral-900 text-sm font-normal">Nơi cấp:</div>
        <InputCustom label="issueAddress" register={register} errors={errors} />
      </div>
      <div className="mb-2">
        <Checkbox className="py-0">
          <div>
            <span className="text-black text-opacity-90 text-[15px] font-normal">
              Tôi đồng ý với{" "}
            </span>
            <span className="text-cyan-700 text-[15px] font-normal">
              điều khoản
            </span>
            <span className="text-black text-opacity-90 text-[15px] font-normal">
              {" "}
              và{" "}
            </span>
            <span className="text-cyan-700 text-[15px] font-normal">
              chính sách quyền riêng tư
            </span>
            <span className="text-black text-opacity-90 text-[15px] font-normal">
              .
            </span>
          </div>
        </Checkbox>
      </div>
    </>
  );
};

export default FormLicense;
