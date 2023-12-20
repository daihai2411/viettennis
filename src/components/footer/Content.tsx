import { Image } from "@nextui-org/react";
import Link from "next/link";
import style from "./style.module.scss";

const Content = () => {
  const list = [
    { id: 1, label: "Về Viettennis" },
    { id: 1, label: "Quản Trị Viên Diễn Đàn" },
    { id: 1, label: "Ban Điều Hành" },
    { id: 1, label: "WTA Ventures Board of Managers" },
    { id: 1, label: "Hợp Tác Với Viettennis" },
    { id: 1, label: "Tuyển Dụng" },
    { id: 1, label: "Viettennis Rules" },
    { id: 1, label: "Đào Tạo Vận Động Viên" },
    { id: 1, label: "Anti-Doping" },
    { id: 1, label: "Hướng Dẫn" },
    { id: 1, label: "Trung Tâm Báo Chí" },
    { id: 1, label: "Viettennis Podcast" },
    { id: 1, label: "Viettennis Game" },
  ];

  const list2 = [
    { id: 1, label: "Vietnam Tennis Federation" },
    { id: 1, label: "Viettennis Tour" },
    { id: 1, label: "VTN Open Series" },
    { id: 1, label: "Ha Noi Open" },
    { id: 1, label: "Đại sảnh Danh vọng Quần vợt Quốc tế" },
    { id: 1, label: "Quỹ thể thao phụ nữ" },
    { id: 1, label: "Đội Thế giới Quần vợt" },
    { id: 1, label: "Cơ quan Liêm chính Quần vợt Quốc tế" },
  ];

  const list3 = [
    { id: 1, label: "Điều khoản và điều kiện" },
    { id: 1, label: "Thông báo về quyền riêng tư" },
    { id: 1, label: "Trợ giúp trợ năng" },
    { id: 1, label: "Chính sách truyền thông xã hội" },
    { id: 1, label: "Đối tác chính thức" },
    { id: 1, label: "Liên hệ" },
    { id: 1, label: "Bản tin" },
    { id: 1, label: "Ứng dụng Viettennis" },
  ];

  return (
    <>
      <div className="bg-[#E6E6E6] pt-10">
        <div className="container mx-auto">
          <div className="flex justify-center pt-[60px] pb-5">
            <Image alt="logo" src="/logo2.png" height={72} width={318} />
          </div>
          {/* thay pb-[30px] -> py-0 khi mo code duoi */}
          <div className="pb-[30px] mx-auto mb-5">
            <nav className="mx-0 lg:mx-10 px-6">
              <ul className="flex flex-col md:flex-row md:flex-wrap justify-center pl-0 my-0">
                {list.map((item, index) => (
                  <li key={index} className="list-none list-item">
                    <Link
                      className="text-[#141414] hover:underline text-base flex justify-center px-5 py-3 leading-5 cursor-pointer font-semibold font-['Google Sans'] leading-tight"
                      href={"./"}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* <div className="py-[30px] max-w-[75%] mx-auto">
            <div className="border-b-2 border-green-common flex justify-center">
              <div className="text-neutral-950 font-semibold text-[19px]">
                Affiliates
              </div>
            </div>
            <nav className="mt-3 px-6">
              <ul className="flex flex-col md:flex-row md:flex-wrap justify-center pl-0 my-0">
                {list2.map((item, index) => (
                  <li key={index} className="list-none list-item">
                    <Link
                      className="text-neutral-900 text-center hover:underline text-opacity-75 text-[15px] flex justify-center px-5 py-3 leading-5 cursor-pointer font-semibold font-['Google Sans'] leading-tight"
                      href={"./"}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div> */}
        </div>
        <div className={`bg-[#2DA46B] relative ${style.footerMenuOfficial}`}>
          <div className="container mx-auto ">
            <div className="mt-[50px] pt-5">
              <nav className="px-6">
                <ul className="flex flex-col md:flex-row md:flex-wrap justify-center pl-0 my-0">
                  {list3.map((item, index) => (
                    <li key={index} className="list-none list-item">
                      <Link
                        className="text-white hover:underline text-sm font-bold flex justify-center px-3 py-3 leading-5 cursor-pointer font-['Google Sans'] leading-tight"
                        href={"./"}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="py-5 flex justify-center text-[#FFFFFFBF] text-xs font-extrabold">
                © 2023 VIETTENNIS.NET | BẢN QUYỀN THUỘC VỀ VIETTENNIS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
