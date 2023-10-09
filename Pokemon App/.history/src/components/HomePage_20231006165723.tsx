import NavBar from "./NavBar";
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
          {props.data?.map((p: any) => (
            <Card data={p} key={p.name} />
          ))}
        </div>
      </section>
      <Pagination />
    </>
  );
}

export default HomePage;
