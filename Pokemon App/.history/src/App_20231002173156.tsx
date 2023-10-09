import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage.tsx";
import HomePage from "./components/HomePage.tsx";
import { getData, processData } from "./redux/slices/data/thunks.ts";
import { useAppSelector, useAppDispatch } from "./redux/hooks.tsx";

// import axios from "axios";
// type PokemonInfo = {
//   name: string;
//   url: string;
// };

// type GetUsersResponse = {
//   count: number;
//   next: string;
//   previous: string | null;
//   results: PokemonInfo[];
// };

function App() {
  const [data, setData] = useState<object[]>([]);
  const [aux, setAux] = useState(false);
  const dispatch = useAppDispatch();

  let allPokemon = useAppSelector((state) => state.dataReducer.allData);
  let processedPokemon = useAppSelector(
    (state) => state.dataReducer.processedData
  );

  console.log(allPokemon);

  useEffect(() => {
    dispatch(getData());
    dispatch(processData(allPokemon));
  }, [aux]);

  useEffect(() => {
    setData(processedPokemon);
  }, [processedPokemon]);

  if (!data.length) {
    // setTimeout(() => setAux(!aux), 1000);
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
