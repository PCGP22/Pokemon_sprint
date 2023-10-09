// import React from 'react'
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSearch, setCurrentPokemon } from "../redux/slices/data";
import evolutions from "../data/evolution";

// import axios from "axios";

type PokedexProps = {
  id: number;
};
function Pokedex(props: PokedexProps) {
  const [id, setId] = useState<number>(props.id);
  let images = [];
  const dispatch = useAppDispatch();

  let allData: any = useAppSelector((state) => state.dataReducer.processedData);
  let data = allData.filter((d: any) => d.id === id);
  data = data[0];
  console.log(data);

  useEffect(() => {
    dispatch(setCurrentPokemon(props.id));
  }, []);

  if (data?.name) {
    let evoChain = evolutions.filter((e) => e.includes(data.id));
    if (evoChain.length === 1) {
      images = [data.sprites.front_default];
    } else {
      evoChain.forEach((e) => {
        images.push(
          allData.filter((d: any) => d.id === e).sprites.front_default
        );
      });
    }
  } else {
    return;
  }

  const [searchTerm, setSearchTerm] = useState<string>(data.name);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  function handleSearch() {
    dispatch(setSearch(searchTerm));
  }

  function handleNext() {
    setId((id) => (id = id + 1));
  }

  function handleLeft() {
    setId((id) => (id = id - 1));
  }

  return (
    <div>
      <main>
        <section>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Search</button>
        </section>
        <section>
          <img
            src={data.sprites.front_default}
            alt={`sprite of ${data.name}`}
          />
        </section>
        <section>
          <button>Left</button>
          <button onClick={handleNext}>Right</button>
        </section>
        <section>
          <h1>
            #{data.id} {data.name}
          </h1>
          <p>{data.flavorText}</p>
          <strong>Type: </strong>
          {data.types.map((t: any) => {
            <span key={t.type.name}>{t.type.name}</span>;
          })}
          <p>
            <strong>Species:</strong> {data.species.name}
          </p>
          <p>
            <strong>Weight:</strong> {data.weight}
          </p>
          <p>
            <strong>Height:</strong> {data.height}
          </p>
        </section>
      </main>
    </div>
  );
}

export default Pokedex;
