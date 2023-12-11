import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viettennis",
  description: "Viettennis",
};

const PlayerDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PlayerDetailLayout;
