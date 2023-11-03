import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const InputSearch = () => {
  const [isShowInput, setShowInput] = useState(false);

  if (isShowInput) {
    return (
      <div>
        <Input
          label={
            <div className="opacity-90 text-neutral-950 text-xs font-bold">
              Tìm kiếm một người chơi
            </div>
          }
          autoFocus
          isClearable
          radius="lg"
          onClear={() => setShowInput(false)}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          startContent={
            <FaSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
    );
  }

  return (
    <div
      className="flex gap-2 items-center cursor-pointer h-full"
      onClick={() => setShowInput(true)}
    >
      <div className="text-sm font-bold">
        <div className="text-neutral-600">Tìm kiếm một</div>
        <div className="text-neutral-950 float-right">người chơi</div>
      </div>
      <FaSearch className="w-7 h-7" />
    </div>
  );
};

export default InputSearch;
