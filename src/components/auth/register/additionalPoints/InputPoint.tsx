import { Input } from "@nextui-org/input";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { FieldErrors, FieldValues } from "react-hook-form";
import { FaCog } from "react-icons/fa";

type InputProps = {
  label: any;
  register: any; //UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>;
  placeholder?: string;
  type?: string;
  className?: string;
  variant?: string;
  keyInput: string;
};

const InputPoint = ({
  label,
  register,
  errors,
  type,
  className,
  keyInput,
}: InputProps) => {
  return (
    <div className={className || "mb-4"}>
      <div className="grid grid-cols-10 gap-4">
        <div className="hidden sm:flex items-center text-small">22.3</div>
        <div className="col-span-5 sm:col-span-4 flex items-center">
          <div className="block text-small font-medium text-foreground pb-1.5">
            {label}
          </div>
        </div>
        <div className="col-span-3">
          <Input
            {...register(keyInput)}
            placeholder="Nhập điểm"
            variant="bordered"
            labelPlacement="outside-left"
            type={type}
            endContent={<SelectPoint />}
          />
          {errors[keyInput] && (
            <p className="text-red-500 text-xs" role="alert">
              {errors[keyInput]?.message as string}
            </p>
          )}
        </div>
        <div className="flex justify-end items-center text-small">10%</div>
        <div className="flex justify-end items-center text-small">22.3</div>
      </div>
    </div>
  );
};

export default InputPoint;

const SelectPoint = () => {
  return (
    <>
      <Popover placement="bottom" showArrow offset={10}>
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
                Dimensions
              </p>
              <div className="mt-2 flex flex-col gap-2 w-full">
                <Input
                  defaultValue="100%"
                  label="Width"
                  size="sm"
                  variant="bordered"
                />
                <Input
                  defaultValue="300px"
                  label="Max. width"
                  size="sm"
                  variant="bordered"
                />
                <Input
                  defaultValue="24px"
                  label="Height"
                  size="sm"
                  variant="bordered"
                />
                <Input
                  defaultValue="30px"
                  label="Max. height"
                  size="sm"
                  variant="bordered"
                />
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};
