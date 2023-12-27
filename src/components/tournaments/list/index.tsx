import TableData from "./TableData";

const TournamentsModule = () => {
  return (
    <>
      <div className="w-full h-[152.16px] px-4 py-12 mt-3 mb-2 bg-green-common flex-col justify-center items-center">
        <div className="text-center text-white text-4xl sm:text-[47.06px] font-bold">
          Giải đấu VietTennis
        </div>
      </div>
      <div className="mx-auto container">
        <div className="mb-6 mt-6 pb-1 block border-b-2 border-green-common text-neutral-950 text-2xl font-bold">
          Danh sách giải đấu
        </div>
        <TableData />
      </div>
    </>
  );
};

export default TournamentsModule;
