import pokeIcon from "../img/Poké_Ball_icon.svg.png";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBar__links">
        <a href="/" tabIndex={0}>
          <img src={pokeIcon} alt="Pokeball icon" width="50" />
        </a>
        <a href="/" tabIndex={0}>
          Home
        </a>
      </div>
      <div className="navBar__links">
        <li>
          <a href="/home" tabIndex={0}>
            Flippo's
          </a>
        </li>
        <li>
          <a href="/pokedex" tabIndex={0}>
            Pokedex
          </a>
        </li>
        <li>
          <a href="/create_pokemon" tabIndex={0}>
            Create pokémon
          </a>
        </li>
        <li>
          <a href="/favorites" tabIndex={0}>
            My favorites
          </a>
        </li>
      </div>
      <button tabIndex={0} className="navBar__login">
        Log In
      </button>
    </nav>
  );
}

export default NavBar;
