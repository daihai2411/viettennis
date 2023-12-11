"use client";

import DevelopPage from "@/components/common/page/DevelopPage";
import { Tab, Tabs } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { TAB, TABS } from "../constants";
import Bio from "../content/Bio";
import Overview from "../content/Overview";

const ProfileTab = ({ data, loading }) => {
  const [selected, setSelected] = useState<any>(TAB.OVERVIEW);

  const getContent = useMemo(() => {
    switch (selected) {
      case TAB.OVERVIEW:
        return <Overview data={data} loading={loading} />;
      case TAB.BIO:
        return <Bio data={data} />;
      case TAB.MATCHES:
        return <DevelopPage />;
      case TAB.STATS:
        return <DevelopPage />;
      case TAB.RANKING_HISTORY:
        return <DevelopPage />;
      default:
        return <DevelopPage />;
    }
  }, [selected, data, loading]);

  return (
    <>
      <div className="h-[60px] flex justify-center bg-[#141414] mb-2">
        <Tabs
          size="lg"
          variant="underlined"
          classNames={{
            tabList:
              "gap-10 w-full relative rounded-none p-0 border-b border-divider h-full",
            cursor: "w-full bg-[#2DA46B]",
            tab: "max-w-fit px-0 h-12 h-full text-[17px] font-bold text-zinc-400",
            tabContent: "group-data-[selected=true]:text-white",
          }}
          selectedKey={selected}
          onSelectionChange={setSelected}
          items={TABS}
        >
          {(item) => <Tab key={item.id} title={item.label} />}
        </Tabs>
      </div>
      {getContent}
    </>
  );
};

export default ProfileTab;
