import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
import Card from "./Card";
import Pagination from "./Pagination";

interface HomePageProps {
  data: object[];
}

function HomePage(props: HomePageProps) {
  console.log(props.data);
  return (
    <>
      <NavBar />
      <FilterBar />
      {props.data?.map((p: any) => (
        <Card data={p} />
      ))}
      <Pagination />
    </>
  );
}

export default HomePage;
