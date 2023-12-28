import useAddress from "@/components/common/address/useAddress";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

const SelectAddress = () => {
  const { dataProvinces, loadingProvinces, dataDistricts, loadingDistricts } =
    useAddress({});

  return (
    <div className="flex gap-3">
      <Autocomplete
        variant="underlined"
        placeholder="Tỉnh/ thành phố"
        isLoading={loadingProvinces}
        labelPlacement="outside-left"
        className="max-w-[180px]"
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
        className="max-w-[180px]"
        isLoading={loadingDistricts}
        labelPlacement="outside-left"
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
