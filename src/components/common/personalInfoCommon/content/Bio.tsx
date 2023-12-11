const Bio = ({ data }) => {
  return (
    <div className="max-w-[700px] mx-auto pt-16 pb-24">
      {data?.note ? (
        <div dangerouslySetInnerHTML={{ __html: data?.note }}></div>
      ) : (
        <div className="flex justify-center">Không có thông tin tiểu sử</div>
      )}
    </div>
  );
};

export default Bio;
