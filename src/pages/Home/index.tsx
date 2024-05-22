import MovieList from "../../components/MovieList";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 bg-black text-white">
      <MovieList title="Populars" endpoint="/movie/popular" />

      <MovieList title="Top Rated" endpoint="movie/top_rated" />

      <MovieList title="Trending" endpoint="/trending/movie/day" />
    </div>
  );
};

export default Home;
