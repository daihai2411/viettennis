"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { TAB } from "./constants";

const TabTournaments = ({ setTab }) => {
  const onSelectionChange = (val) => {
    setTab(val);
  };

  return (
    <div className="flex justify-center mb-14 bg-[#e6e6e6] h-16 items-center">
      <Tabs
        variant="underlined"
        size="lg"
        onSelectionChange={onSelectionChange}
      >
        <Tab key={TAB.TAB_1} title="Vòng ngoài" />
        <Tab key={TAB.TAB_2} title="Vòng trong" />
      </Tabs>
    </div>
  );
};

export default TabTournaments;
