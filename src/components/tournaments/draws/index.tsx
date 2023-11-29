import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./SingleElimination"), {
  ssr: false,
});

const TournamentsDrawComponent = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
};

export default TournamentsDrawComponent;
