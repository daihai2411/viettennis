import { Image } from "@nextui-org/react";

const SURFACE_TYPE = {
  HARD: 1,
  CLAY: 2,
  GRASS: 3,
};

const MAP_NAME_SURFACE = {
  [SURFACE_TYPE.HARD]: "Sân cứng",
  [SURFACE_TYPE.CLAY]: "Đất nện",
  [SURFACE_TYPE.GRASS]: "Sân cỏ",
};

const SurfaceComponent = ({ id, className = "", classImage = "" }) => {
  const getBg = () => {
    if (id === SURFACE_TYPE.CLAY) {
      return "#d88000";
    } else if (id === SURFACE_TYPE.HARD) {
      return "#00a8fc";
    } else {
      return "#00db63";
    }
  };

  if (id)
    return (
      <div
        style={{ background: getBg() }}
        className={`flex gap-1 px-2 py-[6px] items-center ${className}`}
      >
        <Image
          radius="none"
          alt="icon yard"
          src="/icon-yard.svg"
          width={60}
          className={classImage}
        />
        <div className="text-white font-semibold text-xs whitespace-nowrap">
          {MAP_NAME_SURFACE[id]}
        </div>
      </div>
    );
  return <></>;
};

export default SurfaceComponent;
