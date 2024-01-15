import SurfaceComponent from "@/components/common/SurfaceComponent";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import TournamentLive from "./tournamentLive";

const TournamentItem = ({ data }) => {
  return (
    <Link href={`/tournaments/${data?.id}/overview`} className="mb-1">
      <Card shadow="none" radius="none" className="group">
        <CardBody className="overflow-visible p-0 mb-2">
          <div className="h-[200px] relative">
            <Image
              src={"/banner.png"}
              alt="Image banner"
              layout="fill"
              objectFit="cover"
            />
            <TournamentLive />
            <div className="absolute flex gap-1 items-center bg-[#141414] text-white bottom-2 left-3 text-xs p-1">
              <FaCalendarAlt />
              {data?.start_date && data?.end_date
                ? data?.start_date + " - " + data?.end_date
                : null}
            </div>
            <div className="absolute bottom-2 right-3">
              <SurfaceComponent
                className="!py-1 !px-1"
                id={data?.surface}
                classImage="!w-8"
              />
            </div>
          </div>
        </CardBody>
        <CardFooter className="items-start bg-[#E6E6E6]">
          <div className="px-1 h-[90px]">
            <div className="group-hover:text-green-common cursor-pointer group-hover:underline text-neutral-950 text-lg font-bold line-clamp-2">
              {data?.name}
            </div>
            <div className="cursor-pointer text-neutral-950 text-[13px] font-normal line-clamp-3">
              {data?.district_name && data?.province_name
                ? [data?.district_name, data?.province_name].join(", ")
                : data?.district_name
                ? data?.district_name
                : data?.province_name
                ? data?.province_name
                : null}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TournamentItem;
