"use client";

import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { KIND_POPUP } from "../constants";
import ModalLogin from "../login/ModalLogin";
import ModalRegister from "../register/ModalRegister";
import ModalContent from "./ModalContent";

const LoginRegister = () => {
  const [kindPopup, setKindPopup] = useState<string>(KIND_POPUP.LOG_IN);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="cursor-pointer" onClick={onOpen}>
        Đăng nhập/đăng ký
      </div>
      <ModalContent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        kindPopup={kindPopup}
        setKindPopup={setKindPopup}
      >
        <>
          {kindPopup === KIND_POPUP.LOG_IN ? (
            <ModalLogin setKindPopup={setKindPopup} />
          ) : (
            <ModalRegister setKindPopup={setKindPopup} />
          )}
        </>
      </ModalContent>
    </>
  );
};

export default LoginRegister;
