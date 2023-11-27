import Creator from "./Creator";
import NewTournament from "./NewTournament";
import TopRank from "./TopRank";
import Video from "./Video";
import News from "./news";

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4 px-3">
        <div className="col-span-12 lg:col-span-9">
          <News />
          <NewTournament />
          <Creator />
          <Video />
        </div>
        <div className="col-span-3 hidden lg:block">
          <TopRank />
          <div className="mb-6"></div>
          <TopRank />
        </div>
      </div>
    </div>
  );
};

export default Home;
