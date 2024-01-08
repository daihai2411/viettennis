import MonthComponent from "./MonthComponent";
import SelectAddress from "./SelectAddress";
import SelectYear from "./SelectYear";

const FilterDetail = () => {
  return (
    <div className="bg-[#E6E6E6] py-3 ">
      <div className="block">
        <div className="flex gap-1">
          <SelectAddress />
          <SelectYear />
        </div>
        <MonthComponent />
      </div>
    </div>
  );
};

export default FilterDetail;
