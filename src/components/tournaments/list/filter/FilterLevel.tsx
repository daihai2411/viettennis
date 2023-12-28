import VTRComponent from "@/components/common/VTRComponent";

const FilterPoint = () => {
  const listLevel = [
    {
      key: "1",
      title: "Tất cả",
      isActive: true,
    },
    {
      key: "2",
      title: <VTRComponent level={1250} />,
    },
    {
      key: "3",
      title: <VTRComponent level={1200} />,
    },
    {
      key: "4",
      title: <VTRComponent level={1100} />,
    },
    {
      key: "5",
      title: <VTRComponent level={1250} />,
    },
    {
      key: "6",
      title: <VTRComponent level={1250} />,
    },
  ];

  return (
    <div
      className="flex justify-center bg-white overflow-x-auto"
      style={{ boxShadow: "0 2px 20px 0 hsla(0,0%,8%,.08)" }}
    >
      {listLevel.map((item) => (
        <>
          <div
            className={`${
              item.isActive
                ? "border-green-common border-2 text-green-common"
                : ""
            } cursor-pointer px-[14px] py-[10px] font-bold`}
          >
            {item.title}
          </div>
        </>
      ))}
    </div>
  );
};

export default FilterPoint;
