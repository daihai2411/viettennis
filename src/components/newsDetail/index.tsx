import { FaFacebook, FaLink, FaRegClock, FaTwitter } from "react-icons/fa";
import { html } from "./dummy";

const NewsDetailModule = () => {
  return (
    <div className="pt-9 container mx-auto">
      <div className="w-[50%] mx-auto">
        <div className="flex text-white text-xs items-center gap-3">
          <div className="font-bold ">Người trong cuộc WTA</div>
          <div className="flex items-center gap-1">
            <FaRegClock />
            <div className="font-extrabold">ngày 18 tháng 4,2022</div>
          </div>
        </div>
        <div className="text-white text-[45px] font-bold mt-2">
          Dù không có huấn luyện viên, Gauff vẫn tự tin trước mùa giải đất nện
        </div>
        <div className="flex items-center text-white text-base gap-2 mb-2">
          <span className="font-normal">Bởi</span>
          <span className="font-bold">
            Courtney Nguyễn - Người trong cuộc WTA
          </span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[40px] h-[40px] bg-white rounded-[20px] justify-center items-center inline-flex">
            <FaFacebook size={20} />
          </div>
          <div className="w-[40px] h-[40px] bg-white rounded-[20px] justify-center items-center inline-flex">
            <FaTwitter size={20} />
          </div>
          <div className="w-[40px] h-[40px] bg-white rounded-[20px] justify-center items-center inline-flex">
            <FaLink size={20} />
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default NewsDetailModule;
