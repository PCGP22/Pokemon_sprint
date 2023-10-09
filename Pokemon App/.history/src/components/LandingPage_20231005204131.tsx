import frontPage from "../img/Pokeportada.png";
import pokedexPreview from "../img/Pokedex preview.png";

function LandingPage() {
  return (
    <main>
      <img src={frontPage} alt="landing page hero image" />
      <aside>
        <h1>Pokemon app</h1>
        <p>
          All gen 1 pokemon info in one pokedex. You'll be able to even add your
          own pokemon!
        </p>
        <p>Check our features</p>
        <section>
          <div>
            <p>For everyone</p>
          </div>
          <figure>
            <div>
              <h3>Pokédex</h3>
            </div>
            <div>
              <p>Watch every pokémon in a more graphic fashion.</p>
              <p>
                Base stats, evolution line, and more. Search by id number or by
                name, you wont be disappointed.
              </p>
            </div>
            <div>
              <img src={pokedexPreview} alt="pokédex preview" />
            </div>
          </figure>
        </section>
      </aside>
    </main>
  );
}

export default LandingPage;
