"use client";

import VTRComponent from "@/components/common/VTRComponent";
import { Tab, Tabs } from "@nextui-org/tabs";

const TAB = {
  TAB_1: "1",
  TAB_2: "2",
  TAB_3: "3",
};

const TabsScores = ({ setTab }) => {
  const onSelectionChange = (val) => {
    setTab(val);
  };

  return (
    <div className="mb-14 bg-default-100">
      <div className="flex justify-center h-16 items-center container mx-auto">
        <Tabs radius="none" size="lg" onSelectionChange={onSelectionChange}>
          <Tab key={TAB.TAB_1} title={<VTRComponent level="1200" />} />
          <Tab key={TAB.TAB_2} title={<VTRComponent level="1300" />} />
          <Tab key={TAB.TAB_3} title={<VTRComponent level="1400" />} />
        </Tabs>
      </div>
    </div>
  );
};

export default TabsScores;
