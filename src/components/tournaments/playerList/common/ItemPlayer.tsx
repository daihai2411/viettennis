import { Card, CardBody, CardFooter } from "@nextui-org/react";

const ItemPlayer = () => {
  return (
    <div className="mt-10">
      <Card radius="none" shadow="none" className="w-full">
        <CardBody className="relative p-0 pt-[30%]">
          <div className="bg-green-common min-h-[82px] p-3 block text-white">
            <div className="text-sm font-medium">SEED</div>
            <div className="text-lg font-bold">#1</div>
          </div>
          <div className="absolute top-[50%] left-[50%] w-[40%] -translate-x-1/2 -translate-y-1/2">
            <img
              className="inline-block  rounded-full ring-[6px] ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </CardBody>
        <CardFooter className="bg-[#e6e6e6] block py-[22px] mt-2">
          <div className="text-[#818181] text-[13px] font-bold capitalize leading-[13px]">
            coco
          </div>
          <div className="text-[#141414] text-[21px] font-bold capitalize leading-[21px]">
            gauff
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemPlayer;
