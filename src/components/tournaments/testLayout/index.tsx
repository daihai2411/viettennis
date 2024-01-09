import Content from "../detail/draws/Content";
import { layout_16, layout_18, layout_19, layout_21 } from "./dummy";

const TestLayoutModule = ({ layoutNumber }) => {
  const mapLayout = {
    16: layout_16,
    18: layout_18,
    19: layout_19,
    21: layout_21,
  };

  return (
    <div>
      <Content listData={mapLayout[layoutNumber]} dataTabsRound={{}} />
    </div>
  );
};

export default TestLayoutModule;
