import InputSelectDateTime from "@/components/common/datePicker/InputSelectDateTime";
import InputSearch from "@/components/common/inputSearch";
import { Divider, Select, SelectItem } from "@nextui-org/react";

const Filter = () => {
  const animals = [
    {
      label: "Cat",
      value: "cat",
      description: "The second most popular pet in the world",
    },
    {
      label: "Dog",
      value: "dog",
      description: "The most popular pet in the world",
    },
    {
      label: "Elephant",
      value: "elephant",
      description: "The largest land animal",
    },
    { label: "Lion", value: "lion", description: "The king of the jungle" },
    { label: "Tiger", value: "tiger", description: "The largest cat species" },
  ];

  return (
    <>
      <div className="w-full bg-[#E6E6E6] h-[79px]">
        <div className="container mx-auto flex h-full items-center">
          <InputSelectDateTime />
          <Divider orientation="vertical" className="h-[80%] mx-4" />
          <Select
            label={
              <div className="opacity-90 text-neutral-950 text-xs font-bold">
                Lọc theo khu vực
              </div>
            }
            placeholder="Select an animal"
            className="max-w-[220px]"
            variant="underlined"
            color="default"
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
          <InputSearch />
        </div>
      </div>
    </>
  );
};

export default Filter;
