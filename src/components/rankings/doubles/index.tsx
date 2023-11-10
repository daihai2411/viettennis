"use client";

import { useState } from "react";
import Filter from "../common/filter";
import TableData from "../common/table";
import { DEFAULT_SELECT } from "../useListFilterRankings";
import { columns, renderCell } from "./constants";

export const paramsInit = {
  pointType: DEFAULT_SELECT,
  groupId: DEFAULT_SELECT,
  key: "",
  min: "",
  max: "",
  pointPointId: 2,
};

const RankingDoubles = () => {
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

export default RankingDoubles;
