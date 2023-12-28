"use client";

import { AppDispatch } from "@/redux/store";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectTournamentDetail } from "../detail/store/slice";
import {
  getDetailTournamentThunk,
  getNewsInEventThunk,
} from "../detail/store/thunk";

type Item = {
  key: string;
  router: string;
  title: string;
};

type IProps = {
  routers: Array<Item>;
  tournamentId: string;
};

const HeaderTournaments: React.FC<IProps> = ({ routers, tournamentId }) => {
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoading);
  const tournamentDetail = useSelector(selectTournamentDetail);

  const checkActiveRouter = (routerCheck) => {
    const arrayPath = pathName.split("/");
    return arrayPath[arrayPath.length - 1] === routerCheck;
  };

  useEffect(() => {
    if (tournamentId) {
      dispatch(getDetailTournamentThunk({ id: tournamentId }));
      dispatch(getNewsInEventThunk({ paginate: 8 }));
    }
  }, []);

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
          <Skeleton isLoaded={!loading}>
            <h1 className="text-[43.66px] font-medium mb-1">
              {tournamentDetail?.name}
            </h1>
          </Skeleton>
          <Skeleton isLoaded={!loading} className="text-lg font-normal">
            {[
              tournamentDetail?.address,
              tournamentDetail?.ward_name,
              tournamentDetail?.district_name,
              tournamentDetail?.province_name,
            ].join(", ")}
          </Skeleton>
          <Skeleton isLoaded={!loading} className="text-xs font-bold mt-4">
            {tournamentDetail?.start_date && tournamentDetail?.end_date
              ? tournamentDetail?.start_date +
                " - " +
                tournamentDetail?.end_date
              : null}
          </Skeleton>
        </div>
      </div>
      <div className="h-[60px] flex justify-start sm:justify-center bg-[#141414] mb-2 whitespace-nowrap overflow-auto">
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
