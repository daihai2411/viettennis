import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TAB } from "./constants";

const GroupBtnTab = ({ tab, onSelectionChange }) => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  if (showBtn)
    return (
      <div className="relative">
        <Button
          disabled={tab === TAB.TAB_1}
          isIconOnly
          onClick={() => onSelectionChange(TAB.TAB_1)}
          className="fixed left-1 top-[50%] z-20 bg-black text-white rounded-full h-10 w-10 hover:bg-green-common1 hover:!opacity-100"
          style={tab === TAB.TAB_1 ? { display: "none" } : {}}
        >
          <FaChevronLeft size={20} />
        </Button>
        <Button
          disabled={tab === TAB.TAB_2}
          isIconOnly
          onClick={() => onSelectionChange(TAB.TAB_2)}
          className="fixed right-1 top-[50%] z-20 bg-black text-white rounded-full h-10 w-10 hover:bg-green-common1 hover:!opacity-100"
          style={tab === TAB.TAB_2 ? { display: "none" } : {}}
        >
          <FaChevronRight size={20} />
        </Button>
      </div>
    );
};

export default GroupBtnTab;
