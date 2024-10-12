import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import { useState } from "react";
import Movies from "./components/Main/Movies_List/Movies";
import WatchedMoviesList from "./components/Main/Watched_Movies/WatchedMoviesList";

import NumOfResults from "./components/NavBar/NumOfResults";
import SearchBar from "./components/NavBar/SearchBar";
import MovieList from "./components/Main/Movies_List/MovieList";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar>
        <SearchBar />
        <NumOfResults movies={movies} />
      </NavBar>
      <Main>
        <Movies>
          <MovieList movies={movies} />
        </Movies>
        <WatchedMoviesList />
      </Main>
    </>
  );
}
