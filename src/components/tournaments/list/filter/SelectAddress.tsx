import useAddress from "@/components/common/address/useAddress";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { changeListFilter, selectListFilter } from "../store/slice";

const SelectAddress = () => {
  const dispatch = useAppDispatch();
  const { dataProvinces, loadingProvinces, dataDistricts, loadingDistricts } =
    useAddress({});

  const listFilter = useAppSelector(selectListFilter);

  const handleProvince = (key) => {
    dispatch(changeListFilter({ ...listFilter, province_id: key || "" }));
  };

  const handleDistrict = (key) => {
    dispatch(changeListFilter({ ...listFilter, district_id: key || "" }));
  };

  return (
    <div className="flex gap-3">
      <Autocomplete
        variant="underlined"
        placeholder="Tỉnh/ thành phố"
        isLoading={loadingProvinces}
        labelPlacement="outside-left"
        onSelectionChange={handleProvince}
      >
        {dataProvinces.map((item: { name: string; code: string }) => (
          <AutocompleteItem key={item.code} value={item.code}>
            {item.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        variant="underlined"
        placeholder="Quận huyện"
        isLoading={loadingDistricts}
        labelPlacement="outside-left"
        onSelectionChange={handleDistrict}
      >
        {dataDistricts.map((animal) => (
          <AutocompleteItem key={animal.value} value={animal.value}>
            {animal.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};

export default SelectAddress;
