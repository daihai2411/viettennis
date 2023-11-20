import { Image } from "@nextui-org/react";

const NewsItem = ({ title = "", image = "", category = "" }) => {
  return (
    <div className="max-w-[310px]">
      <Image
        alt="image"
        width={350}
        className="w-[350px] h-[209px] mb-4"
        isBlurred
        radius="none"
        src={image}
      />

      <div className="text-neutral-950 text-xl font-bold line-clamp-3">
        {title}
      </div>
      <div className="text-xs font-bold text-green-common mt-6">{category}</div>
    </div>
  );
};

export default NewsItem;
