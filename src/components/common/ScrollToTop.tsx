"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div className="relative">
      {showTopBtn && (
        <Button
          isIconOnly
          onClick={goToTop}
          className="fixed bottom-20 right-6 z-20 bg-black text-white rounded-full h-12 w-12 hover:bg-green-common1 hover:!opacity-100"
        >
          <BsArrowUp size={22} />
        </Button>
      )}
    </div>
  );
};
export default ScrollToTop;
