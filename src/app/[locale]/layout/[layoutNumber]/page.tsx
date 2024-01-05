import TestLayoutModule from "@/components/tournaments/testLayout";

const LayoutNumberPage = ({ params }: any) => {
  return <TestLayoutModule layoutNumber={params?.layoutNumber} />;
};

export default LayoutNumberPage;
