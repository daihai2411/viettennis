import { Radio, RadioGroup } from "@nextui-org/radio";

const RadioCustom = ({
  labelRadio,
  list,
  className,
  keyInput,
  errors,
  setValue,
  defaultValue = "",
}) => {
  const setSelected = (val) => {
    setValue(keyInput, val);
  };

  return (
    <div className={className}>
      <RadioGroup
        label={labelRadio}
        onValueChange={setSelected}
        defaultValue={defaultValue}
      >
        {list.map((item: { label: string; value: string }) => (
          <Radio key={item.value} value={item.value}>
            {item.label}
          </Radio>
        ))}
      </RadioGroup>
      {errors[keyInput] && (
        <p className="text-red-500 text-xs" role="alert">
          {errors[keyInput]?.message as string}
        </p>
      )}
    </div>
  );
};

export default RadioCustom;
