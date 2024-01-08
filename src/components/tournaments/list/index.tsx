import DevelopPage from "@/components/common/page/DevelopPage";
import TournamentList from "./TournamentList";
import Filter from "./filter";

const TournamentsModule = () => {
  return <DevelopPage />;

  return (
    <>
      <Filter />
      <div className="mx-auto container">
        <TournamentList />
      </div>
    </>
  );
};

export default TournamentsModule;
