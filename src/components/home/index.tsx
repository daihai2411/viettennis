import Creator from "./Creator";
import Moments from "./Moments";
import NewTournament from "./NewTournament";
import TopRank from "./TopRank";
import Video from "./Video";
import News from "./news";

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-8 lg:col-span-6">
          <Moments />
          <News />
          <NewTournament />
          <Creator />
          <Video />
        </div>
        <div className="col-span-2 hidden lg:block">
          <TopRank />
          <div className="mb-6"></div>
          <TopRank />
        </div>
      </div>
    </div>
  );
};

export default Home;
