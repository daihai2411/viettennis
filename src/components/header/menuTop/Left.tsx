import { RiShareBoxLine } from "react-icons/ri";

const Left = () => {
  return (
    <div className="flex text-white items-center py-[3px]">
      <div className="flex py-[10px] hover:bg-white hover:text-green-common2 cursor-pointer px-3 items-center delay-100">
        <div className="text-center text-base font-semibold font-['Arial'] tracking-wide mr-[2px]">
          Cửa hàng
        </div>
        <RiShareBoxLine />
      </div>
      <div className="flex py-[10px] hover:bg-white hover:text-green-common2 cursor-pointer px-3 items-center delay-100">
        <div className="text-center text-base font-semibold font-['Arial'] tracking-wide mr-[2px]">
          Bản tin
        </div>
        <RiShareBoxLine />
      </div>
      <div className="flex py-[10px] hover:bg-white hover:text-green-common2 cursor-pointer px-3 items-center delay-100">
        <div className="text-center text-base font-semibold font-['Arial'] tracking-wide mr-[2px]">
          Viettennis App
        </div>
        <RiShareBoxLine />
      </div>
    </div>
  );
};

export default Left;
