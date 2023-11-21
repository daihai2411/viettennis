"use client";

import Home from "@/components/home";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const t = useTranslations("Index");

  const switchLang = (lang: string) => {
    router.push(`/${lang}`);
  };

  return (
    <>
      {/* <div>
        <h1>{t("title")}</h1>
        <div className="flex gap-3">
          <Button onClick={() => switchLang("en")}>English</Button>
          <Button onClick={() => switchLang("vi")}>Vietnam</Button>
        </div>
      </div> */}
      <Home />
    </>
  );
};

export default Page;
