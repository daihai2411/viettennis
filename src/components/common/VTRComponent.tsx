import { Image } from "@nextui-org/react";

const VTRComponent = ({
  level,
  width = 120,
  topStyle = -2,
  rightStyle = 9,
}) => {
  return (
    <div className="relative" style={{ width: width }}>
      <Image radius="none" src="/VTR.png" alt="VTR image" />
      <div
        style={{ top: topStyle, right: rightStyle }}
        className="absolute text-green-common font-bold text-lg"
      >
        {level}
      </div>
    </div>
  );
};

export default VTRComponent;
