"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { useEffect } from "react";

const TabsRound = ({
  tabRound,
  setTabRound,
  list,
  className = "",
  classNameCoverTab = "",
}) => {
  const onSelectionChange = (val) => {
    setTabRound(val);
  };

  useEffect(() => {
    if (list?.length) {
      setTabRound(list[0].id);
    }
  }, [list]);

  useEffect(() => {
    return () => {
      setTabRound(undefined);
    };
  }, []);

  return (
    <div className={`mb-10 bg-[#e6e6e6] overflow-x-auto ${className}`}>
      <div
        className={`flex justify-center h-16 items-center container mx-auto ${classNameCoverTab}`}
      >
        <Tabs
          radius="none"
          classNames={{
            tabList: "bg-[#e6e6e6]",
          }}
          size="lg"
          onSelectionChange={onSelectionChange}
        >
          {list?.length &&
            list.map((item: any) => (
              <Tab
                key={item?.id}
                title={<div className="font-medium">{item?.title}</div>}
                value={item.id}
              />
            ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabsRound;
