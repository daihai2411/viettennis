import Image from "next/image";
import style from "./style.module.scss";

const TournamentLive = () => {
  return (
    <div className="absolute flex gap-1 items-center font-medium bg-[#141414] text-white px-2 py-1">
      <div className={style.ball}>
        <Image
          src="ball-icon.svg"
          alt=""
          className={style.iconBall}
          width={20}
          height={20}
        />
        <Image
          src="ball-icon.svg"
          alt=""
          className={style.iconBall}
          width={20}
          height={20}
        />
        <Image
          src="ball-icon.svg"
          alt=""
          className={style.iconBall}
          width={20}
          height={20}
        />
        <Image
          src="ball-icon.svg"
          alt=""
          className={style.iconBall}
          width={20}
          height={20}
        />
      </div>
      Đang diễn ra
    </div>
  );
};

export default TournamentLive;
