import { formatVal } from "@/helpers/value";
import { AppDispatch } from "@/redux/store";
import { Input } from "@nextui-org/input";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Button, Spinner } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { FaCog } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectListPersonalPointDetail,
  selectLoadingListPersonalPointDetail,
} from "../../store/slice";
import { getListPersonalPointDetailByCriteriaThunk } from "../../store/thunk";

const SelectPoint = ({
  personalPointCriteriaId,
  inputKey,
  valueDefault,
  setValueForm,
  setValue,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoadingListPersonalPointDetail);
  const listPersonalPointDetail = useSelector(selectListPersonalPointDetail);

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(valueDefault);

  const list = useMemo(() => {
    if (search) {
      return listPersonalPointDetail.filter(
        (item) => item.min <= search && search <= item.max
      );
    } else {
      return listPersonalPointDetail;
    }
  }, [search, listPersonalPointDetail]);

  const onChange = (e) => {
    setSearch(e.target?.value);
  };

  const handleSubmit = () => {
    setIsOpen(false);
    setValueForm(inputKey, search);
    setValue(search);
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(
        getListPersonalPointDetailByCriteriaThunk({
          personal_point_criteria_id: personalPointCriteriaId,
        })
      );
    }
  }, [isOpen]);

  useEffect(() => {
    setSearch(valueDefault);
  }, [valueDefault]);

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
            <FaCog
              title="Tham chiếu (chuẩn tối thiểu)"
              className="text-sm text-default-400 pointer-events-none"
            />
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
                  defaultValue={valueDefault}
                  label="Điểm cá nhân"
                  size="sm"
                  variant="bordered"
                  type="number"
                  onChange={onChange}
                />
              </div>
              <div className="mt-2">
                {loading ? (
                  <Spinner className="w-full m-auto" />
                ) : (
                  list.map((item, index) => (
                    <div
                      key={index}
                      className="text-sm flex gap-2 justify-between py-1"
                    >
                      <div className="line-clamp-2">
                        {formatVal(item.users)}
                      </div>
                      <div className="whitespace-nowrap">{item.value}</div>
                    </div>
                  ))
                )}
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
