import LayoutTablet from "./LayoutTablet";
import Left from "./Left";
import Right from "./Right";

const MenuTop = () => {
  return (
    <>
      <div className="h-[50px] bg-green-common2 hidden md:block">
        <div className="container mx-auto flex justify-between">
          <Left />
          <Right />
        </div>
      </div>
      <div className="h-[142px] bg-[#f2f2f2] hidden md:block"></div>
      <LayoutTablet />
    </>
  );
};

export default MenuTop;
