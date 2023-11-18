import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

const SelectAutocomplete = ({
  label,
  keyInput,
  register,
  errors,
  placeholder,
  list = [],
  loading,
}) => {
  return (
    <div className="mb-3 select-auto-complete">
      <div className="block text-small font-medium text-foreground">
        {label}
      </div>
      <Autocomplete
        {...register(keyInput)}
        placeholder={placeholder}
        variant="bordered"
        labelPlacement="outside-left"
        fullWidth
        isLoading={loading}
      >
        {list.map((animal: { name: string; id: string }) => (
          <AutocompleteItem key={animal.id} value={animal.id}>
            {animal.name}
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
