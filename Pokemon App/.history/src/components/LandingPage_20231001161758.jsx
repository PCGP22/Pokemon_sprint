import frontPage from "../img/Pokeportada.png";

function LandingPage() {
  return (
    <main>
      <img src={frontPage} alt="landing page hero image" />
      <aside>
        <h1>Pokemon app</h1>
        <p>All gen 1 pokemon info in one pokedex.</p>
        <p>You'll be able to even add your own pokemon!</p>
        <a href="/home">Let's go!</a>
      </aside>
    </main>
  );
}

export default LandingPage;
