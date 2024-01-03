import TournamentList from "./TournamentList";
import Filter from "./filter";

const TournamentsModule = () => {
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
