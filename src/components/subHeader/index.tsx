"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Item = {
  key: string;
  router: string;
  title: string;
};

type IProps = {
  routers: Array<Item>;
  showTab?: boolean;
};

const SubHeader: React.FC<IProps> = ({ routers, showTab = true }) => {
  const pathName = usePathname();

  const getRouter = useMemo(() => {
    return routers.find((item) => item.router === pathName);
  }, [pathName, routers]);

  return (
    <>
      <div className="w-full h-[152.16px] px-4 py-12 mt-3 mb-2 bg-green-common flex-col justify-center items-center">
        <div className="text-center text-white text-4xl sm:text-[47.06px] font-bold">
          {getRouter?.title}
        </div>
      </div>
      {showTab ? (
        <div className="h-[60px] flex justify-center bg-[#141414] mb-2">
          {routers.map((item) => (
            <Link key={item.key} href={item.router}>
              <div
                className={`text-center items-center flex text-[17px] font-bold px-5 h-full ${
                  pathName === item.router
                    ? " border-b-4 border-b-green-common text-white"
                    : "text-zinc-400 cursor-pointer"
                }`}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SubHeader;
