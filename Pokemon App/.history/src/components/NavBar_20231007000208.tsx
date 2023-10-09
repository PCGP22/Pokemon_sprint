import pokeIcon from "../img/Poké_Ball_icon.svg.png";

function NavBar() {
  return (
    <nav>
      <div className="navBar__links">
        <li>
          <a href="/" tabIndex={0}>
            <img src={pokeIcon} alt="Pokeball icon" width="50" />
          </a>
        </li>
        <li>
          <a href="/home" tabIndex={0}>
            All pokémons
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
      <a href="/login" tabIndex={0}>
        Log In
      </a>
    </nav>
  );
}

export default NavBar;
