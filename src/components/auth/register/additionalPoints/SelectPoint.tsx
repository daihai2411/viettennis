import { formatVal } from "@/helpers/value";
import { AppDispatch } from "@/redux/store";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
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
  titleInput,
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
      <button
        className="focus:outline-none group"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <FaCog
          title="Tham chiếu (chuẩn tối thiểu)"
          className="text-sm group-hover:rotate-90 group-hover:duration-100 group-hover:text-slate-500 text-default-400 pointer-events-none"
        />
      </button>
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        scrollBehavior={"outside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {titleInput +
                  " - tham khảo điểm số của những người chơi dưới đây:"}
              </ModalHeader>
              <ModalBody>
                <div className="px-1 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <Input
                      defaultValue={valueDefault}
                      label="Nhập điểm cá nhân"
                      size="sm"
                      variant="bordered"
                      type="number"
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex mt-2 gap-2 justify-between py-2 text-base font-medium text-foreground">
                    Người chơi tham khảo
                    <div className="whitespace-nowrap">Khoảng điểm</div>
                  </div>
                  <div className="">
                    {loading ? (
                      <Spinner className="w-full m-auto" />
                    ) : list.length ? (
                      list.map((item, index) => (
                        <div
                          key={index}
                          className="text-sm flex gap-2 justify-between py-2"
                        >
                          <div className="line-clamp-2">
                            {formatVal(item.users)}
                          </div>
                          <div className="whitespace-nowrap">{item.value}</div>
                        </div>
                      ))
                    ) : (
                      "Không tìm thấy kết quả tìm kiếm"
                    )}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
                  className="bg-green-common my-2 text-white w-[90%] flex mx-auto"
                  onClick={handleSubmit}
                >
                  Xác nhận
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectPoint;
