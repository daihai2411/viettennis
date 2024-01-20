import { useMemo } from "react";
import SelectAutocomplete from "./SelectAutocomplete";

const InputSelectYear = ({
  errors,
  keyInput,
  label,
  placeholder,
  setValue,
  defaultValue = undefined,
}) => {
  const listYear = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const result = [] as any[];

    for (let i = 1; i <= 80; i++) {
      // 80 is birth year
      const birthYear = currentYear - i + 1; // Lùi về từng năm
      const person = {
        id: birthYear,
        name: birthYear.toString(),
        code: birthYear,
      } as any;
      result.push(person);
    }
    return result;
  }, []);

  return (
    <SelectAutocomplete
      label={
        <div className="text-small font-medium text-foreground pb-1.5">
          {label}
        </div>
      }
      keyInput={keyInput}
      placeholder={placeholder}
      setValue={(id) => {
        setValue(keyInput, id);
      }}
      errors={errors}
      list={listYear as any}
      defaultSelectedKey={defaultValue}
    />
  );
};

export default InputSelectYear;
