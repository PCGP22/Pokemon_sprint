import pokeIcon from "../img/Poké_Ball_icon.svg.png";
import { useLocation } from "react-router";

function NavBar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="navBar">
      <div className="navBar__links">
        <a href="/" tabIndex={0}>
          <img src={pokeIcon} alt="Pokeball icon" width="50" />
        </a>
        <a
          href="/"
          tabIndex={0}
          className={`${location.pathname === "/" ? "current" : ""}`}>
          Home
        </a>
      </div>
      <div className="navBar__links">
        <li>
          <a href="/home" tabIndex={0}
          className={`${location.pathname === "/home" ? "current" : ""}`}
          >
            Flippo's
          </a>
        </li>
        <li>
          <a href="/pokedex" tabIndex={0}}
          className={`${location.pathname === "/pokedex" ? "current" : ""}`}>

            Pokedex
          </a>
        </li>
        {/* <li>
          <a href="/create_pokemon" tabIndex={0}>
            Create pokémon
          </a>
        </li>
        <li>
          <a href="/favorites" tabIndex={0}>
            My favorites
          </a>
        </li> */}
      </div>
      {/* <button tabIndex={0} className="navBar__login">
        Log In
      </button> */}
    </nav>
  );
}

export default NavBar;
