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
  }, []);

  return (
    <>
      <NavBar />
      <FilterBar />
      {props.data?.map((p: any) => {
        return <Card data={p} />;
      })}
      <Pagination />
    </>
  );
}

export default HomePage;
