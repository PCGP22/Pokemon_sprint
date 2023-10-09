import frontPage from "../img/Pokeportada.png";
import Footer from "./Footer";
import NavBar from "./NavBar";
import pokedexPreview from "../img/Pokedex preview.png";
import pokeball from "../img/Poké_Ball_icon.svg.png";
import createPreview from "../img/Create preview.png";
import Card from "./Card";
import BackCard from "./BackCard";
import flippoPlaceholder from "../data/flippoPlaceholder";

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
        <div className="landing__title">
          <img
            className="landing__title__icon"
            src={pokeball}
            alt="pokeball icon"
            width="30"
          />
          <h1>Pokemon APP</h1>
          <img
            className="landing__title__icon"
            src={pokeball}
            alt="pokeball icon"
            width="30"
          />
        </div>
        <div>
          <p className="landing__hero__text">
            All gen 1 pokemon info in one pokedex. You'll be able to even add
            your own pokemon!
          </p>
          <br />
          <p className="landing__hero__text">Check our features!</p>
        </div>
        <section>
          <div className="landing__section__title">
            <p>For everyone</p>
          </div>
          <figure className="landing__features">
            <section className="landing__features__container">
              <div className="landing__feature__text">
                <h3 className="landing__feature__title">Pokédex</h3>
                <p>Watch every pokémon in a more graphic fashion.</p>
                <p>
                  Base stats, evolution line, and more. Search by id number or
                  by name, you wont be disappointed.
                </p>
              </div>
              <div className="landing__feature__pokedex">
                <img
                  src={pokedexPreview}
                  alt="pokédex preview"
                  className="landing__feature__pokedex__image"
                />
              </div>
            </section>
          </figure>
          <figure className="landing__features">
            <section className="landing__features__container">
              <div className="landing__feature__text">
                <h3 className="landing__feature__title">Flippo's collection</h3>
                <p>
                  Would you rather remember your childhood favorite flippo's?
                </p>
                <p>Hover to see more info.</p>
              </div>
              <div className="flippo_container">
                <Card data={flippoPlaceholder} />
              </div>
            </section>
          </figure>
        </section>
        <section>
          <div className="landing__section__title">
            <p>Logged in accounts only</p>
          </div>
          <figure className="landing__features">
            <section className="landing__features__container">
              <div className="landing__feature__text">
                <h3 className="landing__feature__title">
                  Create your own pokémon
                </h3>

                <p>
                  Try out our form to create your very own Pokémon, you'll need
                  only an image and creativity
                </p>
                <p>
                  After this, you'll be able to see the Pokédex and flippo's
                  version of your Pokémon.
                </p>
              </div>
            </section>

            <img
              src={createPreview}
              alt="create form preview"
              className="landing__feature__pokedex__image"
            />
            <div className="landing__feature__pokedex"></div>
          </figure>
          <figure className="landing__features">
            <section className="landing__features__container">
              <div className="landing__feature__text">
                <h3 className="landing__feature__title">Handle favourites</h3>
                <p className="landing__feature__text">
                  Save your favorites flippo's so that you can access them
                  anytime you want.
                </p>
              </div>
              <div className="flippo_container">
                <BackCard data={flippoPlaceholder} />
              </div>
            </section>
          </figure>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
