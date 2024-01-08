import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

const SearchPlayer = ({ loading = false, data = [] }) => {
  return (
    <div className="flex justify-end my-8 container mx-auto">
      <Autocomplete
        placeholder="Nhập tên..."
        isLoading={loading}
        label="Tìm kiếm theo tên"
        className="max-w-xs"
        variant="underlined"
      >
        {data.map((item: { name: string; value: string }) => (
          <AutocompleteItem key={item.value} value={item.value}>
            {item.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};

export default SearchPlayer;
