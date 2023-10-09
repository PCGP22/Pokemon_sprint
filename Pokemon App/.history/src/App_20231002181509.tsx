import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage.tsx";
import HomePage from "./components/HomePage.tsx";
import { getData, processData } from "./redux/slices/data/thunks.ts";
import { useAppSelector, useAppDispatch } from "./redux/hooks.tsx";
import axios from "axios";

// import axios from "axios";
type PokemonInfo = {
  name: string;
  url: string;
};

// type GetUsersResponse = {
//   count: number;
//   next: string;
//   previous: string | null;
//   results: PokemonInfo[];
// };
let array: any[] = [];

function App() {
  const [data, setData] = useState<object[]>([]);
  const [aux, setAux] = useState(false);
  const dispatch = useAppDispatch();

  let allPokemon: PokemonInfo[] = useAppSelector(
    (state) => state.dataReducer.allData
  );

  let processedPokemon: any[] = useAppSelector(
    (state) => state.dataReducer.showData
  );

  async function process() {
    allPokemon.forEach(async (d) => {
      let { data } = await axios(d.url);
      array.push(data);
    });
  }
  if (array.length < 1 && allPokemon.length > 0) {
    array = [];
    process();
  }

  useEffect(() => {
    dispatch(getData());
  }, [aux]);

  useEffect(() => {
    if (array.length) {
      dispatch(processData(array));
    }
  }, [allPokemon]);

  useEffect(() => {
    setData(processedPokemon);
  }, [processedPokemon]);
  let rel;
  if (!data.length) {
    rel = setTimeout(() => setAux(!aux), 10000);
    console.log("reload");
  } else {
    rel?.clearTimeout();
    console.log(data);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage data={data} />} />
        <Route path="/login" element="/login" />
        <Route path="/register" element="/register" />
        <Route path="/pokedex" element="" />
        <Route path="/create_pokemon" element="" />
        <Route path="/favorites" element="" />
      </Routes>
    </>
  );
}

export default App;
