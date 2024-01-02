import MatchItemCustom from "./MatchItemCustom";

const MatchList = ({ listData }) => {
  return (
    <div className="w-full sm:w-[460px] h-auto flex-col pt-3 bg-gradient-to-b from-[#fafafa] to-[#fff] px-1">
      <div className="flex flex-col justify-around h-full">
        {listData && listData.length
          ? listData.map((item, index) => (
              <MatchItemCustom item={item} key={index} />
            ))
          : null}
      </div>
    </div>
  );
};

export default MatchList;
