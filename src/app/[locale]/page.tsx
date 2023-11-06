"use client";

import { Button } from "@nextui-org/react";
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
      <div>
        <h1>{t("title")}</h1>
        <Button onClick={() => switchLang("en")}>English</Button>
        <Button onClick={() => switchLang("vi")}>Vietnam</Button>
      </div>
    </>
  );
};

export default Page;
