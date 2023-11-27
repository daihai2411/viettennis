import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Right = () => {
  return (
    <div className="flex text-white items-center py-[3px]">
      <div className="flex py-3 hover:bg-white hover:text-green-common2 cursor-pointer px-3 items-center delay-100">
        <FaFacebook />
      </div>
      <div className="flex py-3 hover:bg-white hover:text-green-common2 cursor-pointer px-3 items-center delay-100">
        <FaTwitter />
      </div>
      <div className="flex py-3 hover:bg-white hover:text-green-common2 cursor-pointer px-3 items-center delay-100">
        <FaInstagram />
      </div>
      <div className="flex py-3 hover:bg-white hover:text-green-common2 cursor-pointer px-3 items-center delay-100">
        <FaYoutube />
      </div>
    </div>
  );
};

export default Right;
