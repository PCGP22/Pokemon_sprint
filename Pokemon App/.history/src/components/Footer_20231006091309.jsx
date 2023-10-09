import React from "react";

function Footer() {
  return (
    <footer>
      <section>
        <h4>Site map</h4>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Pokédex</a>
        </li>
        <li>
          <a href="">Flippo's</a>
        </li>
        <li>
          <a href="">Create Pokémon</a>
        </li>
        <li>
          <a href="">Handle favorites</a>
        </li>
      </section>
      <section>
        <h4>Credits</h4>
        <p>
          This web was made with the{" "}
          <a href="https://pokeapi.co/">Pokemon API</a>. I don't own any image
          nor the data presented in this web.
        </p>
        <p>Programmed by Paulo Gutiérrez - PCGP22</p>
      </section>
    </footer>
  );
}

export default Footer;
