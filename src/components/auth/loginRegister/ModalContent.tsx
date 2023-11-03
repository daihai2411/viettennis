import {
  Button,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import { KIND_POPUP } from "../constants";

type IProps = {
  isOpen: boolean;
  onOpenChange: (val: boolean) => void;
  children: any;
  kindPopup: string;
  setKindPopup: (val: string) => void;
};

const PopupContent: React.FC<IProps> = ({
  isOpen,
  onOpenChange,
  children,
  kindPopup,
  setKindPopup,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      size={kindPopup === KIND_POPUP.LOG_IN ? "md" : "lg"}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between items-center font-medium">
              <div className="text-lg flex items-center gap-2">
                {kindPopup === KIND_POPUP.LOG_IN ? (
                  <div className="text-lg">Đăng nhập tài khoản</div>
                ) : (
                  <>
                    <div
                      className="cursor-pointer"
                      onClick={() => setKindPopup(KIND_POPUP.LOG_IN)}
                    >
                      <AiOutlineLeft />
                    </div>
                    Đăng ký tài khoản
                  </>
                )}
              </div>
              <Button
                className="text-black border border-gray-100 px-0 bg-white mb-1 w-10 min-w-10 h-10 text-base rounded-full"
                onPress={onClose}
              >
                <AiOutlineClose />
              </Button>
            </ModalHeader>
            <Divider className="mb-2" />
            {children}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PopupContent;
