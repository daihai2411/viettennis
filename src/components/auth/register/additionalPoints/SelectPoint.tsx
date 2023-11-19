import { formatVal } from "@/helpers/value";
import { Input } from "@nextui-org/input";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Button } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { FaCog } from "react-icons/fa";

const SelectPoint = () => {
  const dummy = [
    {
      value: "500-549",
      users: "HONG D99, vyhtv, Carom, BAOOAI911, Vinhnx",
      min: 500,
      max: 549,
    },
    {
      value: "550-599",
      users: "HONG D99",
      min: 550,
      max: 599,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(0);

  const list = useMemo(() => {
    if (search) {
      return dummy.filter((item) => item.min <= search && search <= item.max);
    } else {
      return dummy;
    }
  }, [search]);

  const onChange = (e) => {
    setSearch(e.target?.value);
  };

  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Popover
        placement="bottom"
        showArrow
        offset={10}
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <PopoverTrigger>
          <button className="focus:outline-none" type="button">
            <FaCog className="text-sm text-default-400 pointer-events-none" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px]">
          {(titleProps) => (
            <div className="px-1 py-2 w-full">
              <p
                className="text-small font-bold text-foreground"
                {...titleProps}
              >
                Tham chiếu (chuẩn tối thiểu):
              </p>
              <div className="mt-2 flex flex-col gap-2 w-full">
                <Input
                  defaultValue="100%"
                  label="Điểm cá nhân"
                  size="sm"
                  variant="bordered"
                  type="number"
                  onChange={onChange}
                />
              </div>
              <div className="mt-2">
                {list.map((item, index) => (
                  <div
                    key={index}
                    className="text-sm flex gap-2 justify-between py-1"
                  >
                    <div className="line-clamp-2">{formatVal(item.users)}</div>
                    <div className="whitespace-nowrap">{item.value}</div>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                className="bg-green-common my-2 text-white w-full"
                onClick={handleSubmit}
              >
                Xác nhận
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SelectPoint;
