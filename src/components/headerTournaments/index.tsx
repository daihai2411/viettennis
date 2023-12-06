"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  key: string;
  router: string;
  title: string;
};

type IProps = {
  routers: Array<Item>;
};

const HeaderTournaments: React.FC<IProps> = ({ routers }) => {
  const pathName = usePathname();

  const checkActiveRouter = (routerCheck) => {
    const arrayPath = pathName.split("/");
    return arrayPath[arrayPath.length - 1] === routerCheck;
  };

  return (
    <>
      <div className="h-[160px] relative">
        <Image
          fill
          alt="image header"
          src="/bg-tournaments.jpeg"
          layout="fill"
          objectFit="cover"
          className="rounder-none"
        />
      </div>
      <div className="w-full px-4 py-12 mt-3 mb-2 bg-green-common flex-col justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-[43.66px] font-medium mb-1">
            Viettennis Open 2023
          </h1>
          <span className="text-lg font-normal">LAND ROVER, VIETNAM</span>
          <div className="text-xs font-bold mt-4">Sep 11 - Sep 17, 2023</div>
        </div>
      </div>
      <div className="h-[60px] flex justify-center bg-[#141414] mb-2">
        {routers.map((item) => (
          <Link key={item.key} href={item.router}>
            <div
              className={`text-center items-center flex text-[17px] font-bold px-5 h-full ${
                checkActiveRouter(item.router)
                  ? " border-b-4 border-b-green-common text-white"
                  : "text-zinc-400 cursor-pointer"
              }`}
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HeaderTournaments;
