"use client";

import VTRComponent from "@/components/common/VTRComponent";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectChildTournament } from "../store/slice";

const TabsTournament = ({ setTab, className = "mb-10 bg-default-100" }) => {
  const childTournament = useSelector(selectChildTournament);

  const onSelectionChange = (val) => {
    setTab(val);
  };

  useEffect(() => {
    if (childTournament?.length) {
      setTab(childTournament[0]);
    }
  }, [childTournament]);

  useEffect(() => {
    return () => {
      setTab(undefined);
    };
  }, []);

  return (
    <div className={className}>
      <div className="flex justify-center h-16 items-center container mx-auto">
        <Tabs radius="none" size="lg" onSelectionChange={onSelectionChange}>
          {childTournament.map((item) => (
            <Tab key={item} title={<VTRComponent level={item} />} />
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabsTournament;
