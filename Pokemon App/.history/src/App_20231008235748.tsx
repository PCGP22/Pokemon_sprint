import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage.tsx";
import HomePage from "./components/HomePage.tsx";
import Pokedex from "./components/Pokedex.tsx";
import Create from "./components/Create.tsx";
import Login from "./components/Login.tsx";
import Favorites from "./components/favorites.tsx";
import Register from "./components/Register.tsx";
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
let stop = true;

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
  if (array.length < 1 && allPokemon.length > 0 && stop === true) {
    array = [];
    stop = false;
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
  if (!data.length && stop) {
    rel = setTimeout(() => setAux(!aux), 200);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pokedex" element={<Pokedex id={1} />} />
        <Route path="/create_pokemon" element={<Create />} />
        <Route path="/favorites" element={<Favorites data={data} />} />
      </Routes>
    </>
  );
}

export default App;
