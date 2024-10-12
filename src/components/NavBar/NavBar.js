import Logo from "./Logo";
import NumOfResults from "./NumOfResults";
import SearchBar from "./SearchBar";

export default function NavBar({ movies }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      <SearchBar />
      <NumOfResults movies={movies} />
    </nav>
  );
}
