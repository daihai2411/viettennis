import MatchItemCustom from "./MatchItemCustom";

const MatchList = ({ listData }) => {
  return (
    <div className="w-[460px] min-w-[460px] h-auto flex-col pt-3 bg-gradient-to-b from-[#fafafa] to-[#fff]">
      <div className="flex flex-col justify-around h-full">
        {listData.map((item, index) => (
          <MatchItemCustom participants={item.participants} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
