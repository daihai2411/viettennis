import MonthComponent from "./MonthComponent";
import SelectAddress from "./SelectAddress";

const FilterDetail = () => {
  return (
    <div className="bg-[#E6E6E6] py-3 block lg:flex">
      <SelectAddress />
      <MonthComponent />
    </div>
  );
};

export default FilterDetail;
