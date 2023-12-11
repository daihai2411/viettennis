const ProfileHeaderRight = () => {
  return (
    <div className="w-[50%] border-l-4 border-white">
      <div className="w-[636px] h-full text-white pl-[43px] pt-[63px]">
        <h1 className="text-[52px] leading-[52px] font-black mb-3">
          Ngo Lan HUong
        </h1>
        <div className="mb-9 text-3xl">@user name</div>
        <div className="flex gap-6">
          <div className="">
            <div className="font-medium text-lg mb-1">Chiều cao</div>
            <div className="mb-[5px] text-3xl font-extrabold">{`5' 11"`}</div>
            <div className="font-medium text-[13px] mb-3">1.60m</div>

            <div className="mb-1 text-lg font-medium">Thuận tay</div>
            <div className="font-medium text-[13px]">Thuận tay trái</div>
          </div>
          <div className="">
            <div className="font-medium text-lg mb-1">Tuổi</div>
            <div className="mb-[5px] text-3xl font-extrabold">25</div>
            <div className="font-medium text-[13px] mb-3">01/01/2000</div>

            <div className="mb-1 text-lg font-medium">Nơi sinh</div>
            <div className="font-medium text-[13px]">Ha noi</div>
          </div>
          <div className="">
            <div className="font-medium text-lg mb-1">Thông số vợt</div>
            <div className="mb-[5px] text-3xl font-extrabold">Image</div>
            <div className="font-medium text-[13px]">
              Head Extreme Team 2022
            </div>
          </div>
        </div>
        <div className="mt-[29px] text-lg font-bold leading-[17.10px] mb-2">
          Huấn luyện viên tại
        </div>
        <div className="w-[166.96px] bg-white h-11 px-3 py-3 flex-col justify-start items-start inline-flex">
          <div className="flex">
            <span className="text-neutral-500 text-lg font-black uppercase leading-tight">
              Anton{" "}
            </span>
            <span className="text-black text-lg font-black uppercase leading-tight">
              Dubrov
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderRight;
