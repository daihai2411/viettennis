import useAddress from "@/components/common/address/useAddress";
import InputCustom from "../../common/InputCustom";
import SelectAutocomplete from "../../common/SelectAutocomplete";

const Address = ({ register, errors }) => {
  const {
    dataProvinces,
    loadingProvinces,
    dataDistricts,
    loadingDistricts,
    dataWards,
    loadingWards,
  } = useAddress();

  return (
    <>
      <InputCustom
        label="Địa chỉ"
        register={register}
        errors={errors}
        placeholder="Địa chỉ"
        keyInput="address"
        required
      />
      <SelectAutocomplete
        label={
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            Xã/Phường
            <div className="text-red-600">*</div>
          </div>
        }
        keyInput="ward"
        placeholder="Chọn Xã/Phường"
        register={register}
        errors={errors}
        list={dataProvinces}
        loading={loadingProvinces}
      />
      <SelectAutocomplete
        label={
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            Quận/Huyện
            <div className="text-red-600">*</div>
          </div>
        }
        keyInput="district"
        placeholder="Chọn Quận/Huyện"
        register={register}
        errors={errors}
        list={dataDistricts}
        loading={loadingDistricts}
      />
      <SelectAutocomplete
        label={
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            Tỉnh/Thành phố
            <div className="text-red-600">*</div>
          </div>
        }
        keyInput="province"
        placeholder="Chọn Tỉnh/Thành phố"
        register={register}
        errors={errors}
        list={dataWards}
        loading={loadingWards}
      />
    </>
  );
};

export default Address;
