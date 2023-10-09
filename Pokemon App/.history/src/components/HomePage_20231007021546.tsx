import NavBar from "./NavBar";
import Footer from "./Footer";
import FilterBar from "./FilterBar";
import Card from "./Card";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

interface HomePageProps {
  data: object[];
}

function HomePage(props: HomePageProps) {
  const [aux, setAux] = useState(true);
  useEffect(() => {
    setAux(!aux);
  }, [props]);

  return (
    <>
      <NavBar />
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

export default HomePage;
