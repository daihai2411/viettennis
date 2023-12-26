import bg from "../../../public/bg-footer.jpg";
import style from "./style.module.scss";

const Newsletter = () => {
  const styling = {
    backgroundImage: `url(${bg.src})`,
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div className="w-full h-[285.95px] inline-flex justify-between flex-col rounded-lg p-8 relative">
        <div className={style.bgImage} style={styling}></div>
        <div className="z-10">
          <div className="text-stone-50 text-[33.73px] font-bold mb-4">
            Đăng ký nhận bản tin Viettennis
          </div>
          <div className="text-white text-sm font-normal">
            Nhận thông tin liên lạc chính thức từ WTA được gửi thẳng đến e-mail
            của bạn! Chúng tôi sẽ thông báo cho bạn tất cả những gì bạn cần
            biết, bao gồm tin tức, người chơi, giải đấu, tính năng, cuộc thi, ưu
            đãi và hơn thế nữa.
          </div>
        </div>
        <div className="text-white text-sm font-bold z-10">
          Dữ liệu của bạn sẽ được sử dụng theo Chính sách quyền riêng tư của
          Viettennis và Chính sách quyền riêng tư của Viettennis Ranking.
        </div>
      </div>
      <div className="border-b-2 border-green-common flex justify-center mt-16">
        <div className="text-neutral-950 font-black text-2xl">
          Title Partner
        </div>
      </div>
      <div className="h-[176px]"></div>
      <div className="border-b-2 border-green-common flex justify-center    ">
        <div className="text-neutral-950 font-black text-2xl">
          Global Partners
        </div>
      </div>
      <div className="h-[176px]"></div>
      <div className="border-b-2 border-green-common flex justify-center    ">
        <div className="text-neutral-950 font-black text-[19px]">
          Follow Viettennis on Social
        </div>
      </div>
    </>
  );
};

export default Newsletter;
