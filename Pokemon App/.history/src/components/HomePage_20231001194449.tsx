import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
import Card from "./Card";
import Pagination from "./Pagination";

interface HomePageProps {
  data: object[];
}

type FullPokemonInfo = {
  abilities: object[];
  base_experience: number;
  forms: object[];
  game_indices: object[];
  height: number;
  held_items: [] | object[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: object[];
  name: string;
  order: number;
  past_types: [] | object[];
  species: object;
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: object[];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
};

function HomePage(props: HomePageProps) {
  console.log(props.data);
  return (
    <>
      <NavBar />
      <FilterBar />
      {props.data?.map((p: object) => {
        return <Card data={p} />;
      })}
      <Pagination />
    </>
  );
}

export default HomePage;
