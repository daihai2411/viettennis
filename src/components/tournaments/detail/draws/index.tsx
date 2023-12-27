"use client";

import { useState } from "react";
import EliminationRound from "./EliminationRound";
import SingleElimination from "./SingleElimination";
import TabTournaments from "./TabTournaments";
import { TAB } from "./constants";

const TournamentsDrawComponent = () => {
  const [tab, setTab] = useState(TAB.TAB_1);

  return (
    <div>
      <TabTournaments setTab={setTab} />
      <div className="container mx-auto">
        {tab === TAB.TAB_1 ? <EliminationRound /> : <SingleElimination />}
      </div>
    </div>
  );
};

export default TournamentsDrawComponent;
