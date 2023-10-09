import pokeIcon from "../img/Poké_Ball_icon.svg.png";

function NavBar() {
  return (
    <nav>
      <div>
        <li>
          <a href="/homePage">
            <img src={pokeIcon} alt="Pokeball icon" width="50" />
          </a>
        </li>
        <li>
          <a href="/homePage">All pokémons</a>
        </li>
        <li>
          <a href="/pokedex">Pokedex</a>
        </li>
        <li>
          <a href="/create_pokemon">Create pokémon</a>
        </li>
        <li>
          <a href="/favorites">My favorites</a>
        </li>
      </div>
      <a href="/login">Log In</a>
    </nav>
  );
}

export default NavBar;
