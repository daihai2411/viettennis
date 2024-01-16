import Link from "next/link";
import Content from "../detail/draws/Content";
import {
  layout_16,
  layout_18,
  layout_19,
  layout_21,
  layout_34,
  layout_42,
} from "./dummy";

const TestLayoutModule = ({ layoutNumber }) => {
  const mapLayout = {
    16: layout_16,
    18: layout_18,
    19: layout_19,
    21: layout_21,
    34: layout_34,
    42: layout_42,
  };

  return (
    <div>
      <div className="flex gap-3 my-5">
        {Object.keys(mapLayout).map((key) => (
          <div key={key}>
            Layout test:{" "}
            <Link className="underline text-blue-600" href={"/layout/" + key}>
              Sơ đồ {key}
            </Link>
          </div>
        ))}
      </div>
      <Content listData={mapLayout[layoutNumber]} dataTabsRound={{}} />
    </div>
  );
};

export default TestLayoutModule;
