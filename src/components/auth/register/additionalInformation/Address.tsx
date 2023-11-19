import useAddress from "@/components/common/address/useAddress";
import InputCustom from "../../common/InputCustom";
import SelectAutocomplete from "../../common/SelectAutocomplete";

const Address = ({ register, errors, getValues, setValue }) => {
  const provinceDataForm = getValues("province");
  const districtDataForm = getValues("district");

  const {
    dataProvinces,
    loadingProvinces,
    dataDistricts,
    loadingDistricts,
    dataWards,
    loadingWards,
  } = useAddress({
    provinceCode: provinceDataForm,
    districtCode: districtDataForm,
  });

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
            Tỉnh/Thành phố
            <div className="text-red-600">*</div>
          </div>
        }
        keyInput="province"
        placeholder="Chọn Tỉnh/Thành phố"
        setValue={(id) => {
          setValue("province", id);
          setValue("district", undefined);
          setValue("ward", undefined);
        }}
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
        setValue={(id) => {
          setValue("district", id);
          setValue("ward", undefined);
        }}
        errors={errors}
        list={dataDistricts}
        loading={loadingDistricts}
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
        setValue={(id) => {
          setValue("ward", id);
        }}
        errors={errors}
        list={dataWards}
        loading={loadingWards}
      />
    </>
  );
};

export default Address;
