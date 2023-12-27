import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import MatchList from "./MatchList";
import style from "./matchItemSpecial.module.css";

const MatchItemSpecial = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const getArrayDummy = (number) => {
    return new Array(number).fill(null).map((item, index) => ({
      participants: [
        {
          id: "1d11ce35-de11-49de-b48e-cec5427eb82c",
          isWinner: true,
          name: "Alex" + index,
          resultText: "1",
          status: "PLAYED",
        },
        {
          id: "a504c49a-e9b2-4a2e-b4b8-a2c11651c356",
          isWinner: false,
          name: "BTC" + index,
          resultText: "0",
          status: "PLAYED",
        },
      ],
    }));
  };

  return (
    <>
      <div onClick={handleOpen} className={style.tournament_drawMatchTable}>
        <table className={style.matchTable}>
          <tbody>
            <tr>
              <th>
                <div className="flex items-center"> Tên</div>
              </th>
              <td>6</td>
              <td>8</td>
              <td>3</td>
            </tr>
            <tr>
              <th>
                <div className="flex items-center"> Tên ewer</div>
              </th>
              <td>26</td>
              <td>8</td>
              <td>3</td>
            </tr>
            <tr>
              <th>
                <div className="flex items-center"> Tên ewer</div>
              </th>
              <td>26</td>
              <td>8</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        size="2xl"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Chi tiết trận đấu
              </ModalHeader>
              <ModalBody className="flex mx-auto">
                <MatchList listData={getArrayDummy(6)} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Đóng
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MatchItemSpecial;
