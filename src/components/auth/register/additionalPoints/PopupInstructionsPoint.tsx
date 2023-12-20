import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectListPersonalPointDetail } from "../../store/slice";

const PopupInstructionsPoint = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const listPersonalPointDetail = useSelector(selectListPersonalPointDetail);

  console.log(listPersonalPointDetail);

  return (
    <div>
      <div
        onClick={onOpen}
        className="underline cursor-pointer text-green-common hover:text-green-common1"
      >
        Hướng dẫn nhập điểm số
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Hướng dẫn nhập điểm số
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-12">
                  {listPersonalPointDetail.map((item) => (
                    <React.Fragment key={item.value}>
                      <div className="col-span-2 mb-4">{item.value}</div>
                      <div className="col-span-10 mb-4">{item.instruction}</div>
                    </React.Fragment>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Đóng</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PopupInstructionsPoint;
