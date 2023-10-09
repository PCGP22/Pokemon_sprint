// import React from 'react'
import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
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

  let allData: any = useAppSelector((state) => state.dataReducer.processedData);
  const [searchTerm, setSearchTerm] = useState<string>(allData?.name);
  let data = allData.filter((d: any) => d.id === id);
  data = data[0];

  async function getDescription() {
    let { data }: any = await axios(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    let englishDescription = data.flavor_text_entries.find(
      (d: any) => d.language.name === "en"
    );
    setDescription(englishDescription.flavor_text);
  }

  useEffect(() => {
    getDescription();
  }, [id]);
  if (data?.id) {
    let evoChain = evolutions.filter((e) => e.includes(data.id));
    if (evoChain[0].length === 1) {
      images = [data.sprites.front_default];
    } else {
      images = [];
      evoChain[0].forEach((e) => {
        let imagesFromState: any = allData.filter((d: any) => d.id === e);
        images.push(imagesFromState[0].sprites.front_default);
      });
    }
  } else {
    return;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  function handleSearch() {
    // dispatch(setSearch(searchTerm));
    let numberOrString = Number(searchTerm);
    if (!numberOrString) {
      let result = allData.filter((d: any) =>
        d.name.includes(searchTerm.toLowerCase())
      );
      if (result[0]) {
        setId(result[0].id);
      }
    } else {
      let result = allData.filter((d: any) => d.id === Number(searchTerm));
      if (result[0]) {
        setId(result[0].id);
      }
    }
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
          <p style={{ whiteSpace: "pre-line" }}>{finalDesc}</p>
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
          {images?.map((i) => (
            <img src={i} key={i} alt="Evolution Chain" />
          ))}
        </section>
        <section>
          <strong>Hp:</strong>
          <span>{data.stats[0].base_stat}</span>
          <progress value={data.stats[0].base_stat} max="150" /> <br />
          <strong>Attack:</strong>
          <span>{data.stats[1].base_stat}</span>
          <progress value={data.stats[1].base_stat} max="150" /> <br />
          <strong>Defense:</strong>
          <span>{data.stats[2].base_stat}</span>
          <progress value={data.stats[2].base_stat} max="150" /> <br />
          <strong>Sp-att:</strong>
          <span>{data.stats[3].base_stat}</span>
          <progress value={data.stats[3].base_stat} max="150" /> <br />
          <strong>Sp-def:</strong>
          <span>{data.stats[4].base_stat}</span>
          <progress value={data.stats[4].base_stat} max="150" /> <br />
          <strong>Speed:</strong>
          <span>{data.stats[5].base_stat}</span>
          <progress value={data.stats[5].base_stat} max="150" /> <br />
        </section>
      </main>
    </div>
  );
}

export default Pokedex;
