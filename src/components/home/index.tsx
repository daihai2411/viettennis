import NewTournament from "./NewTournament";
import Video from "./VideoAndBanner";
import News from "./news";
import TopRankBottom from "./topRank/bottom";
import TopRank from "./topRank/topRight";

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4 px-3">
        <div className="col-span-12 xl:col-span-9">
          <News />
          <NewTournament />
          {/* <Creator /> */}
          <Video />
          <TopRankBottom />
        </div>
        <div className="col-span-3 hidden xl:block">
          <TopRank />
          <div className="mb-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
