import Logo from "./Logo";
import NumberOfResults from "./NumberOfResults";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <Logo />
      <SearchBar />
      <NumberOfResults />
    </nav>
  );
}
