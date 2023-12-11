const FollowAccount = ({ data }) => {
  return (
    <>
      <div className="text-[#141414] text-base font-black">
        Theo dõi <br />
        {data?.fullName}
      </div>
      <div className="bg-green-common rounded-full w-10 h-10"></div>
    </>
  );
};

export default FollowAccount;
