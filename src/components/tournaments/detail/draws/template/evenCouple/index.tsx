import MatchList from "../../matchDraw/MatchList";

const EvenCouple = ({ listData }) => {
  if (listData && listData.length) {
    return (
      <div className="overflow-x-auto">
        <div>
          <div className="flex gap-20">
            {listData.map((item) => (
              <div
                key={item?.round_id}
                className="bg-[#e6e6e6] p-3 text-lg font-medium flex w-[460px] justify-center min-w-[460px]"
              >
                {item?.round_name}
              </div>
            ))}
          </div>
          <div className="flex gap-20 h-full">
            {listData.map((item) => (
              <MatchList
                key={item?.round_id}
                listData={Object.values(item?.round_detail)}
                className="w-[460px] min-w-[460px]"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default EvenCouple;
