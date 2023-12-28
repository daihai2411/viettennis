import { Image } from "@nextui-org/react";

const VTRComponent = ({
  level,
  width = 120,
  topStyle = 0,
  rightStyle = 12,
}) => {
  return (
    <div className="relative" style={{ width: width }}>
      <Image radius="none" src="/VTR.png" alt="VTR image" />
      <div
        style={{ top: topStyle, right: rightStyle }}
        className="absolute text-green-common"
      >
        {level}
      </div>
    </div>
  );
};

export default VTRComponent;
