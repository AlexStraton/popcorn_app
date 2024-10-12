import Movies from "./Movies_List/Movies";
import WatchedMoviesList from "./Watched_Movies/WatchedMoviesList";

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
