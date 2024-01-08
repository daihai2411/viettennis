import MonthComponent from "./MonthComponent";
import SelectAddress from "./SelectAddress";
import SelectYear from "./SelectYear";

const FilterDetail = () => {
  return (
    <div className="bg-[#E6E6E6]">
      <div className="container mx-auto p-3">
        <div className="flex gap-3 mb-3">
          <SelectAddress />
          <SelectYear />
        </div>
        <MonthComponent />
      </div>
    </div>
  );
};

export default FilterDetail;
