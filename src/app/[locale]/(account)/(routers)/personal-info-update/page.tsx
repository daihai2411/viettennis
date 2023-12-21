import PersonalInfoUpdateModule from "@/components/auth/updateProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cập nhật thông tin cá nhân - Viettennis",
  description: "Viettennis",
};

const PersonalInfoUpdatePage = () => {
  return <PersonalInfoUpdateModule />;
};

export default PersonalInfoUpdatePage;
