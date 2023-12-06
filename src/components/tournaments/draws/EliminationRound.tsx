import MatchList from "./matchDraw/MatchList";

const EliminationRound = () => {
  const getArrayDummy = (number) => {
    return new Array(number).fill(null).map((item, index) => ({
      participants: [
        {
          id: "1d11ce35-de11-49de-b48e-cec5427eb82c",
          isWinner: true,
          name: "Alex" + index,
          resultText: "1",
          status: "PLAYED",
        },
        {
          id: "a504c49a-e9b2-4a2e-b4b8-a2c11651c356",
          isWinner: false,
          name: "BTC" + index,
          resultText: "0",
          status: "PLAYED",
        },
      ],
    }));
  };

  return (
    <div>
      <div className="flex justify-center gap-20">
        <div className="bg-[#e6e6e6] p-3 text-lg font-bold flex justify-center w-[460px] min-w-[460px]">
          Vòng 1
        </div>
        <div className="bg-[#e6e6e6] p-3 text-lg font-bold flex justify-center w-[460px] min-w-[460px]">
          Playoff
        </div>
      </div>
      <div className="flex gap-20 justify-center h-full">
        <MatchList listData={getArrayDummy(8)} />
        <MatchList listData={getArrayDummy(4)} />
      </div>
    </div>
  );
};

export default EliminationRound;
