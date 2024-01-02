import { useMemo, useState } from "react";
import EliminationRound from "./EliminationRound";
import SingleElimination from "./SingleElimination";
import { TAB } from "./constants";

import { Spinner } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/slice";

const Content = ({ listData }) => {
  const loading = useSelector(selectLoading);

  const [tab, setTab] = useState(TAB.TAB_1);

  const onSelectionChange = (val) => {
    setTab(val);
  };

  const getDataRoundTwo = useMemo(() => {
    if (listData && listData.length) {
      return listData
        .slice(2)
        .map((item) => Object.values(item.round_detail))
        .flat()
        ?.map((item) => item?.game_detail)
        .flat();
    }
    return [];
  }, [listData]);

  return (
    <>
      <div className="flex justify-center mb-14 bg-[#e6e6e6] h-16 items-center">
        <Tabs
          radius="none"
          classNames={{
            tabList: "bg-[#e6e6e6]",
          }}
          size="lg"
          onSelectionChange={onSelectionChange}
        >
          <Tab key={TAB.TAB_1} title="Vòng ngoài" />
          <Tab key={TAB.TAB_2} title="Vòng trong" />
        </Tabs>
      </div>
      <div className="container mx-auto">
        {loading ? (
          <Spinner className="flex justify-center" />
        ) : (
          <>
            {tab === TAB.TAB_1 ? (
              <EliminationRound listData={listData} />
            ) : (
              <SingleElimination listData={getDataRoundTwo} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Content;
