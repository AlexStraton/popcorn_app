import Movies from "./Movies_List/Movies";
import WatchedMoviesList from "./Watched_Movies/WatchedMoviesList";

export default function Main({ movies }) {
  return (
    <>
      <main className='main'>
        <Movies movies={movies} />
        <WatchedMoviesList />
      </main>
    </>
  );
}
