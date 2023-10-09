// import React from 'react'
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSearch } from "../redux/slices/data";
import evolutions from "../data/evolution";
import axios from "axios";

// import axios from "axios";

type PokedexProps = {
  id: number;
};

function Pokedex(props: PokedexProps) {
  const [id, setId] = useState<number>(props.id);
  const [description, setDescription] = useState<string>("Loading description");

  let images: string[] = [];
  const dispatch = useAppDispatch();

  let allData: any = useAppSelector((state) => state.dataReducer.processedData);
  const [searchTerm, setSearchTerm] = useState<string>(allData?.name);
  let data = allData.filter((d: any) => d.id === id);
  data = data[0];

  async function getDescription() {
    let { data }: any = await axios(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    setDescription(data.flavor_text_entries[0].flavor_text);
  }

  useEffect(() => {
    getDescription();
  }, [id]);
  if (data?.id) {
    let evoChain = evolutions.filter((e) => e.includes(data.id));
    //   let chain = evoChain[0]
    //   console.log(evoChain);
    if (evoChain[0].length === 1) {
      images = [data.sprites.front_default];
    } else {
      evoChain[0].forEach((e) => {
        let imagesFromState: any = allData.filter((d: any) => d.id === e);
        images.push(imagesFromState[0].sprites.front_default);
      });
    }
  } else {
    return;
  }

  console.log(data.types);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  function handleSearch() {
    dispatch(setSearch(searchTerm));
  }

  function handleNext() {
    if (id <= 150) {
      setId((id) => (id = id + 1));
    }
  }

  function handlePrev() {
    if (id >= 2) {
      setId((id) => (id = id - 1));
    }
  }

  let descriptionFormatted: string[] = description.split("\f");
  let finalDesc = descriptionFormatted[0] + "\n" + descriptionFormatted[1];
  //   let descriptionFormatted = description;

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
          <button onClick={handlePrev}>Left</button>
          <button onClick={handleNext}>Right</button>
        </section>
        <section>
          <h1>
            #{data.id} {data.name}
          </h1>
          <p>{data.flavorText}</p>
          <strong>Type(s): </strong>
          {data.types.map((t: any) => (
            <span key={t.type.name}>{t.type.name.toUpperCase()}</span>
          ))}
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
        <section>
          <p style={{ whiteSpace: "pre-line" }}>{finalDesc}</p>
        </section>
        <section>
          {images?.map((i) => (
            <img src={i} key={i} alt="Evolution Chain" />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Pokedex;
