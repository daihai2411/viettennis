import SupportModule from "@/components/support";

const SupportPage = ({ params }: { params: { pageId: string } }) => {
  return <SupportModule pageId={params?.pageId} />;
};

export default SupportPage;
