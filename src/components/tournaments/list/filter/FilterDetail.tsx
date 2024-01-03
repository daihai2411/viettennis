import MonthComponent from "./MonthComponent";
import SelectAddress from "./SelectAddress";

const FilterDetail = () => {
  return (
    <div className="bg-[#E6E6E6] py-3 ">
      <div className="block xl:flex">
        <SelectAddress />
        <MonthComponent />
      </div>
    </div>
  );
};

export default FilterDetail;
