"use client";

import Filter from "../common/Filter";
import TableData from "./TableData";

const RankingSingles = () => {
  return (
    <>
      <Filter />
      <div className="container mx-auto">
        <TableData />
      </div>
    </>
  );
};

export default RankingSingles;
