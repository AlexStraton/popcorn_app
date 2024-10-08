import Movies from "./MoviesList";
import WatchedMoviesList from "./WatchedMoviesList";

export default function Main() {
  return (
    <>
      <main className='main'>
        <Movies />
        <WatchedMoviesList />
      </main>
    </>
  );
}
