import PersonalInfoModule from "@/components/personalInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thông tin cá nhân - Viettennis",
  description: "Viettennis",
};

const PersonalInfoPage = () => {
  return <PersonalInfoModule />;
};

export default PersonalInfoPage;
