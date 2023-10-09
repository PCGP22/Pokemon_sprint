import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
import Card from "./Card";
import Pagination from "./Pagination";
import { useEffect } from "react";

interface HomePageProps {
  data: object[];
}

function HomePage(props: HomePageProps) {
  useEffect(() => {}, []);

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
