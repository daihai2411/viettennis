import { Image } from "@nextui-org/react";
import Link from "next/link";

const FollowAccount = ({ data }) => {
  return (
    <>
      <div className="text-[#141414] text-base font-black">
        Theo dõi <br />
        {data?.full_name}
      </div>
      <Link
        href={data?.facebook || "/404"}
        target="_blank"
        className="border cursor-pointer border-stone-300 bg-gray-50 rounded-full flex justify-center items-center mt-2 w-10 h-10"
      >
        <Image src="/icon-fb.png" alt="icon social" className="h-5" />
      </Link>
    </>
  );
};

export default FollowAccount;
