const Head = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-6 mb-11">
      <div className="col-span-4 md:col-span-2 lg:col-span-3 rounded-lg group">
        <img
          className="w-full h-[504px] rounded-lg"
          src="https://via.placeholder.com/842x504"
        />
        <div className="text-gray-700 text-[22px] font-bold mt-2 cursor-pointer group-hover:text-green-common group-hover:underline">
          Mình đi retrofit Mazda CX5 - đem tính năng mới lên xe cũ
        </div>
      </div>
      <div className="rounded-lg bg-gradient-to-b from-gray-200 via-gray-100 to-white group col-span-4 md:col-span-2 lg:col-span-1">
        <img
          className="w-full h-[163.83px] relative rounded-tl-lg rounded-tr-lg"
          src="https://via.placeholder.com/265x164"
        />
        <div className="px-2 pt-3">
          <div className="text-gray-700 text-base font-bold mb-2 cursor-pointer group-hover:text-green-common group-hover:underline">
            Trên tay Google Pixel 8 Pro: màu xanh đẹp, phần cứng không hấp dẫn
            bằng phần mềm
          </div>
          <div className="text-gray-700 text-[13px] font-normal mb-1">
            Pnghuy
          </div>
          <div className="text-slate-700 text-base font-normal">
            Google Pixel 8 Pro, thay vì chạy đua phần cứng, chạy theo cấu hình
            camera với cảm biến 1-inch, con chip mạnh thật mạnh thì Google lại
            lựa chọn tập trung mạnh mẽ vào phần mềm, vào những gì mà họ mạnh
            nhất, bê…
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
