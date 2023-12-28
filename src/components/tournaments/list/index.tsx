import TableData from "./TableData";
import Filter from "./filter";

const TournamentsModule = () => {
  return (
    <>
      <Filter />
      <div className="mx-auto container">
        <TableData />
      </div>
    </>
  );
};

export default TournamentsModule;
