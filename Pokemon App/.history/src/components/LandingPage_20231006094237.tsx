import frontPage from "../img/Pokeportada.png";
import Footer from "./Footer";
import NavBar from "./NavBar";
import pokedexPreview from "../img/Pokedex preview.png";
import pokeball from "../img/Poké_Ball_icon.svg.png";
import flippo from "../img/FLippo_TEMP_Mesa de trabajo 1.png";

function LandingPage() {
  return (
    <>
      <NavBar />
      <main className="landing__main">
        <img
          src={frontPage}
          alt="landing page hero image"
          className="landing__hero_image"
        />
        <img src={pokeball} alt="pokeball icon" width="30" />
        <h1>Pokemon app</h1>
        <img src={pokeball} alt="pokeball icon" width="30" />

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
              <h3>Create your own pokémon</h3>
            </div>
            <div>
              <p>
                Try out our form to create your very own Pokémon, you'll need
                only an image and creativity
              </p>
              <p>
                After this, you'll be able to see the Pokédex and flippo's
                version of your Pokémon.
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
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
