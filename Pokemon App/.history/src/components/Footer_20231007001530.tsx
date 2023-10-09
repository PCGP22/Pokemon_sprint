function Footer() {
  return (
    <footer className="footer">
      <section className="footer__sitemap">
        <h4 className="footer__title">Site map</h4>
        <hr />
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
      <section className="footer__credits">
        <h4 className="footer__title">Credits</h4>
        <hr />
        <p>
          This web was made with the{" "}
          <a href="https://pokeapi.co/" className="extLink">
            Pokemon API
          </a>
          . I don't own any image nor the data presented in this web.
        </p>
        <p>Programmed by Paulo Gutiérrez - PCGP22</p>
      </section>
    </footer>
  );
}

export default Footer;
