import NavBar from "./NavBar";
import Footer from "./Footer";
import FilterBar from "./FilterBar";
import Card from "./Card";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

interface HomePageProps {
  data: object[];
}

function Favorites(props: HomePageProps) {
  const [aux, setAux] = useState(true);
  useEffect(() => {
    setAux(!aux);
  }, [props]);

  return (
    <>
      <NavBar />
      <header className="homePage__header header">
        <h1>Favorites</h1>
        <p>Use the button behind every flippo to add/remove it to this page.</p>
      </header>
      <FilterBar />
      <section className="homePage__container">
        <div className="flippo__container">
          {props.data.length ? (
            props.data.map((p: any) => <Card data={p} key={p.name} />)
          ) : (
            <p className="homePage__noResults">There are no results</p>
          )}
        </div>
      </section>
      <Pagination />
      <Footer />
    </>
  );
}

export default Favorites;
