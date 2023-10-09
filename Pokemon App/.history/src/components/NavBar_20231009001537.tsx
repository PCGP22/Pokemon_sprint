import pokeIcon from "../img/Poké_Ball_icon.svg.png";
import { useLocation } from "react-router";
import Login from "./Login";
import { useState } from "react";

function NavBar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
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
          <a
            href="/home"
            tabIndex={0}
            className={`${location.pathname === "/home" ? "current" : ""}`}>
            Flippo's
          </a>
        </li>
        <li>
          <a
            href="/pokedex"
            tabIndex={0}
            className={`${location.pathname === "/pokedex" ? "current" : ""}`}>
            Pokedex
          </a>
        </li>
        <li>
          <a
            href="/create_pokemon"
            tabIndex={0}
            className={`${
              location.pathname === "/create_pokemon" ? "current" : ""
            }`}>
            Create pokémon
          </a>
        </li>
        <li>
          <a
            href="/favorites"
            tabIndex={0}
            className={`${
              location.pathname === "/favorites" ? "current" : ""
            }`}>
            My favorites
          </a>
        </li>
      </div>
      <button
        tabIndex={0}
        className="navBar__login"
        onClick={() => setVisible(!visible)}>
        Log In
      </button>
      <Login handleVisible={() => setVisible(!visible)} visible={visible} />
    </nav>
  );
}

export default NavBar;
