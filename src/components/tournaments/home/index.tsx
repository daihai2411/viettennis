import DevelopPage from "@/components/common/page/DevelopPage";
import TableData from "./TableData";

const TournamentsModule = () => {
  return (
    <div className="mt-3">
      <DevelopPage />
    </div>
  );

  return (
    <div className="mx-auto container">
      <div className="text-[38px] font-bold text-[#0A0A0A] mt-16 mb-4">
        Danh sách giải đấu VietTennis
      </div>
      <TableData />
    </div>
  );
};

export default TournamentsModule;
