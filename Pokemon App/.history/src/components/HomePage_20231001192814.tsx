import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
import Card from "./Card";
import Pagination from "./Pagination";

interface HomePageProps {
  data: object[];
}

function HomePage(props: HomePageProps) {
  return (
    <>
      <NavBar />
      <FilterBar />
      {props.data?.map((p) => {
        return <Card data={p} />;
      })}
      <Pagination />
    </>
  );
}

export default HomePage;
