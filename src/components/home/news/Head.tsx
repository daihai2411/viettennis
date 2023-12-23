import HeadLeft from "./HeadLeft";
import HeadRight from "./HeadRight";

const Head = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <HeadLeft />
        <HeadRight />
      </div>
    </>
  );
};

export default Head;
