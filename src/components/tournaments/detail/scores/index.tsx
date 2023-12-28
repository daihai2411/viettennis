"use client";

import { useState } from "react";
import MatchItem from "./MatchItem";
import TabsScores from "./TabsScores";

const ScoresTournamentModule = () => {
  const [tab, setTab] = useState("1");

  return (
    <div className="">
      <TabsScores setTab={setTab} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-6 gap-4">
          <MatchItem />
          <MatchItem />
          <MatchItem />
          <MatchItem />
        </div>
      </div>
    </div>
  );
};

export default ScoresTournamentModule;
