import frontPage from "../img/Pokeportada.png";
import pokedexPreview from "../img/Pokedex preview.png";
import flippo from "../img/FLippo_TEMP_Mesa de trabajo 1.png";

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
          <figure>
            <div>
              <h3>Flippo's collection</h3>
            </div>
            <div>
              <p>Would you rather remember your childhood favorite flippo's?</p>
              <p>Hover to see more info.</p>
            </div>
            <div>
              <img src={flippo} alt="flippo preview" />
            </div>
          </figure>
        </section>
        <section>
          <div>
            <p>Logged in accounts only</p>
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
          <figure>
            <div>
              <h3>Handle favourites</h3>
            </div>
            <div>
              <p>
                Save your favorites flippo's so that you can access them anytime
                you want.
              </p>
            </div>
            <div>
              <img src={flippo} alt="flippo preview" />
            </div>
          </figure>
        </section>
      </aside>
    </main>
  );
}

export default LandingPage;
