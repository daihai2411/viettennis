import { ROUTERS } from "@/const/router";
import { getColorCell } from "@/helpers/common";
import { CardFooter, Skeleton, User } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import style from "../style.module.scss";

const TableTopRank = ({ tab, listData, loading = false }) => {
  const router = useRouter();

  const redirect = (id) => {
    router.push(ROUTERS.PLAYERS + "/" + id);
  };

  return (
    <>
      <CardFooter>
        <Skeleton isLoaded={!loading} className="w-full">
          <table className={style.tablePoint}>
            <thead>
              <tr>
                {/* <th className="pb-2">
                  <div className="flex">Thứ hạng</div>
                </th> */}
                <th className="pb-2">
                  <div className="flex pl-10">Người chơi</div>
                </th>
                <th className="pb-2">Điểm</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((item, index) => (
                <tr
                  key={item?.id}
                  className="border-b-1 border-[#E6E6E6] cursor-pointer"
                  onClick={() => redirect(item?.id)}
                >
                  {/* <td>
                    <div className="flex items-center gap-3">
                      <div className="text-xl text-green-common font-black">
                        {index + 2}
                      </div>
                      <div className="text-neutral-500 text-[19px] font-black leading-3">
                        -
                      </div>
                    </div>
                  </td> */}
                  <td className="">
                    <User
                      name={
                        <div
                          title={item?.name}
                          className="line-clamp-1 hover:underline hover:text-green-common"
                        >
                          {item?.name}
                        </div>
                      }
                      description={"@" + item?.username}
                      avatarProps={{
                        src: item?.avatar,
                        className:
                          "w-10 h-10 min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]",
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="text-right text-xl font-black leading-tight"
                      style={{ color: getColorCell(item.rank_point_id) }}
                    >
                      {tab === 1 ? item?.point_vtr : item?.point_vtr_solo}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Skeleton>
      </CardFooter>
    </>
  );
};

export default TableTopRank;
