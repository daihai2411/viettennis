"use client";

import SubHeader from "@/components/subHeader";
import { ROUTERS } from "@/const/router";
import { usePathname } from "next/navigation";

export default function NewAndVideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (
    pathname === ROUTERS.NEWS_AND_VIDEO.children.NEWS ||
    pathname === ROUTERS.NEWS_AND_VIDEO.children.VIDEO
  )
    return (
      <>
        <SubHeader
          routers={[
            { key: "1", title: "Tin mới nhất", router: "/news" },
            { key: "2", title: "Video mới nhất", router: "/video" },
          ]}
          showTab={false}
        />
        {children}
      </>
    );

  return <>{children}</>;
}
