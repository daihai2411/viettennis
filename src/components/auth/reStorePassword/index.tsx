"use client";

import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { STATUS_RESTORE_PASS } from "../constants";

type IProps = {
  isForgetPass: boolean;
  setForgetPass: (val: boolean) => void;
};

const ModalForgetPassword = ({ isForgetPass, setForgetPass }: IProps) => {
  const [status, setStatus] = useState(STATUS_RESTORE_PASS.RESTORE);

  return (
    <Modal isOpen={isForgetPass} onOpenChange={setForgetPass} hideCloseButton>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between items-center font-medium">
              <div className="text-lg">Khôi phục mật khẩu</div>
              <Button
                className="text-black border border-gray-100 px-0 bg-white mb-1 font-bold w-10 min-w-10 h-10 text-base rounded-full"
                onPress={onClose}
              >
                <AiOutlineClose />
              </Button>
            </ModalHeader>
            <Divider />
            <ModalBody>
              {/* <FormSentInfo status={status} setStatus={setStatus} /> */}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalForgetPassword;
