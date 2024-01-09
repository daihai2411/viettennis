import { checkEmptyVal } from "@/helpers/value";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import useUserProfile from "../../hooks/useUserProfile";

const Overview = ({ data, loading }) => {
  const { dataProfile } = useUserProfile(true);
  const listInfoPersonal = [
    { title: "Số điện thoại", value: data?.phone, key: "phone" },
    { title: "Địa chỉ email", value: data?.email, key: "email" },
    { title: "Sở trường", value: data?.back_hand, key: "back_hand" },
    {
      title: "Hãng giày tennis bạn đi",
      value: data?.shoes_brand,
      key: "shoes_brand",
    },
    {
      title: "Hãng đồ thể thao bạn mặc",
      value: data?.clothes_brand,
      key: "clothes_brand",
    },
    {
      title: "CMT/CCCD",
      value: data?.identify_id,
      key: "identify_id",
    },
    {
      title: "Ngày cấp",
      value: data?.identify_date,
      key: "identify_date",
    },
    {
      title: "Nơi cấp",
      value: data?.identify_address,
      key: "identify_address",
    },
    {
      title: "Nơi sinh",
      value: data?.address
        ? [data?.address, data?.district_name, data?.province_name].join(", ")
        : data?.district_name
        ? [data?.district_name, data?.province_name].join(", ")
        : "--",
      key: "address",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 block lg:flex lg:gap-10">
          <div className="w-full lg:w-[50%] mb-5 lg:mb-0">
            <div className="px-4 sm:px-0">
              <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                Thông tin cá nhân
              </h3>
            </div>
            <Skeleton
              isLoaded={!loading}
              className="mt-6 border-t border-gray-100"
            >
              <dl className="divide-y divide-gray-100">
                {listInfoPersonal.map((item) => (
                  <div
                    key={item.key}
                    className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0"
                  >
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      {item?.title}
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-gray-700 sm:mt-0 flex justify-end">
                      {checkEmptyVal(item.value)}
                    </dd>
                  </div>
                ))}
              </dl>
            </Skeleton>
          </div>
          <div className="w-full lg:w-[50%] h-auto">
            <div className="px-4 flex justify-between sm:px-0">
              <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                Điểm trình cá nhân
              </h3>
              {/* dataProfile?.personal_point_updated */}
              {true ? (
                <Image
                  alt="logo VTR"
                  src="/logo-VTR.svg"
                  className="flex justify-center items-center w-[200px]"
                />
              ) : (
                <BtnUpdatePoint />
              )}
            </div>
            <Skeleton
              isLoaded={!loading}
              className="mt-6 border-t border-gray-100"
            >
              <dl className="divide-y divide-gray-100">
                {data?.personal_points &&
                  data?.personal_points.map(
                    (item: { code: number; title: string; point: number }) => (
                      <div
                        key={item?.code}
                        className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                      >
                        <dt className="text-lg font-medium leading-6 col-span-2 text-gray-900">
                          {item?.title}
                        </dt>
                        <dd className="mt-1 text-lg leading-6 text-gray-700 flex justify-end sm:mt-0">
                          {checkEmptyVal(item?.point)}
                        </dd>
                      </div>
                    )
                  )}
              </dl>
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;

const BtnUpdatePoint = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} size="sm" className="bg-[#2DA46B] text-white">
        Chấm trình
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
