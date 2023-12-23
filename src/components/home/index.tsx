import NewTournament from "./NewTournament";
import Video from "./VideoAndBanner";
import News from "./news";
import Aside from "./news/Aside";
import NewsBottom from "./news/NewsBottom";
import TopRankBottom from "./topRank/bottom";
import TopRank from "./topRank/topRight";

const Home = () => {
  return (
    <div className="container mx-auto mt-0 lg:mt-8">
      <div className="grid grid-cols-12 gap-4 px-3">
        <div className="col-span-12 xl:col-span-9">
          <News />
          <NewTournament />
          {/* <Creator /> */}
          <Video />
          <TopRankBottom />
          <NewsBottom />
        </div>
        <div className="col-span-3 hidden xl:block">
          <TopRank />
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Home;
