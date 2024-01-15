import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

const SelectAutocomplete = ({
  label,
  keyInput,
  errors,
  placeholder,
  list = [],
  loading,
  setValue,
  defaultSelectedKey = undefined,
}) => {
  return (
    <div className="mb-4 select-auto-complete">
      <div className="block text-small font-medium text-foreground">
        {label}
      </div>
      <Autocomplete
        placeholder={placeholder}
        variant="bordered"
        labelPlacement="outside-left"
        fullWidth
        isLoading={loading}
        onSelectionChange={setValue}
        defaultSelectedKey={defaultSelectedKey}
      >
        {list.map((item: { name: string; code: string }) => (
          <AutocompleteItem key={item.code} value={item.code}>
            {item.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      {errors[keyInput] && (
        <p className="text-red-500 text-xs" role="alert">
          {errors[keyInput]?.message as string}
        </p>
      )}
    </div>
  );
};

export default SelectAutocomplete;
