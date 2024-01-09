import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeMatchDrawSearch } from "../draws/slice";

const SearchPlayer = ({ loading = false, data = [] }) => {
  const dispatch = useDispatch();

  const handleMatchDrawSearch = (val) => {
    const result = data.find((item: any) => String(item.id) === val) as any;
    dispatch(changeMatchDrawSearch(result?.couple_id));
  };

  useEffect(() => {
    return () => {
      dispatch(changeMatchDrawSearch(null));
    };
  }, []);

  return (
    <div className="flex justify-end my-8 container mx-auto">
      <Autocomplete
        placeholder="Nhập tên..."
        isLoading={loading}
        label="Tìm kiếm theo tên"
        className="max-w-xs"
        variant="underlined"
        allowsCustomValue={true}
        onSelectionChange={handleMatchDrawSearch}
      >
        {data.map((item: { full_name: string; id: string }) => (
          <AutocompleteItem key={item.id}>{item.full_name}</AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};

export default SearchPlayer;
