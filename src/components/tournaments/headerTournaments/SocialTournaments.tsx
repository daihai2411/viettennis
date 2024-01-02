import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa6";

const SocialTournaments = ({ tournamentDetail }) => {
  if (tournamentDetail?.link_facebook || tournamentDetail?.link_youtube) {
    return (
      <>
        <div className="font-medium">Theo dõi giải đấu trên mạng xã hội</div>
        <div className="flex justify-center gap-2">
          {tournamentDetail?.link_facebook ? (
            <Link
              href={tournamentDetail?.link_facebook}
              target="_blank"
              className="border cursor-pointer border-stone-300 bg-gray-50 rounded-full flex justify-center items-center mt-2 w-10 h-10"
            >
              <FaFacebook className="hover:text-green-common h-5 text-[#141414]" />
            </Link>
          ) : null}
          {tournamentDetail?.link_youtube ? (
            <Link
              href={tournamentDetail?.link_youtube}
              target="_blank"
              className="border cursor-pointer border-stone-300 bg-gray-50 rounded-full flex justify-center items-center mt-2 w-10 h-10"
            >
              <FaYoutube className="hover:text-green-common h-5 text-[#141414]" />
            </Link>
          ) : null}
        </div>
      </>
    );
  }

  return <></>;
};

export default SocialTournaments;
