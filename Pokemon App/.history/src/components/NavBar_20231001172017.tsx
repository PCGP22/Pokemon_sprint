import pokeIcon from "../img/Poké_Ball_icon.svg.png";

function NavBar() {
  return (
    <nav>
      <div>
        <li>
          <a href="/">
            <img src={pokeIcon} alt="Pokeball icon" />
          </a>
        </li>
        <li>
          <a href="/">All pokémons</a>
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
