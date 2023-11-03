import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { AiOutlineClose } from "react-icons/ai";

const ModalSuccess = () => {
  const onOpenChange = () => {};
  return (
    <Modal
      isOpen={false}
      onOpenChange={onOpenChange}
      className="bg-green-common"
      size="lg"
      hideCloseButton
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between items-center text-white font-medium">
              <div className="text-lg"> Đăng ký thành công</div>
              <Button
                className="text-black px-0 bg-white mb-1 font-bold w-10 min-w-10 h-10 text-base shadow rounded-full"
                onPress={onClose}
              >
                <AiOutlineClose />
              </Button>
            </ModalHeader>
            <Divider className="bg-white" />
            <ModalBody>
              <div className="my-24">
                <div className="text-white text-2xl font-medium">
                  Bạn đã đăng ký thành công
                </div>
                <div className="text-white text-opacity-90 text-base font-normal">
                  Hãy truy cập vào email của bạn để kích hoạt tài khoản.
                </div>
              </div>
              <Button
                className="text-green-common bg-white mb-6 font-bold text-base"
                onPress={onClose}
              >
                Quay về trang chủ
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;
