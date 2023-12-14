"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { FaTimes } from "react-icons/fa";

const LayoutTablet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <div
        className="bg-green-common2 py-2 px-3 text-white flex justify-end gap-1 cursor-pointer md:hidden"
        onClick={onOpen}
      >
        <div className="text-[13px] font-extrabold"> Show All Matches</div>
        <FaAngleDown />
      </div> */}
      <Modal size="full" hideCloseButton isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="py-0 pl-0">
                <div
                  className="bg-black py-2 px-3 text-white flex justify-end gap-1 cursor-pointer md:hidden"
                  onClick={onClose}
                >
                  <div className="text-[13px] font-extrabold">
                    Hidden Matches
                  </div>
                  <FaTimes />
                </div>
                <div className="h-full bg-[#f2f2f2]"></div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LayoutTablet;
