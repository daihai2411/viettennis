import { ROUTERS } from "@/const/router";
import { getColorCell } from "@/helpers/common";
import { checkEmptyVal } from "@/helpers/value";
import Link from "next/link";

const InfoUser = ({ data }) => {
  const redirectPage = (id) => {
    return ROUTERS.PLAYERS + "/" + id;
  };

  return (
    <div className="flex gap-1 font-medium">
      <Link
        href={redirectPage(data?.id)}
        className="flex items-center hover:underline"
      >
        {checkEmptyVal(data?.full_name)}
      </Link>
      {" - "}
      <div style={{ color: getColorCell(data?.rank_point_type) }}>
        {checkEmptyVal(data?.rank_point)}
      </div>
    </div>
  );
};

export default InfoUser;
