"use client";

import { useState } from "react";
import Filter from "../common/filter";
import TableData from "../common/table";
import { columns, renderCell } from "./constants";

export const paramsInit = {
  rankPointId: 0,
  rankGroupId: 0,
  key: "",
  min: "",
  max: "",
  pointType: 1,
};

const RankingSingles = () => {
  const [params, setParams] = useState(paramsInit);
  const [sortDescriptor, setSortDescriptor] = useState({});

  const changeParams = (val: any) => {
    setParams({ ...params, ...val });
  };

  const resetParams = () => {
    setParams(paramsInit);
    setSortDescriptor({});
  };

  return (
    <>
      <Filter changeParams={changeParams} resetParams={resetParams} />
      <div className="container mx-auto">
        <TableData
          params={params}
          changeParams={changeParams}
          columns={columns}
          renderCell={renderCell}
          sortDescriptor={sortDescriptor}
          setSortDescriptor={setSortDescriptor}
        />
      </div>
    </>
  );
};

export default RankingSingles;
