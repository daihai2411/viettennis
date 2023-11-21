import { Image } from "@nextui-org/image";

const Body = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-11">
      {[
        {
          title: "By the numbers: The 2023 year-end rankings",
          image:
            "https://photoresources.wtatennis.com/wta/photo/2023/11/07/ee88df2c-dd40-48a4-b399-ccb3b22c3810/Swiatek-1.jpg",
          name: "Rankings Update",
        },
        {
          title: "By the numbers: The 2023 year-end rankings",
          image:
            "https://photoresources.wtatennis.com/wta/photo/2023/11/07/ee88df2c-dd40-48a4-b399-ccb3b22c3810/Swiatek-1.jpg",
          name: "Rankings Update",
        },
        {
          title: "By the numbers: The 2023 year-end rankings",
          image:
            "https://photoresources.wtatennis.com/wta/photo/2023/11/07/ee88df2c-dd40-48a4-b399-ccb3b22c3810/Swiatek-1.jpg",
          name: "Rankings Update",
        },
        {
          title: "By the numbers: The 2023 year-end rankings",
          image:
            "https://photoresources.wtatennis.com/wta/photo/2023/11/07/ee88df2c-dd40-48a4-b399-ccb3b22c3810/Swiatek-1.jpg",
          name: "Rankings Update",
        },
      ].map((item, index) => (
        <div key={index} className="w-full group mb-3">
          <Image
            alt="image"
            width={350}
            className="w-[350px] h-[160px] mb-4 group-hover:scale-105 mx-auto rounded"
            radius="none"
            src={item.image}
          />
          <div className="h-[80px] relative">
            <div className="group-hover:text-green-common cursor-pointer group-hover:underline text-neutral-950 text-base font-bold line-clamp-2">
              {item.title}
            </div>
            <div className="text-gray-700 text-[13px] absolute bottom-0">
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
